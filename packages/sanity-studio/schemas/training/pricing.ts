export default {
  name: 'pricing',
  title: 'Preise & Verträge',
  type: 'document',
  fields: [
    { name: 'title', title: 'Bezeichnung', type: 'string' },
    {
      name: 'category',
      title: 'Kategorie',
      type: 'string',
      options: {
        list: [
          { title: 'Einzelstunde', value: 'single' },
          { title: '5er-Karte', value: '5pack' },
          { title: '10er-Karte', value: '10pack' },
          { title: 'Monatsvertrag', value: 'monthly' },
          { title: 'Jahresvertrag', value: 'yearly' }
        ]
      }
    },
    { name: 'price', title: 'Preis (€)', type: 'number' },
    { name: 'validityDays', title: 'Gültigkeit (Tage)', type: 'number' },
    { name: 'sessionsIncluded', title: 'Anzahl Einheiten', type: 'number' },
    { name: 'description', title: 'Beschreibung', type: 'text', rows: 3 },
    {
      name: 'features',
      title: 'Leistungen',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'cta',
      title: 'Call to Action',
      type: 'object',
      fields: [
        { name: 'text', title: 'Button-Text', type: 'string' },
        { name: 'link', title: 'Ziel-Link', type: 'string' }
      ]
    },
    { 
      name: 'highlighted', 
      title: 'Als Empfehlung hervorheben', 
      type: 'boolean',
      initialValue: false
    }
  ],
  preview: {
    select: {
      title: 'title',
      price: 'price',
      category: 'category'
    },
    prepare({ title, price, category }: { title: string; price: number; category: string }) {
      return {
        title,
        subtitle: `${category} - ${price}€`
      }
    }
  }
} 