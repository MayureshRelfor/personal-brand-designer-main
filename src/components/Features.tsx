import { Sparkles, CheckCircle, FileCheck, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Sparkles,
    title: "A draft in 10 mins",
    description: "The AI builder is 10x faster than doing it on your own.",
  },
  {
    icon: CheckCircle,
    title: "Zero mistakes",
    description: "Don't stress over typos; you'll sound great!",
  },
  {
    icon: FileCheck,
    title: "ATS templates",
    description: "Your resume will be 100% compliant. Recruiters will see you.",
  },
  {
    icon: TrendingUp,
    title: "Get paid 7% more",
    description: "We can help you negotiate a higher starting salary...",
  },
];

export const Features = () => {
  return (
    <section className="container py-20 md:py-28">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Every tool you need is here
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Build, optimize, and land your dream job with our comprehensive suite of tools
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="border-2 transition-all hover:border-primary hover:shadow-lg animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
