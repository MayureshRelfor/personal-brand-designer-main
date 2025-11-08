import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { BlogCard } from "@/components/shared/BlogCard";
import { PageHero } from "@/components/shared/PageHero";

const blogPosts = [
  {
    id: "resume-tips-2024",
    title: "10 Resume Tips That Will Get You Hired in 2024",
    excerpt: "Learn the latest best practices for creating a resume that stands out to recruiters and passes ATS systems with flying colors.",
    date: "Jan 15, 2024",
    readTime: "5 min read",
    tags: ["Resume Tips", "Career Advice"],
  },
  {
    id: "ats-optimization",
    title: "How to Optimize Your Resume for ATS Systems",
    excerpt: "Discover the secrets to making your resume ATS-friendly and ensuring it reaches human recruiters.",
    date: "Jan 10, 2024",
    readTime: "7 min read",
    tags: ["ATS", "Job Search"],
  },
  {
    id: "cover-letter-guide",
    title: "The Ultimate Guide to Writing Cover Letters",
    excerpt: "Master the art of crafting compelling cover letters that grab attention and showcase your unique value.",
    date: "Jan 5, 2024",
    readTime: "6 min read",
    tags: ["Cover Letters", "Writing Tips"],
  },
  {
    id: "career-change-resume",
    title: "How to Write a Resume for a Career Change",
    excerpt: "Transitioning careers? Learn how to highlight transferable skills and position yourself for success in a new field.",
    date: "Dec 28, 2023",
    readTime: "8 min read",
    tags: ["Career Change", "Resume Tips"],
  },
  {
    id: "interview-preparation",
    title: "Interview Preparation: From Resume to Offer",
    excerpt: "A comprehensive guide to preparing for interviews, from researching the company to negotiating your offer.",
    date: "Dec 20, 2023",
    readTime: "10 min read",
    tags: ["Interviews", "Career Advice"],
  },
  {
    id: "linkedin-profile-tips",
    title: "LinkedIn Profile Optimization: Stand Out to Recruiters",
    excerpt: "Transform your LinkedIn profile into a powerful personal branding tool that attracts opportunities.",
    date: "Dec 15, 2023",
    readTime: "6 min read",
    tags: ["LinkedIn", "Personal Branding"],
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero
          title="Career Insights & Resources"
          description="Expert advice, tips, and strategies to accelerate your career growth"
        />

        <section className="container py-20 md:py-28">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <div
                key={post.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <BlogCard {...post} />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
