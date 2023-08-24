export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "rgc-cms"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "banane"),
      ssl: env.bool("DATABASE_SSL", false),
      connectionString: env("DATABASE_URL", ""),
    },
  },
  pool: {
    // https://docs.strapi.io/dev-docs/configurations/database#database-pooling-options
    min: 0,
  },
});
