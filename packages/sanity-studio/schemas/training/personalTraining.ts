export default {
  name: 'personalTraining',
  title: 'Personal Training',
  type: 'document',
  fields: [
    { name: 'title', title: 'Titel', type: 'string' },
    { name: 'description', title: 'Beschreibung', type: 'text' },
    { name: 'price', title: 'Preis (€)', type: 'number' },
    {
      name: 'image',
      title: 'Bild',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', title: 'Alt-Text', type: 'string' },
        { name: 'caption', title: 'Bildunterschrift', type: 'string' }
      ]
    },
    { name: 'videoId', title: 'YouTube Video-ID', type: 'string' },
  ],
} 