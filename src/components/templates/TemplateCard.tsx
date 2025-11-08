import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export interface Template {
    id: string;
    name: string;
    description: string;
    preview: string;
    category: string;
}

interface TemplateCardProps {
    template: Template;
}

export const TemplateCard = ({ template }: TemplateCardProps) => {
    const navigate = useNavigate();

    const handleUseTemplate = () => {
        navigate(`/builder?template=${template.id}`);
    };

    return (
        <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="relative overflow-hidden aspect-[3/4] bg-muted">
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
    );
};