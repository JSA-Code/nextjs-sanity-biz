import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "hero",
  title: "Hero",
  fields: [
    defineField({
      type: "string",
      name: "heading",
      title: "Heading",
      description: "Write a short, introductive heading",
    }),
    defineField({
      type: "string",
      name: "subheading",
      title: "Subheading",
      description: "Write a short, introductive subheading",
    }),
    defineField({
      type: "object",
      name: "primaryButton",
      title: "Primary Button",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
      },
      fields: [
        defineField({
          type: "string",
          name: "label",
          title: "Button Label",
          description: "Write an action word",
        }),
        defineField({
          type: "url",
          name: "link",
          title: "Button Link",
          description: "Enter the URL this button should link to",
          validation: (Rule) =>
            Rule.uri({
              scheme: ["http", "https", "mailto", "tel"],
            }),
        }),
      ],
    }),
    defineField({
      type: "object",
      name: "secondaryButton",
      title: "Seconday Button",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
      },
      fields: [
        defineField({
          type: "string",
          name: "label",
          title: "Button Label",
          description: "Write an action word",
        }),
        defineField({
          type: "url",
          name: "link",
          title: "Button Link",
          description: "Enter the URL this button should link to",
          validation: (Rule) =>
            Rule.uri({
              scheme: ["http", "https", "mailto", "tel"],
            }),
        }),
      ],
    }),
    defineField({
      type: "image",
      name: "image",
      title: "Image",
      description: "Replace image",
      options: {
        hotspot: true,
      },
      // validation: (rule) => rule.required(),
      fields: [
        defineField({
          type: "string",
          name: "alt",
          title: "Alternative Text",
        }),
      ],
    }),
  ],
});