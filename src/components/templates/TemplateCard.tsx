import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import { UploadResumeModal } from "./UploadResumeModal";

export interface Template {
    id: string;
    name: string;
    description: string;
    preview: string;
    category: string;
}

interface TemplateCardProps {
    template: Template;
    isRecommended?: boolean;
}

export const TemplateCard = ({ template, isRecommended = false }: TemplateCardProps) => {
    const [showUploadModal, setShowUploadModal] = useState(false);

    const handleUseTemplate = () => {
        setShowUploadModal(true);
    };

    return (
        <>
            <Card
                className={`group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${isRecommended ? "border-2 border-primary shadow-lg" : ""
                    }`}
            >
                <div className="relative overflow-hidden aspect-[3/4] bg-muted">
                    {isRecommended && (
                        <Badge className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground shadow-lg">
                            <Sparkles className="mr-1 h-3 w-3" />
                            Recommended
                        </Badge>
                    )}
                    <img
                        src={template.preview}
                        alt={template.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader>
                    <CardTitle className="text-xl">{template.name}</CardTitle>
                    <CardDescription>{template.description}</CardDescription>
                </CardHeader>

                <CardFooter>
                    <Button
                        onClick={handleUseTemplate}
                        className="w-full"
                    >
                        Use this template
                    </Button>
                </CardFooter>
            </Card>

            <UploadResumeModal
                isOpen={showUploadModal}
                onClose={() => setShowUploadModal(false)}
                templateId={template.id}
            />
        </>
    );
};
