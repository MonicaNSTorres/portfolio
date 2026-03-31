import {
  BarChart3,
  Briefcase,
  Database,
  Layers3,
  MonitorSmartphone,
  Server,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type HighlightItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type ProjectItem = {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  stack: string[];
  features: string[];
  image?: string;
  gallery?: string[];
  link: string;
  github: string;
  featured?: boolean;
  seoDescription: string;
};

export type TechGroup = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

export const highlights: HighlightItem[] = [
  {
    icon: Layers3,
    title: "Sistemas corporativos",
    description:
      "Desenvolvimento de plataformas internas robustas com foco em produtividade, escalabilidade e organização de processos.",
  },
  {
    icon: BarChart3,
    title: "Dashboards analíticos",
    description:
      "Criação de painéis, indicadores e experiências orientadas a dados para apoiar decisões estratégicas.",
  },
  {
    icon: Workflow,
    title: "Automação de processos",
    description:
      "Soluções que reduzem trabalho manual, conectam sistemas e melhoram o fluxo operacional das equipes.",
  },
  {
    icon: Server,
    title: "APIs e integrações",
    description:
      "Construção de APIs, integrações entre sistemas e arquitetura full stack para aplicações reais de negócio.",
  },
];

export const projects: ProjectItem[] = [
  {
    slug: "insight-ai",
    title: "InsightAI",
    category: "SaaS • Data & Analytics",
    shortDescription:
      "SaaS que transforma planilhas em dashboards e insights automáticos com experiência moderna e foco em tomada de decisão.",
    description:
      "O InsightAI é uma plataforma SaaS criada para transformar arquivos CSV e Excel em dashboards visuais, indicadores automáticos e respostas em linguagem natural. A proposta é reduzir a dependência de análises manuais e permitir que qualquer usuário explore dados com facilidade.",
    problem:
      "Muitas empresas possuem dados espalhados em planilhas, mas não conseguem extrair respostas rápidas sem depender de SQL, BI tradicional ou times técnicos.",
    solution:
      "Desenvolvi uma plataforma com upload de datasets, geração de análises automáticas, experiência premium e estrutura pronta para evolução como produto SaaS.",
    impact:
      "O projeto demonstra capacidade de construir produto digital com posicionamento de mercado, visual forte, arquitetura moderna e foco real em valor de negócio.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "OpenAI"],
    features: [
      "Upload de CSV e Excel",
      "Análise automática de datasets",
      "Dashboards com foco em leitura rápida",
      "Experiência visual premium",
      "Base para chat com dados",
    ],
    image: "/insightai.png",
    gallery: [
      "/insightai.png",
      "/intranet.png",
      "/insightai.png",
      "/insightai.png",
    ],
    link: "#",
    github: "https://github.com/MonicaNSTorres/Insight-AI",
    featured: true,
    seoDescription:
      "Projeto InsightAI: plataforma SaaS criada com Next.js, TypeScript e PostgreSQL para transformar planilhas em dashboards e insights automáticos.",
  },
  {
    slug: "intranet-corporativa",
    title: "Intranet Corporativa",
    category: "Sistema interno • Enterprise",
    shortDescription:
      "Sistema corporativo com autenticação, consultas internas, dashboards e integração com Oracle para apoiar operações e tomada de decisão.",
    description:
      "Projeto interno focado em centralizar consultas, indicadores, fluxos operacionais e dados corporativos em uma única experiência web. A solução foi desenhada para melhorar a produtividade e dar acesso rápido a informações essenciais do dia a dia.",
    problem:
      "Processos internos dispersos, dificuldade de acesso a informações e dependência de consultas manuais reduzem a eficiência operacional.",
    solution:
      "Estruturei uma intranet moderna com frontend em Next.js, backend em Node.js/Express, autenticação corporativa e integração com banco Oracle para exibir dados e indicadores com usabilidade superior.",
    impact:
      "O projeto reforça experiência com sistemas enterprise, arquitetura full stack, consumo de dados corporativos e construção de interfaces que melhoram a rotina operacional.",
    stack: ["Next.js", "React", "Node.js", "Express", "Oracle", "SQL", "Tailwind CSS"],
    features: [
      "Autenticação corporativa",
      "Dashboards operacionais",
      "Consultas internas e filtros",
      "Integração com Oracle Database",
      "Arquitetura frontend + backend",
    ],
    image: "/intranet.png",
    gallery: [
      "/insightai.png",
      "/intranet.png",
      "/insightai.png",
      "/insightai.png",
    ],
    link: "#",
    github: "https://github.com/MonicaNSTorres/Intranet-Cressem",
    featured: true,
    seoDescription:
      "Projeto de intranet corporativa com Next.js, Node.js, Express e Oracle, voltado para dashboards, consultas internas e produtividade operacional.",
  },
  {
    slug: "site-dra-tauana",
    title: "Site Médico • Dra. Tauana Brógio Leão",
    category: "Website • Healthcare",
    shortDescription:
      "Website institucional desenvolvido para uma endocrinologista com foco em conversão de pacientes, presença digital e posicionamento profissional.",
    description:
      "Projeto de website profissional desenvolvido para a endocrinologista Dra. Tauana Brógio Leão. O objetivo foi criar uma presença digital moderna, elegante e confiável para atrair novos pacientes, apresentar especialidades médicas e facilitar o contato direto via WhatsApp.",
    problem:
      "Profissionais da saúde muitas vezes dependem apenas de redes sociais ou perfis em plataformas médicas, o que limita sua presença digital, autoridade profissional e capacidade de atrair novos pacientes de forma orgânica.",
    solution:
      "Desenvolvi um site moderno, responsivo e otimizado para SEO utilizando Next.js e Tailwind CSS. A estrutura foi pensada para destacar especialidades, transmitir confiança ao paciente e facilitar o agendamento de consultas.",
    impact:
      "O resultado foi um website leve, elegante e otimizado para conversão, fortalecendo a presença digital da médica e aumentando o potencial de captação de novos pacientes.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "SEO",
      "Responsive Design"
    ],
    features: [
      "Design premium focado em experiência do paciente",
      "Layout totalmente responsivo",
      "Estrutura otimizada para SEO",
      "Integração direta com WhatsApp",
      "Páginas de especialidades médicas",
      "Performance otimizada para carregamento rápido"
    ],
    image: "/site-dra-tauana.png",
    gallery: [
      "/site-dra-tauana.png",
      "/site-dra-tauana.png",
      "/site-dra-tauana.png",
      "/site-dra-tauana.png"
    ],
    link: "https://tauana-le-o.vercel.app/",
    github: "#",
    featured: true,
    seoDescription:
      "Website profissional desenvolvido em Next.js para endocrinologista, com foco em SEO, conversão de pacientes e experiência moderna."
  },
  {
    slug: "dashboard-docusign",
    title: "Dashboard DocuSign",
    category: "Integração • Automação",
    shortDescription:
      "Painel para consulta de envelopes, filtros por período, download de PDFs e integração com banco para reaproveitamento de dados.",
    description:
      "Dashboard criado para facilitar a consulta e o gerenciamento de envelopes da DocuSign, com recursos de filtro, download de arquivos, reaproveitamento de dados salvos e visão mais clara do fluxo documental.",
    problem:
      "Consultar documentos e envelopes diretamente em integrações cruas ou chamadas repetidas de API dificulta o controle e consome tempo operacional.",
    solution:
      "Desenvolvi uma interface com filtros, listagem, download de PDFs e integração com banco de dados para armazenar e reutilizar informações, reduzindo dependência de novas chamadas.",
    impact:
      "O projeto mostra domínio de integrações externas, organização de documentos, backend orientado a performance e criação de interfaces úteis para operação real.",
    stack: ["Next.js", "Node.js", "Oracle", "DocuSign API", "JSZip", "Tailwind CSS"],
    features: [
      "Consulta de envelopes com filtros",
      "Download de PDF e ZIP",
      "Integração com banco de dados",
      "Reaproveitamento de dados internos",
      "Melhoria do fluxo operacional",
    ],
    image: "/docusign.png",
    link: "#",
    github: "#",
    seoDescription:
      "Dashboard DocuSign com Next.js, Node.js e Oracle para consulta de envelopes, filtros, download de documentos e automação operacional.",
  },
  {
    slug: "sistema-pmoc",
    title: "Sistema PMOC",
    category: "SaaS Operacional • Gestão de Manutenção",
    shortDescription:
      "Plataforma para gestão de PMOC, controle de ambientes e equipamentos com geração automática de relatórios.",

    description:
      "Sistema completo desenvolvido para empresas de climatização realizarem a gestão do PMOC (Plano de Manutenção, Operação e Controle) de forma digital. A plataforma centraliza ambientes, equipamentos, TAGs, checklists técnicos e gera automaticamente documentos e relatórios em PDF, reduzindo processos manuais e melhorando o controle operacional das manutenções.",

    problem:
      "Empresas de manutenção de ar condicionado frequentemente utilizam planilhas e documentos manuais para controlar PMOCs, checklists e relatórios técnicos. Esse processo descentralizado gera retrabalho, inconsistências em documentos e dificuldade para rastrear histórico de manutenção.",

    solution:
      "Desenvolvi uma aplicação web que digitaliza todo o fluxo operacional do PMOC. O sistema permite cadastrar ambientes, equipamentos e TAGs, preencher formulários técnicos padronizados e gerar automaticamente relatórios em PDF prontos para auditorias e conformidade com normas técnicas.",

    impact:
      "A solução reduz significativamente o tempo gasto na geração de documentos técnicos, melhora a organização das manutenções e cria um histórico estruturado de intervenções, permitindo maior controle operacional e rastreabilidade das atividades realizadas.",

    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "jsPDF"
    ],

    features: [
      "Gestão de ambientes e unidades atendidas",
      "Cadastro e organização de equipamentos por TAG",
      "Formulários técnicos para manutenção PMOC",
      "Checklists operacionais padronizados",
      "Geração automática de relatórios em PDF",
      "Histórico de manutenção por equipamento",
      "Interface web responsiva e otimizada",
      "Estrutura preparada para expansão como SaaS"
    ],

    image: "/pmoc.png",
    link: "#",
    github: "https://github.com/MonicaNSTorres/pmoc",

    seoDescription:
      "Sistema PMOC desenvolvido com Next.js, TypeScript e PostgreSQL para gestão de manutenção de ar condicionado, geração automática de relatórios técnicos e organização operacional."
  }
];

export const techGroups: TechGroup[] = [
  {
    title: "Frontend",
    icon: MonitorSmartphone,
    items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Briefcase,
    items: ["Node.js", "Express", "APIs REST", "PHP", "Laravel", "Python"],
  },
  {
    title: "Dados",
    icon: Database,
    items: ["Oracle", "PostgreSQL", "MySQL", "MongoDB", "SQL", "PL/SQL"],
  },
  {
    title: "Infraestrutura",
    icon: Server,
    items: ["Docker", "NGINX", "PM2", "Linux", "Vercel", "AWS", "Azure"],
  },
];

export const services = [
  "Sistemas web sob medida",
  "Dashboards e painéis analíticos",
  "APIs REST e integrações entre sistemas",
  "Automação de processos empresariais",
  "Portais e plataformas corporativas",
  "Modernização de sistemas existentes",
];