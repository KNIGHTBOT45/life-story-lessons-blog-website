import { createClient } from "@supabase/supabase-js";

type Props = {
  params: Promise<{
    token: string;
  }>;
};

export default async function UnsubscribePage({ params }: Props) {
  const { token } = await params;

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { data: subscriber, error: findError } = await supabase
    .from("newsletter_subscribers")
    .select("id, email, active")
    .eq("unsubscribe_token", token)
    .maybeSingle();

  if (findError || !subscriber) {
    return (
      <main>
        <h1>Invalid unsubscribe link</h1>
        <p>This unsubscribe link is invalid or has expired.</p>
      </main>
    );
  }

  if (!subscriber.active) {
    return (
      <main>
        <h1>Already unsubscribed</h1>
        <p>This email address is already unsubscribed.</p>
      </main>
    );
  }

  const { error: updateError } = await supabase
    .from("newsletter_subscribers")
    .update({ active: false })
    .eq("id", subscriber.id);

  if (updateError) {
    return (
      <main>
        <h1>Something went wrong</h1>
        <p>We couldn't unsubscribe you right now. Please try again.</p>
      </main>
    );
  }

  return (
    <main>
      <h1>You have been unsubscribed</h1>
      <p>
        <strong>{subscriber.email}</strong> will no longer receive
        Life Story Lessons newsletter emails.
      </p>
    </main>
  );
}