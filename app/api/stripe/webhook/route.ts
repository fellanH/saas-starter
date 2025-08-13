import Stripe from "stripe";
import { handleSubscriptionChange, stripe } from "@/lib/payments/stripe";
import { NextRequest, NextResponse } from "next/server";

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest) {
  const payload = await request.text();
  const signature = request.headers.get("stripe-signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);
  } catch (err) {
    console.error("Webhook signature verification failed.", err);
    return NextResponse.json(
      { error: "Webhook signature verification failed." },
      { status: 400 }
    );
  }

  try {
    switch (event.type) {
      case "customer.subscription.created":
      case "customer.subscription.updated":
      case "customer.subscription.deleted":
        const subscription = event.data.object as Stripe.Subscription;
        await handleSubscriptionChange(subscription);
        break;
      case "invoice.payment_succeeded":
        // Handle successful payment
        console.log("Payment succeeded:", event.data.object);
        break;
      case "invoice.payment_failed":
        // Handle failed payment
        console.log("Payment failed:", event.data.object);
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  } catch (error) {
    console.error("Error handling webhook event:", error);
    return NextResponse.json(
      { error: "Error handling webhook event." },
      { status: 500 }
    );
  }

  return NextResponse.json({ received: true });
}
