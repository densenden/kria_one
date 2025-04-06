import { createClient } from '@sanity/client'

export const projectId = 'ktr2zvpc'
export const dataset = 'production'
export const apiVersion = '2024-04-04'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

export const trainingClient = createClient({
  projectId,
  dataset: 'training',
  apiVersion,
  useCdn: true,
})

export const centroClient = createClient({
  projectId,
  dataset: 'centro',
  apiVersion,
  useCdn: true,
}) 