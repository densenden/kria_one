export default {
  name: 'retreat',
  title: 'Retreats (Centro)',
  type: 'document',
  fields: [
    { name: 'title', title: 'Titel', type: 'string' },
    { name: 'slug', title: 'URL-Slug', type: 'slug', options: { source: 'title' } },
    { name: 'description', title: 'Beschreibung', type: 'text', rows: 4 },
    { name: 'durationDays', title: 'Dauer (Tage)', type: 'number' },
    { name: 'pricePerDay', title: 'Preis pro Tag (€)', type: 'number' },
    { 
      name: 'startDates', 
      title: 'Starttermine', 
      type: 'array', 
      of: [{ type: 'date' }],
      options: {
        layout: 'grid'
      }
    },
    {
      name: 'images',
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
    { name: 'videoId', title: 'YouTube Video-ID', type: 'string' }
  ],
  preview: {
    select: {
      title: 'title',
      duration: 'durationDays',
      media: 'images.0'
    },
    prepare({ title, duration, media }: { title: string; duration: number; media: any }) {
      return {
        title,
        subtitle: `${duration} Tage`,
        media
      }
    }
  }
} 