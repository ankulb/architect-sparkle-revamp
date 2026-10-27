import { z } from "zod";

export const MAX_CV_BYTES = 10 * 1024 * 1024;
export const ALLOWED_CV_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export const applicationSchema = z.object({
  jobTitle: z.string().trim().min(1).max(120),
  jobLocation: z.string().trim().min(1).max(60),
  fullName: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().regex(/^[+0-9 ()-]{7,20}$/, "Please enter a valid phone number"),
  experienceYears: z.coerce.number().min(0, "Enter years of experience").max(60),
  coverNote: z.string().trim().max(2000).optional().default(""),
  portfolioUrl: z
    .string()
    .trim()
    .max(500)
    .refine((v) => v === "" || /^https?:\/\/\S+$/i.test(v), "Link must start with http:// or https://")
    .optional()
    .default(""),
});
