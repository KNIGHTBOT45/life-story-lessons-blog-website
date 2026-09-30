import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";
import crypto from "crypto";

const resend = new Resend(process.env.RESEND_API_KEY);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "A valid email is required." },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(normalizedEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const { data: existingSubscriber } = await supabase
      .from("newsletter_subscribers")
      .select("id, active")
      .eq("email", normalizedEmail)
      .maybeSingle();

    if (existingSubscriber) {
      if (existingSubscriber.active) {
        return NextResponse.json({
          message: "You are already subscribed.",
        });
      }

      const unsubscribeToken = crypto.randomBytes(32).toString("hex");

      const { error: reactivateError } = await supabase
        .from("newsletter_subscribers")
        .update({
          active: true,
          unsubscribe_token: unsubscribeToken,
        })
        .eq("id", existingSubscriber.id);

      if (reactivateError) {
        console.error(reactivateError);

        return NextResponse.json(
          { error: "Unable to subscribe. Please try again." },
          { status: 500 }
        );
      }

      await sendConfirmationEmail(normalizedEmail, unsubscribeToken);

      return NextResponse.json({
        message: "You have been subscribed successfully.",
      });
    }

    const unsubscribeToken = crypto.randomBytes(32).toString("hex");

    const { error: insertError } = await supabase
      .from("newsletter_subscribers")
      .insert({
        email: normalizedEmail,
        active: true,
        unsubscribe_token: unsubscribeToken,
      });

    if (insertError) {
      console.error(insertError);

      return NextResponse.json(
        { error: "Unable to subscribe. Please try again." },
        { status: 500 }
      );
    }

    await sendConfirmationEmail(normalizedEmail, unsubscribeToken);

    return NextResponse.json({
      message: "You have been subscribed successfully.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}

async function sendConfirmationEmail(
  email: string,
  unsubscribeToken: string
) {
  const websiteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  await resend.emails.send({
    from: "Life Story Lessons <onboarding@resend.dev>",
    to: email,
    subject: "You're subscribed to Life Story Lessons",
    html: `
      <h2>You're subscribed!</h2>

      <p>
        Thanks for subscribing to Life Story Lessons.
      </p>

      <p>
        You'll receive an email when new stories and articles are published.
      </p>

      <p>
        <a href="${websiteUrl}/unsubscribe/${unsubscribeToken}">
          Unsubscribe
        </a>
      </p>
    `,
  });
}