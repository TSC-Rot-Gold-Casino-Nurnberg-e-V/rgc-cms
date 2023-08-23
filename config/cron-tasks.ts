import axios from "axios";
import { env } from "@strapi/utils";

async function wakeUpCMS() {
  const MAX_RETRIES = 5;
  const CMS_URL = env("CMS_URL", "");
  let retries = 0;
  let success = false;
  while (!success && retries < MAX_RETRIES) {
    try {
      console.log("trying to wake up cms");
      const response = await axios.get(`${CMS_URL}/admin`);
      console.log("cms woke up successfully");
      console.log("response.status: ", response.status);
      console.log("response.data: ", response.data);
      success = true;
    } catch (e) {
      console.error("error waking up cms: ", e);
      retries++;
    }
  }
}

export default {
  buildFrontend: {
    task: async () => {
      await wakeUpCMS();

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
