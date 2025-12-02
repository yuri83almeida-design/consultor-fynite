"use client";

import { useState } from "react";
import { ArrowRight, TrendingUp, Target, Zap, Brain, DollarSign, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type FinancialProfile = "conservador" | "equilibrado" | "arrojado" | "impulsivo" | null;

export default function Home() {
  const [step, setStep] = useState<"welcome" | "income" | "profile" | "dashboard">("welcome");
  const [income, setIncome] = useState("");
  const [profile, setProfile] = useState<FinancialProfile>(null);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);

  const handleIncomeSubmit = () => {
    if (income && parseFloat(income) > 0) {
      setStep("profile");
    }
  };

  const handleQuizAnswer = (questionIndex: number, answer: number) => {
    const newAnswers = [...quizAnswers];
    newAnswers[questionIndex] = answer;
    setQuizAnswers(newAnswers);

    if (newAnswers.length === 5 && newAnswers.every(a => a !== undefined)) {
      const avg = newAnswers.reduce((a, b) => a + b, 0) / newAnswers.length;
      if (avg <= 1.5) setProfile("conservador");
      else if (avg <= 2.5) setProfile("equilibrado");
      else if (avg <= 3.5) setProfile("arrojado");
      else setProfile("impulsivo");
      
      setTimeout(() => setStep("dashboard"), 1000);
    }
  };

  const quizQuestions = [
    {
      question: "Como você reage quando vê uma promoção irresistível?",
      options: ["Ignoro completamente", "Analiso se preciso", "Considero seriamente", "Compro imediatamente"]
    },
    {
      question: "Com que frequência você verifica suas finanças?",
      options: ["Diariamente", "Semanalmente", "Mensalmente", "Raramente"]
    },
    {
      question: "Você tem um fundo de emergência?",
      options: ["Sim, 6+ meses", "Sim, 3-6 meses", "Menos de 3 meses", "Não tenho"]
    },
    {
      question: "Como você lida com dívidas?",
      options: ["Evito sempre", "Pago rapidamente", "Gerencio parcelas", "Acumulo facilmente"]
    },
    {
      question: "Qual seu objetivo financeiro principal?",
      options: ["Segurança total", "Crescimento estável", "Ganhos rápidos", "Viver o presente"]
    }
  ];

  const profileData = {
    conservador: {
      title: "Conservador",
      description: "Você prioriza segurança e estabilidade financeira",
      color: "from-blue-500 to-cyan-500",
      icon: Shield
    },
    equilibrado: {
      title: "Equilibrado",
      description: "Você busca um balanço entre segurança e crescimento",
      color: "from-green-500 to-emerald-500",
      icon: Target
    },
    arrojado: {
      title: "Arrojado",
      description: "Você busca crescimento acelerado com riscos calculados",
      color: "from-orange-500 to-red-500",
      icon: TrendingUp
    },
    impulsivo: {
      title: "Impulsivo",
      description: "Você tende a gastar por emoção - vamos trabalhar nisso!",
      color: "from-purple-500 to-pink-500",
      icon: Zap
    }
  };

  const monthlyIncome = parseFloat(income) || 0;
  const potentialSavings = monthlyIncome * 0.23; // 23% de economia média
  const annualSavings = potentialSavings * 12;

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      {/* Welcome Screen */}
      {step === "welcome" && (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 md:p-8">
          <div className="max-w-4xl w-full space-y-8 sm:space-y-12">
            {/* Logo & Header */}
            <div className="text-center space-y-4 sm:space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#00FF00] to-emerald-500 mb-4 sm:mb-6">
                <Brain className="w-8 h-8 sm:w-10 sm:h-10 text-[#0D0D0D]" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  FYNITE
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
                Seu Consultor Financeiro Preditivo
              </p>
              <div className="flex items-center justify-center gap-2 text-[#00FF00] text-sm sm:text-base">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Powered by AI</span>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                { icon: Brain, title: "IA Preditiva", desc: "Antecipe gastos e otimize sua renda" },
                { icon: Target, title: "Metas Inteligentes", desc: "Simulações precisas para seus objetivos" },
                { icon: TrendingUp, title: "Otimização Proativa", desc: "Economize até 23% ao mês" },
                { icon: Zap, title: "Alertas Comportamentais", desc: "Identifique gatilhos de gastos" },
                { icon: DollarSign, title: "Renda Extra", desc: "Sugestões personalizadas de ganhos" },
                { icon: Shield, title: "Benchmarking", desc: "Compare preços regionalmente" }
              ].map((feature, idx) => (
                <Card key={idx} className="bg-white/5 border-white/10 p-4 sm:p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#00FF00] mb-3 sm:mb-4" />
                  <h3 className="text-base sm:text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-400">{feature.desc}</p>
                </Card>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center space-y-4 sm:space-y-6">
              <Button
                onClick={() => setStep("income")}
                size="lg"
                className="bg-[#00FF00] text-[#0D0D0D] hover:bg-[#00FF00]/90 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-xl font-semibold shadow-lg shadow-[#00FF00]/20 hover:shadow-[#00FF00]/40 transition-all duration-300 hover:scale-105"
              >
                Começar Análise Gratuita
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-xs sm:text-sm text-gray-500">
                Sem cartão de crédito • Análise completa em 3 minutos
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Income Input Screen */}
      {step === "income" && (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 md:p-8">
          <div className="max-w-2xl w-full space-y-6 sm:space-y-8">
            <div className="text-center space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Qual sua renda mensal?</h2>
              <p className="text-sm sm:text-base text-gray-400">
                Vamos calcular seu potencial de economia e otimização
              </p>
            </div>

            <Card className="bg-white/5 border-white/10 p-6 sm:p-8 space-y-6">
              <div className="space-y-3 sm:space-y-4">
                <Label htmlFor="income" className="text-base sm:text-lg">Renda Mensal (R$)</Label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl sm:text-2xl text-gray-400">R$</span>
                  <Input
                    id="income"
                    type="number"
                    placeholder="5.000"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                    className="bg-white/5 border-white/20 text-white text-xl sm:text-2xl pl-12 sm:pl-14 pr-4 py-5 sm:py-6 rounded-xl focus:border-[#00FF00] focus:ring-[#00FF00]"
                  />
                </div>
              </div>

              {income && parseFloat(income) > 0 && (
                <div className="space-y-3 sm:space-y-4 p-4 sm:p-6 bg-[#00FF00]/10 border border-[#00FF00]/20 rounded-xl">
                  <div className="flex items-center gap-2 text-[#00FF00]">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-xs sm:text-sm font-semibold">Análise Preditiva</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm sm:text-base">
                      <span className="text-gray-300">Economia Mensal Estimada:</span>
                      <span className="text-[#00FF00] font-bold">R$ {potentialSavings.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm sm:text-base">
                      <span className="text-gray-300">Economia Anual:</span>
                      <span className="text-[#00FF00] font-bold">R$ {annualSavings.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              )}

              <Button
                onClick={handleIncomeSubmit}
                disabled={!income || parseFloat(income) <= 0}
                className="w-full bg-[#00FF00] text-[#0D0D0D] hover:bg-[#00FF00]/90 text-base sm:text-lg py-5 sm:py-6 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continuar para Perfil Financeiro
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Card>
          </div>
        </div>
      )}

      {/* Financial DNA Profile Quiz */}
      {step === "profile" && (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 md:p-8">
          <div className="max-w-3xl w-full space-y-6 sm:space-y-8">
            <div className="text-center space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Descubra seu DNA Financeiro</h2>
              <p className="text-sm sm:text-base text-gray-400">
                Responda 5 perguntas rápidas para personalizar sua experiência
              </p>
              <div className="max-w-md mx-auto">
                <Progress value={(quizAnswers.filter(a => a !== undefined).length / 5) * 100} className="h-2 bg-white/10" />
                <p className="text-xs sm:text-sm text-gray-500 mt-2">
                  {quizAnswers.filter(a => a !== undefined).length} de 5 perguntas
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {quizQuestions.map((q, qIdx) => (
                <Card key={qIdx} className="bg-white/5 border-white/10 p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{q.question}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {q.options.map((option, oIdx) => (
                      <Button
                        key={oIdx}
                        onClick={() => handleQuizAnswer(qIdx, oIdx + 1)}
                        variant={quizAnswers[qIdx] === oIdx + 1 ? "default" : "outline"}
                        className={`justify-start text-left h-auto py-3 sm:py-4 px-3 sm:px-4 text-xs sm:text-sm ${
                          quizAnswers[qIdx] === oIdx + 1
                            ? "bg-[#00FF00] text-[#0D0D0D] border-[#00FF00]"
                            : "bg-white/5 border-white/20 text-white hover:bg-white/10"
                        }`}
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            {profile && (
              <Card className="bg-gradient-to-br from-[#00FF00]/20 to-emerald-500/20 border-[#00FF00]/30 p-6 sm:p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#00FF00]/20 mb-4">
                  {profile && React.createElement(profileData[profile].icon, { className: "w-8 h-8 sm:w-10 sm:h-10 text-[#00FF00]" })}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Perfil: {profile && profileData[profile].title}</h3>
                <p className="text-sm sm:text-base text-gray-300">{profile && profileData[profile].description}</p>
              </Card>
            )}
          </div>
        </div>
      )}

      {/* Dashboard */}
      {step === "dashboard" && profile && (
        <div className="min-h-screen p-4 sm:p-6 md:p-8">
          <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Dashboard FYNITE</h1>
                <p className="text-sm sm:text-base text-gray-400">
                  Perfil: <span className="text-[#00FF00] font-semibold">{profileData[profile].title}</span>
                </p>
              </div>
              <Button className="bg-[#00FF00] text-[#0D0D0D] hover:bg-[#00FF00]/90 w-full sm:w-auto">
                Upgrade para Pro
                <Sparkles className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Optimization Report */}
            <Card className="bg-gradient-to-br from-[#00FF00]/10 to-emerald-500/10 border-[#00FF00]/20 p-6 sm:p-8">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#00FF00]/20 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#00FF00]" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-2">Relatório de Otimização Inicial</h2>
                  <p className="text-sm sm:text-base text-gray-400">
                    Baseado na sua renda de R$ {monthlyIncome.toFixed(2)}/mês
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-white/5 rounded-xl p-4 sm:p-6">
                  <p className="text-xs sm:text-sm text-gray-400 mb-1">Economia Mensal Potencial</p>
                  <p className="text-2xl sm:text-3xl font-bold text-[#00FF00]">R$ {potentialSavings.toFixed(2)}</p>
                  <p className="text-xs text-gray-500 mt-1">23% da sua renda</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 sm:p-6">
                  <p className="text-xs sm:text-sm text-gray-400 mb-1">Economia Anual</p>
                  <p className="text-2xl sm:text-3xl font-bold text-[#00FF00]">R$ {annualSavings.toFixed(2)}</p>
                  <p className="text-xs text-gray-500 mt-1">Projeção 12 meses</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 sm:p-6">
                  <p className="text-xs sm:text-sm text-gray-400 mb-1">Assinaturas Detectadas</p>
                  <p className="text-2xl sm:text-3xl font-bold text-white">8</p>
                  <p className="text-xs text-gray-500 mt-1">3 podem ser otimizadas</p>
                </div>
              </div>
            </Card>

            {/* Main Content Tabs */}
            <Tabs defaultValue="subscriptions" className="w-full">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 bg-white/5 p-1 h-auto gap-1">
                <TabsTrigger value="subscriptions" className="data-[state=active]:bg-[#00FF00] data-[state=active]:text-[#0D0D0D] text-xs sm:text-sm py-2">
                  Assinaturas
                </TabsTrigger>
                <TabsTrigger value="benchmarking" className="data-[state=active]:bg-[#00FF00] data-[state=active]:text-[#0D0D0D] text-xs sm:text-sm py-2">
                  Benchmarking
                </TabsTrigger>
                <TabsTrigger value="income" className="data-[state=active]:bg-[#00FF00] data-[state=active]:text-[#0D0D0D] text-xs sm:text-sm py-2">
                  Renda Extra
                </TabsTrigger>
                <TabsTrigger value="goals" className="data-[state=active]:bg-[#00FF00] data-[state=active]:text-[#0D0D0D] text-xs sm:text-sm py-2">
                  Metas
                </TabsTrigger>
              </TabsList>

              {/* Subscriptions Tab */}
              <TabsContent value="subscriptions" className="space-y-4">
                <Card className="bg-white/5 border-white/10 p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">Motor de Predição de Assinaturas</h3>
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      { name: "Netflix Premium", current: 55.90, optimized: 39.90, savings: 16.00, action: "Downgrade para Padrão" },
                      { name: "Spotify Premium", current: 21.90, optimized: 13.90, savings: 8.00, action: "Plano Família compartilhado" },
                      { name: "Amazon Prime", current: 14.90, optimized: 14.90, savings: 0, action: "Mantém - bom custo/benefício" }
                    ].map((sub, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 bg-white/5 rounded-lg gap-3">
                        <div className="flex-1">
                          <p className="font-semibold text-sm sm:text-base">{sub.name}</p>
                          <p className="text-xs sm:text-sm text-gray-400">{sub.action}</p>
                        </div>
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className="text-right">
                            <p className="text-xs text-gray-400">Atual</p>
                            <p className="text-sm sm:text-base font-semibold">R$ {sub.current.toFixed(2)}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-500 flex-shrink-0" />
                          <div className="text-right">
                            <p className="text-xs text-gray-400">Otimizado</p>
                            <p className="text-sm sm:text-base font-semibold text-[#00FF00]">R$ {sub.optimized.toFixed(2)}</p>
                          </div>
                          {sub.savings > 0 && (
                            <div className="bg-[#00FF00]/20 px-2 sm:px-3 py-1 rounded-full">
                              <p className="text-xs sm:text-sm text-[#00FF00] font-semibold">-R$ {sub.savings.toFixed(2)}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-[#00FF00]/10 border border-[#00FF00]/20 rounded-lg">
                    <p className="text-xs sm:text-sm text-gray-300">
                      Economia anual total: <span className="text-[#00FF00] font-bold text-base sm:text-lg">R$ 288,00</span>
                    </p>
                  </div>
                </Card>
              </TabsContent>

              {/* Benchmarking Tab */}
              <TabsContent value="benchmarking" className="space-y-4">
                <Card className="bg-white/5 border-white/10 p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">Comparação Regional de Preços</h3>
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      { item: "Internet 500MB", yourPrice: 129.90, avgPrice: 99.90, status: "acima" },
                      { item: "Plano de Celular", yourPrice: 79.90, avgPrice: 79.90, status: "média" },
                      { item: "Academia", yourPrice: 89.90, avgPrice: 120.00, status: "abaixo" }
                    ].map((item, idx) => (
                      <div key={idx} className="p-3 sm:p-4 bg-white/5 rounded-lg">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                          <p className="font-semibold text-sm sm:text-base">{item.item}</p>
                          <div className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold w-fit ${
                            item.status === "acima" ? "bg-red-500/20 text-red-400" :
                            item.status === "abaixo" ? "bg-[#00FF00]/20 text-[#00FF00]" :
                            "bg-blue-500/20 text-blue-400"
                          }`}>
                            {item.status === "acima" ? "Acima da média" :
                             item.status === "abaixo" ? "Abaixo da média" :
                             "Na média"}
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-xs sm:text-sm">
                          <span className="text-gray-400">Seu preço: R$ {item.yourPrice.toFixed(2)}</span>
                          <span className="text-gray-600">•</span>
                          <span className="text-gray-400">Média regional: R$ {item.avgPrice.toFixed(2)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              {/* Income Tab */}
              <TabsContent value="income" className="space-y-4">
                <Card className="bg-white/5 border-white/10 p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">Oportunidades de Renda Extra</h3>
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      { title: "Freelance em Design", potential: "R$ 800-2.000/mês", match: 85, time: "10-15h/semana" },
                      { title: "Consultoria Online", potential: "R$ 1.500-3.000/mês", match: 78, time: "8-12h/semana" },
                      { title: "Venda de Infoprodutos", potential: "R$ 500-1.500/mês", match: 72, time: "5-10h/semana" }
                    ].map((opp, idx) => (
                      <div key={idx} className="p-3 sm:p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                          <div className="flex-1">
                            <p className="font-semibold text-sm sm:text-base mb-1">{opp.title}</p>
                            <p className="text-xs sm:text-sm text-[#00FF00]">{opp.potential}</p>
                          </div>
                          <div className="bg-[#00FF00]/20 px-2 sm:px-3 py-1 rounded-full w-fit">
                            <p className="text-xs sm:text-sm text-[#00FF00] font-semibold">{opp.match}% match</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <span>Tempo estimado: {opp.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              {/* Goals Tab */}
              <TabsContent value="goals" className="space-y-4">
                <Card className="bg-white/5 border-white/10 p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">Simulador de Metas Financeiras</h3>
                  <div className="space-y-4 sm:space-y-6">
                    {[
                      { goal: "Fundo de Emergência", target: 18000, current: 5400, monthly: 450, months: 28 },
                      { goal: "Viagem Internacional", target: 12000, current: 2400, monthly: 400, months: 24 },
                      { goal: "Entrada Apartamento", target: 50000, current: 8000, monthly: 700, months: 60 }
                    ].map((goal, idx) => (
                      <div key={idx} className="p-4 sm:p-6 bg-white/5 rounded-xl">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                          <div>
                            <p className="font-semibold text-base sm:text-lg mb-1">{goal.goal}</p>
                            <p className="text-xs sm:text-sm text-gray-400">
                              R$ {goal.current.toFixed(2)} de R$ {goal.target.toFixed(2)}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-gray-400">Faltam</p>
                            <p className="text-base sm:text-lg font-bold text-[#00FF00]">{goal.months} meses</p>
                          </div>
                        </div>
                        <Progress value={(goal.current / goal.target) * 100} className="h-2 mb-3" />
                        <div className="flex items-center justify-between text-xs sm:text-sm text-gray-400">
                          <span>Aporte mensal: R$ {goal.monthly.toFixed(2)}</span>
                          <span>{((goal.current / goal.target) * 100).toFixed(0)}% completo</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Behavioral Insights */}
            <Card className="bg-white/5 border-white/10 p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">Insights Comportamentais</h3>
                  <p className="text-xs sm:text-sm text-gray-400">Baseado no seu perfil {profileData[profile].title}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="p-3 sm:p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                  <p className="text-xs sm:text-sm font-semibold text-orange-400 mb-2">⚠️ Horário de Risco</p>
                  <p className="text-xs sm:text-sm text-gray-300">Você tende a gastar mais entre 20h-22h. Ative alertas nesse período.</p>
                </div>
                <div className="p-3 sm:p-4 bg-[#00FF00]/10 border border-[#00FF00]/20 rounded-lg">
                  <p className="text-xs sm:text-sm font-semibold text-[#00FF00] mb-2">✓ Ponto Forte</p>
                  <p className="text-xs sm:text-sm text-gray-300">Você é consistente com pagamentos. Continue assim!</p>
                </div>
              </div>
            </Card>

            {/* CTA Pro */}
            <Card className="bg-gradient-to-br from-[#00FF00]/20 to-emerald-500/20 border-[#00FF00]/30 p-6 sm:p-8 text-center">
              <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-[#00FF00] mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Desbloqueie o Potencial Completo</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-6 max-w-2xl mx-auto">
                Upgrade para FYNITE Pro e tenha acesso a análises avançadas de IA, alertas em tempo real, 
                otimização automática de dívidas e muito mais.
              </p>
              <Button size="lg" className="bg-[#00FF00] text-[#0D0D0D] hover:bg-[#00FF00]/90 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-xl font-semibold">
                Começar Teste Gratuito de 7 Dias
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-xs text-gray-500 mt-4">Cancele quando quiser • Sem compromisso</p>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
