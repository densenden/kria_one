export default {
  name: 'angebot',
  title: 'Angebote',
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
      name: 'price',
      title: 'Price',
      type: 'number'
    },
    {
      name: 'bookingType',
      title: 'Booking Type',
      type: 'string'
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
      name: 'image',
      title: 'Image',
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
        }
      ]
    },
    {
      name: 'cta',
      title: 'Call to Action',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Text',
          type: 'string'
        },
        {
          name: 'link',
          title: 'Link',
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