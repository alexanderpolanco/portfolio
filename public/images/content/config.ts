import { z, defineCollection } from "astro:content";

const experiences = defineCollection({
  type: "data",
  schema: z.object({
    estado: z.boolean(),
    cargo: z.string(),
    empresa: z.string(),
    fecha: z.string(),
    descripcion: z.string(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    orden: z.number(),
    titulo: z.string(),
    imagen: z.string(),
    resumen: z.string(),
    metaDescripcion: z.string(),
    linkCode: z.string().url(),
    linkPreview: z.string().url(),
  }),
});

const certifications = defineCollection({
  type: "data",
  schema: z.object({
    orden: z.number(),
    titulo: z.string(),
    logo: z.string(),
    empresa: z.string(),
    expedicion: z.string(),
    ID: z.string(),
    linkCertificate: z.string().url(),
  }),
});

export const collections = {
  experiences,
  projects,
  certifications,
};
