import {
  Briefcase, Headphones, Mail, Calendar, Share2, Palette, Video, Database,
  Target, Calculator, ClipboardList, Users, PenTool, ShoppingCart, Megaphone,
  Home, HeartPulse, Scale, Store, BarChart3, HardHat, GraduationCap, Landmark,
  Cpu, BookOpen,
} from "lucide-react";

export const services = [
  { icon: Briefcase, title: "Executive Assistance", desc: "High-level administrative support for busy executives — inbox triage, travel planning, meeting prep, and more.", tasks: ["Inbox and calendar triage", "Travel booking and itineraries", "Meeting notes and follow-ups", "Document preparation"], industries: ["Technology", "Finance", "Coaching"] },
  { icon: Headphones, title: "Customer Support", desc: "Friendly, responsive support across chat, email, and phone that keeps your customers happy.", tasks: ["Ticket management", "Live chat coverage", "Order and refund handling", "Knowledge base upkeep"], industries: ["Ecommerce", "Technology", "Healthcare"] },
  { icon: Mail, title: "Email Management", desc: "A clean, organized inbox every day. Prioritized messages, drafted replies, and zero missed opportunities.", tasks: ["Inbox zero workflows", "Reply drafting", "Newsletter management", "Follow-up sequences"], industries: ["Real Estate", "Legal", "Coaching"] },
  { icon: Calendar, title: "Calendar Management", desc: "Never double-book again. Smart scheduling, reminders, and time-zone coordination handled for you.", tasks: ["Meeting scheduling", "Time-zone coordination", "Reminder systems", "Agenda preparation"], industries: ["Finance", "Legal", "Technology"] },
  { icon: Share2, title: "Social Media Management", desc: "Consistent, on-brand posting and community engagement across all your channels.", tasks: ["Content scheduling", "Community engagement", "Analytics reporting", "Hashtag research"], industries: ["Marketing Agencies", "Ecommerce", "Coaching"] },
  { icon: Palette, title: "Graphic Design", desc: "Scroll-stopping visuals for social, ads, presentations, and brand collateral.", tasks: ["Social media graphics", "Presentation design", "Brand assets", "Ad creatives"], industries: ["Marketing Agencies", "Ecommerce", "Education"] },
  { icon: Video, title: "Video Editing", desc: "Polished edits for YouTube, social clips, courses, and marketing videos.", tasks: ["Short-form clips", "YouTube editing", "Captions and graphics", "Course content"], industries: ["Education", "Coaching", "Marketing Agencies"] },
  { icon: Database, title: "Data Entry", desc: "Fast, accurate data processing so your records are always current and clean.", tasks: ["CRM updates", "Spreadsheet management", "Data cleaning", "Record digitization"], industries: ["Healthcare", "Finance", "Real Estate"] },
  { icon: Target, title: "Lead Generation", desc: "A steady pipeline of qualified prospects, researched and organized for your sales team.", tasks: ["Prospect research", "List building", "Outreach support", "CRM entry"], industries: ["Real Estate", "Marketing Agencies", "Technology"] },
  { icon: Calculator, title: "Bookkeeping", desc: "Organized books, reconciled accounts, and clear monthly reports you can trust.", tasks: ["Invoice management", "Expense tracking", "Account reconciliation", "Monthly reports"], industries: ["Construction", "Ecommerce", "Finance"] },
  { icon: ClipboardList, title: "Project Management", desc: "Deadlines met and teams aligned with proactive coordination and status tracking.", tasks: ["Task tracking", "Team coordination", "Status reporting", "Process documentation"], industries: ["Construction", "Technology", "Marketing Agencies"] },
  { icon: Users, title: "CRM Management", desc: "A clean, up-to-date CRM that your whole team actually uses.", tasks: ["Pipeline updates", "Contact management", "Workflow automation", "Reporting dashboards"], industries: ["Real Estate", "Finance", "Technology"] },
  { icon: PenTool, title: "Content Writing", desc: "Blog posts, newsletters, and web copy that sound like you and rank on search.", tasks: ["Blog articles", "Email newsletters", "Website copy", "SEO optimization"], industries: ["Marketing Agencies", "Education", "Coaching"] },
  { icon: ShoppingCart, title: "Ecommerce Support", desc: "Product listings, inventory, and order management for smooth online selling.", tasks: ["Product listings", "Inventory updates", "Order processing", "Marketplace management"], industries: ["Ecommerce", "Real Estate", "Technology"] },
  { icon: Megaphone, title: "Marketing Assistance", desc: "Campaign coordination, research, and reporting to amplify your marketing team.", tasks: ["Campaign coordination", "Market research", "Performance reporting", "Asset organization"], industries: ["Marketing Agencies", "Ecommerce", "Education"] },
];

export const industries = [
  { icon: Home, name: "Real Estate" },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: Scale, name: "Legal" },
  { icon: Store, name: "Ecommerce" },
  { icon: BarChart3, name: "Marketing Agencies" },
  { icon: HardHat, name: "Construction" },
  { icon: GraduationCap, name: "Coaching" },
  { icon: Landmark, name: "Finance" },
  { icon: Cpu, name: "Technology" },
  { icon: BookOpen, name: "Education" },
];

export const testimonials = [
  { name: "Sarah M.", role: "Business Owner", quote: "Our VA took over email, scheduling, and client follow-ups within the first week. I got back 15 hours a week almost immediately." },
  { name: "David L.", role: "CEO", quote: "The matching process was impressively fast. We interviewed two candidates and hired one within four days — she's now essential to our operations." },
  { name: "Amanda K.", role: "Marketing Director", quote: "Our social media VA doubled our posting consistency and engagement in two months. The quality of talent here is on another level." },
];

export const stats = [
  { value: 500, suffix: "+", label: "Businesses Served" },
  { value: 1200, suffix: "+", label: "Virtual Assistants" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "/7", label: "Support" },
];

export const processSteps = [
  { title: "Tell Us Your Needs", desc: "Share your tasks, tools, hours, and budget in a quick discovery call." },
  { title: "We Match Your VA", desc: "We hand-pick pre-screened candidates that fit your requirements." },
  { title: "Interview & Approve", desc: "Meet your shortlisted VAs and choose the one you love." },
  { title: "Start Working", desc: "Onboard in days, with our support team behind you the whole way." },
];

export const positions = [
  { title: "Executive Assistant", desc: "Support executives with scheduling, communications, and administrative operations.", skills: ["Calendar management", "Written communication", "Discretion"], type: "Full-time / Part-time" },
  { title: "Customer Support", desc: "Deliver friendly, fast support to customers across chat, email, and phone.", skills: ["Empathy", "Helpdesk tools", "Clear communication"], type: "Full-time" },
  { title: "Graphic Designer", desc: "Create on-brand visuals for social media, marketing campaigns, and presentations.", skills: ["Canva / Adobe Suite", "Brand consistency", "Layout design"], type: "Part-time / Project-based" },
  { title: "Bookkeeper", desc: "Keep client accounts accurate with invoicing, reconciliation, and reporting.", skills: ["QuickBooks / Xero", "Attention to detail", "Basic accounting"], type: "Part-time" },
  { title: "Social Media Manager", desc: "Plan, schedule, and engage across client social channels.", skills: ["Content planning", "Analytics", "Copywriting"], type: "Full-time / Part-time" },
  { title: "Video Editor", desc: "Edit short-form and long-form video content for brands and creators.", skills: ["Premiere / CapCut", "Storytelling", "Captioning"], type: "Project-based" },
  { title: "Lead Generation Specialist", desc: "Research prospects and build qualified lead lists for sales teams.", skills: ["Research", "CRM tools", "Data accuracy"], type: "Full-time" },
  { title: "Data Entry Specialist", desc: "Process and organize data quickly and accurately across systems.", skills: ["Typing speed", "Spreadsheets", "Accuracy"], type: "Part-time" },
  { title: "Content Writer", desc: "Write blogs, newsletters, and web copy for a variety of industries.", skills: ["SEO writing", "Research", "Editing"], type: "Project-based" },
];

export const faqs = [
  { q: "How do I apply?", a: "Fill out the application form on this page with your details, experience, and the position you're interested in. Our recruitment team reviews every application and responds within 3–5 business days." },
  { q: "How long is the hiring process?", a: "Typically 1–2 weeks from application to placement. It includes a skills assessment, a video interview, and matching with a client whose needs fit your strengths." },
  { q: "Do I need experience?", a: "Experience helps, but it isn't always required. Some positions are open to motivated beginners with strong communication skills — we provide training resources to help you grow." },
  { q: "What equipment is required?", a: "A reliable laptop or desktop, a stable internet connection (at least 10 Mbps), a headset, and a quiet workspace. A backup internet option is a plus." },
];

export const caseStudies = [
  { industry: "Real Estate", challenge: "A growing brokerage was drowning in listing admin, transaction paperwork, and missed follow-ups with leads.", solution: "We placed a dedicated VA to manage the CRM, coordinate listings, and run structured follow-up sequences.", results: ["35% more leads contacted within 24 hours", "12 hours/week saved per agent", "Zero missed transaction deadlines in 6 months"] },
  { industry: "Ecommerce", challenge: "A DTC brand's support inbox hit 300+ tickets a week, and response times stretched past 48 hours.", solution: "A two-VA support pod covering extended hours with shared macros, escalation rules, and weekly reporting.", results: ["Response time cut from 48h to under 4h", "CSAT improved from 82% to 96%", "Refund processing errors down 90%"] },
  { industry: "Healthcare", challenge: "A private clinic's front desk couldn't keep up with appointment scheduling, reminders, and insurance verification calls.", solution: "A HIPAA-trained VA took over scheduling, reminder calls, and pre-visit paperwork coordination.", results: ["No-show rate dropped 40%", "Front-desk phone volume down 60%", "Patients seen per week up 18%"] },
  { industry: "Marketing Agency", challenge: "Account managers spent evenings building reports and scheduling client content instead of doing strategy.", solution: "A shared VA team handling reporting, publishing, and asset organization across 14 client accounts.", results: ["20+ hours/week returned to strategists", "Reports delivered 2 days earlier each month", "Client retention up 15% year over year"] },
];

export const team = [
  { name: "Jordan Reyes", role: "Founder & CEO", initials: "JR" },
  { name: "Maya Chen", role: "Head of Talent", initials: "MC" },
  { name: "Liam Ortiz", role: "Client Success Lead", initials: "LO" },
  { name: "Priya Nair", role: "Operations Manager", initials: "PN" },
];

export const values = [
  { title: "People First", desc: "We invest in our VAs' growth because great careers create great client outcomes." },
  { title: "Radical Reliability", desc: "We do what we say, every time. Clients should never have to follow up twice." },
  { title: "Continuous Improvement", desc: "Every process, placement, and partnership gets better with feedback." },
  { title: "Global Opportunity", desc: "Talent is everywhere. We connect it with opportunity, wherever it lives." },
];
