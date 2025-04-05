import { defineConfig } from 'sanity'
import { schemaTypes } from './schemas/schemaTypes'

export default defineConfig({
  name: 'kria',
  projectId: 'ktr2zvpc',
  dataset: 'training', // beim Start kann per Flag gewechselt werden
  plugins: [],
  schema: {
    types: schemaTypes,
  },
}) 