export type FilterCategory = 'todos' | 'video' | 'branding' | 'social'

export interface Project {
  id: number
  title: string
  subtitle: string
  category: Exclude<FilterCategory, 'todos'>
  tag: string
  year: string
  aspect: 'landscape' | 'portrait' | 'square'
}

export interface Service {
  number: string
  title: string
  description: string
}

export interface Client {
  name: string
  sector: string
}

export const services: Service[] = [
  {
    number: '01',
    title: 'Produção Audiovisual',
    description:
      'Da pauta ao corte final — vídeos institucionais, reels, clipes e conteúdo para marcas que precisam comunicar com intenção.',
  },
  {
    number: '02',
    title: 'Estratégia de Conteúdo',
    description:
      'Planejamento editorial com foco em resultado: calendário, análise de métricas e posicionamento de marca para crescimento consistente.',
  },
  {
    number: '03',
    title: 'Identidade Visual',
    description:
      'Conceito, paleta, tipografia e aplicações. Identidade que traduz quem você é antes de você precisar explicar.',
  },
  {
    number: '04',
    title: 'Gestão de Redes Sociais',
    description:
      'Presença consistente, conteúdo relevante e audiência engajada — cuidado de ponta a ponta com olhar estratégico.',
  },
]

export const projects: Project[] = [
  {
    id: 1,
    title: 'Campanha Verão 2024',
    subtitle: 'Vídeo Institucional',
    category: 'video',
    tag: 'Vídeo',
    year: '2024',
    aspect: 'landscape',
  },
  {
    id: 2,
    title: 'Identidade Café Bruma',
    subtitle: 'Branding Completo',
    category: 'branding',
    tag: 'Branding',
    year: '2024',
    aspect: 'portrait',
  },
  {
    id: 3,
    title: 'Lançamento Digital',
    subtitle: 'Estratégia de Conteúdo',
    category: 'social',
    tag: 'Social Media',
    year: '2023',
    aspect: 'square',
  },
  {
    id: 4,
    title: 'Reels Institucionais',
    subtitle: 'Série de Vídeos',
    category: 'video',
    tag: 'Vídeo',
    year: '2024',
    aspect: 'portrait',
  },
  {
    id: 5,
    title: 'Branding Ateliê Forma',
    subtitle: 'Identidade Visual',
    category: 'branding',
    tag: 'Branding',
    year: '2023',
    aspect: 'landscape',
  },
  {
    id: 6,
    title: 'Calendário Editorial',
    subtitle: 'Gestão de Redes',
    category: 'social',
    tag: 'Social Media',
    year: '2024',
    aspect: 'square',
  },
]

export const clients: Client[] = [
  { name: 'Studio Luma', sector: 'Beleza' },
  { name: 'Café Bruma', sector: 'Gastronomia' },
  { name: 'Ateliê Forma', sector: 'Moda' },
  { name: 'Grupo Iluminar', sector: 'Tecnologia' },
  { name: 'Studio K', sector: 'Arquitetura' },
  { name: "Marca D'água", sector: 'Design' },
  { name: 'Bem + Saúde', sector: 'Saúde' },
  { name: 'Coletivo Branco', sector: 'Arte' },
]

export const skills: string[] = [
  'Produção de Vídeo',
  'Edição',
  'Fotografia',
  'Copywriting',
  'Branding',
  'Instagram',
  'TikTok',
  'YouTube',
  'Reels',
  'Motion',
  'Direção de Arte',
]
