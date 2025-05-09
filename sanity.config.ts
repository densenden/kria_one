import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'kria-cms',

  projectId: 'g1cvdjmp',
  dataset: 'training',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
