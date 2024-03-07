import cronTasks from "./cron-tasks";

export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    // Add this to not receive populated relations in webhooks
    populateRelations: false,
  },
  cron: {
    enabled: env("CRON_TASKS_ENABLED", false),
    tasks: cronTasks,
  },
});
