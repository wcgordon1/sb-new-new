import { defineCollection, z } from "astro:content";

const team = defineCollection({
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      intro: z.string(),
      education: z.array(z.string()),
      experience: z.array(z.string()),
      socials: z
        .array(
          z.object({
            platform: z.string(),
            url: z.string(),
          })
        )
        .optional(),
      avatar: z.object({
        url: image(),
        alt: z.string(),
      }),
    }),
});

const services = defineCollection({
  schema: ({ image }) =>
    z.object({
      service: z.string(),
      description: z.string(),
      allServices: z
        .array(
          z.object({
            service: z.string(),
            description: z.string(),
          })
        )
        .optional(),
      testimonial: z
        .object({
          text: z.string(),
          image: image(),
        })
        .optional(),
    }),
});

const work = defineCollection({
  schema: ({ image }) =>
    z.object({
      work: z.string(),
      live: z.string(),
      title: z.string(),
      description: z.string(),
      intro: z
        .array(
          z.object({
            paragraphs: z.array(z.string()).optional(),
          })
        )
        .optional(),
      outro: z
        .array(
          z.object({
            paragraphs: z.array(z.string()).optional(),
          })
        )
        .optional(),
      projectData: z
        .array(
          z.object({
            client: z.string(),
            service: z.string(),
            sector: z.string(),
            year: z.string(),
          })
        )
        .optional(),
      credits: z
        .array(
          z.object({
            name: z.string(),
            role: z.string(),
          })
        )
        .optional(),
      images: z.array(
        z.object({
          url: image(),
          alt: z.string(),
        })
      ),
      thumbnail: z.object({
        url: image(),
        alt: z.string(),
      }),
    }),
});

const legal = defineCollection({
  schema: z.object({
    page: z.string(),
    pubDate: z.date(),
  }),
});

const posts = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: image(),
        alt: z.string(),
      }),
      tags: z.array(z.string()),
    }),
});

export const collections = {
  team,
  services,
  work,
  legal,
  posts,
};
