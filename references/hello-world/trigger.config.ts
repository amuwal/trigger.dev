import { defineConfig } from "@trigger.dev/sdk/v3";
import { libreoffice } from "@trigger.dev/build/extensions/libreoffice";

export default defineConfig({
  project: "proj_rrkpdguyagvsoktglnod",
  logLevel: "log",
  maxDuration: 60,
  retries: {
    enabledInDev: true,
    default: {
      maxAttempts: 3,
      minTimeoutInMs: 1000,
      maxTimeoutInMs: 10000,
      factor: 2,
      randomize: true,
    },
  },
  build: {
    extensions: [libreoffice()],
  },
});
