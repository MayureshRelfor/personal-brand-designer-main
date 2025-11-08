import { ReactNode } from "react";

interface PageHeroProps {
  title: string | ReactNode;
  description: string;
  gradient?: boolean;
}

export const PageHero = ({ title, description, gradient = true }: PageHeroProps) => {
  return (
    <section className={`relative overflow-hidden ${gradient ? 'bg-gradient-to-br from-accent via-background to-background' : 'bg-background'}`}>
      <div className="container py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto space-y-4 animate-fade-up">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground md:text-2xl">
            {description}
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};
