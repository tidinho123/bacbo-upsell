import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroAsset from "@/assets/hero-bacbo.png.asset.json";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const CTA_URL = "https://pay.kursinha.com/c/6a2849f2f9a33e8339b0eda5";
const DOWNSELL_URL = "https://ofertaavitor.netlify.app";
const TICKET = "8.500 KZ";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BÔNUS EXCLUSIVO DE UPSELL | Robô do Bac Bo — Moneytix" },
      {
        name: "description",
        content:
          "Ative o Robô do Bac Bo com Moneytix como bônus especial de upsell. Acesso desbloqueado hoje a partir de 8.500 KZ.",
      },
      { property: "og:title", content: "Bônus de Upsell - Robô do Bac Bo — Moneytix" },
      { property: "og:description", content: "Upgrade exclusivo com bônus de upsell. A partir de 8.500 KZ." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroAsset.url },
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
      {/* UPSELL TOP ALERT BAR */}
      <div className="bg-gold-gradient text-emerald-deep py-2 px-4 text-center text-xs font-black tracking-wider uppercase relative z-50">
        🔥 OPORTUNIDADE DE UPGRADE EXCLUSIVO: ATIVE O ROBÔ BAC BO COMO BÔNUS DE UPSELL!
      </div>

      {/* TOP BAR */}
      <header className="fixed top-8 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-gold/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gold-gradient grid place-items-center text-emerald-deep font-black">
              M
            </div>
            <span className="font-display text-lg tracking-wide text-gold-gradient">MONEYTIX UPSELL</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span className="text-primary font-bold">🎁 BÔNUS EXCLUSIVO</span>
            <span>Lookbook</span>
            <span>Premium Upgrade</span>
          </div>
          <Cta>💰 ATIVAR UPSELL: {TICKET}</Cta>
        </div>
      </header>

      {/* ============ SECTION 1: HERO ============ */}
      <section className="relative min-h-screen pt-28 pb-10 flex items-center">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 30% 40%, oklch(0.45 0.13 160 / 0.35), transparent 60%), radial-gradient(circle at 80% 20%, oklch(0.82 0.16 85 / 0.18), transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-5 gap-8 items-center w-full">
          {/* IMAGE 60% */}
          <div className="md:col-span-3 relative">
            <div
              className="relative rounded-3xl overflow-hidden border border-gold shadow-luxe"
              style={{ transform: `translateY(${scrollY * -0.05}px)` }}
            >
              <img
                src={heroAsset.url}
                alt="Robô do Bac Bo — Moneytix"
                className="w-full h-auto block"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              {/* Badge */}
              <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-background/80 backdrop-blur px-4 py-2 border border-gold">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                </span>
                <span className="text-xs font-bold tracking-wider text-foreground">
                  🔥 OFERTA DE UPGRADE DE UPSELL
                </span>
              </div>
              <div className="absolute bottom-5 right-5 rounded-xl bg-background/80 backdrop-blur border border-gold px-4 py-2 text-xs">
                <span className="text-muted-foreground">BÔNUS ADICIONAL</span>{" "}
                <span className="text-gold-gradient font-bold">UPGRADE DE CONTA</span>
              </div>
            </div>
          </div>

          {/* TEXT 40% */}
          <div className="md:col-span-2 space-y-6 animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] bg-emerald-deep border border-primary/40 text-primary">
              🎁 BÔNUS DE UPGRADE DE UPSELL ATIVO
            </span>
            <h1 className="font-display font-black leading-[0.95] text-5xl md:text-7xl">
              <span className="text-gold-gradient">SÓ MAIS</span>
              <br />
              <span className="text-gold-gradient">UM PASSO!</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/90 font-light leading-snug">
              Adicione o <span className="font-semibold text-gold-gradient">Robô do Bac Bo</span> com esta oferta de upsell e multiplique seus bônus por apenas <span className="font-bold text-gold-gradient">{TICKET}</span>.
            </p>
            <p className="text-muted-foreground text-sm md:text-base max-w-md">
              Aproveite esta condição única e exclusiva de upgrade. Esta oportunidade só aparece uma vez para adicionar o robô mais cobiçado diretamente à sua conta.
            </p>
            <div className="flex flex-col gap-3 pt-2">
              <Cta large>
                ADICIONAR UPSELL DE BÔNUS
                <span className="h-5 w-px bg-emerald-deep/40" />
                💰 {TICKET}
              </Cta>
              <span className="text-xs text-muted-foreground pl-2">
                ✨ Bônus extra incluído · Aprovação instantânea
              </span>
            </div>
            <div className="flex items-center gap-6 pt-4 border-t border-gold/20">
              <div>
                <div className="text-2xl font-display text-gold-gradient">98%</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Aprovação
                </div>
              </div>
              <div>
                <div className="text-2xl font-display text-gold-gradient">24/7</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Suporte PT
                </div>
              </div>
              <div>
                <div className="text-2xl font-display text-gold-gradient">2 min</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Cadastro
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground animate-float">
          ↓ deslize ↓
        </div>
      </section>

      {/* ============ SECTION 2: O QUE VOCÊ RECEBE ============ */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <RevealOnScroll className="text-center space-y-4 mb-16">
            <SectionLabel>Vantagens do Upgrade de Upsell</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl font-black">
              <span className="text-gold-gradient">Sua Conta com Bônus Máximo</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ao aceitar este upgrade especial de upsell, você adiciona um conjunto de vantagens de elite prontas para gerar resultados.
            </p>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                icon: "🎰",
                title: "Acesso Imediato",
                desc: "Entre na plataforma em menos de 2 minutos.",
                tone: "from-sky-500/15 to-transparent",
                ring: "ring-sky-400/30",
              },
              {
                icon: "💰",
                title: "Bônus de Boas-vindas",
                desc: `Depósito mínimo ${TICKET} + bônus inicial em KZ.`,
                tone: "from-amber-400/15 to-transparent",
                ring: "ring-amber-300/30",
              },
              {
                icon: "🛡️",
                title: "100% Seguro & Certificado",
                desc: "Plataforma segura com suporte 24/7 em português.",
                tone: "from-emerald-500/15 to-transparent",
                ring: "ring-emerald-300/30",
              },
              {
                icon: "📱",
                title: "Mobile Premium",
                desc: "Jogue Bac Bo em qualquer lugar, qualquer hora.",
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

      {/* ============ SECTION 3: COMO FUNCIONA — TIMELINE ============ */}
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
                title: "CADASTRO RÁPIDO",
                lines: ["Email + WhatsApp (apenas 2 campos)", "Sem documentos complicados"],
                time: "⏱️ 1 minuto",
                emoji: "📝",
              },
              {
                num: "②",
                side: "right",
                title: "DEPÓSITO MÍNIMO",
                lines: [
                  `Mínimo: ${TICKET}`,
                  "PIX, Orange Money, Cartão",
                  "+ BÔNUS INICIAL",
                ],
                time: "⏱️ 2-5 minutos",
                emoji: "💳",
              },
              {
                num: "③",
                side: "left",
                title: "COMECE A JOGAR",
                lines: [
                  "Acesso total ao Bac Bo",
                  "Suporte ao vivo 24/7",
                  "Comunidade global",
                ],
                time: "🎮 ao vivo",
                emoji: "🎲",
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
                    <div
                      className={`inline-block ${
                        s.side === "right" ? "" : ""
                      }`}
                    >
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
                          <Cta large>🎮 COMEÇAR AGORA · {TICKET}</Cta>
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

      {/* ============ SECTION 4: POR QUE BAC BO ============ */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-28">
          <RevealOnScroll className="text-center space-y-4">
            <SectionLabel>Editorial</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl font-black text-gold-gradient">
              Por que Bac Bo?
            </h2>
          </RevealOnScroll>

          {/* 4A */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <RevealOnScroll>
              <div className="relative rounded-3xl overflow-hidden border border-gold shadow-luxe aspect-[4/5]">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, oklch(0.45 0.13 160 / 0.8), oklch(0.15 0.04 155)), repeating-linear-gradient(45deg, oklch(0.82 0.16 85 / 0.08) 0 2px, transparent 2px 14px)",
                  }}
                />
                <div className="absolute inset-0 grid place-items-center text-[16rem] opacity-90 animate-float">
                  🎲
                </div>
                <div className="absolute bottom-6 left-6 right-6 backdrop-blur bg-background/60 border border-gold rounded-2xl p-4">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    Mesa Ao Vivo
                  </div>
                  <div className="font-display text-xl text-gold-gradient">Bac Bo Premium</div>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={150} className="space-y-6">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-primary">
                Desde 2015
              </span>
              <h3 className="font-display text-4xl md:text-5xl font-black leading-tight">
                Jogo clássico,
                <br />
                <span className="text-gold-gradient">estratégia moderna.</span>
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Bac Bo é um dos clássicos mais populares da Ásia e agora está em
                Angola. Operado pelo Robô da Moneytix, cada rodada vira uma jogada
                calculada.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Regras simples",
                  "Rodadas rápidas (1-2 min)",
                  "Sem complicação técnica",
                  "Chance de ganho real",
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

          {/* 4B */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <RevealOnScroll className="space-y-6 md:order-1 order-2">
              <h3 className="font-display text-4xl md:text-5xl font-black leading-tight">
                Por que os players
                <br />
                <span className="text-gold-gradient">escolhem Bac Bo?</span>
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A maioria dos jogadores experientes já tem conta ativa na plataforma
                porque é confiável, rápida e fácil de usar.
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
                  <div className="text-sm font-bold">+15.000 players</div>
                  <div className="text-xs text-muted-foreground">já ativaram este mês</div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={150} className="md:order-2 order-1">
              <div className="rounded-3xl border border-gold bg-card/40 backdrop-blur p-8 md:p-10 shadow-luxe">
                <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-6">
                  Checklist do player premium
                </div>
                <ul className="space-y-4">
                  {[
                    "Regras claras",
                    "Suporte português",
                    "Comunidade ativa",
                    "Pagamentos múltiplos",
                    "24/7 online",
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

      {/* ============ SECTION 5: NÚMEROS + DEPOIMENTOS ============ */}
      <section className="relative py-24 md:py-32 bg-emerald-deep/40">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <RevealOnScroll className="text-center space-y-4 mb-16">
            <SectionLabel>Em números</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl font-black text-gold-gradient">
              Social proof real
            </h2>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              { n: "15.420", l: "Players ativos", c: "from-emerald-500/20" },
              { n: "98%", l: "Taxa de aprovação", c: "from-amber-400/20" },
              { n: "24/7", l: "Suporte PT", c: "from-rose-500/20" },
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
                name: "Carlos M.",
                role: "Luanda",
                text: "Em 3 dias recuperei meu primeiro depósito. O suporte responde rápido e a interface é simples.",
              },
              {
                name: "Aline R.",
                role: "Benguela",
                text: "Comecei com 8.500 KZ. O bônus inicial fez toda a diferença. Recomendo demais.",
              },
              {
                name: "Felipe O.",
                role: "Huambo",
                text: "Levei 1 minuto pra cadastrar. O robô faz quase tudo, eu só acompanho.",
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

      {/* ============ SECTION 6: PRICING / TICKET ============ */}
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
                  <SectionLabel>🎁 BÔNUS DE UPSELL ATIVO</SectionLabel>
                  <h2 className="font-display text-4xl md:text-5xl font-black text-gold-gradient leading-none">
                    Oportunidade Especial de Upgrade
                  </h2>
                  <p className="text-muted-foreground">
                    Ative agora o Robô do Bac Bo com Moneytix como bônus exclusivo de upsell nesta sessão. Depósito mínimo simples de ativação, sem mensalidades.
                  </p>
                  <ul className="space-y-2 pt-2">
                    {[
                      "Adiciona o Robô de Elite à sua conta",
                      "Bônus de boas-vindas ativo na plataforma",
                      "Suporte 24/7 dedicado em português",
                      "Única chance de adquirir neste preço promocional",
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
                      Upgrade Único
                    </div>
                    <div className="font-display text-5xl text-gold-gradient font-black">
                      {TICKET}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      bônus de upsell liberado
                    </div>
                  </div>
                  <div>
                    <Cta large>SIM! ADICIONAR UPGRADE · {TICKET}</Cta>
                  </div>
                  <div className="text-[11px] text-muted-foreground">
                    🔒 Pagamento 100% Seguro · ⚡ Liberação Imediata na Plataforma
                  </div>
                  <div className="pt-2">
                    <a
                      href={DOWNSELL_URL}
                      className="inline-block text-xs md:text-sm text-muted-foreground/80 underline underline-offset-4 hover:text-gold transition-colors"
                    >
                      Não, obrigado — prefiro recusar este bônus exclusivo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ============ SECTION 7: FAQ ============ */}
      <section className="relative py-24 md:py-32 bg-emerald-deep/40">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <RevealOnScroll className="text-center space-y-4 mb-12">
            <SectionLabel>Perguntas Frequentes</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl font-black text-gold-gradient">
              Tire suas dúvidas
            </h2>
          </RevealOnScroll>

          <div className="space-y-4">
            {[
              {
                q: "Qual o valor mínimo para começar?",
                a: `O ticket mínimo é de ${TICKET}. Esse valor cai direto na sua conta da plataforma + bônus inicial.`,
              },
              {
                q: "Quanto tempo demora para liberar o acesso?",
                a: "A liberação é instantânea após o pagamento. Em até 2 minutos você está dentro.",
              },
              {
                q: "Funciona no celular?",
                a: "Sim. A plataforma é 100% mobile e funciona em Android e iPhone, sem app, direto no navegador.",
              },
              {
                q: "Posso sacar quando quiser?",
                a: "Sim. Você usa PIX, Orange Money ou Cartão e os saques são processados pela própria plataforma.",
              },
              {
                q: "Tem suporte em português?",
                a: "24/7 em português, com atendimento humano e tempo médio de resposta inferior a 3 minutos.",
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

      {/* ============ SECTION 8: CTA FINAL ============ */}
      <section className="relative py-28 md:py-40 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.30 0.10 160 / 0.6), transparent 60%), radial-gradient(circle at 80% 30%, oklch(0.82 0.16 85 / 0.25), transparent 50%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center space-y-8">
          <RevealOnScroll className="space-y-6">
            <SectionLabel>Última chamada</SectionLabel>
            <h2 className="font-display text-5xl md:text-7xl font-black leading-[0.95]">
              <span className="text-gold-gradient">Hoje é o dia</span>
              <br />
              de virar a mesa.
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ative agora o Robô do Bac Bo com Moneytix. Acesso desbloqueado por
              tempo limitado a partir de{" "}
              <span className="font-bold text-gold-gradient">{TICKET}</span>.
            </p>
            <div className="flex justify-center pt-4">
              <Cta large>🚀 ATIVAR ACESSO · {TICKET}</Cta>
            </div>
            <div className="text-xs text-muted-foreground">
              ✨ Bônus extra incluído · 🔒 Pagamento seguro · ⚡ Liberação instantânea
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gold/30 py-10 text-center">
        <div className="font-display text-2xl text-gold-gradient mb-2">MONEYTIX</div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Moneytix · Robô do Bac Bo · Acesso premium
        </div>
        <div className="text-[10px] text-muted-foreground mt-2 max-w-xl mx-auto px-4">
          Jogue com responsabilidade. Conteúdo destinado a maiores de 18 anos.
        </div>
      </footer>
    </main>
  );
}
