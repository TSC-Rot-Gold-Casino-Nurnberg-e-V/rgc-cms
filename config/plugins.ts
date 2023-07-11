module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        angebot: {
          field: "slug",
          references: "titel",
        },
        neuigkeit: {
          field: "slug",
          references: "titel",
        },
        veranstaltung: {
          field: "slug",
          references: "titel",
        },
      },
    },
  },
});
