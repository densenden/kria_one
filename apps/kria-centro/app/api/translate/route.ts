import { NextResponse } from 'next/server';

const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;
const RAPIDAPI_HOST = 'google-translate1.p.rapidapi.com';

export async function POST(request: Request) {
  try {
    const { text, targetLang } = await request.json();

    const response = await fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': RAPIDAPI_KEY!,
        'X-RapidAPI-Host': RAPIDAPI_HOST
      },
      body: new URLSearchParams({
        q: text,
        target: targetLang,
        source: 'de'
      })
    });

    if (!response.ok) {
      throw new Error('Übersetzungsfehler');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Übersetzungsfehler:', error);
    return NextResponse.json(
      { error: 'Übersetzung fehlgeschlagen' },
      { status: 500 }
    );
  }
} 