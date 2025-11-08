import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/shared/PageHero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Briefcase, GraduationCap, Target, TrendingUp, Users } from "lucide-react";

const guides = [
  {
    icon: BookOpen,
    title: "Resume Writing Guide",
    description: "Complete guide to crafting a professional resume that gets you interviews.",
    topics: ["Format selection", "Content optimization", "ATS best practices", "Common mistakes to avoid"],
  },
  {
    icon: TrendingUp,
    title: "Career Development",
    description: "Strategies for advancing your career and achieving your professional goals.",
    topics: ["Skill development", "Networking strategies", "Personal branding", "Career transitions"],
  },
  {
    icon: Users,
    title: "Interview Success",
    description: "Master the interview process from preparation to follow-up.",
    topics: ["Common questions", "STAR method", "Virtual interviews", "Negotiation tactics"],
  },
  {
    icon: Target,
    title: "Job Search Strategy",
    description: "Effective techniques for finding and landing your ideal job.",
    topics: ["Job boards", "Company research", "Application tracking", "Follow-up strategies"],
  },
  {
    icon: Briefcase,
    title: "Professional Growth",
    description: "Continue growing and excelling in your current role.",
    topics: ["Leadership skills", "Project management", "Team collaboration", "Work-life balance"],
  },
  {
    icon: GraduationCap,
    title: "Entry-Level Success",
    description: "Guidance for recent graduates and career starters.",
    topics: ["First job search", "Building experience", "Internships", "Entry-level resumes"],
  },
];

const CareerGuide = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero
          title="Career Guides & Resources"
          description="Comprehensive guides to help you navigate every stage of your career journey"
        />

        <section className="container py-20 md:py-28">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide, index) => (
              <Card
                key={index}
                className="border-2 transition-all hover:border-primary hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <guide.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{guide.title}</CardTitle>
                  <CardDescription className="text-base">{guide.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {guide.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Content Section */}
        <section className="container py-20 md:py-28 bg-accent/30">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Start Your Journey Today
              </h2>
              <p className="text-lg text-muted-foreground">
                Access expert guidance to accelerate your career growth
              </p>
            </div>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Featured: Complete Resume Guide</CardTitle>
                <CardDescription className="text-base">Everything you need to know about creating the perfect resume</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Learn the fundamentals of resume writing, from choosing the right format to
                  highlighting your achievements effectively. This comprehensive guide covers
                  everything from basic structure to advanced optimization techniques.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <h4 className="font-semibold">What You'll Learn:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Choosing the right format</li>
                      <li>• Writing compelling content</li>
                      <li>• ATS optimization</li>
                      <li>• Industry-specific tips</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Who It's For:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Job seekers at any level</li>
                      <li>• Career changers</li>
                      <li>• Recent graduates</li>
                      <li>• Professionals updating resumes</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CareerGuide;
