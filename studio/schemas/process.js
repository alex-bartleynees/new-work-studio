export default {
  name: "process",
  title: "Process",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Process Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "images",
      type: "array",
      title: "Images",
      of: [
        {
          name: "image",
          type: "image",
          title: "Image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "title",
              type: "string",
              title: "Title",
            },
            {
              name: "description",
              type: "text",
              title: "Description",
            },
            {
              name: "credits",
              type: "string",
              title: "Credits",
            },
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        },
      ],
      options: {
        layout: "grid",
      },
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "archive",
      type: "boolean",
      title: "Archive",
    },
  ],
  initialValue: {
    archive: false,
  },
  preview: {
    select: {
      images: "images",
      image: "images.0",
      title: "title",
    },
    prepare(selection) {
      const { image, title } = selection;

      return {
        media: image,
        title: title,
      };
    },
  },
};
