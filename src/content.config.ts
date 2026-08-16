import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const fieldNotes = defineCollection({
  loader: glob({ base: "./src/content/field-notes", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    category: z.enum([
      "Learning and understanding",
      "Multilingual education",
      "Learner confidence",
      "Examination preparation",
      "Practical education",
      "Educational systems",
      "Community learning",
      "Responsible AI",
      "Knowledge organisation",
      "Academy development",
      "Human progress",
    ]),
    readingMinutes: z.number().int().positive(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { fieldNotes };
