import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/shared/PageHero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "How do I create a resume?",
        answer: "Simply click on 'Create my resume' button, choose a template, and fill in your information. Our builder will guide you through each section with helpful tips and suggestions.",
      },
      {
        question: "Do I need to create an account?",
        answer: "You can start building your resume without an account. However, creating a free account allows you to save your progress, access your resumes from any device, and receive updates and tips.",
      },
      {
        question: "Is the resume builder really free?",
        answer: "Yes! Our basic resume builder is completely free to use. You can create, edit, and download your resume at no cost. Premium features and additional templates are available with our paid plans.",
      },
    ],
  },
  {
    category: "Templates & Design",
    questions: [
      {
        question: "How do I choose the right template?",
        answer: "Consider your industry and career level. Creative fields may prefer modern designs, while traditional industries often favor classic formats. All our templates are ATS-friendly and professional.",
      },
      {
        question: "Can I switch templates after starting?",
        answer: "Yes! You can switch between templates at any time without losing your content. Your information will automatically adapt to the new template's design.",
      },
      {
        question: "Are the templates ATS-friendly?",
        answer: "Absolutely! All our templates are designed to be compatible with Applicant Tracking Systems (ATS), ensuring your resume gets past automated screening and reaches hiring managers.",
      },
    ],
  },
  {
    category: "Editing & Customization",
    questions: [
      {
        question: "Can I customize the colors and fonts?",
        answer: "Yes, our premium plans offer full customization options including colors, fonts, spacing, and layout adjustments to match your personal brand.",
      },
      {
        question: "How do I add or remove sections?",
        answer: "You can easily add or remove sections like skills, certifications, or projects using the section controls in the builder. Drag and drop to reorder sections as needed.",
      },
      {
        question: "Can I save multiple versions of my resume?",
        answer: "Yes! You can create and save multiple resume versions tailored to different job applications or industries.",
      },
    ],
  },
  {
    category: "Downloading & Sharing",
    questions: [
      {
        question: "What format can I download my resume in?",
        answer: "You can download your resume as a PDF, which is the most widely accepted format by employers and maintains consistent formatting across all devices.",
      },
      {
        question: "Can I print my resume?",
        answer: "Yes! Our resumes are print-optimized. You can either print directly from your browser or download the PDF and print it for the best quality.",
      },
      {
        question: "How do I share my resume?",
        answer: "Download your resume as a PDF and attach it to job applications or emails. You can also create a shareable link for online applications (premium feature).",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero
          title="Frequently Asked Questions"
          description="Find answers to common questions about our resume builder"
        />

        <section className="container py-20 md:py-28">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <h2 className="text-2xl font-bold mb-6 text-primary">{category.category}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`${categoryIndex}-${index}`}
                      className="border-2 rounded-lg px-6 hover:border-primary transition-colors"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="font-semibold">{item.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>

        {/* Still have questions CTA */}
        <section className="container py-20 md:py-28 bg-accent/30">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Still have questions?
            </h2>
            <p className="text-lg text-muted-foreground">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="pt-4">
              <a
                href="/support"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Contact Support
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
