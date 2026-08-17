export interface Project {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string[];
  technologies: string[];
  skills: string[];
  github?: string;
  placeholder?: boolean;
}

export const projects: Project[] = [
  {
    slug: "secure-social-engineering-awareness-application",
    title: "Secure Social Engineering Awareness Application",
    category: "Secure Development",
    summary:
      "A Python desktop application providing security awareness training with secure authentication, input validation and protected local data.",
    description: [
      "A desktop training tool that teaches users to recognise social engineering attempts through scenario-based questions and feedback.",
      "Security was treated as a first-class requirement: accounts are protected with TOTP-based two-factor authentication, all user input is validated and parameterised before it reaches the database, and stored data is encrypted at rest.",
      "The application demonstrates how secure design principles apply to a small, self-contained project — least privilege, defence in depth and safe defaults.",
    ],
    technologies: ["Python", "PySide", "SQLite", "TOTP / 2FA", "Encryption", "Input Validation"],
    skills: [
      "Secure software development",
      "Authentication design",
      "Input validation",
      "Database security",
      "Security awareness content",
    ],
    github: "https://github.com/danieldunne",
    placeholder: true,
  },
  {
    slug: "digital-forensic-investigation",
    title: "Digital Forensic Investigation",
    category: "Digital Forensics",
    summary:
      "A practical forensic investigation covering evidence acquisition, examination, analysis and formal reporting.",
    description: [
      "An end-to-end investigation of a disk image following a documented methodology: identification, preservation, acquisition, examination, analysis and reporting.",
      "Verified image integrity with hashing, maintained a chain of custody record, and recovered artefacts including deleted files, registry evidence and user activity timelines.",
      "Findings were written up in a structured forensic report suitable for a non-technical audience.",
    ],
    technologies: ["FTK Imager", "EnCase", "Autopsy", "Windows Forensic Analysis"],
    skills: [
      "Evidence acquisition",
      "Chain of custody",
      "Timeline reconstruction",
      "Artefact analysis",
      "Forensic reporting",
    ],
    placeholder: true,
  },
  {
    slug: "cybersecurity-ctf-labs",
    title: "Cybersecurity / CTF Labs",
    category: "Practical Security",
    summary:
      "A growing collection of hands-on challenges across web security, Linux, password security, network analysis and cryptography.",
    description: [
      "Regular practice against deliberately vulnerable machines and challenge sets to build practical offensive and defensive understanding.",
      "Each lab is documented with the reconnaissance performed, the vulnerability identified, how it was exploited, and — importantly — how it should be mitigated.",
      "The write-ups feed directly into how I think about detection and defence.",
    ],
    technologies: ["Kali Linux", "Burp Suite", "Wireshark", "John the Ripper", "Nmap", "Python"],
    skills: [
      "Web security",
      "Linux enumeration",
      "Password security",
      "Network analysis",
      "Vulnerability investigation",
      "Cryptography",
    ],
    placeholder: true,
  },
  {
    slug: "ai-research-consultancy-project",
    title: "AI Research & Consultancy Project",
    category: "Research & Consultancy",
    summary:
      "Research into AI technologies and platforms, investigating how organisations can adopt AI effectively, delivered to a client.",
    description: [
      "Led as Project Manager during an AI-focused internship, coordinating a small team and the client relationship.",
      "Researched and compared AI platforms across capability, cost, integration effort and risk, including data protection and security considerations.",
      "Delivered a comparative analysis and a set of practical recommendations, presented directly to the client.",
    ],
    technologies: ["AI Research", "Comparative Analysis", "Project Management", "Client Communication"],
    skills: [
      "Technology research",
      "Comparative evaluation",
      "Stakeholder communication",
      "Project management",
      "Recommendation reporting",
    ],
    placeholder: true,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
