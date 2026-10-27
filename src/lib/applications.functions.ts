import { createServerFn } from "@tanstack/react-start";
import { applicationSchema, ALLOWED_CV_TYPES, MAX_CV_BYTES } from "./applicationSchema";

export const submitApplication = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => {
    if (!(data instanceof FormData)) throw new Error("Invalid form data");
    const file = data.get("cv");
    if (!(file instanceof File) || file.size === 0) throw new Error("Please attach your CV.");
    if (file.size > MAX_CV_BYTES) throw new Error("CV must be 10 MB or smaller.");
    if (!ALLOWED_CV_TYPES.includes(file.type)) throw new Error("CV must be a PDF or Word document.");
    const fields = applicationSchema.parse({
      jobTitle: data.get("jobTitle"),
      jobLocation: data.get("jobLocation"),
      fullName: data.get("fullName"),
      email: data.get("email"),
      phone: data.get("phone"),
      experienceYears: data.get("experienceYears"),
      coverNote: data.get("coverNote") ?? "",
      portfolioUrl: data.get("portfolioUrl") ?? "",
    });
    return { ...fields, file };
  })
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const ext = data.file.name.split(".").pop()?.toLowerCase().replace(/[^a-z0-9]/g, "") || "pdf";
    const path = `${new Date().toISOString().slice(0, 10)}/${crypto.randomUUID()}.${ext}`;
    const upload = await supabaseAdmin.storage
      .from("resumes")
      .upload(path, await data.file.arrayBuffer(), { contentType: data.file.type });
    if (upload.error) {
      console.error("CV upload failed", upload.error);
      throw new Error("We couldn't upload your CV. Please try again.");
    }
    const { error } = await supabaseAdmin.from("job_applications").insert({
      job_title: data.jobTitle,
      job_location: data.jobLocation,
      full_name: data.fullName,
      email: data.email,
      phone: data.phone,
      experience_years: data.experienceYears,
      cover_note: data.coverNote || null,
      portfolio_url: data.portfolioUrl || null,
      resume_path: path,
    });
    if (error) {
      console.error("Application insert failed", error);
      throw new Error("We couldn't save your application. Please try again.");
    }
    return { ok: true };
  });
