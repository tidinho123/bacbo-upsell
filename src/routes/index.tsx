import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const CTA_URL = "LINK_DE_PAGAMENTO_AQUI";
const DOWNSELL_URL = "LINK_DOWNSELL_AQUI";
const TICKET = "X.XXX KZ";
const PRODUTO = "botQuotex";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `BÔNUS EXCLUSIVO | ${PRODUTO} — Moneytix` },
      {
        name: "description",
        content: `Ative o ${PRODUTO} com Moneytix como bônus especial de upsell. Acesso desbloqueado hoje.`,
      },
      { property: "og:title", content: `Bônus de Upsell - ${PRODUTO} — Moneytix` },
      { property: "og:description", content: `Upgrade exclusivo com ${PRODUTO}. Acesso imediato.` },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: LandingPage,
});

function Cta({ children, large = false }: { children: React.ReactNode; large?: boolean }) {
  return (
    <a
      href={CTA_URL}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gold-gradient font-bold text-emerald-deep transition-transform hover:scale-[1.03] active:scale-[0.98] shadow-gold animate-pulse-gold ${
        large ? "px-8 py-5 text-base md:text-lg" : "px-6 py-3 text-sm"
      }`}
    >
      <span className="absolute inset-0 shimmer opacity-60 mix-blend-overlay" />
      <span className="relative z-10 flex items-center gap-2 md:gap-3 tracking-wide">{children}</span>
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 text-[10px] md:text-xs font-semibold tracking-[0.35em] uppercase text-primary/90">
      <span className="h-px w-8 bg-primary/60" />
      {children}
      <span className="h-px w-8 bg-primary/60" />
    </div>
  );
}

export function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="overflow-x-hidden">
      {/* ALERTA TOPO */}
      <div className="bg-gold-gradient text-emerald-deep py-2 px-4 text-center text-xs font-black tracking-wider uppercase relative z-50">
        🔥 OPORTUNIDADE EXCLUSIVA: ATIVE O {PRODUTO.toUpperCase()} AGORA!
      </div>

      {/* HEADER */}
      <header className="fixed top-8 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-gold/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gold-gradient grid place-items-center text-emerald-deep font-black">
              M
            </div>
            <span className="font-display text-lg tracking-wide text-gold-gradient">MONEYTIX</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span className="text-primary font-bold">🤖 {PRODUTO}</span>
            <span>Quotex</span>
            <span>Premium</span>
          </div>
          <Cta>🤖 ATIVAR: {TICKET}</Cta>
        </div>
      </header>

      {/* ===== SECÇÃO 1: HERO ===== */}
      <section className="relative min-h-screen pt-28 pb-10 flex items-center">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 30% 40%, oklch(0.35 0.18 250 / 0.35), transparent 60%), radial-gradient(circle at 80% 20%, oklch(0.82 0.16 85 / 0.18), transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-5 gap-8 items-center w-full">
          {/* VISUAL */}
          <div className="md:col-span-3 relative">
            <div
              className="relative rounded-3xl overflow-hidden border border-gold shadow-luxe aspect-[4/3] bg-gradient-to-br from-blue-900/60 to-background flex items-center justify-center"
              style={{ transform: `translateY(${scrollY * -0.05}px)` }}
            >
              <div className="text-[14rem] opacity-80 animate-float select-none">🤖</div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-background/80 backdrop-blur px-4 py-2 border border-gold">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                </span>
                <span className="text-xs font-bold tracking-wider text-foreground">
                  🔴 AO VIVO NA QUOTEX
                </span>
              </div>
              <div className="absolute bottom-5 right-5 rounded-xl bg-background/80 backdrop-blur border border-gold px-4 py-2 text-xs">
                <span className="text-muted-foreground">OPERANDO</span>{" "}
                <span className="text-gold-gradient font-bold">24/7 AUTOMÁTICO</span>
              </div>
            </div>
          </div>

          {/* TEXTO */}
          <div className="md:col-span-2 space-y-6 animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] bg-emerald-deep border border-primary/40 text-primary">
              🤖 {PRODUTO} — ACESSO EXCLUSIVO
            </span>
            <h1 className="font-display font-black leading-[0.95] text-5xl md:text-7xl">
              <span className="text-gold-gradient">O ROBÔ QUE</span>
              <br />
              <span className="text-gold-gradient">OPERA POR TI</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/90 font-light leading-snug">
              O <span className="font-semibold text-gold-gradient">{PRODUTO}</span> opera automaticamente na Quotex enquanto tu descansas. Ativo <span className="font-bold text-gold-gradient">24 horas por dia</span>.
            </p>
            <p className="text-muted-foreground text-sm md:text-base max-w-md">
              Sem precisar de experiência, sem complicação. O bot analisa o mercado e faz as operações por ti de forma automática.
            </p>
            <div className="flex flex-col gap-3 pt-2">
              <Cta large>
                🤖 ATIVAR {PRODUTO.toUpperCase()}
                <span className="h-5 w-px bg-emerald-deep/40" />
                💰 {TICKET}
              </Cta>
              <div className="flex flex-col gap-2 pl-2">
                <span className="text-xs text-muted-foreground">
                  ✨ Ativação imediata · Suporte incluído
                </span>
                <a
                  href={DOWNSELL_URL}
                  className="text-xs text-muted-foreground/80 underline underline-offset-4 hover:text-gold transition-colors font-medium self-start"
                >
                  Não, obrigado — prefiro continuar sem o bot
                </a>
              </div>
            </div>
            <div className="flex items-center gap-6 pt-4 border-t border-gold/20">
              <div>
                <div className="text-2xl font-display text-gold-gradient">100%</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Automático
                </div>
              </div>
              <div>
                <div className="text-2xl font-display text-gold-gradient">24/7</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Ativo
                </div>
              </div>
              <div>
                <div className="text-2xl font-display text-gold-gradient">2 min</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Para ativar
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground animate-float">
          ↓ deslize ↓
        </div>
      </section>

      {/* ===== SECÇÃO 2: O QUE RECEBES ===== */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <RevealOnScroll className="text-center space-y-4 mb-16">
            <SectionLabel>O que recebes</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl font-black">
              <span className="text-gold-gradient">Tudo incluído no {PRODUTO}</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ao ativar o {PRODUTO} tens acesso imediato a um sistema completo de operações automáticas na Quotex.
            </p>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                icon: "🤖",
                title: "Bot 100% Automático",
                desc: "Opera sozinho na Quotex. Não precisas de fazer nada manualmente.",
                tone: "from-blue-500/15 to-transparent",
                ring: "ring-blue-400/30",
              },
              {
                icon: "📊",
                title: "Análise em Tempo Real",
                desc: "O bot analisa o mercado a cada segundo e entra na melhor oportunidade.",
                tone: "from-amber-400/15 to-transparent",
                ring: "ring-amber-300/30",
              },
              {
                icon: "🛡️",
                title: "Gestão de Risco Incluída",
                desc: "Sistema automático de proteção do teu saldo. Controla as perdas sozinho.",
                tone: "from-emerald-500/15 to-transparent",
                ring: "ring-emerald-300/30",
              },
              {
                icon: "📱",
                title: "Funciona no Telemóvel",
                desc: "Acompanha as operações do teu bot em qualquer lugar, pelo telemóvel.",
                tone: "from-rose-500/15 to-transparent",
                ring: "ring-rose-300/30",
              },
            ].map((c, i) => (
              <RevealOnScroll key={c.title} delay={i * 120}>
                <div
                  className={`group relative rounded-3xl border border-gold p-8 md:p-10 h-full bg-gradient-to-br ${c.tone} bg-card/40 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:shadow-gold ring-1 ${c.ring}`}
                >
                  <div className="text-[7rem] leading-none md:text-[8rem] -mt-4 mb-2 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    {c.icon}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                    {c.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{c.desc}</p>
                  <div className="absolute top-6 right-6 text-xs font-mono text-gold-gradient opacity-60">
                    0{i + 1}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECÇÃO 3: COMO FUNCIONA ===== */}
      <section className="relative py-24 md:py-32 bg-emerald-deep/40">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <RevealOnScroll className="text-center space-y-4 mb-20">
            <SectionLabel>Passo a passo</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl font-black text-gold-gradient">
              Como funciona
            </h2>
          </RevealOnScroll>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden md:block" />

            {[
              {
                num: "①",
                side: "left",
                title: "ATIVA O BOT",
                lines: ["Clica no botão abaixo", "Pagamento simples e seguro", "Ativação em 2 minutos"],
                time: "⏱️ 2 minutos",
                emoji: "🔑",
              },
              {
                num: "②",
                side: "right",
                title: "CONECTA À QUOTEX",
                lines: ["Segue o guia enviado por nós", "Liga o bot à tua conta Quotex", "Sem configurações complicadas"],
                time: "⏱️ 5 minutos",
                emoji: "🔗",
              },
              {
                num: "③",
                side: "left",
                title: "O BOT OPERA POR TI",
                lines: ["Liga e esquece", "O bot trabalha 24/7", "Tu acompanhas os resultados"],
                time: "🤖 automático",
                emoji: "💰",
                cta: true,
              },
            ].map((s, i) => (
              <RevealOnScroll key={s.title} delay={i * 150}>
                <div
                  className={`grid md:grid-cols-2 gap-8 items-center mb-16 md:mb-24 ${
                    s.side === "right" ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className={`${s.side === "right" ? "md:text-left" : "md:text-right"}`}>
                    <div className="inline-block">
                      <div className="font-display text-6xl md:text-7xl text-gold-gradient animate-spin-slow inline-block">
                        {s.num}
                      </div>
                      <h3 className="font-display text-3xl md:text-4xl font-black mt-2 mb-4 text-foreground">
                        {s.title}
                      </h3>
                      <ul className={`space-y-2 text-muted-foreground ${s.side === "right" ? "md:items-start" : "md:items-end"} flex flex-col`}>
                        {s.lines.map((l) => (
                          <li key={l} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <span>{l}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 inline-block rounded-full border border-gold px-4 py-1.5 text-xs font-bold text-gold-gradient">
                        {s.time}
                      </div>
                      {s.cta && (
                        <div className="mt-6">
                          <Cta large>🤖 ATIVAR AGORA · {TICKET}</Cta>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="relative">
                    <div className="aspect-square max-w-xs mx-auto rounded-full border border-gold glow-gold grid place-items-center text-[8rem] md:text-[10rem] bg-card/40 backdrop-blur animate-float">
                      {s.emoji}
                    </div>
                    <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-primary glow-gold" />
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECÇÃO 4: POR QUE QUOTEX ===== */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-28">
          <RevealOnScroll className="text-center space-y-4">
            <SectionLabel>A plataforma</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl font-black text-gold-gradient">
              Por que a Quotex?
            </h2>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <RevealOnScroll>
              <div className="relative rounded-3xl overflow-hidden border border-gold shadow-luxe aspect-[4/5]">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, oklch(0.35 0.18 250 / 0.8), oklch(0.15 0.04 250)), repeating-linear-gradient(45deg, oklch(0.82 0.16 85 / 0.08) 0 2px, transparent 2px 14px)",
                  }}
                />
                <div className="absolute inset-0 grid place-items-center text-[16rem] opacity-90 animate-float">
                  📈
                </div>
                <div className="absolute bottom-6 left-6 right-6 backdrop-blur bg-background/60 border border-gold rounded-2xl p-4">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    Plataforma
                  </div>
                  <div className="font-display text-xl text-gold-gradient">Quotex — Operações Digitais</div>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={150} className="space-y-6">
              <h3 className="font-display text-4xl md:text-5xl font-black leading-tight">
                Plataforma simples,
                <br />
                <span className="text-gold-gradient">resultados reais.</span>
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A Quotex é uma das plataformas de operações digitais mais usadas no mundo. Rápida, segura e perfeita para bots automáticos como o {PRODUTO}.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Interface simples",
                  "Saques rápidos",
                  "Suporte 24/7",
                  "100% online",
                ].map((b) => (
                  <div
                    key={b}
                    className="rounded-xl border border-gold/40 bg-card/40 px-4 py-3 text-sm flex items-center gap-2"
                  >
                    <span className="text-primary">◆</span> {b}
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <RevealOnScroll className="space-y-6 md:order-1 order-2">
              <h3 className="font-display text-4xl md:text-5xl font-black leading-tight">
                Por que usar
                <br />
                <span className="text-gold-gradient">um bot automático?</span>
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                O mercado não dorme. Com o {PRODUTO}, as tuas operações continuam mesmo quando estás a dormir, a trabalhar ou a descansar.
              </p>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {["😎", "🤩", "😊", "🥳"].map((e, i) => (
                    <div
                      key={i}
                      className="h-12 w-12 rounded-full border-2 border-primary bg-card grid place-items-center text-xl"
                    >
                      {e}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-sm font-bold">+10.000 utilizadores</div>
                  <div className="text-xs text-muted-foreground">já usam bots na Quotex</div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={150} className="md:order-2 order-1">
              <div className="rounded-3xl border border-gold bg-card/40 backdrop-blur p-8 md:p-10 shadow-luxe">
                <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-6">
                  Vantagens do {PRODUTO}
                </div>
                <ul className="space-y-4">
                  {[
                    "Opera 24 horas por dia",
                    "Sem emoções, só lógica",
                    "Gestão de risco automática",
                    "Não precisas de experiência",
                    "Resultados visíveis em dias",
                  ].map((c, i) => (
                    <RevealOnScroll key={c} delay={i * 100}>
                      <li className="flex items-center gap-4 border-b border-gold/20 pb-3">
                        <span className="h-8 w-8 rounded-full bg-gold-gradient text-emerald-deep grid place-items-center font-black">
                          ✓
                        </span>
                        <span className="text-lg">{c}</span>
                      </li>
                    </RevealOnScroll>
                  ))}
                </ul>
                <div className="mt-8">
                  <Cta>Quero ativar · {TICKET}</Cta>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ===== SECÇÃO 5: NÚMEROS + DEPOIMENTOS ===== */}
      <section className="relative py-24 md:py-32 bg-emerald-deep/40">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <RevealOnScroll className="text-center space-y-4 mb-16">
            <SectionLabel>Em números</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl font-black text-gold-gradient">
              Resultados reais
            </h2>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              { n: "10.000+", l: "Utilizadores ativos", c: "from-blue-500/20" },
              { n: "97%", l: "Taxa de ativação", c: "from-amber-400/20" },
              { n: "24/7", l: "Bot ativo", c: "from-emerald-500/20" },
            ].map((s, i) => (
              <RevealOnScroll key={s.l} delay={i * 120}>
                <div
                  className={`relative rounded-3xl border border-gold p-10 text-center bg-gradient-to-br ${s.c} to-transparent bg-card/40 backdrop-blur shadow-luxe`}
                >
                  <div className="font-display text-6xl md:text-7xl font-black text-gold-gradient">
                    {s.n}
                  </div>
                  <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mt-3">
                    {s.l}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "João M.",
                role: "Luanda",
                text: "Em 3 dias o bot já estava a operar sozinho. Nunca pensei que fosse tão simples de ativar.",
              },
              {
                name: "Ana R.",
                role: "Benguela",
                text: "Ativei o botQuotex e agora só acompanho os resultados. O suporte ajudou-me em tudo.",
              },
              {
                name: "Pedro O.",
                role: "Huambo",
                text: "O bot opera enquanto estou a trabalhar. É incrível ver as operações acontecer sozinhas.",
              },
            ].map((t, i) => (
              <RevealOnScroll key={t.name} delay={i * 150}>
                <div className="rounded-3xl border border-gold bg-card/50 backdrop-blur p-8 h-full shadow-luxe">
                  <div className="text-3xl text-gold-gradient mb-3">"</div>
                  <p className="text-foreground/90 leading-relaxed">{t.text}</p>
                  <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gold/20">
                    <div className="h-10 w-10 rounded-full bg-gold-gradient grid place-items-center text-emerald-deep font-black">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="font-bold">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                    <div className="ml-auto text-primary text-sm">★★★★★</div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECÇÃO 6: PREÇO ===== */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <RevealOnScroll>
            <div className="relative rounded-[2rem] overflow-hidden border border-gold p-10 md:p-16 shadow-luxe bg-gradient-to-br from-emerald-deep to-background">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background:
                    "radial-gradient(circle at 80% 20%, oklch(0.82 0.16 85 / 0.4), transparent 50%)",
                }}
              />
              <div className="relative grid md:grid-cols-2 gap-10 items-center">
                <div className="space-y-4">
                  <SectionLabel>🤖 ACESSO AO {PRODUTO.toUpperCase()}</SectionLabel>
                  <h2 className="font-display text-4xl md:text-5xl font-black text-gold-gradient leading-none">
                    Ativa o teu bot hoje
                  </h2>
                  <p className="text-muted-foreground">
                    Um único pagamento. Sem mensalidades. O {PRODUTO} fica ativo na tua conta da Quotex imediatamente após a ativação.
                  </p>
                  <ul className="space-y-2 pt-2">
                    {[
                      "Bot automático ligado à tua conta Quotex",
                      "Gestão de risco incluída",
                      "Suporte 24/7 em português",
                      "Guia de ativação passo a passo",
                    ].map((x) => (
                      <li key={x} className="flex items-center gap-3 text-sm">
                        <span className="h-5 w-5 rounded-full bg-gold-gradient text-emerald-deep grid place-items-center text-[10px] font-black">
                          ✓
                        </span>
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center md:text-right space-y-4">
                  <div className="inline-block rounded-2xl border border-gold p-6 bg-background/50 backdrop-blur">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                      Acesso único
                    </div>
                    <div className="font-display text-5xl text-gold-gradient font-black">
                      {TICKET}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      pagamento único · sem mensalidades
                    </div>
                  </div>
                  <div>
                    <Cta large>SIM! ATIVAR {PRODUTO.toUpperCase()} · {TICKET}</Cta>
                  </div>
                  <div className="text-[11px] text-muted-foreground">
                    🔒 Pagamento 100% Seguro · ⚡ Ativação Imediata
                  </div>
                  <div className="pt-2">
                    <a
                      href={DOWNSELL_URL}
                      className="inline-block text-xs md:text-sm text-muted-foreground/80 underline underline-offset-4 hover:text-gold transition-colors"
                    >
                      Não, obrigado — prefiro continuar sem o bot
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== SECÇÃO 7: FAQ ===== */}
      <section className="relative py-24 md:py-32 bg-emerald-deep/40">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <RevealOnScroll className="text-center space-y-4 mb-12">
            <SectionLabel>Perguntas Frequentes</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl font-black text-gold-gradient">
              Tire as tuas dúvidas
            </h2>
          </RevealOnScroll>

          <div className="space-y-4">
            {[
              {
                q: `O que é o ${PRODUTO}?`,
                a: `O ${PRODUTO} é um bot automático que opera na plataforma Quotex por ti. Ele analisa o mercado e faz as operações de forma automática, 24 horas por dia.`,
              },
              {
                q: "Preciso de experiência para usar?",
                a: "Não. O bot faz tudo automaticamente. Tu apenas ativas e acompanhas os resultados. O nosso suporte ajuda-te em cada passo.",
              },
              {
                q: "Quanto tempo demora a ativar?",
                a: "A ativação demora menos de 5 minutos. Após o pagamento recebes um guia passo a passo para ligar o bot à tua conta Quotex.",
              },
              {
                q: "O bot opera 24 horas?",
                a: "Sim. O bot opera continuamente, mesmo quando estás a dormir. Podes acompanhar as operações em tempo real pelo teu telemóvel.",
              },
              {
                q: "Tem suporte em português?",
                a: "Sim. Suporte 24/7 em português para te ajudar em tudo, desde a ativação até ao acompanhamento dos resultados.",
              },
            ].map((f, i) => (
              <RevealOnScroll key={f.q} delay={i * 80}>
                <details className="group rounded-2xl border border-gold bg-card/40 backdrop-blur p-6 cursor-pointer">
                  <summary className="flex items-center justify-between gap-4 list-none">
                    <span className="font-display text-lg md:text-xl font-bold pr-4">
                      {f.q}
                    </span>
                    <span className="h-8 w-8 rounded-full bg-gold-gradient text-emerald-deep grid place-items-center font-black transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
                </details>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECÇÃO 8: CTA FINAL ===== */}
      <section className="relative py-28 md:py-40 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.25 0.15 250 / 0.6), transparent 60%), radial-gradient(circle at 80% 30%, oklch(0.82 0.16 85 / 0.25), transparent 50%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center space-y-8">
          <RevealOnScroll className="space-y-6">
            <SectionLabel>Última chamada</SectionLabel>
            <h2 className="font-display text-5xl md:text-7xl font-black leading-[0.95]">
              <span className="text-gold-gradient">O bot que trabalha</span>
              <br />
              enquanto tu descansas.
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ativa agora o <span className="font-bold text-gold-gradient">{PRODUTO}</span> e começa a operar automaticamente na Quotex hoje mesmo.
            </p>
            <div className="flex flex-col items-center gap-3 pt-4">
              <Cta large>🤖 ATIVAR {PRODUTO.toUpperCase()} · {TICKET}</Cta>
              <span className="text-xs text-muted-foreground">
                ✨ Ativação imediata · 🔒 Pagamento seguro · 🤖 Bot ativo 24/7
              </span>
              <a
                href={DOWNSELL_URL}
                className="text-xs md:text-sm text-muted-foreground/80 underline underline-offset-4 hover:text-gold transition-colors font-medium mt-1"
              >
                Não, obrigado — prefiro continuar sem o bot
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="border-t border-gold/30 py-10 text-center">
        <div className="font-display text-2xl text-gold-gradient mb-2">MONEYTIX</div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Moneytix · {PRODUTO} · Quotex
        </div>
        <div className="text-[10px] text-muted-foreground mt-2 max-w-xl mx-auto px-4">
          Opera com responsabilidade. Conteúdo destinado a maiores de 18 anos. Resultados não são garantidos.
        </div>
      </footer>
    </main>
  );
}
