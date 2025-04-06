import { createClient } from 'next-sanity'

export const projectId = 'ktr2zvpc'
export const dataset = 'centro'
export const apiVersion = '2024-04-04'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  studioUrl: '/studio',
})

// GROQ Queries
export const homepageQuery = `*[_type == "homepage"][0]`
export const retreatsQuery = `*[_type == "retreat"] | order(startDate asc)`
export const heilbegleitungQuery = `*[_type == "heilbegleitung"]` 