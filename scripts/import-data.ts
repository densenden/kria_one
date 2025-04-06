const { createClient } = require('@sanity/client')
const seedCentro = require('../packages/seed-centro.json')
const seedTraining = require('../packages/seed-training.json')

const trainingClient = createClient({
  projectId: 'ktr2zvpc',
  dataset: 'training',
  apiVersion: '2024-04-04',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})

const centroClient = createClient({
  projectId: 'ktr2zvpc',
  dataset: 'centro',
  apiVersion: '2024-04-04',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})

async function deleteAllDocuments(client: any, types: string[]) {
  console.log('Deleting existing documents...')
  for (const type of types) {
    const query = `*[_type == "${type}"]`
    const documents = await client.fetch(query)
    for (const doc of documents) {
      await client.delete(doc._id)
      console.log(`Deleted ${type} document: ${doc._id}`)
    }
  }
}

async function importTrainingData() {
  console.log('Importing training data...')
  
  // Delete existing documents
  await deleteAllDocuments(trainingClient, ['homepage', 'angebot', 'preis'])
  
  // Import homepage
  const homepage = {
    _type: 'homepage',
    title: seedTraining.hero.title,
    description: seedTraining.hero.subline,
    claim: seedTraining.hero.claim,
    quote: seedTraining.hero.quote,
    cta: seedTraining.hero.cta,
    image: seedTraining.hero.image,
    seo: seedTraining.hero.seo
  }
  
  await trainingClient.create(homepage)
  console.log('Homepage created')

  // Import angebote
  for (const angebot of seedTraining.angebote) {
    const { _type, ...rest } = angebot
    await trainingClient.create({
      _type: 'angebot',
      ...rest
    })
    console.log(`Angebot created: ${angebot.title}`)

    // Create price document for each angebot
    await trainingClient.create({
      _type: 'preis',
      title: angebot.title,
      amount: angebot.price,
      description: `${angebot.title} - ${angebot.description.split('.')[0]}.`
    })
    console.log(`Preis created for: ${angebot.title}`)
  }
}

async function importCentroData() {
  console.log('Importing centro data...')
  
  // Delete existing documents
  await deleteAllDocuments(centroClient, ['homepage', 'retreat', 'heilbegleitung'])
  
  // Import homepage
  const homepage = {
    _type: 'homepage',
    title: seedCentro.hero.title,
    description: seedCentro.hero.subline,
    claim: seedCentro.hero.claim,
    quote: seedCentro.hero.quote,
    cta: seedCentro.hero.cta,
    image: seedCentro.hero.image,
    seo: seedCentro.hero.seo
  }
  
  await centroClient.create(homepage)
  console.log('Homepage created')

  // Import retreats
  for (const retreat of seedCentro.retreats) {
    const { _type, ...rest } = retreat
    await centroClient.create({
      _type: 'retreat',
      ...rest
    })
    console.log(`Retreat created: ${retreat.title}`)
  }

  // Import heilbegleitung
  for (const heilbegleitung of seedCentro.heilangebote) {
    const { _type, ...rest } = heilbegleitung
    await centroClient.create({
      _type: 'heilbegleitung',
      ...rest
    })
    console.log(`Heilbegleitung created: ${heilbegleitung.title}`)
  }
}

async function main() {
  try {
    await importTrainingData()
    await importCentroData()
    console.log('All data imported successfully!')
  } catch (error) {
    console.error('Error importing data:', error)
    process.exit(1)
  }
}

main() 