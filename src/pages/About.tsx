import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/shared/PageHero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Target, Users, Zap } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To empower job seekers with the tools and resources they need to land their dream jobs and advance their careers.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We continuously improve our platform with cutting-edge technology and user feedback to deliver the best experience.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We're building a supportive community of professionals helping each other succeed in their career journeys.",
  },
  {
    icon: Heart,
    title: "Dedication",
    description: "We're committed to providing exceptional support and resources that make a real difference in people's lives.",
  },
];

const stats = [
  { number: "500K+", label: "Resumes Created" },
  { number: "95%", label: "Success Rate" },
  { number: "50+", label: "Templates" },
  { number: "24/7", label: "Support" },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero
          title={
            <>
              Helping professionals land their <span className="text-primary">dream jobs</span>
            </>
          }
          description="We're on a mission to make job searching easier and more successful for everyone"
        />

        {/* Story Section */}
        <section className="container py-20 md:py-28">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-up">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-center">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                ResumeBuilder was founded in 2020 with a simple yet powerful vision: to help job seekers
                create professional, ATS-friendly resumes that truly represent their skills and experiences.
                We recognized that many talented professionals were being overlooked simply because their
                resumes weren't formatted correctly or didn't highlight their achievements effectively.
              </p>
              <p>
                What started as a small project has grown into a comprehensive career platform used by
                hundreds of thousands of job seekers worldwide. Our team of career experts, designers,
                and developers work tirelessly to ensure that every feature we build helps you get closer
                to your career goals.
              </p>
              <p>
                Today, we're proud to be one of the leading resume builders, helping professionals at
                every career stage—from recent graduates to C-level executives—create resumes that open
                doors to new opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-y bg-accent/30">
          <div className="container py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="container py-20 md:py-28">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-2 transition-all hover:border-primary hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="container py-20 md:py-28 bg-accent/30">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              We're a diverse team of career experts, designers, and developers passionate about
              helping people achieve their career goals.
            </p>
            <div className="max-w-3xl mx-auto">
              <p className="text-muted-foreground">
                Our team includes former recruiters, HR professionals, career coaches, and
                technical experts who bring years of experience to help you succeed. We're
                constantly learning and evolving to bring you the best tools and advice.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
