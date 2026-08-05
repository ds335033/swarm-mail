import json
import csv
import os
import random

DEFAULT_LEADS = [
    {
        "id": "lead_1001",
        "company_name": "Apex Commerce Ltd",
        "domain": "apexcommerce.store",
        "contact_name": "Sarah Jenkins",
        "contact_title": "Head of Growth",
        "email": "sarah.j@apexcommerce.store",
        "linkedin_url": "https://linkedin.com/in/sarahjenkins-growth",
        "industry": "E-Commerce",
        "tech_stack": ["Shopify Plus", "Klaviyo", "Stripe"],
        "company_size": "50-200",
        "lead_score": 94,
        "status": "New Lead"
    },
    {
        "id": "lead_1002",
        "company_name": "CloudSync Technologies",
        "domain": "cloudsync-app.io",
        "contact_name": "Marcus Vance",
        "contact_title": "CEO & Founder",
        "email": "marcus@cloudsync-app.io",
        "linkedin_url": "https://linkedin.com/in/marcusvance-tech",
        "industry": "SaaS",
        "tech_stack": ["React", "PostgreSQL", "HubSpot"],
        "company_size": "10-50",
        "lead_score": 98,
        "status": "New Lead"
    },
    {
        "id": "lead_1003",
        "company_name": "Nexus Media Agency",
        "domain": "nexusmedia.agency",
        "contact_name": "Elena Rostova",
        "contact_title": "VP of Digital Strategy",
        "email": "elena.r@nexusmedia.agency",
        "linkedin_url": "https://linkedin.com/in/elenarostova",
        "industry": "Digital Agency",
        "tech_stack": ["WordPress", "Google Ads", "Zapier"],
        "company_size": "20-100",
        "lead_score": 89,
        "status": "Contacted"
    },
    {
        "id": "lead_1004",
        "company_name": "Veloce Fitness Gear",
        "domain": "velocefit.com",
        "contact_name": "David Thorne",
        "contact_title": "Chief Marketing Officer",
        "email": "david@velocefit.com",
        "linkedin_url": "https://linkedin.com/in/davidthorne-cmo",
        "industry": "E-Commerce",
        "tech_stack": ["WooCommerce", "Mailchimp", "Meta Ads"],
        "company_size": "100-500",
        "lead_score": 91,
        "status": "New Lead"
    },
    {
        "id": "lead_1005",
        "company_name": "EduPulse Academy",
        "domain": "edupulse.co",
        "contact_name": "Dr. Aris Thorne",
        "contact_title": "Director of Admissions",
        "email": "aris@edupulse.co",
        "linkedin_url": "https://linkedin.com/in/draristhorne",
        "industry": "EdTech",
        "tech_stack": ["Kajabi", "Webflow", "Intercom"],
        "company_size": "15-50",
        "lead_score": 86,
        "status": "Converted"
    }
]

def generate_bulk_leads(target_count=50):
    industries = ["E-Commerce", "SaaS", "Digital Agency", "EdTech", "FinTech", "HealthTech"]
    tech_pool = ["Shopify", "React", "WordPress", "HubSpot", "Stripe", "Klaviyo", "Intercom", "Zapier", "Salesforce"]
    first_names = ["Alex", "Jordan", "Taylor", "Morgan", "Sam", "Chris", "Pat", "Riley", "Casey", "Dakota"]
    last_names = ["Smith", "Chen", "Miller", "Gupta", "Williams", "Kim", "Patel", "Johnson", "Davis", "Wilson"]

    leads = list(DEFAULT_LEADS)
    for i in range(len(leads) + 1, target_count + 1):
        fname = random.choice(first_names)
        lname = random.choice(last_names)
        company = f"{lname} {random.choice(['Labs', 'Group', 'Media', 'Solutions', 'Systems', 'Digital'])}"
        domain = f"{company.lower().replace(' ', '')}.io"
        ind = random.choice(industries)
        tech = random.sample(tech_pool, random.randint(2, 4))
        score = random.randint(75, 99)

        leads.append({
            "id": f"lead_{1000 + i}",
            "company_name": company,
            "domain": domain,
            "contact_name": f"{fname} {lname}",
            "contact_title": random.choice(["Founder & CEO", "Head of Marketing", "VP of Growth", "Operations Director"]),
            "email": f"{fname.lower()}.{lname.lower()[0]}@{domain}",
            "linkedin_url": f"https://linkedin.com/in/{fname.lower()}{lname.lower()}-growth",
            "industry": ind,
            "tech_stack": tech,
            "company_size": random.choice(["1-10", "10-50", "50-200", "200-500"]),
            "lead_score": score,
            "status": "New Lead"
        })
    return leads

def export_leads_to_files(output_dir="data"):
    os.makedirs(output_dir, exist_ok=True)
    leads = generate_bulk_leads(100)

    # Save JSON
    json_path = os.path.join(output_dir, "leads.json")
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(leads, f, indent=2)

    # Save CSV
    csv_path = os.path.join(output_dir, "leads.csv")
    if leads:
        keys = list(leads[0].keys())
        with open(csv_path, "w", newline="", encoding="utf-8") as f:
            dict_writer = csv.DictWriter(f, fieldnames=keys)
            dict_writer.writeheader()
            dict_writer.writerows(leads)

    print(f"Successfully generated {len(leads)} B2B online business leads!")
    print(f"JSON: {json_path}")
    print(f"CSV: {csv_path}")

if __name__ == "__main__":
    export_leads_to_files()
