export default {
  name: 'retreat',
  title: 'Retreats',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'durationDays',
      title: 'Duration (Days)',
      type: 'number'
    },
    {
      name: 'pricePerDay',
      title: 'Price per Day',
      type: 'number'
    },
    {
      name: 'startDates',
      title: 'Start Dates',
      type: 'array',
      of: [{ type: 'date' }]
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'fileName',
              title: 'File Name',
              type: 'string'
            },
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string'
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string'
            }
          ]
        }
      ]
    },
    {
      name: 'video',
      title: 'Video',
      type: 'object',
      fields: [
        {
          name: 'type',
          title: 'Type',
          type: 'string'
        },
        {
          name: 'value',
          title: 'Video ID',
          type: 'string'
        }
      ]
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string'
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text'
        }
      ]
    }
  ]
} 