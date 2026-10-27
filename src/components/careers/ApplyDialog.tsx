import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { submitApplication } from "@/lib/applications.functions";
import { applicationSchema, ALLOWED_CV_TYPES, MAX_CV_BYTES } from "@/lib/applicationSchema";
import type { Job } from "@/data/careers";

const field =
  "mt-2 block w-full border-b border-input bg-transparent py-2 text-sm text-foreground outline-none focus:border-gold";
const label = "block text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted-foreground";

export function ApplyDialog({ job, onClose }: { job: Job | null; onClose: () => void }) {
  const submit = useServerFn(submitApplication);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  const close = () => {
    setError(null);
    setDone(false);
    onClose();
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!job) return;
    setError(null);
    const fd = new FormData(e.currentTarget);
    fd.set("jobTitle", job.title);
    fd.set("jobLocation", job.location);
    const parsed = applicationSchema.safeParse(Object.fromEntries(fd.entries()));
    if (!parsed.success) return setError(parsed.error.issues[0]?.message ?? "Please check the form.");
    const cv = fd.get("cv");
    if (!(cv instanceof File) || cv.size === 0) return setError("Please attach your CV.");
    if (cv.size > MAX_CV_BYTES) return setError("CV must be 10 MB or smaller.");
    if (!ALLOWED_CV_TYPES.includes(cv.type)) return setError("CV must be a PDF or Word document.");
    setBusy(true);
    try {
      await submit({ data: fd });
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <Dialog open={!!job} onOpenChange={(o) => !o && close()}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-light">Apply: {job?.title}</DialogTitle>
          <DialogDescription>{job?.location}</DialogDescription>
        </DialogHeader>
        {done ? (
          <p className="py-6 text-muted-foreground">Thank you. Your application has been received; our HR team will be in touch.</p>
        ) : (
          <form onSubmit={onSubmit} className="space-y-5" noValidate>
            <label className={label}>Full name<input name="fullName" required maxLength={100} className={field} /></label>
            <label className={label}>Email<input name="email" type="email" required maxLength={255} className={field} /></label>
            <label className={label}>Phone<input name="phone" type="tel" required maxLength={20} className={field} /></label>
            <label className={label}>Years of experience<input name="experienceYears" type="number" min={0} max={60} step="0.5" required className={field} /></label>
            <label className={label}>CV (PDF or Word, up to 10 MB)<input name="cv" type="file" required accept=".pdf,.doc,.docx" className={`${field} file:mr-3 file:border-0 file:bg-transparent file:text-gold`} /></label>
            <label className={label}>Portfolio link (optional)<input name="portfolioUrl" type="url" maxLength={500} className={field} /></label>
            <label className={label}>Cover note (optional)<textarea name="coverNote" rows={3} maxLength={2000} className={field} /></label>
            {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
            <button type="submit" disabled={busy} className="w-full border border-gold py-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-background disabled:opacity-50">
              {busy ? "Sending…" : "Submit application"}
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
