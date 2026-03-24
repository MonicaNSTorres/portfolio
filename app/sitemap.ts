import { projects } from "@/lib/portfolio-data";

export default function sitemap() {
  const projectRoutes = projects.map((project) => ({
    url: `https://seudominio.com/projetos/${project.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: "https://seudominio.com",
      lastModified: new Date(),
    },
    {
      url: "https://seudominio.com/projetos",
      lastModified: new Date(),
    },
    ...projectRoutes,
  ];
}