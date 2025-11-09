import classicTemplate from "@/assets/templates/classic-template.jpg";
import creativeTemplate from "@/assets/templates/creative-template.jpg";
import minimalTemplate from "@/assets/templates/minimal-template.jpg";
import modernTemplate from "@/assets/templates/modern-template.jpg";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RecommendedTemplatesCarousel } from "@/components/templates/RecommendedTemplatesCarousel";
import { FilterOptions, SidebarFilter } from "@/components/templates/SidebarFilter";
import { Template, TemplateCard } from "@/components/templates/TemplateCard";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

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
    const [searchParams] = useSearchParams();
    const showRecommended = searchParams.get("recommended") === "true";

    const [filters, setFilters] = useState<FilterOptions>({
        photo: "all",
        columns: "all",
        style: [],
        industry: [],
        atsFriendly: false,
        premiumOnly: false,
    });

    const [recommendedTemplates, setRecommendedTemplates] = useState<Template[]>([]);

    useEffect(() => {
        if (showRecommended) {
            // Get questionnaire data from session storage
            const questionnaireData = sessionStorage.getItem("questionnaireData");
            if (questionnaireData) {
                const data = JSON.parse(questionnaireData);
                // Simple recommendation logic based on user responses
                const recommended = getRecommendedTemplates(data);
                setRecommendedTemplates(recommended);
            }
        }
    }, [showRecommended]);

    const getRecommendedTemplates = (data): Template[] => {
        // Simple recommendation logic
        // In production, this would be more sophisticated
        const recommended: Template[] = [];

        if (data.status === "student" || data.status === "graduate") {
            recommended.push(templates.find(t => t.id === "modern")!);
        }

        if (data.status === "executive") {
            recommended.push(templates.find(t => t.id === "classic")!);
        }

        if (data.field === "design" || data.field === "marketing") {
            recommended.push(templates.find(t => t.id === "creative")!);
        } else {
            recommended.push(templates.find(t => t.id === "minimal")!);
        }

        // Add any remaining templates to reach 3 recommendations
        const remaining = templates.filter(t => !recommended.includes(t));
        while (recommended.length < 3 && remaining.length > 0) {
            recommended.push(remaining.shift()!);
        }

        return recommended;
    };

    // Filter templates based on selected filters
    const filteredTemplates = templates.filter((template) => {
        // Add filtering logic here based on filters state
        // For now, return all templates
        return true;
    });

    return (
        <div className="min-h-screen">
            <Header />
            <main className="container py-12 px-4">
                <div className="text-center mb-12 animate-fade-up">
                    <h1 className="text-4xl font-bold mb-4">
                        {showRecommended ? "Your Perfect Resume Template" : "Choose Your Perfect Template"}
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        {showRecommended
                            ? "We've handpicked templates that match your profile"
                            : "Select from our professionally designed templates and customize it to match your style"}
                    </p>
                </div>

                <div className="flex gap-8">
                    {/* Sidebar Filter */}
                    <SidebarFilter filters={filters} onFilterChange={setFilters} />

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Mobile Filter Button */}
                        <div className="mb-6">
                            <SidebarFilter filters={filters} onFilterChange={setFilters} isMobile />
                        </div>

                        {/* Recommended Templates Section */}
                        {showRecommended && recommendedTemplates.length > 0 && (
                            <RecommendedTemplatesCarousel templates={recommendedTemplates} />
                        )}

                        {/* All Templates */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6">
                                {showRecommended ? "All Templates" : "Browse Templates"}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredTemplates.map((template) => (
                                    <TemplateCard key={template.id} template={template} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Templates;