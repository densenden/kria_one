export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'claim',
      title: 'Claim',
      type: 'string'
    },
    {
      name: 'subline',
      title: 'Subline',
      type: 'string'
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Text',
          type: 'text'
        },
        {
          name: 'author',
          title: 'Author',
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
        },
        {
          name: 'caption',
          title: 'Caption',
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