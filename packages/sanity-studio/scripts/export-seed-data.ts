import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

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

type SanityDocument = {
  _id: string
  _type: string
  [key: string]: any
}

async function exportData() {
  try {
    // Export Centro Daten
    const centroData = await centroClient.fetch<SanityDocument[]>('*[_type in ["retreat", "heilbegleitung"]]')
    const centroNdjson = centroData.map((doc: SanityDocument) => JSON.stringify(doc)).join('\n')
    fs.writeFileSync(path.join(__dirname, 'seed-centro.ndjson'), centroNdjson)
    console.log('Centro Daten exportiert')

    // Export Training Daten
    const trainingData = await trainingClient.fetch<SanityDocument[]>('*[_type in ["homepage", "angebot", "preis"]]')
    const trainingNdjson = trainingData.map((doc: SanityDocument) => JSON.stringify(doc)).join('\n')
    fs.writeFileSync(path.join(__dirname, 'seed-training.ndjson'), trainingNdjson)
    console.log('Training Daten exportiert')
  } catch (error) {
    console.error('Fehler beim Exportieren:', error)
  }
}

if (!process.env.SANITY_WRITE_TOKEN) {
  console.error('Error: SANITY_WRITE_TOKEN ist nicht gesetzt!')
  process.exit(1)
}

exportData() 