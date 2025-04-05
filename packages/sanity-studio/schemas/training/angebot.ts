export default {
  name: 'angebot',
  title: 'Angebot / Kurs',
  type: 'document',
  fields: [
    { name: 'title', title: 'Titel', type: 'string' },
    { name: 'slug', title: 'URL-Slug', type: 'slug', options: { source: 'title' } },
    { name: 'description', title: 'Beschreibung', type: 'text', rows: 4 },
    { name: 'price', title: 'Preis (€)', type: 'number' },
    { name: 'participantsMax', title: 'Max. Teilnehmer', type: 'number' },
    {
      name: 'category',
      title: 'Kategorie',
      type: 'string',
      options: {
        list: [
          { title: 'Personal Training', value: 'training' },
          { title: 'Mental Coaching', value: 'coaching' },
          { title: 'Ernährung', value: 'nutrition' },
          { title: 'Gruppenangebot', value: 'group' }
        ]
      }
    },
    {
      name: 'image',
      title: 'Hauptbild',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', type: 'string', title: 'Alt-Text' },
        { name: 'caption', type: 'string', title: 'Bildunterschrift' }
      ]
    },
    {
      name: 'gallery',
      title: 'Bildergalerie',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', type: 'string', title: 'Alt-Text' },
            { name: 'caption', type: 'string', title: 'Bildunterschrift' }
          ]
        }
      ],
      options: {
        layout: 'grid'
      }
    },
    { name: 'videoId', title: 'YouTube Video-ID', type: 'string' },
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
      name: 'details',
      title: 'Zusätzliche Details',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Bezeichnung', type: 'string' },
            { name: 'value', title: 'Wert', type: 'string' }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image'
    },
    prepare({ title, subtitle, media }: { title: string; subtitle: string; media: any }) {
      return {
        title,
        subtitle: `${subtitle} - ${title}`,
        media
      }
    }
  }
} 