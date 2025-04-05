import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'ktr2zvpc',
  dataset: 'centro',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN, // Setze SANITY_WRITE_TOKEN in .env
})

const retreatData = {
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
  images: [
    {
      _type: 'image',
      alt: 'Barfußgruppe im Dschungel',
      caption: 'Ankommen. Loslassen. Dschungel spüren.'
    },
    {
      _type: 'image',
      alt: 'Maloca bei Nacht',
      caption: 'Ein Ort der Stille und der Wandlung.'
    }
  ],
  videoId: 'iw5vNBa5O1Q'
}

const heilbegleitungData = {
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
  },
  angebote: [
    {
      title: 'Private Session – ganzheitliche Heilung',
      price: 180,
      description: 'Einzelsitzung auf dich abgestimmt. Arbeit mit Atem, Körper, Gespräch, Berührung und Energiefluss. Dauer ca. 90 Minuten.'
    }
  ]
}

async function seedData() {
  try {
    // Retreat erstellen
    const createdRetreat = await client.create(retreatData)
    console.log('Retreat erstellt:', createdRetreat._id)

    // Heilbegleitung erstellen
    const createdHeilbegleitung = await client.create(heilbegleitungData)
    console.log('Heilbegleitung erstellt:', createdHeilbegleitung._id)

  } catch (error) {
    console.error('Fehler beim Seeden:', error)
  }
}

// Nur ausführen wenn direkt aufgerufen
if (require.main === module) {
  seedData()
} 