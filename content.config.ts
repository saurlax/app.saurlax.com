import { defineContentConfig, defineCollection } from "@nuxt/content";
import { z } from "zod";

export default defineContentConfig({
  collections: {
    tools: defineCollection({
      type: "page",
      source: "tools/**/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
      }),
    }),
  },
});
