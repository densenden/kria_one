export default {
  name: 'homepage',
  title: 'Startseite',
  type: 'document',
  fields: [
    {
      name: 'hero',
      title: 'Hero-Bereich',
      type: 'object',
      fields: [
        {
          name: 'image',
          title: 'Hero-Bild/Video',
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', title: 'Alt-Text', type: 'string' },
            { name: 'caption', title: 'Bildunterschrift', type: 'string' }
          ]
        },
        { name: 'claim', title: 'Hauptüberschrift', type: 'string' },
        { name: 'subline', title: 'Unterzeile', type: 'text', rows: 2 },
        { name: 'videoId', title: 'YouTube Video-ID', type: 'string' }
      ]
    },
    {
      name: 'services',
      title: 'Angebotskacheln',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Titel', type: 'string' },
            { name: 'description', title: 'Beschreibung', type: 'text', rows: 3 },
            {
              name: 'image',
              title: 'Bild',
              type: 'image',
              options: { hotspot: true },
              fields: [
                { name: 'alt', title: 'Alt-Text', type: 'string' }
              ]
            },
            { name: 'link', title: 'Link', type: 'string' }
          ],
          preview: {
            select: {
              title: 'title',
              media: 'image'
            }
          }
        }
      ]
    },
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
} 