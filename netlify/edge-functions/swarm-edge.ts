import type { Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  // Only allow POST requests
  if (request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  try {
    const data = await request.json();
    const { name, email, company, techStack, profileUrl } = data;

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    // You will need to add RESEND_API_KEY to your Netlify Environment Variables
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    
    if (!RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY environment variable");
      return new Response(JSON.stringify({ error: "Server configuration error" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    const fname = name ? name.split(' ')[0] : 'Founder';
    const tech = Array.isArray(techStack) ? techStack.join(', ') : (techStack || 'your current stack');
    const companyStr = company ? `at ${company}` : 'at your company';

    const emailBody = `Hi ${fname},

I saw ${companyStr} is utilizing ${tech}.

Swarm Group deploys autonomous agent swarms that qualify leads 24/7 and boost pipeline velocity by 3.4x.

Check out our live demo: https://swarmy-ai-leads-engine.pages.dev/

My profile: ${profileUrl || 'https://linkedin.com/in/darren-paas'}
`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: "Swarm Group <onboarding@resend.dev>",
        to: [email],
        subject: `Quick question for you, ${fname}`,
        text: emailBody,
      }),
    });

    if (res.ok) {
      const result = await res.json();
      return new Response(JSON.stringify({ success: true, data: result }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    } else {
      const err = await res.text();
      console.error("Resend API Error:", err);
      return new Response(JSON.stringify({ error: "Failed to send email" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  } catch (error) {
    console.error("Edge Function Error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
