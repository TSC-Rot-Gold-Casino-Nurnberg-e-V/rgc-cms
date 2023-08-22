import axios from "axios";
import { env } from "@strapi/utils";

export default {
  buildFrontend: {
    task: async () => {
      try {
        const url = env("VERCEL_DEPLOYMENT_WEBHOOK_URL", "");
        console.log("calling deployment webhook with url: ", url);
        const response = await axios.post(url);
        console.log("webhook triggered successfully");
        console.log("response.status: ", response.status);
        console.log("response.data: ", response.data);
      } catch (e) {
        console.error("error calling deployment webhook: ", e);
      }
    },
    options: {
      // every day at 00:00 UTC
      rule: "0 0 0 * * *",
    },
  },
};
