import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <article className="container py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" asChild className="mb-8">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            <div className="space-y-6 animate-fade-up">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Resume Tips</Badge>
                <Badge variant="secondary">Career Advice</Badge>
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                10 Resume Tips That Will Get You Hired in 2024
              </h1>

              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>January 15, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>5 min read</span>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  In today's competitive job market, having a standout resume is more important than ever.
                  Here are the top 10 tips that will help you create a resume that gets noticed by recruiters
                  and hiring managers.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-4">1. Tailor Your Resume to Each Job</h2>
                <p>
                  One of the biggest mistakes job seekers make is using the same generic resume for every application.
                  Take the time to customize your resume for each position, highlighting the skills and experiences
                  that are most relevant to the specific job description.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-4">2. Use Action Verbs and Quantify Achievements</h2>
                <p>
                  Start each bullet point with strong action verbs like "Led," "Implemented," "Achieved," or "Designed."
                  Whenever possible, include numbers and metrics to demonstrate the impact of your work.
                  For example: "Increased sales by 35% in Q1 2023."
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-4">3. Optimize for ATS (Applicant Tracking Systems)</h2>
                <p>
                  Many companies use ATS software to screen resumes before they reach human eyes. Use relevant keywords
                  from the job description, avoid complex formatting, and use standard section headings like "Work Experience"
                  and "Education" to ensure your resume passes through these systems.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-4">4. Keep It Concise and Relevant</h2>
                <p>
                  Your resume should typically be one to two pages maximum. Focus on your most recent and relevant
                  experiences. If you have more than 10 years of experience, you don't need to include every job
                  you've ever had—focus on the positions that are most relevant to your target role.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-4">5. Craft a Compelling Summary</h2>
                <p>
                  Your resume summary or objective should be a brief, powerful statement that captures who you are
                  as a professional and what you bring to the table. Make it specific to the role you're applying for
                  and highlight your unique value proposition.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-4">6. Highlight Soft Skills Alongside Technical Skills</h2>
                <p>
                  While technical skills are important, employers also value soft skills like leadership, communication,
                  problem-solving, and adaptability. Demonstrate these skills through specific examples in your experience
                  section rather than just listing them.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-4">7. Use a Professional Format and Design</h2>
                <p>
                  Your resume should be easy to read and visually appealing. Use consistent formatting, clear section
                  headings, and adequate white space. Choose a professional font like Arial, Calibri, or Times New Roman
                  in 10-12 point size.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-4">8. Include Relevant Certifications and Education</h2>
                <p>
                  List your educational background and any relevant certifications or professional development courses.
                  If you're a recent graduate, you can include relevant coursework, projects, or academic achievements.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-4">9. Proofread Carefully</h2>
                <p>
                  Typos and grammatical errors can instantly disqualify your application. Proofread your resume multiple
                  times, use spell-check tools, and consider having a friend or professional review it as well.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-4">10. Update Regularly</h2>
                <p>
                  Keep your resume current by updating it regularly with new skills, achievements, and experiences.
                  This makes it easier to apply for opportunities quickly when they arise and ensures you don't forget
                  important accomplishments.
                </p>

                <div className="mt-12 p-6 bg-accent/30 rounded-2xl border-2">
                  <h3 className="text-2xl font-bold mb-4">Ready to build your perfect resume?</h3>
                  <p className="mb-6">
                    Use our professional resume builder to create a standout resume in minutes.
                    Our templates are ATS-friendly and designed by career experts.
                  </p>
                  <Button size="lg" asChild>
                    <Link to="/builder">Start Building</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
