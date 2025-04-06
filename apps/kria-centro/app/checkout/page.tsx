'use client';

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Checkout() {
  const [clientSecret, setClientSecret] = useState<string>('');

  // Hier würde normalerweise ein API-Aufruf erfolgen, um den Client Secret zu erhalten
  // Für das Beispiel verwenden wir einen statischen Wert
  useState(() => {
    // Simuliere API-Aufruf
    setClientSecret('sk_test_...'); // Hier würde der echte Client Secret stehen
  });

  const appearance = {
    theme: 'stripe',
    variables: {
      colorPrimary: '#3B82F6',
      colorBackground: '#ffffff',
      colorText: '#1F2937',
      colorDanger: '#EF4444',
      fontFamily: 'Inter, system-ui, sans-serif',
      spacingUnit: '4px',
      borderRadius: '8px',
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Zahlungsabwicklung</h1>
          
          {clientSecret && (
            <Elements 
              stripe={stripePromise} 
              options={{
                clientSecret,
                appearance,
              }}
            >
              <CheckoutForm />
            </Elements>
          )}
        </div>
      </div>
    </div>
  );
} 