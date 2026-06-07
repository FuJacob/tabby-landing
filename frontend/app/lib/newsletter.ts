const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value: string): boolean {
  return EMAIL_RE.test(value.trim());
}

/**
 * Adds an email to the mailing_list table. Returns whether it succeeded.
 * supabase-js is imported lazily so it stays out of the initial bundle.
 */
export async function subscribeToMailingList(email: string): Promise<boolean> {
  const { getSupabase } = await import("@/app/lib/supabase");
  const { error } = await getSupabase()
    .from("mailing_list")
    .insert({ email: email.trim() });
  return !error;
}
