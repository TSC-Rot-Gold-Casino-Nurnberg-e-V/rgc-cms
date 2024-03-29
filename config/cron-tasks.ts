import axios from "axios";
import { env } from "@strapi/utils";

export default {
  buildFrontend: {
    task: async () => {
      try {
        const url = env("VERCEL_DEPLOYMENT_WEBHOOK_URL", "");
        await axios.post(url);
        console.log("webhook triggered successfully");
      } catch (e) {
        console.error("error calling deployment webhook: ", e);
      }
    },
    options: {
      // every 2 hours
      rule: "0 */2 * * *",
    },
  },
};
