import { Sparkles } from "lucide-react";
import { Template, TemplateCard } from "./TemplateCard";

interface RecommendedTemplatesCarouselProps {
  templates: Template[];
}

export const RecommendedTemplatesCarousel = ({ templates }: RecommendedTemplatesCarouselProps) => {
  if (templates.length === 0) return null;

  return (
    <section className="mb-12 animate-fade-up">
      <div className="bg-gradient-to-r from-primary/10 via-accent to-background border border-primary/20 rounded-lg p-8 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Recommended For You</h2>
            <p className="text-muted-foreground">Based on your profile and experience</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <div key={template.id} className="relative">
              <TemplateCard template={template} isRecommended />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
