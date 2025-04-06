import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Stripe-Instanz initialisieren
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const product = searchParams.get('product');
  const priceId = searchParams.get('price');
  
  if (!product || !priceId) {
    return NextResponse.json(
      { error: 'Produkt oder Preis nicht angegeben' },
      { status: 400 }
    );
  }

  try {
    // Checkout Session erstellen
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/erfolg?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/abbruch`,
      metadata: {
        product,
      },
    });

    // Redirect zur Checkout-Seite
    return NextResponse.redirect(session.url || '');
  } catch (error) {
    console.error('Stripe error:', error);
    return NextResponse.json(
      { error: 'Fehler bei der Erstellung der Checkout-Session' },
      { status: 500 }
    );
  }
}

// Fallback für OPTIONS-Requests (CORS)
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
} 