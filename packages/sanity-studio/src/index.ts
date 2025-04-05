import { defineConfig, definePlugin } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from '../schemas/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Kria CMS',

  projectId: 'ktr2zvpc',
  dataset: 'training',

  plugins: [
    deskTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
}) 