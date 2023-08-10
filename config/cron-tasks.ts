import axios from "axios";
import { env } from "@strapi/utils";

export default {
  buildFrontend: {
    task: async () => {
      console.log("Building frontend...");
      const url = env("VERCEL_DEPLOYMENT_WEBHOOK_URL", "");
      await axios.post(url);
    },
    options: {
      // every day at 03:00
      rule: "0 0 3 * * *",
    },
  },
};
