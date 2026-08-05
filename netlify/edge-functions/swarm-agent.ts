import { Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const { prompt, agentRole, leadContext } = await request.json();

    const openAiKey = Deno.env.get("OPENAI_API_KEY");

    if (!openAiKey) {
      // Simulated response if API key is missing
      console.log("No OPENAI_API_KEY found. Returning simulated agent response.");
      return new Response(JSON.stringify({
        success: true,
        message: "Generated via Simulation (No API Key)",
        content: `[Simulated ${agentRole} Output]\n\nSubject: Unlocking Growth for ${leadContext?.company_name || 'your company'}\n\nHi ${leadContext?.contact_name || 'there'},\n\nBased on your prompt: "${prompt}", our agent swarm has drafted this simulated sequence step. Add your OPENAI_API_KEY to .env for live generation!`,
        simulated: true
      }), {
        headers: { "Content-Type": "application/json" }
      });
    }

    // Call OpenAI API
    const systemPrompt = `You are a world-class ${agentRole} for Swarm Group. Your goal is to generate high-converting email sequences and sales copy. Keep it concise, punchy, and B2B focused.`;
    
    const userPrompt = `Lead Context: ${JSON.stringify(leadContext || {})}\n\nTask: ${prompt}`;

    const openAiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${openAiKey}`
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        temperature: 0.7
      })
    });

    if (!openAiResponse.ok) {
      const errorText = await openAiResponse.text();
      throw new Error(`OpenAI API Error: ${errorText}`);
    }

    const data = await openAiResponse.json();
    const generatedContent = data.choices[0].message.content;

    return new Response(JSON.stringify({
      success: true,
      content: generatedContent,
      simulated: false
    }), {
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    console.error("Swarm Agent Error:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
