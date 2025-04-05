import { createClient, type SanityClient } from '@sanity/client'
import { fileURLToPath } from 'url'

interface SanityDocument {
  _type: string;
  [key: string]: any;
}

// Centro Client
const centroClient = createClient({
  projectId: 'ktr2zvpc',
  dataset: 'centro',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
  apiVersion: '2024-04-04'
})

// Training Client
const trainingClient = createClient({
  projectId: 'ktr2zvpc',
  dataset: 'training',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
  apiVersion: '2024-04-04'
})

// Centro Content
const centroContent = {
  retreat: {
    _type: 'retreat',
    title: '10-Tage Amazon-Retreat',
    slug: {
      _type: 'slug',
      current: '10-tage-amazon-retreat'
    },
    durationDays: 10,
    pricePerDay: 200,
    description: 'Tiefgreifende Reise durch Heilung, Natur und bewusstes Erleben. Inmitten des peruanischen Regenwalds kommst du mit dir selbst in Kontakt – begleitet von traditionellen Ritualen, veganer Ernährung und natürlicher Ruhe.',
    startDates: ['2025-06-15', '2025-10-01'].map(date => new Date(date).toISOString()),
    videoId: 'iw5vNBa5O1Q'
  } as SanityDocument,
  heilbegleitung: {
    _type: 'heilbegleitung',
    hero: {
      claim: 'Individuelle Heilbegleitung',
      subline: 'In Einzel-Sessions begleite ich dich durch körperliche, seelische und mentale Prozesse.',
      quote: {
        text: 'Heilung ist nicht das Ziel. Es ist der Weg.',
        author: 'Remo Icochea Alvarez'
      },
      cta: {
        text: 'Jetzt Session anfragen',
        link: '/heilbegleitung#anfrage'
      }
    }
  } as SanityDocument
}

// Training Content
const trainingContent = {
  homepage: {
    _type: 'homepage',
    hero: {
      claim: 'Stärke beginnt in dir.',
      subline: 'Personal Training, Mental Coaching und funktionale Ernährung in Hamburg.',
      videoId: 'iw5vNBa5O1Q'
    },
    services: [
      {
        title: 'Personal Training',
        description: 'Individuelles Training mit Fokus auf deine Ziele. Kraft, Beweglichkeit und funktionales Training.',
        link: '/personal-training'
      },
      {
        title: 'Mental Coaching',
        description: 'Achtsamkeit, Atmung und mentale Stärke für mehr Leistungsklarheit.',
        link: '/mental-coaching'
      },
      {
        title: 'Ernährungsberatung',
        description: 'Funktionale, pflanzliche Ernährung für optimale Performance.',
        link: '/ernaehrung'
      }
    ],
    quote: {
      text: 'Stärke beginnt in dir.',
      author: 'Remo Icochea Alvarez'
    },
    cta: {
      text: 'Kostenlose Beratung',
      link: '/#kontakt'
    }
  } as SanityDocument,
  angebote: [
    {
      _type: 'angebot',
      title: 'Spiralatmung Intensiv',
      slug: {
        _type: 'slug',
        current: 'spiralatmung-intensiv'
      },
      description: 'Tiefe Atemarbeit zur Öffnung von Energiekanälen und mentaler Klarheit. In der Gruppe – maximal 5 Teilnehmer. 2 Std. intensive Begleitung.',
      price: 245,
      participantsMax: 5,
      category: 'group',
      videoId: 'OSilaFjxey8',
      cta: {
        text: 'Platz reservieren',
        link: '/gruppenangebote#spiralatmung'
      }
    } as SanityDocument,
    {
      _type: 'angebot',
      title: 'Personal Training Starter',
      slug: {
        _type: 'slug',
        current: 'personal-training-starter'
      },
      description: 'Dein Einstieg in bewusstes Training. 60 Minuten individuelles Training mit Analyse deiner Bewegungsmuster und Zielsetzung.',
      price: 95,
      category: 'training',
      cta: {
        text: 'Jetzt buchen',
        link: '/personal-training#buchen'
      }
    } as SanityDocument
  ],
  pricing: [
    {
      _type: 'pricing',
      title: 'Einzelstunde',
      category: 'single',
      price: 95,
      sessionsIncluded: 1,
      description: 'Flexible Einzelstunde ohne Bindung',
      features: [
        '60 Minuten Training',
        'Individuelle Betreuung',
        'Flexibler Termin'
      ]
    } as SanityDocument,
    {
      _type: 'pricing',
      title: '10er-Karte',
      category: '10pack',
      price: 850,
      sessionsIncluded: 10,
      validityDays: 180,
      description: 'Die beliebte 10er-Karte für regelmäßiges Training',
      features: [
        '10 x 60 Minuten Training',
        'Gültig 6 Monate',
        'Termingarantie',
        'WhatsApp Support'
      ],
      highlighted: true
    } as SanityDocument
  ]
}

async function seedCentroContent() {
  try {
    // Retreat erstellen
    const createdRetreat = await centroClient.create(centroContent.retreat)
    console.log('Centro: Retreat erstellt:', createdRetreat._id)

    // Heilbegleitung erstellen
    const createdHeilbegleitung = await centroClient.create(centroContent.heilbegleitung)
    console.log('Centro: Heilbegleitung erstellt:', createdHeilbegleitung._id)
  } catch (error) {
    console.error('Fehler beim Seeden von Centro:', error)
  }
}

async function seedTrainingContent() {
  try {
    // Homepage erstellen
    const createdHomepage = await trainingClient.create(trainingContent.homepage)
    console.log('Training: Homepage erstellt:', createdHomepage._id)

    // Angebote erstellen
    for (const angebot of trainingContent.angebote) {
      const createdAngebot = await trainingClient.create(angebot)
      console.log('Training: Angebot erstellt:', createdAngebot._id)
    }

    // Preise erstellen
    for (const price of trainingContent.pricing) {
      const createdPrice = await trainingClient.create(price)
      console.log('Training: Preis erstellt:', createdPrice._id)
    }
  } catch (error) {
    console.error('Fehler beim Seeden von Training:', error)
  }
}

async function seedAll() {
  console.log('Starte Seeding...')
  await Promise.all([
    seedCentroContent(),
    seedTrainingContent()
  ])
  console.log('Seeding abgeschlossen!')
}

// Führe das Seeding aus
if (!process.env.SANITY_WRITE_TOKEN) {
  console.error('Error: SANITY_WRITE_TOKEN ist nicht gesetzt!')
  process.exit(1)
}
seedAll() 