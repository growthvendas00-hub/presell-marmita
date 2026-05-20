import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Leaf, Clock, Snowflake, ChefHat, ListChecks } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-meal-prep.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const ingredients = [
  "500g de Peito de Frango",
  "1kg de Batata Doce",
  "Brócolis fresco (2 maços)",
  "Arroz Integral (500g)",
  "Azeite extra virgem",
  "Temperos naturais (alho, cebola, ervas)",
  "Cenoura e abobrinha (opcional)",
  "Ovos caipiras (1 dúzia)",
];

const steps = [
  {
    icon: ListChecks,
    title: "O Planejamento",
    body: (
      <>
        Escolha <strong>2 proteínas magras</strong> e <strong>2 fontes de carboidratos complexos</strong> para a
        semana. Defina quantas refeições serão preparadas (geralmente 5 almoços + 5 jantares) e monte sua{" "}
        <strong>lista de compras</strong> antes de ir ao mercado. Variedade evita o cansaço alimentar.
      </>
    ),
  },
  {
    icon: ChefHat,
    title: "O Preparo em Lote",
    body: (
      <>
        Cozinhe tudo de uma vez usando o método <strong>batch cooking</strong>: arroz integral na panela de
        pressão, legumes no vapor e proteína grelhada ou assada. Tempere com <strong>ervas frescas</strong> e
        azeite extra virgem ao invés de molhos industrializados.
      </>
    ),
  },
  {
    icon: Leaf,
    title: "A Divisão",
    body: (
      <>
        Monte porções equilibradas seguindo a regra do <strong>prato saudável</strong>: 50% vegetais, 25%
        proteína magra e 25% carboidrato complexo. Use recipientes de vidro com divisórias para preservar
        textura e sabor.
      </>
    ),
  },
  {
    icon: Snowflake,
    title: "O Armazenamento",
    body: (
      <>
        Resfrie totalmente antes de fechar os potes para evitar condensação. Refeições para os{" "}
        <strong>próximos 3 dias</strong> ficam na geladeira; as demais vão direto para o{" "}
        <strong>congelador</strong> e duram até 30 dias. Identifique sempre com data de preparo.
      </>
    ),
  },
];

function Index() {
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const [termsOpen, setTermsOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const toggle = (i: number) => setChecked((p) => ({ ...p, [i]: !p[i] }));

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" onClick={scrollTo("home")} className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-primary" />
            <span className="text-lg font-semibold tracking-tight">MarmitaMaster</span>
          </a>
          <ul className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <li>
              <a href="#home" onClick={scrollTo("home")} className="text-primary transition hover:text-primary/80">
                Home
              </a>
            </li>
            <li>
              <a href="#guia" onClick={scrollTo("guia")} className="transition hover:text-primary">
                Guia de Preparo
              </a>
            </li>
            <li>
              <a href="#contato" onClick={scrollTo("contato")} className="transition hover:text-primary">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-secondary-foreground">
              <Leaf className="h-3.5 w-3.5" /> Marmitas Saudáveis
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              O Guia Definitivo: Como Montar a Marmita Saudável Perfeita para a Semana
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Aprenda o método prático para preparar refeições deliciosas, economizar tempo e manter a dieta
              sem complicação.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" onClick={scrollTo("guia") as any} asChild>
                <a href="#guia" onClick={scrollTo("guia")}>Ver o guia completo</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#lista" onClick={scrollTo("lista")}>Lista de compras</a>
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> 2h de preparo</div>
              <div className="flex items-center gap-2"><Snowflake className="h-4 w-4 text-primary" /> Até 30 dias</div>
              <div className="flex items-center gap-2"><Leaf className="h-4 w-4 text-primary" /> 100% natural</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-accent/40 blur-2xl" />
            <img
              src={heroImage}
              alt="Marmitas saudáveis organizadas com frango grelhado, batata doce, brócolis e arroz integral"
              width={1600}
              height={1100}
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section id="guia" className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">O método completo da MarmitaMaster</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              A <strong>Marmitex Amju</strong> compartilha, neste guia exclusivo, os
              segredos que aprendemos ao longo dos anos para que <em>qualquer pessoa</em> consiga montar
              marmitas saudáveis, saborosas e práticas — sem precisar de experiência em cozinha profissional.
            </p>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_320px]">
            {/* Steps */}
            <ol className="space-y-6">
              {steps.map((s, i) => (
                <li
                  key={s.title}
                  className="rounded-2xl border border-border bg-card p-7 shadow-sm transition hover:shadow-md"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                        Passo {i + 1}
                      </div>
                      <h3 className="mt-1 text-xl font-semibold">{s.title}</h3>
                      <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            {/* Shopping list */}
            <aside id="lista" className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-2 border-b border-border pb-4">
                  <ListChecks className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">Lista de Compras</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  Marque os itens conforme for comprando.
                </p>
                <ul className="mt-4 space-y-2">
                  {ingredients.map((item, i) => (
                    <li key={item}>
                      <button
                        type="button"
                        onClick={() => toggle(i)}
                        className="group flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left text-sm transition hover:bg-secondary"
                      >
                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition ${
                            checked[i]
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border bg-background"
                          }`}
                        >
                          {checked[i] && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
                        </span>
                        <span
                          className={
                            checked[i]
                              ? "text-muted-foreground line-through"
                              : "text-foreground"
                          }
                        >
                          {item}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="border-t border-border/60">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Contato</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Dúvidas ou sugestões sobre o guia? Envie um e-mail para nossa equipe editorial.
          </p>
          <a
            href="mailto:contato@marmitamaster.blog"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            contato@marmitamaster.blog
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[oklch(0.28_0.04_145)] text-[oklch(0.95_0.01_95)]">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="flex items-center gap-2">
              <Leaf className="h-5 w-5" />
              <span className="text-base font-semibold">MarmitaMaster</span>
            </div>
            <p className="text-sm opacity-90">
              © 2026 Blog MarmitaMaster. Todos os direitos reservados.
            </p>
            <p className="text-sm opacity-80">
              Marmitex Amju | CNPJ: 36.584.690/0001-10
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-xs leading-relaxed opacity-75">
              Este site não faz parte do Google Inc. ou do Facebook Inc. Além disso, este site NÃO é endossado
              pelo Google ou Facebook de nenhuma maneira.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
              <button
                onClick={() => setTermsOpen(true)}
                className="underline-offset-4 transition hover:underline"
              >
                Termos de Uso
              </button>
              <span className="opacity-40">|</span>
              <button
                onClick={() => setPrivacyOpen(true)}
                className="underline-offset-4 transition hover:underline"
              >
                Política de Privacidade
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Terms Modal */}
      <Dialog open={termsOpen} onOpenChange={setTermsOpen}>
        <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Termos de Uso</DialogTitle>
            <DialogDescription>
              Marmitex Amju - CNPJ 36.584.690/0001-10
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              <strong>1. Sobre o site.</strong> O Blog MarmitaMaster é um veículo informativo dedicado a
              conteúdo sobre alimentação saudável, marmitas, receitas e estilo de vida. Todo o material aqui
              publicado tem caráter exclusivamente educativo e informativo.
            </p>
            <p>
              <strong>2. Uso do conteúdo.</strong> Os textos, imagens e materiais disponibilizados podem ser
              consultados livremente pelos usuários para fins pessoais. É vedada a reprodução comercial sem
              autorização prévia por escrito da Marmitex Amju.
            </p>
            <p>
              <strong>3. Responsabilidade.</strong> As informações nutricionais e culinárias publicadas não
              substituem orientação profissional de nutricionistas ou médicos. Consulte sempre um
              especialista antes de alterar sua dieta.
            </p>
            <p>
              <strong>4. Alterações.</strong> Estes termos podem ser atualizados a qualquer momento. O uso
              contínuo do site após mudanças implica concordância com as novas condições.
            </p>
            <p>
              <strong>5. Foro.</strong> Fica eleito o foro da comarca da sede da empresa para dirimir
              eventuais controvérsias.
            </p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button>Fechar</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Privacy Modal */}
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Política de Privacidade</DialogTitle>
            <DialogDescription>
              Como tratamos seus dados ao navegar pelo MarmitaMaster
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              <strong>1. Respeito à privacidade.</strong> O Blog MarmitaMaster, mantido pela Marmitex
              Amju, respeita integralmente a privacidade de seus visitantes e segue as
              diretrizes da Lei Geral de Proteção de Dados (LGPD).
            </p>
            <p>
              <strong>2. Coleta de dados.</strong> Não coletamos dados pessoais de forma desnecessária.
              Informações como nome e e-mail só são solicitadas quando o usuário, voluntariamente, entra em
              contato conosco.
            </p>
            <p>
              <strong>3. Cookies.</strong> Utilizamos cookies padrão de segurança e métricas anônimas de
              navegação para melhorar a experiência do site. Nenhum dado sensível é armazenado.
            </p>
            <p>
              <strong>4. Compartilhamento.</strong> Não vendemos, alugamos ou compartilhamos dados de
              visitantes com terceiros para fins comerciais.
            </p>
            <p>
              <strong>5. Seus direitos.</strong> O usuário pode, a qualquer momento, solicitar a exclusão de
              quaisquer dados que tenha fornecido por meio do nosso canal de contato.
            </p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button>Fechar</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
