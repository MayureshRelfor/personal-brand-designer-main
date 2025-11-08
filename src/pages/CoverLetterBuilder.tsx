import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, FileText, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Writing",
    description: "Get intelligent suggestions and templates that match your industry and role.",
  },
  {
    icon: CheckCircle,
    title: "Perfectly Formatted",
    description: "Professional layouts that hiring managers love to read.",
  },
  {
    icon: FileText,
    title: "Match Your Resume",
    description: "Consistent branding and style with your resume for a cohesive application.",
  },
];

const CoverLetterBuilder = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero
          title={
            <>
              Create compelling <span className="text-primary">cover letters</span>
            </>
          }
          description="Stand out from the competition with professionally crafted cover letters that get you noticed"
        />

        {/* Features Section */}
        <section className="container py-20 md:py-28">
          <div className="grid gap-6 md:grid-cols-3">
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

        {/* Sample Preview Section */}
        <section className="container py-20 md:py-28 bg-accent/30">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Professional templates
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our collection of expertly designed cover letter templates
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardHeader className="bg-primary/5">
                <CardTitle className="text-2xl">Sample Cover Letter</CardTitle>
                <CardDescription>Modern Professional Template</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4 text-muted-foreground">
                  <p>Dear Hiring Manager,</p>
                  <p>
                    I am writing to express my strong interest in the [Position] role at [Company Name].
                    With my background in [Your Field] and proven track record of [Key Achievement],
                    I am confident I would be a valuable addition to your team.
                  </p>
                  <p>
                    Throughout my career, I have developed expertise in [Skill 1], [Skill 2], and [Skill 3].
                    At my current role at [Current Company], I successfully [Achievement with metrics].
                  </p>
                  <p>
                    I am particularly drawn to [Company Name] because of [Specific reason].
                    I believe my skills and experience align perfectly with your needs and company culture.
                  </p>
                  <p>Thank you for considering my application. I look forward to discussing how I can contribute to your team.</p>
                  <p>Sincerely,<br />[Your Name]</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-20 md:py-28">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 px-8 py-16 md:px-16 md:py-20">
            <div className="absolute inset-0 bg-grid-white/10" />
            <div className="relative z-10 text-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl">
                Ready to create your cover letter?
              </h2>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                Build a professional cover letter in minutes with our easy-to-use builder
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" variant="secondary" className="text-base font-semibold" asChild>
                  <Link to="/builder">
                    Start building now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CoverLetterBuilder;
