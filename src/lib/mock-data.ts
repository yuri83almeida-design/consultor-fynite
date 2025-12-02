// FYNITE - Mock Data for MVP

import {
  Subscription,
  BenchmarkItem,
  IncomeOpportunity,
  FinancialGoal,
} from "./types";

/**
 * Mock data para assinaturas detectadas
 */
export const mockSubscriptions: Subscription[] = [
  {
    name: "Netflix Premium",
    current: 55.9,
    optimized: 39.9,
    savings: 16.0,
    action: "Downgrade para Plano Padrão",
    category: "Entretenimento",
  },
  {
    name: "Spotify Premium",
    current: 21.9,
    optimized: 13.9,
    savings: 8.0,
    action: "Plano Família compartilhado (6 pessoas)",
    category: "Música",
  },
  {
    name: "Amazon Prime",
    current: 14.9,
    optimized: 14.9,
    savings: 0,
    action: "Mantém - excelente custo/benefício",
    category: "Múltiplos",
  },
  {
    name: "YouTube Premium",
    current: 20.9,
    optimized: 13.9,
    savings: 7.0,
    action: "Plano Família compartilhado",
    category: "Entretenimento",
  },
  {
    name: "iCloud Storage 200GB",
    current: 12.9,
    optimized: 6.9,
    savings: 6.0,
    action: "Downgrade para 50GB",
    category: "Armazenamento",
  },
  {
    name: "Adobe Creative Cloud",
    current: 85.0,
    optimized: 85.0,
    savings: 0,
    action: "Mantém - essencial para trabalho",
    category: "Produtividade",
  },
  {
    name: "Dropbox Plus",
    current: 24.9,
    optimized: 0,
    savings: 24.9,
    action: "Cancelar - use Google Drive gratuito",
    category: "Armazenamento",
  },
  {
    name: "LinkedIn Premium",
    current: 149.9,
    optimized: 0,
    savings: 149.9,
    action: "Cancelar - baixo uso nos últimos 3 meses",
    category: "Profissional",
  },
];

/**
 * Mock data para benchmarking regional
 */
export const mockBenchmarkItems: BenchmarkItem[] = [
  {
    item: "Internet Fibra 500MB",
    yourPrice: 129.9,
    avgPrice: 99.9,
    status: "acima",
    region: "São Paulo - SP",
  },
  {
    item: "Plano de Celular 20GB",
    yourPrice: 79.9,
    avgPrice: 79.9,
    status: "média",
    region: "São Paulo - SP",
  },
  {
    item: "Academia Premium",
    yourPrice: 89.9,
    avgPrice: 120.0,
    status: "abaixo",
    region: "São Paulo - SP",
  },
  {
    item: "Seguro Auto Completo",
    yourPrice: 189.9,
    avgPrice: 210.0,
    status: "abaixo",
    region: "São Paulo - SP",
  },
  {
    item: "Plano de Saúde Individual",
    yourPrice: 450.0,
    avgPrice: 420.0,
    status: "acima",
    region: "São Paulo - SP",
  },
];

/**
 * Mock data para oportunidades de renda extra
 */
export const mockIncomeOpportunities: IncomeOpportunity[] = [
  {
    title: "Freelance em Design Gráfico",
    potential: "R$ 800 - 2.000/mês",
    match: 85,
    time: "10-15h/semana",
    category: "Design",
    difficulty: "médio",
  },
  {
    title: "Consultoria Online",
    potential: "R$ 1.500 - 3.000/mês",
    match: 78,
    time: "8-12h/semana",
    category: "Consultoria",
    difficulty: "médio",
  },
  {
    title: "Venda de Infoprodutos",
    potential: "R$ 500 - 1.500/mês",
    match: 72,
    time: "5-10h/semana",
    category: "Digital",
    difficulty: "médio",
  },
  {
    title: "Aulas Particulares Online",
    potential: "R$ 600 - 1.800/mês",
    match: 68,
    time: "6-10h/semana",
    category: "Educação",
    difficulty: "fácil",
  },
  {
    title: "Desenvolvimento Web Freelance",
    potential: "R$ 2.000 - 5.000/mês",
    match: 65,
    time: "15-20h/semana",
    category: "Tecnologia",
    difficulty: "difícil",
  },
];

/**
 * Mock data para metas financeiras
 */
export const mockFinancialGoals: FinancialGoal[] = [
  {
    id: "1",
    goal: "Fundo de Emergência",
    target: 18000,
    current: 5400,
    monthly: 450,
    months: 28,
    priority: "alta",
  },
  {
    id: "2",
    goal: "Viagem Internacional",
    target: 12000,
    current: 2400,
    monthly: 400,
    months: 24,
    priority: "média",
  },
  {
    id: "3",
    goal: "Entrada de Apartamento",
    target: 50000,
    current: 8000,
    monthly: 700,
    months: 60,
    priority: "alta",
  },
  {
    id: "4",
    goal: "Carro Novo",
    target: 35000,
    current: 12000,
    monthly: 800,
    months: 29,
    priority: "média",
  },
  {
    id: "5",
    goal: "Curso de Especialização",
    target: 8000,
    current: 3200,
    monthly: 400,
    months: 12,
    priority: "alta",
  },
];

/**
 * Perguntas do quiz de DNA Financeiro
 */
export const financialDNAQuestions = [
  {
    question: "Como você reage quando vê uma promoção irresistível?",
    options: [
      "Ignoro completamente",
      "Analiso se realmente preciso",
      "Considero seriamente",
      "Compro imediatamente",
    ],
  },
  {
    question: "Com que frequência você verifica suas finanças?",
    options: ["Diariamente", "Semanalmente", "Mensalmente", "Raramente"],
  },
  {
    question: "Você tem um fundo de emergência?",
    options: [
      "Sim, 6+ meses de despesas",
      "Sim, 3-6 meses",
      "Menos de 3 meses",
      "Não tenho",
    ],
  },
  {
    question: "Como você lida com dívidas?",
    options: [
      "Evito sempre que possível",
      "Pago rapidamente",
      "Gerencio parcelas",
      "Acumulo facilmente",
    ],
  },
  {
    question: "Qual seu objetivo financeiro principal?",
    options: [
      "Segurança total",
      "Crescimento estável",
      "Ganhos rápidos",
      "Viver o presente",
    ],
  },
];

/**
 * Descrições dos perfis financeiros
 */
export const profileDescriptions = {
  conservador: {
    title: "Conservador",
    description: "Você prioriza segurança e estabilidade financeira acima de tudo",
    characteristics: [
      "Evita riscos desnecessários",
      "Mantém fundo de emergência robusto",
      "Prefere investimentos de baixo risco",
      "Planeja com antecedência",
    ],
    recommendations: [
      "Continue mantendo seu fundo de emergência",
      "Considere diversificar um pouco mais",
      "Explore oportunidades de renda passiva segura",
    ],
  },
  equilibrado: {
    title: "Equilibrado",
    description: "Você busca um balanço saudável entre segurança e crescimento",
    characteristics: [
      "Toma decisões ponderadas",
      "Diversifica investimentos",
      "Mantém equilíbrio entre poupar e aproveitar",
      "Revisa metas regularmente",
    ],
    recommendations: [
      "Continue com sua abordagem balanceada",
      "Automatize seus aportes mensais",
      "Revise seu portfólio trimestralmente",
    ],
  },
  arrojado: {
    title: "Arrojado",
    description: "Você busca crescimento acelerado com riscos calculados",
    characteristics: [
      "Aceita riscos maiores por retornos maiores",
      "Busca ativamente oportunidades",
      "Investe em crescimento pessoal",
      "Pensa em longo prazo",
    ],
    recommendations: [
      "Mantenha um fundo de emergência mesmo sendo arrojado",
      "Diversifique para mitigar riscos",
      "Considere oportunidades de renda extra",
    ],
  },
  impulsivo: {
    title: "Impulsivo",
    description: "Você tende a gastar por emoção - vamos trabalhar nisso juntos!",
    characteristics: [
      "Compras por impulso frequentes",
      "Dificuldade em manter orçamento",
      "Gastos emocionais",
      "Falta de planejamento financeiro",
    ],
    recommendations: [
      "Ative alertas de gastos em horários de risco",
      "Use a regra das 24 horas antes de comprar",
      "Estabeleça limites diários de gastos",
      "Considere o método de envelope",
    ],
  },
};
