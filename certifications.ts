export type CertCategory = "Cybersecurity" | "Cloud" | "AI" | "Networking" | "Digital Forensics";

export interface Certification {
  name: string;
  provider: string;
  date: string;
  credentialId: string;
  verifyUrl: string;
  category: CertCategory;
  skills: string[];
  placeholder?: boolean;
}

/** Placeholder entries — replace with your real certifications. */
export const certifications: Certification[] = [
  {
    name: "Certification Name",
    provider: "Provider",
    date: "2026",
    credentialId: "ABC-123456",
    verifyUrl: "https://example.com/verify",
    category: "Cybersecurity",
    skills: ["Security fundamentals", "Threat awareness"],
    placeholder: true,
  },
  {
    name: "Cloud Certification Name",
    provider: "Provider",
    date: "2026",
    credentialId: "CLD-123456",
    verifyUrl: "https://example.com/verify",
    category: "Cloud",
    skills: ["Cloud fundamentals", "Shared responsibility model"],
    placeholder: true,
  },
  {
    name: "Digital Forensics Certification Name",
    provider: "Provider",
    date: "2026",
    credentialId: "DF-123456",
    verifyUrl: "https://example.com/verify",
    category: "Digital Forensics",
    skills: ["Evidence handling", "Disk analysis"],
    placeholder: true,
  },
];
