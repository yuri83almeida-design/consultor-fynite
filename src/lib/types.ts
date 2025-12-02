// FYNITE - Type Definitions

export type FinancialProfile = "conservador" | "equilibrado" | "arrojado" | "impulsivo";

export interface UserData {
  income: number;
  profile: FinancialProfile;
  quizAnswers: number[];
}

export interface Subscription {
  name: string;
  current: number;
  optimized: number;
  savings: number;
  action: string;
  category: string;
}

export interface BenchmarkItem {
  item: string;
  yourPrice: number;
  avgPrice: number;
  status: "acima" | "média" | "abaixo";
  region: string;
}

export interface IncomeOpportunity {
  title: string;
  potential: string;
  match: number;
  time: string;
  category: string;
  difficulty: "fácil" | "médio" | "difícil";
}

export interface FinancialGoal {
  id: string;
  goal: string;
  target: number;
  current: number;
  monthly: number;
  months: number;
  priority: "alta" | "média" | "baixa";
}

export interface BehavioralInsight {
  type: "warning" | "success" | "info";
  title: string;
  description: string;
  actionable: boolean;
}

export interface OptimizationReport {
  monthlySavings: number;
  annualSavings: number;
  subscriptionsDetected: number;
  subscriptionsOptimizable: number;
  topRecommendations: string[];
}

export interface SpendingTrigger {
  timeRange: string;
  category: string;
  averageAmount: number;
  frequency: number;
  riskLevel: "baixo" | "médio" | "alto";
}
