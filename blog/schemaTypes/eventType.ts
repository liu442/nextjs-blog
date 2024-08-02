import { defineField, defineType } from 'sanity'

export const eventType = defineType({
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title of blog article',
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug of blog article',
            options: {
                source: 'title',

            }
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'title of image',
        }),
        defineField({
            name: 'describe',
            type: 'text',
            title: 'describe of blog article',
        }),
        defineField({
            name: 'content',
            type: 'array',
            title: 'content of blog article',
            of: [{ type: 'block' }],

        }),
    ],
})