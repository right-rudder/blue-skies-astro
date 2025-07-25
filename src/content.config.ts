// https://docs.astro.build/en/guides/content-collections/#defining-collections

import { z, defineCollection } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";
import { glob } from "astro/loaders";

const trainingProgramsCollection = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/training-programs",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      siteDescription: z.string(),
      main: z.object({
        id: z.number(),
        content: z.string(),
        imgCard: image(),
        imgMain: image(),
        imgAlt: z.string(),
      }),
      tabs: z.array(
        z.object({
          id: z.string(),
          dataTab: z.string(),
          title: z.string(),
        }),
      ),
      longDescription: z.object({
        title: z.string(),
        subTitle: z.string(),
        btnTitle: z.string(),
        btnURL: z.string(),
      }),
      descriptionList: z.array(
        z.object({
          title: z.string(),
          subTitle: z.string(),
        }),
      ),
      specificationsLeft: z.array(
        z.object({
          title: z.string(),
          subTitle: z.string(),
        }),
      ),
      specificationsRight: z
        .array(
          z.object({
            title: z.string(),
            subTitle: z.string(),
          }),
        )
        .optional(),
      tableData: z
        .array(
          z.object({
            feature: z.array(z.string()),
            description: z.array(z.array(z.string())),
          }),
        )
        .optional(),
      blueprints: z.object({
        first: image().optional(),
        second: image().optional(),
      }),
      pricing: z
        .object({
          subTitle: z.string(),
          duration: z.string(),
          fullPrice: z.string(),
          monthlyPrice: z.string().optional(),
          details: z.array(z.string()),
          note: z.string(),
        })
        .optional(),
      pricing1: z
        .object({
          title: z.string(),
          subTitle: z.string(),
          duration: z.string(),
          fullPrice: z.string(),
          monthlyPrice: z.string(),
          details: z.array(z.string()),
          note: z.string(),
        })
        .optional(),
      pricing2: z
        .object({
          title: z.string(),
          subTitle: z.string(),
          duration: z.string(),
          fullPrice: z.string(),
          monthlyPrice: z.string(),
          details: z.array(z.string()),
          note: z.string(),
        })
        .optional(),
      video: z
        .object({
          title: z.string(),
          subTitle: z.string(),
          videoId: z.string(),
        })
        .optional(),
    }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      contents: z.array(
        z.object({
          title: z.string().optional(),
          paragraph: z.string(),
        }),
      ),
      author: z.string(),
      role: z.string().optional(),
      authorImage: image(),
      authorImageAlt: z.string(),
      pubDate: z.date(),
      cardImage: image(),
      cardImageAlt: z.string(),
      readTime: z.number(),
      tags: z.array(z.string()).optional(),
    }),
});

// const insightsCollection = defineCollection({
//   loader: glob({
//     pattern: "**/[^_]*.{md,mdx}",
//     base: "./src/content/insights",
//   }),
//   schema: ({ image }) =>
//     z.object({
//       title: z.string(),
//       description: z.string(),
//       // contents: z.array(z.string()),
//       cardImage: image(),
//       cardImageAlt: z.string(),
//     }),
// });

const pilotTrainingCollection = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/pilot-training",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      siteDescription: z.string(),
      main: z.object({
        id: z.number(),
        content: z.string(),
        imgCard: image(),
        imgMain: image(),
        imgAlt: z.string(),
      }),
      location: z.object({
        city: z.string(),
        stateShort: z.string(),
        stateLong: z.string(),
        description: z.string(),
        baseLocation: z.string(),
        keyPlace1: z.string(),
        keyPlace2: z.string(),
        headerImages: z.array(z.string()),
        headlines: z.array(z.string()),
      }),
    }),
});

export const collections = {
  docs: defineCollection({ schema: docsSchema() }),
  trainingPrograms: trainingProgramsCollection,
  blog: blogCollection,
  // insights: insightsCollection,
  pilotTraining: pilotTrainingCollection,
};
