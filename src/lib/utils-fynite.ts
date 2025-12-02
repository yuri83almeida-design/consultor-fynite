// FYNITE - Utility Functions

import { FinancialProfile } from "./types";

/**
 * Calcula a economia potencial baseada na renda mensal
 */
export function calculatePotentialSavings(income: number): {
  monthly: number;
  annual: number;
  percentage: number;
} {
  const percentage = 0.23; // 23% de economia média
  const monthly = income * percentage;
  const annual = monthly * 12;

  return {
    monthly,
    annual,
    percentage: percentage * 100,
  };
}

/**
 * Determina o perfil financeiro baseado nas respostas do quiz
 */
export function determineFinancialProfile(answers: number[]): FinancialProfile {
  if (answers.length !== 5) {
    throw new Error("Quiz incompleto: são necessárias 5 respostas");
  }

  const average = answers.reduce((a, b) => a + b, 0) / answers.length;

  if (average <= 1.5) return "conservador";
  if (average <= 2.5) return "equilibrado";
  if (average <= 3.5) return "arrojado";
  return "impulsivo";
}

/**
 * Formata valores monetários para BRL
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

/**
 * Calcula o tempo necessário para atingir uma meta financeira
 */
export function calculateGoalTimeframe(
  target: number,
  current: number,
  monthlyContribution: number
): number {
  if (monthlyContribution <= 0) return Infinity;
  const remaining = target - current;
  return Math.ceil(remaining / monthlyContribution);
}

/**
 * Calcula o progresso percentual de uma meta
 */
export function calculateProgress(current: number, target: number): number {
  if (target <= 0) return 0;
  return Math.min((current / target) * 100, 100);
}

/**
 * Gera recomendações personalizadas baseadas no perfil
 */
export function getProfileRecommendations(profile: FinancialProfile): string[] {
  const recommendations: Record<FinancialProfile, string[]> = {
    conservador: [
      "Mantenha seu fundo de emergência em 6+ meses de despesas",
      "Considere investimentos de renda fixa com baixo risco",
      "Revise suas assinaturas mensalmente para evitar gastos desnecessários",
    ],
    equilibrado: [
      "Diversifique seus investimentos entre renda fixa e variável",
      "Estabeleça metas de curto e longo prazo",
      "Automatize seus aportes mensais para manter disciplina",
    ],
    arrojado: [
      "Explore oportunidades de renda extra alinhadas ao seu perfil",
      "Considere investimentos de maior retorno com gestão de risco",
      "Mantenha um fundo de emergência mesmo com perfil arrojado",
    ],
    impulsivo: [
      "Ative alertas de gastos em horários de maior risco",
      "Estabeleça limites diários de gastos não essenciais",
      "Considere usar o método de envelope para controle de gastos",
    ],
  };

  return recommendations[profile];
}

/**
 * Calcula a economia anual de otimização de assinaturas
 */
export function calculateSubscriptionSavings(
  subscriptions: Array<{ current: number; optimized: number }>
): number {
  const monthlySavings = subscriptions.reduce(
    (total, sub) => total + (sub.current - sub.optimized),
    0
  );
  return monthlySavings * 12;
}

/**
 * Determina o status de comparação de preço
 */
export function determinePriceStatus(
  yourPrice: number,
  avgPrice: number
): "acima" | "média" | "abaixo" {
  const difference = yourPrice - avgPrice;
  const percentageDiff = (difference / avgPrice) * 100;

  if (percentageDiff > 5) return "acima";
  if (percentageDiff < -5) return "abaixo";
  return "média";
}

/**
 * Gera insights comportamentais baseados no perfil
 */
export function generateBehavioralInsights(profile: FinancialProfile): Array<{
  type: "warning" | "success" | "info";
  title: string;
  description: string;
}> {
  const insights: Record<
    FinancialProfile,
    Array<{ type: "warning" | "success" | "info"; title: string; description: string }>
  > = {
    conservador: [
      {
        type: "success",
        title: "Ponto Forte",
        description: "Você mantém excelente controle sobre seus gastos fixos.",
      },
      {
        type: "info",
        title: "Oportunidade",
        description: "Considere diversificar um pouco mais seus investimentos.",
      },
    ],
    equilibrado: [
      {
        type: "success",
        title: "Ponto Forte",
        description: "Você tem um bom balanço entre economia e qualidade de vida.",
      },
      {
        type: "info",
        title: "Dica",
        description: "Continue monitorando suas metas mensalmente.",
      },
    ],
    arrojado: [
      {
        type: "warning",
        title: "Atenção",
        description: "Certifique-se de manter um fundo de emergência adequado.",
      },
      {
        type: "success",
        title: "Ponto Forte",
        description: "Você busca ativamente oportunidades de crescimento financeiro.",
      },
    ],
    impulsivo: [
      {
        type: "warning",
        title: "Horário de Risco",
        description: "Você tende a gastar mais entre 20h-22h. Ative alertas nesse período.",
      },
      {
        type: "info",
        title: "Estratégia",
        description: "Considere usar a regra das 24 horas antes de compras não planejadas.",
      },
    ],
  };

  return insights[profile];
}
