import { createClient } from 'next-sanity'

export const projectId = 'ktr2zvpc'
export const dataset = 'training'
export const apiVersion = '2024-04-04'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Während der Entwicklung setzen wir das auf false
  studioUrl: '/studio',
})

// GROQ Queries
export const homepageQuery = `*[_type == "homepage"][0]`
export const angeboteQuery = `*[_type == "angebot"]`
export const preiseQuery = `*[_type == "preis"]` 