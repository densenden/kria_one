import { Retreat, Heilbegleitung, Angebot, Preis, Homepage } from './types'

export const retreatsQuery = `*[_type == "retreat"] | order(startDate asc)`
export const heilbegleitungQuery = `*[_type == "heilbegleitung"]`
export const angeboteQuery = `*[_type == "angebot"]`
export const preiseQuery = `*[_type == "preis"]`
export const homepageQuery = `*[_type == "homepage"][0]`

export type RetreatsResult = Retreat[]
export type HeilbegleitungResult = Heilbegleitung[]
export type AngeboteResult = Angebot[]
export type PreiseResult = Preis[]
export type HomepageResult = Homepage 