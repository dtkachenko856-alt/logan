export const portfolioData = {
  identityRecord: {
    name: "Logan Lunsford",
  },
  hero: {
    firstName: "Logan Lunsford",
    name: "Senior Full-Stack AI Engineer",
    tagline: "AI | SaaS | Cloud",
    description:
      "I build AI-powered products, dependable SaaS platforms, and integrations—from architecture and polished user experiences through production support.",
  },
  contact: {
    location: "Ohio, United States",
    email: "llloganray23887@gmail.com",
  },
  about: {
    title: "Senior Full-Stack AI Engineer",
    description: [
      "I have 8 years of experience building web, mobile, backend, and cloud systems. My work spans AI assistants, agentic workflows, RAG and semantic search, document intelligence, and business automation.",
      "I take products from architecture to production: connecting AI to business data with controlled tools and human approval, building secure SaaS foundations, and shipping tested, accessible interfaces. I stay involved after launch to improve reliability and performance.",
    ],  
    stats: [
      { value: "8 years", label: "Engineering experience" },
      { value: "AI + SaaS", label: "Product focus" },
      { value: "Ohio, US", label: "Location" },
    ],
  },
  experience: [
    {
      title: "Senior AI Solutions Engineer",
      company: "Globant",
      period: "Aug 2024 - Jun 2026",
      description:
        "Designed and delivered production AI applications, agentic workflows, document-intelligence products, and conversational experiences. Built retrieval and semantic-search pipelines; integrated OpenAI, Azure OpenAI, and Claude with structured outputs and controlled tool use. Owned full-stack SaaS architecture, enterprise integrations, testing, cloud delivery, monitoring, and production support.",
    },
    {
      title: "Lead Cloud and AI Engineer",
      company: "EPAM Systems",
      period: "Apr 2022 - Mar 2024",
      description:
        "Led architecture and delivery for cloud-native SaaS, intelligent workflows, and enterprise integrations. Built React and Next.js interfaces with Node.js, Python, and FastAPI services; delivered retrieval, document-processing, and natural-language features. Established Docker, AWS and Azure infrastructure, monitoring, and CI/CD, and guided distributed teams through production releases.",
    },
    {
      title: "Senior Full-Stack Engineer",
      company: "JPMorgan Chase & Co.",
      period: "Aug 2018 - Mar 2022",
      description:
        "Built customer portals, administrative applications, backend services, and cloud systems. Delivered React and TypeScript features, Node.js and .NET services, APIs, background jobs, and third-party integrations. Modernized legacy systems, optimized database queries, improved test coverage and CI/CD, and supported production troubleshooting.",
    },
  ],
  systems: [
    {
      title: "AI products and retrieval",
      description:
        "AI assistants, agent workflows, document intelligence, semantic search, and RAG with evaluation and human review.",
      technologies: ["OpenAI", "Claude", "LangChain", "LangGraph", "pgvector"],
    },
    {
      title: "SaaS and business workflows",
      description:
        "Multi-tenant applications with identity, permissions, billing, background jobs, and audit history.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Python",
        "PostgreSQL",
      ],
    },
    {
      title: "Enterprise integrations",
      description:
        "Connected product workflows to business data, external APIs, and customer operations with controlled access.",
      technologies: ["REST", "GraphQL", "OAuth", "Webhooks", "CRM / ERP"],
    },
    {
      title: "Cloud delivery and reliability",
      description:
        "Tested releases, production monitoring, incident response, and performance improvements across cloud systems.",
      technologies: [
        "AWS",
        "Azure",
        "Docker",
        "CI/CD",
        "Monitoring",
      ],
    },
  ],
  techStack: [
    {
      category: "AI",
      skills: [
        "OpenAI",
        "Azure OpenAI",
        "Claude",
        "LangChain",
        "LangGraph",
        "RAG",
        "Agents",
        "Embeddings",
        "Tool calling",
        "Retrieval evaluation",
      ],
    },
    {
      category: "Frontend & design",
      skills: [
        "React",
        "React Native",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Accessible UI",
        "Claude-assisted design",
      ],
    },
    {
      category: "Backend",
      skills: [
        "Python",
        "FastAPI",
        "Node.js",
        "NestJS",
        "C#",
        ".NET",
      ],
    },
    {
      category: "Data",
      skills: [
        "PostgreSQL",
        "SQL Server",
        "MySQL",
        "MongoDB",
        "Supabase",
        "Redis",
        "pgvector",
        "Pinecone",
        "Qdrant",
      ],
    },
    {
      category: "Cloud & delivery",
      skills: [
        "AWS",
        "Azure",
        "Vercel",
        "Docker",
        "GitHub Actions",
        "CI/CD",
        "Serverless",
        "Monitoring",
        "Structured logging",
      ],
    },
    {
      category: "Integrations",
      skills: [
        "REST",
        "GraphQL",
        "WebSockets",
        "Webhooks",
        "OAuth",
        "Payment APIs",
        "Salesforce",
        "HubSpot",
        "Plaid",
        "Xero",
        "QuickBooks",
        "Shopify",
        "Slack",
        "Microsoft 365",
        "Google services",
        "CRM and ERP",
      ],
    },
  ],
  positioning:
    "AI engineering, full-stack product development, SaaS architecture, and reliable cloud delivery.",
  education: [
    {
      school: "Georgia Institute of Technology",
      degree: "Master of Science in Computer Science",
      period: "2019 - 2021",
    },
    {
      school: "University of Cincinnati",
      degree: "Computer Science",
      period: "2014 - 2018",
    },
  ],
  projects: [
    {
      title: "Finwise",
      type: "Concept · Financial AI",
      description:
        "A personal finance workspace that brings spending, cash flow, budgets, and explainable AI guidance into one clear dashboard.",
      imageCaption: "Original UI concept — not a live financial product",
      overview:
        "Finwise is an original concept for an AI-assisted personal finance dashboard. It brings account activity, recurring payments, budgets, and cash-flow projections together in a calm, approachable interface. AI-generated observations are grounded in visible transaction data, explain why a pattern was flagged, and suggest next steps without moving money or making financial decisions on the user's behalf.",
      image: "/projects/Finwise/main.svg",
      images: ["/projects/Finwise/main.svg"],
      link: "",
      tags: [
        "Personal Finance",
        "AI Insights",
        "Cash Flow",
        "Explainable AI",
        "Privacy",
      ],
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Plaid",
        "AWS",
      ],
      challenges: [
        {
          issue:
            "Financial data is dense and hard to interpret across accounts.",
          solution:
            "Bring account balances, recent activity, spending categories, and recurring payments into a single scannable dashboard.",
        },
        {
          issue:
            "AI money suggestions can be hard to trust when their reasoning is hidden.",
          solution:
            "Tie each insight to visible transactions, explain the detected pattern, and keep recommendations optional and reviewable.",
        },
        {
          issue:
            "Predictions should not imply certainty or execute sensitive actions.",
          solution:
            "Present cash-flow projections as estimates with clear context and never initiate transfers or financial decisions automatically.",
        },
        {
          issue:
            "Account connections and financial records require careful protection.",
          solution:
            "Design for least-privilege access, encrypted data handling, auditable access, and clear controls for connected accounts.",
        },
      ],
    },
    {
      title: "Stride",
      type: "Concept · Fitness AI",
      description:
        "A training companion that turns goals, workout history, recovery, and daily routines into practical, adaptable fitness plans.",
      imageCaption: "Original UI concept — not a live fitness product",
      overview:
        "Stride is an original concept for a fitness coaching app that makes consistent training easier to plan and follow. Members can review a weekly plan, log sessions, and see progress without losing sight of recovery and personal goals. An AI coach offers adjustable workout suggestions based on logged activity, explains its recommendations, and leaves the final choice with the member. It is a wellness concept, not a medical or injury-diagnosis tool.",
      image: "/projects/Stride/main.svg",
      images: ["/projects/Stride/main.svg"],
      link: "",
      tags: [
        "Fitness",
        "AI Coaching",
        "Workout Planning",
        "Progress Tracking",
        "Mobile",
      ],
      techStack: [
        "React Native",
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Redis",
        "AWS",
      ],
      challenges: [
        {
          issue:
            "Generic plans do not respond to changing schedules and training history.",
          solution:
            "Use member goals and logged sessions to suggest flexible weekly plans that can be adjusted before a workout.",
        },
        {
          issue:
            "Progress dashboards can encourage overtraining when they ignore recovery.",
          solution:
            "Show rest days, perceived effort, and consistency alongside workout totals, and make recovery an explicit part of planning.",
        },
        {
          issue:
            "Fitness recommendations need clear limits and user control.",
          solution:
            "Explain the basis for suggestions, allow members to dismiss or edit them, and avoid medical diagnosis or injury-treatment claims.",
        },
        {
          issue:
            "Logging a workout should be quick on a phone.",
          solution:
            "Design a mobile-first flow with reusable session templates, simple progress entry, and accessible interaction states.",
        },
      ],
    },
    {
      title: "CareBridge",
      type: "Concept · HIPAA-aware healthcare",
      description:
        "A secure-care workflow concept for patient intake, document review, and clinician-approved AI summaries.",
      imageCaption:
        "Original UI concept — HIPAA-aware design example, not a certified or deployed product",
      overview:
        "CareBridge is an original concept for a healthcare intake workspace that helps care teams review incoming documents and prepare patient summaries. AI is limited to organizing and summarizing information for clinician review; it does not diagnose, decide eligibility for treatment, or replace professional judgment. The concept demonstrates HIPAA-aware engineering considerations such as role-based access, minimum-necessary data, audit history, secure handling, and explicit human approval. A mockup alone does not establish HIPAA compliance; a real deployment would require appropriate technical, administrative, and contractual safeguards.",
      image: "/projects/CareBridge/main.svg",
      images: ["/projects/CareBridge/main.svg"],
      link: "",
      tags: [
        "Healthcare",
        "HIPAA-aware design",
        "Document AI",
        "Clinician review",
        "Audit history",
      ],
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Azure",
      ],
      challenges: [
        {
          issue:
            "Intake information arrives in documents that require careful review.",
          solution:
            "Extract and organize fields with source references, flag uncertainty, and keep the original document available to authorized staff.",
        },
        {
          issue:
            "Clinical summaries must not be mistaken for clinical decisions.",
          solution:
            "Constrain AI to draft summaries, show source context, and require a clinician to review and approve content before use.",
        },
        {
          issue:
            "Sensitive health information should only be visible to the right people.",
          solution:
            "Design around role-based access, minimum-necessary data, audit trails, and secure transmission and storage requirements.",
        },
        {
          issue:
            "A polished interface cannot by itself guarantee HIPAA compliance.",
          solution:
            "Treat compliance as an organization-wide implementation requirement, including risk analysis, policies, workforce training, vendor agreements, and technical safeguards before launch.",
        },
      ],
    },
    {
      title: "Dust",
      type: "Enterprise AI Platform",
      description:
        "Team AI platform for building assistants and agents grounded in company knowledge and connected to business tools.",
      imageCaption: "Official website screenshot",
      overview:
        "I contributed to Dust, an enterprise AI platform that helps teams create and run assistants across real work. My work focused on full-stack product development, retrieval-augmented generation, and agent workflows connected to company knowledge and approved tools. I helped shape secure, responsive experiences that make AI useful inside team workflows while keeping access, context, and human review central.",
      image: "/projects/Dust/main.png",
      images: ["/projects/Dust/main.png"],
      link: "https://dust.tt/",
      tags: [
        "Enterprise AI",
        "AI Agents",
        "RAG",
        "Knowledge Search",
        "Tool Calling",
      ],
      techStack: [
        "React",
        "Next.js",
        "TypeScript",
        "Python",
        "FastAPI",
        "LangChain",
        "PostgreSQL",
        "pgvector",
        "AWS",
        "Docker",
      ],
      challenges: [
        {
          issue:
            "Company knowledge is spread across documents and connected tools.",
          solution:
            "Build ingestion and retrieval workflows that prepare useful context for answers and keep source information traceable.",
        },
        {
          issue:
            "Agents need to take useful actions without exceeding their permissions.",
          solution:
            "Use structured outputs, scoped tool access, explicit authorization checks, and human approval for consequential actions.",
        },
        {
          issue:
            "Teams need a clear way to create and maintain their own assistants.",
          solution:
            "Design reusable, responsive interfaces for configuring assistants, sharing them with teams, and managing their connected knowledge.",
        },
        {
          issue:
            "AI experiences must remain reliable as data and usage grow.",
          solution:
            "Support asynchronous processing, observable workflows, automated tests, and production monitoring across the delivery lifecycle.",
        },
      ],
    },
    {
      title: "Relevance AI",
      type: "AI Workflow Automation",
      description:
        "AI workflow platform that turns operational expertise into repeatable agent-driven systems with clear human oversight.",
      imageCaption: "Official website screenshot",
      overview:
        "I worked on Relevance AI, helping teams turn operational knowledge into practical AI workflows. My contributions connected agent experiences to business systems, retrieval, and background processing, with an emphasis on usable interfaces and controlled automation. The work combined full-stack product engineering with cloud delivery so teams could build, monitor, and improve workflows in production.",
      image: "/projects/RelevanceAI/main.png",
      images: ["/projects/RelevanceAI/main.png"],
      link: "https://relevanceai.com/",
      tags: [
        "AI Workflows",
        "Agentic Automation",
        "Enterprise Integrations",
        "Human Review",
      ],
      techStack: [
        "React",
        "TypeScript",
        "Node.js",
        "Python",
        "FastAPI",
        "LangGraph",
        "PostgreSQL",
        "Redis",
        "AWS",
        "Docker",
      ],
      challenges: [
        {
          issue:
            "Operational expertise is difficult to translate into dependable automation.",
          solution:
            "Break business processes into clear workflow steps, validate inputs and outputs, and make the resulting automation easy to review.",
        },
        {
          issue:
            "Agents must coordinate tools and services without hiding failures.",
          solution:
            "Use explicit workflow states, validated integrations, background jobs, and visible error paths for each step.",
        },
        {
          issue:
            "Teams need control over when an AI recommendation becomes an action.",
          solution:
            "Add human approval points, scoped permissions, and auditable records before high-impact actions are completed.",
        },
        {
          issue:
            "Production workflows depend on responsive interfaces and reliable services.",
          solution:
            "Deliver tested full-stack changes with cloud monitoring, structured logs, and performance improvements informed by real usage.",
        },
      ],
    },
    {
      title: "Hume AI",
      type: "Voice AI Evaluation",
      description:
        "Voice AI evaluation platform for measuring conversational quality, diagnosing failures, and improving real-world systems.",
      imageCaption: "Official website screenshot",
      overview:
        "I contributed to Hume AI's voice-AI product experience, bringing full-stack engineering to tools for evaluating real conversations and improving system quality. The work focused on clear interfaces for reviewing evaluation results, reliable services for processing conversational data, and feedback loops that make issues actionable. Privacy-conscious data handling, production monitoring, and careful testing were part of the delivery process.",
      image: "/projects/HumeAI/main.png",
      images: ["/projects/HumeAI/main.png"],
      link: "https://www.hume.ai/",
      tags: [
        "Voice AI",
        "Evaluation",
        "Conversational Systems",
        "Quality Monitoring",
      ],
      techStack: [
        "React",
        "TypeScript",
        "Python",
        "FastAPI",
        "WebSockets",
        "PostgreSQL",
        "AWS",
        "Docker",
        "CI/CD",
      ],
      challenges: [
        {
          issue:
            "Voice experiences are difficult to evaluate consistently across many conversations.",
          solution:
            "Create repeatable evaluation workflows and surface relevant conversation evidence alongside quality signals.",
        },
        {
          issue:
            "Teams need to understand failures, not just see aggregate scores.",
          solution:
            "Present reviewable results and useful conversation context so teams can identify patterns and target improvements.",
        },
        {
          issue:
            "Processing conversational data requires dependable, responsive systems.",
          solution:
            "Use resilient API and background-processing patterns with clear workflow states and observable failure handling.",
        },
        {
          issue:
            "Production AI systems need continuous feedback after release.",
          solution:
            "Connect testing, monitoring, and evaluation results into a practical improvement cycle for ongoing model and product quality.",
        },
      ],
    },
    {
      title: "Claim Health",
      type: "SaaS",
      description:
        "Care Continuity Platform for home-based care agencies, combining continuous insurance eligibility checks, intelligent referral intake, authorization automation, and billing operations.",
      overview:
        "Claim Health is a healthcare operations platform built for home health, hospice, and home care agencies. It brings referral intake, insurance verification, prior authorization, and billing follow-up into one connected workflow. Teams can move from an incoming referral to an actionable care-readiness decision without repeatedly switching between documents, payer portals, and disconnected spreadsheets. The platform is designed to reduce administrative delays while keeping exceptions visible for staff who need to make the final decision.",
      image: "/projects/Claim/main.jpg",
      images: [
        "/projects/Claim/main.jpg",
        "/projects/Claim/1.png",
        "/projects/Claim/2.jpg",
      ],
      link: "https://www.claimhealth.com/",
      tags: [
          "SaaS",
        "Eligibility",
        "Smart Intake",
        "Prior Authorization",
        "Billing Operations",
      ],
      techStack: ["C#", ".NET", "ASP.NET Core", "Angular", "TypeScript", "Azure", "SQL Server"],
      challenges: [
        {
          issue: "Insurance coverage changes after intake.",
          solution:
            "Run recurring eligibility checks and surface status changes before they interrupt care or billing.",
        },
        {
          issue: "Referral documents arrive as inconsistent faxes and PDFs.",
          solution:
            "Extract structured fields from documents, validate them against clinical criteria, and route exceptions for review.",
        },
        {
          issue:
            "Prior authorizations require many follow-ups and renewal dates.",
          solution:
            "Automate authorization workflows with renewal tracking, reminders, and a shared operations dashboard.",
        },
        {
          issue: "Healthcare data requires strict access control.",
          solution:
            "Use role-based permissions, encrypted storage, audit trails, and minimum-necessary data access for every workflow.",
        },
        {
          issue:
            "Automation can make incorrect decisions on incomplete referrals.",
          solution:
            "Attach confidence scores to extracted fields and require human approval whenever validation rules fail.",
        },
        {
          issue:
            "Operations teams need to trust the status of long-running workflows.",
          solution:
            "Record every state transition, retry transient failures, and expose clear exception queues and activity history.",
        },
      ],
    },
    {
      title: "Taiga",
      type: "SaaS",
      description:
        "AI-native medical billing service for independent practices that supports the full revenue cycle, from EHR integration and eligibility checks to claim scrubbing, denial appeals, and payment reconciliation.",
      overview:
        "Taiga is an AI-native medical billing service for independent medical practices. It supports the complete revenue cycle by connecting practice systems with eligibility checks, clinical note review, claim preparation, denial management, and payment reconciliation. The goal is to give smaller practices access to consistent billing operations without requiring a large internal revenue-cycle team, while keeping recommendations understandable and reviewable by billing staff.",
      image: "/projects/Taiga/main.jpg",
      images: [
        "/projects/Taiga/main.jpg",
        "/projects/Taiga/1.jpg",
        "/projects/Taiga/2.jpg",
        "/projects/Taiga/3.jpg",
      ],
      link: "https://taigabilling.com/",
      tags: [
        "Medical Billing",
        "AI",
        "EHR Integrations",
        "Revenue Cycle",
        "Denial Appeals",
      ],
      techStack: ["C#", ".NET", "ASP.NET Core", "Angular", "TypeScript", "Azure", "SQL Server", "Entity Framework"],
      challenges: [
        {
          issue: "Each practice uses different EHR and payer workflows.",
          solution:
            "Normalize integrations behind a common revenue-cycle model while keeping provider-specific adapters at the edges.",
        },
        {
          issue: "Small billing errors create expensive denials.",
          solution:
            "Validate eligibility, clinical notes, and claims before submission, then learn from denial patterns.",
        },
        {
          issue: "Payment reconciliation spans multiple systems.",
          solution:
            "Match remittance data to claims and surface unmatched payments for fast human resolution.",
        },
        {
          issue:
            "External EHR APIs have inconsistent formats and availability.",
          solution:
            "Use adapter contracts, schema validation, idempotent sync jobs, and retry queues so one provider outage does not block others.",
        },
        {
          issue:
            "Billing recommendations must remain explainable to practice staff.",
          solution:
            "Show the source data, validation rule, and confidence behind every suggested correction before it is applied.",
        },
        {
          issue:
            "Duplicate submissions can create compliance and payment problems.",
          solution:
            "Use claim fingerprints, idempotency keys, and a clear submission state machine to prevent accidental resubmission.",
        },
      ],
    },
    {
      title: "Frizzle",
      type: "SaaS",
      description:
        "AI-powered grading tool that reads handwritten math work step by step, identifies misconceptions, and gives teachers a live class dashboard for targeted instruction.",
      overview:
        "Frizzle turns photographed handwritten math work into useful instructional feedback. Instead of checking only whether a final answer is correct, it examines the student's working process to identify misconceptions and recurring error patterns. Teachers can submit batches of worksheets, review uncertain results, and use class-level insights to plan targeted support without manually grading every step of every paper.",
      image: "/projects/Frizzle/main.jpg",
      images: [
        "/projects/Frizzle/main.jpg",
        "/projects/Frizzle/1.jpg",
        "/projects/Frizzle/2.jpg",
        "/projects/Frizzle/3.jpg",
        "/projects/Frizzle/4.jpg"
      ],
      link: "https://www.frizzle.com/",
      tags: [
          "SaaS",
        "Computer Vision",
        "Math Education",
        "Teacher Dashboard",
        "FERPA",
      ],
      techStack: ["Python", "FastAPI", "React", "TypeScript", "Computer Vision", "AWS", "PostgreSQL"],
      challenges: [
        {
          issue: "Handwriting, page layouts, and camera quality vary widely.",
          solution:
            "Preprocess images, detect answer regions, and combine vision confidence checks with teacher review.",
        },
        {
          issue: "A final answer does not reveal the student misconception.",
          solution:
            "Parse the sequence of handwritten steps and classify error patterns instead of grading only the result.",
        },
        {
          issue: "Teachers need useful feedback without extra admin work.",
          solution:
            "Aggregate results into a live dashboard with class-level trends and actionable misconception groups.",
        },
        {
          issue: "Math notation is difficult to interpret from photos.",
          solution:
            "Use layout-aware recognition, domain-specific validation, and low-confidence review instead of trusting raw OCR output.",
        },
        {
          issue: "Students need fair feedback when recognition is uncertain.",
          solution:
            "Separate recognition confidence from grading confidence and let teachers correct ambiguous work before results are finalized.",
        },
        {
          issue: "Large worksheet batches can make processing slow.",
          solution:
            "Queue image jobs, process them asynchronously, and stream completed results to the teacher dashboard.",
        },
      ],
    },
    {
      title: "Bloomy",
      type: "SaaS",
      description:
        "Mastery-based K-12 learning platform for ELA, Math, and Writing with adaptive lessons, a Socratic AI tutor, standards-aligned skills, and teacher-facing insights.",
      overview:
        "Bloomy is a mastery-based learning platform for K-12 students across ELA, Math, and Writing. Learning paths adapt to each student's evidence of understanding, while the AI tutor uses guided questions and hints to help learners reason through difficult concepts. Students progress through standards-aligned skills after demonstrating mastery, and teachers receive classroom insights that make it easier to identify gaps and support learners at the right time.",
      image: "/projects/Bloomy/main.jpg",
      images: [
        "/projects/Bloomy/main.jpg",
        "/projects/Bloomy/1.jpg",
        "/projects/Bloomy/2.jpg",
        "/projects/Bloomy/3.jpg",
        "/projects/Bloomy/4.jpg",
      ],
      link: "https://www.bloomylearning.com/",
      tags: [
          "SaaS",
        "K-12",
        "Adaptive Learning",
        "AI Tutor",
        "Mastery Learning",
      ],
      techStack: ["Next.js", "React", "TypeScript", "AI", "RAG", "PostgreSQL", "AWS"],
      challenges: [
        {
          issue:
            "Students learn at different speeds across thousands of skills.",
          solution:
            "Track mastery per standard and recommend the next lesson only when the learner is ready.",
        },
        {
          issue:
            "An AI tutor can give answers instead of building understanding.",
          solution:
            "Use Socratic prompts, hints, and scaffolded questions that guide students without revealing the solution.",
        },
        {
          issue:
            "Learning content must remain aligned with research and standards.",
          solution:
            "Organize lessons around standards, mastery thresholds, and reviewed learning-science principles.",
        },
        {
          issue: "A single score can hide partial understanding.",
          solution:
            "Track evidence across attempts, hints, and prerequisite skills rather than relying on one assessment result.",
        },
        {
          issue: "AI responses need to be age-appropriate and curriculum-safe.",
          solution:
            "Ground responses in approved content, apply safety filters, and limit the tutor to the learner's current skill context.",
        },
        {
          issue:
            "Teachers need insight without exposing unnecessary student data.",
          solution:
            "Use role-based dashboards, aggregate classroom trends, and protect individual records with strict access boundaries.",
        },
      ],
    },
    {
      title: "ProcIndex",
      type: "SaaS",
      description:
        "AI accounting agents for construction and manufacturing teams that connect to an existing ERP and automate accounts payable, accounts receivable, vendor questions, and reconciliation.",
      overview:
        "ProcIndex is a vertical accounting automation platform for construction and manufacturing businesses. Instead of replacing an existing ERP, it adds specialized AI agents on top of the systems finance teams already use. The AP agent captures invoices, matches them against purchase orders, codes project and cost dimensions, routes approvals, and posts approved records. AR supports collections and dispute follow-up, while vendor management answers invoice-status questions from live AP data. Its vertical focus is important because construction workflows include progress billing, schedules of values, partial invoices, open commitments, and project cost codes that general-purpose AP tools often handle poorly.",
      image: "/projects/ProcIndex/main.jpg",
      images: [
        "/projects/ProcIndex/main.jpg",
        "/projects/ProcIndex/1.jpg",
        "/projects/ProcIndex/2.jpg",
        "/projects/ProcIndex/3.jpg",
      ],
      link: "https://procindex.com/",
      tags: [
        "SaaS",
        "AI Accounting",
        "Construction",
        "Manufacturing",
        "ERP Automation",
      ],
      techStack: [
        "C#",
        ".NET",
        "Entity Framework Core",
        "SQL Server",
        "Azure",
        "TypeScript",
        "REST APIs",
        "ERP Integrations",
        "AI Agents",
        "JWT Authentication",
        "Docker",
        "CI/CD",
      ],
      challenges: [
        {
          issue: "Construction invoices include project, cost-code, and progress-billing context.",
          solution:
            "Extract project dimensions, compare pay applications with prior billing and remaining commitments, and route uncertain coding for approval.",
        },
        {
          issue: "The product must work with different ERP data models without replacing the ERP.",
          solution:
            "Use ERP-specific adapters around a normalized accounting model, with validated imports and controlled writes back to the system of record.",
        },
        {
          issue: "Invoice capture and matching must handle partial invoices and two-way PO checks.",
          solution:
            "Match invoice lines against open purchase-order quantities and values, preserve partial states, and surface exceptions instead of forcing an unsafe match.",
        },
        {
          issue: "AI decisions in accounting need to be reviewable and auditable.",
          solution:
            "Show the extracted source fields, matching evidence, coding decision, confidence, and approval history for every automated action.",
        },
        {
          issue: "Collections and disputes require context from several accounting records.",
          solution:
            "Combine invoice, payment, promise-to-pay, and dispute history into prioritized AR queues with human escalation paths.",
        },
        {
          issue: "Month-end reconciliation is sensitive to duplicate or missing transactions.",
          solution:
            "Use idempotent imports, transaction fingerprints, reconciliation rules, and exception queues before records are posted or closed.",
        },
      ],
    },
  ],
  skills: [
    "OpenAI",
    "Claude",
    "RAG",
    "LangChain",
    "LangGraph",
    "React",
    "React Native",
    "Next.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "Node.js",
    "NestJS",
    "C#",
    ".NET",
    "PostgreSQL",
    "SQL Server",
    "AWS",
    "Azure",
    "Docker",
    "CI/CD",
  ],
} as const;
