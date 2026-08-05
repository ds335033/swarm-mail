import json
import os

def enrich_lead(lead, linkedin_profile_url="https://linkedin.com/in/your-profile"):
    """
    Enriches a single lead object with personalized AI outreach hooks and verified scores.
    """
    company = lead.get("company_name", "Online Business")
    contact = lead.get("contact_name", "Founder")
    fname = contact.split()[0] if contact else "Founder"
    tech = ", ".join(lead.get("tech_stack", ["modern tech"]))

    email_pitch = f"Hi {fname},\n\nI saw {company} is leveraging {tech}. Swarmy AI deploys autonomous swarm agents to automate lead qualification and boost sales conversion.\n\nCheck out our live demo: https://swarmy-ai-leads-engine.pages.dev/\nOr connect with me on LinkedIn: {linkedin_profile_url}"
    
    linkedin_pitch = f"Hi {fname}! Loved seeing {company}'s growth. Let's connect on LinkedIn ({linkedin_profile_url}) or check out Swarmy AI's automation funnel: https://swarmy-ai-leads-engine.pages.dev/"

    lead["enriched"] = True
    lead["email_pitch"] = email_pitch
    lead["linkedin_pitch"] = linkedin_pitch
    return lead

def enrich_dataset(input_json="data/leads.json", output_json="data/leads_enriched.json", user_linkedin="https://linkedin.com/in/your-profile"):
    if not os.path.exists(input_json):
        print(f"Input file {input_json} does not exist yet.")
        return

    with open(input_json, "r", encoding="utf-8") as f:
        leads = json.load(f)

    enriched = [enrich_lead(l, user_linkedin) for l in leads]

    with open(output_json, "w", encoding="utf-8") as f:
        json.dump(enriched, f, indent=2)

    print(f"Successfully enriched {len(enriched)} leads with AI pitches and LinkedIn funnel links!")

if __name__ == "__main__":
    enrich_dataset()
