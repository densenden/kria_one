export interface SanityDocument {
  _id: string
  _type: string
  _createdAt: string
  _updatedAt: string
  _rev: string
}

export interface Retreat extends SanityDocument {
  _type: 'retreat'
  title: string
  description: string
  startDate: string
  endDate: string
  price: number
  location: string
  image?: {
    _type: 'image'
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
}

export interface Heilbegleitung extends SanityDocument {
  _type: 'heilbegleitung'
  title: string
  description: string
  duration: string
  price: number
  image?: {
    _type: 'image'
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
}

export interface Angebot extends SanityDocument {
  _type: 'angebot'
  title: string
  description: string
  duration: string
  price: number
  image?: {
    _type: 'image'
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  features?: string[]
}

export interface Preis extends SanityDocument {
  _type: 'preis'
  title: string
  amount: number
  description?: string
  features?: string[]
}

export interface Homepage extends SanityDocument {
  _type: 'homepage'
  title: string
  description: string
  heroImage?: {
    _type: 'image'
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
} 