import classicTemplate from "@/assets/templates/classic-template.jpg";
import creativeTemplate from "@/assets/templates/creative-template.jpg";
import minimalTemplate from "@/assets/templates/minimal-template.jpg";
import modernTemplate from "@/assets/templates/modern-template.jpg";
import { Header } from "@/components/Header";
import { Template, TemplateCard } from "@/components/templates/TemplateCard";

const templates: Template[] = [
    {
        id: "modern",
        name: "Modern Professional",
        description: "Clean and contemporary design perfect for tech and creative roles",
        preview: modernTemplate,
        category: "modern"
    },
    {
        id: "classic",
        name: "Classic Executive",
        description: "Traditional elegant style ideal for corporate and formal positions",
        preview: classicTemplate,
        category: "classic"
    },
    {
        id: "creative",
        name: "Creative Bold",
        description: "Eye-catching design with vibrant colors for creative professionals",
        preview: creativeTemplate,
        category: "creative"
    },
    {
        id: "minimal",
        name: "Minimal Simple",
        description: "Ultra-clean ATS-friendly layout with maximum readability",
        preview: minimalTemplate,
        category: "minimal"
    }
];

const Templates = () => {
    return (
        <div className="min-h-screen bg-muted/30">
            <Header />

            <section className="py-20">
                <div className="container">
                    <div className="text-center mb-12 animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Choose Your Perfect Template
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Select from our professionally designed templates and customize it to match your style
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-fade-up">
                        {templates.map((template) => (
                            <TemplateCard key={template.id} template={template} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Templates;