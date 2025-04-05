export default {
  name: 'heilbegleitung',
  title: 'Heilbegleitung',
  type: 'document',
  fields: [
    {
      name: 'hero',
      title: 'Hero-Bereich',
      type: 'object',
      fields: [
        {
          name: 'image',
          title: 'Hero-Bild',
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', title: 'Alt-Text', type: 'string' },
            { name: 'caption', title: 'Bildunterschrift', type: 'string' }
          ]
        },
        { name: 'claim', title: 'Hauptüberschrift', type: 'string' },
        { name: 'subline', title: 'Unterzeile', type: 'text', rows: 2 },
        {
          name: 'quote',
          title: 'Zitat',
          type: 'object',
          fields: [
            { name: 'text', title: 'Zitat-Text', type: 'text', rows: 2 },
            { name: 'author', title: 'Autor', type: 'string' }
          ]
        },
        {
          name: 'cta',
          title: 'Call-to-Action',
          type: 'object',
          fields: [
            { name: 'text', title: 'Button-Text', type: 'string' },
            { name: 'link', title: 'Link-Ziel', type: 'string' }
          ]
        }
      ]
    },
    {
      name: 'angebote',
      title: 'Angebote',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Titel', type: 'string' },
            { name: 'price', title: 'Preis (€)', type: 'number' },
            { name: 'description', title: 'Beschreibung', type: 'text', rows: 3 },
            {
              name: 'image',
              title: 'Bild',
              type: 'image',
              options: { hotspot: true },
              fields: [
                { name: 'alt', title: 'Alt-Text', type: 'string' },
                { name: 'caption', title: 'Bildunterschrift', type: 'string' }
              ]
            }
          ],
          preview: {
            select: {
              title: 'title',
              price: 'price',
              media: 'image'
            },
            prepare({ title, price, media }: { title: string; price: number; media: any }) {
              return {
                title,
                subtitle: `${price}€`,
                media
              }
            }
          }
        }
      ],
      options: {
        layout: 'grid'
      }
    }
  ],
  preview: {
    select: {
      title: 'hero.claim',
      subtitle: 'hero.subline',
      media: 'hero.image'
    }
  }
} 