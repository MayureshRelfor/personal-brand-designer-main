import { Card } from "@/components/ui/card";
import { TemplateDesign } from "@/config/resumeTemplates";
import { ResumeData } from "@/pages/Builder";
import { Briefcase, GraduationCap, Mail, MapPin, Phone } from "lucide-react";

interface ResumeRendererProps {
  design: TemplateDesign;
  data: ResumeData;
}

export const ResumeRenderer = ({ design, data }: ResumeRendererProps) => {
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  // Render Personal Info Section
  const renderPersonalInfo = () => {
    const { header, fonts, colors } = design;
    const headerStyle = header.style === "centered" ? "text-center" : "text-left";
    const bgStyle = header.backgroundColor ? { backgroundColor: header.backgroundColor } : {};

    return (
      <div
        className={`${header.borderStyle === "bottom" ? "border-b pb-6" : ""} ${header.borderStyle === "full" ? "border p-6" : ""}`}
        style={bgStyle}
      >
        <h1
          className={`${header.nameSize} ${fonts.headingWeight} ${fonts.heading} mb-2 ${headerStyle}`}
          style={{ color: colors.text }}
        >
          {data.personalInfo.fullName || "Your Name"}
        </h1>
        <p
          className={`${header.titleSize} ${fonts.body} font-medium mb-3 ${headerStyle}`}
          style={{ color: colors.primary }}
        >
          {data.personalInfo.title || "Your Professional Title"}
        </p>
        <div className={`flex ${header.style === "centered" ? "justify-center" : ""} flex-wrap gap-4 text-sm`} style={{ color: colors.textLight }}>
          {data.personalInfo.email && (
            <div className="flex items-center gap-1">
              {design.sections.showIcons && <Mail className="h-4 w-4" />}
              {data.personalInfo.email}
            </div>
          )}
          {data.personalInfo.phone && (
            <div className="flex items-center gap-1">
              {design.sections.showIcons && <Phone className="h-4 w-4" />}
              {data.personalInfo.phone}
            </div>
          )}
          {data.personalInfo.location && (
            <div className="flex items-center gap-1">
              {design.sections.showIcons && <MapPin className="h-4 w-4" />}
              {data.personalInfo.location}
            </div>
          )}
        </div>
      </div>
    );
  };

  // Render Summary Section
  const renderSummary = () => {
    if (!data.personalInfo.summary) return null;

    return (
      <div>
        <h2
          className={`text-xl ${design.fonts.headingWeight} ${design.fonts.heading} mb-3 ${design.componentStyles.sectionTitleStyle}`}
          style={{ color: colors.text }}
        >
          Professional Summary
        </h2>
        <p className={`${design.fonts.body} leading-relaxed`} style={{ color: colors.textLight }}>
          {data.personalInfo.summary}
        </p>
      </div>
    );
  };

  // Render Experience Section
  const renderExperience = () => {
    if (data.experience.length === 0) return null;

    const { experience, fonts, colors } = design;

    return (
      <div>
        <h2
          className={`text-xl ${fonts.headingWeight} ${fonts.heading} mb-4 flex items-center gap-2 ${design.componentStyles.sectionTitleStyle}`}
          style={{ color: colors.text }}
        >
          {design.sections.showIcons && <Briefcase className="h-5 w-5" style={{ color: colors.primary }} />}
          Work Experience
        </h2>
        <div className="space-y-4">
          {data.experience.map((exp) => {
            const accentClass =
              experience.accentStyle === "left-border" ? "border-l-2 pl-4" :
                experience.accentStyle === "top-border" ? "border-t pt-4" :
                  experience.accentStyle === "background" ? "bg-primary/5 p-4 rounded-lg" : "";

            return (
              <div
                key={exp.id}
                className={accentClass}
                style={experience.accentStyle !== "none" ? { borderColor: colors.primary } : {}}
              >
                <h3 className={`${fonts.headingWeight} ${fonts.heading}`} style={{ color: colors.text }}>
                  {exp.position}
                </h3>
                <p className={`${fonts.body} font-medium`} style={{ color: colors.primary }}>
                  {exp.company}
                </p>
                <div className={`text-sm ${experience.dateFormat === "separate" ? "block mb-2" : "inline-block mb-2"}`} style={{ color: colors.textLight }}>
                  {exp.location && <span>{exp.location} • </span>}
                  {formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}
                </div>
                {exp.description && (
                  <p className={`${fonts.body} text-sm leading-relaxed whitespace-pre-line`} style={{ color: colors.textLight }}>
                    {exp.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // Render Education Section
  const renderEducation = () => {
    if (data.education.length === 0) return null;

    const { education, fonts, colors } = design;

    return (
      <div>
        <h2
          className={`text-xl ${fonts.headingWeight} ${fonts.heading} mb-4 flex items-center gap-2 ${design.componentStyles.sectionTitleStyle}`}
          style={{ color: colors.text }}
        >
          {design.sections.showIcons && <GraduationCap className="h-5 w-5" style={{ color: colors.primary }} />}
          Education
        </h2>
        <div className="space-y-4">
          {data.education.map((edu) => {
            const accentClass =
              education.accentStyle === "left-border" ? "border-l-2 pl-4" :
                education.accentStyle === "top-border" ? "border-t pt-4" :
                  education.accentStyle === "background" ? "bg-primary/5 p-4 rounded-lg" : "";

            return (
              <div
                key={edu.id}
                className={accentClass}
                style={education.accentStyle !== "none" ? { borderColor: colors.primary } : {}}
              >
                <h3 className={`${fonts.headingWeight} ${fonts.heading}`} style={{ color: colors.text }}>
                  {edu.degree} in {edu.field}
                </h3>
                <p className={`${fonts.body} font-medium`} style={{ color: colors.primary }}>
                  {edu.school}
                </p>
                <div className="text-sm mb-2" style={{ color: colors.textLight }}>
                  {edu.location && <span>{edu.location} • </span>}
                  {formatDate(edu.graduationDate)}
                </div>
                {edu.description && (
                  <p className={`${fonts.body} text-sm leading-relaxed`} style={{ color: colors.textLight }}>
                    {edu.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // Render Skills Section
  const renderSkills = () => {
    if (data.skills.length === 0) return null;

    const { skills, fonts, colors } = design;

    return (
      <div>
        <h2
          className={`text-xl ${fonts.headingWeight} ${fonts.heading} mb-3 ${design.componentStyles.sectionTitleStyle}`}
          style={{ color: colors.text }}
        >
          Skills
        </h2>
        {skills.style === "pills" && (
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill) => (
              <span
                key={skill}
                className={`px-3 py-1 ${design.componentStyles.borderRadius} text-sm font-medium`}
                style={{
                  backgroundColor: `${colors.primary}1A`,
                  color: colors.primary
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        )}
        {skills.style === "list" && (
          <div className={`${fonts.body} leading-relaxed`} style={{ color: colors.textLight }}>
            {data.skills.join(" • ")}
          </div>
        )}
        {skills.style === "grid" && (
          <div className="grid grid-cols-2 gap-2">
            {data.skills.map((skill) => (
              <div key={skill} className={`${fonts.body} text-sm`} style={{ color: colors.textLight }}>
                • {skill}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Section mapper
  const sectionComponents: Record<string, () => JSX.Element | null> = {
    personalInfo: renderPersonalInfo,
    summary: renderSummary,
    experience: renderExperience,
    education: renderEducation,
    skills: renderSkills,
  };

  const { colors } = design;

  return (
    <Card
      className={`${design.layout.contentPadding} ${design.componentStyles.cardShadow} ${design.componentStyles.borderRadius} min-h-[1000px]`}
      style={{ backgroundColor: colors.background }}
    >
      <div className={design.layout.spacing}>
        {/* Render sections in the order defined by the template */}
        {design.sections.order.map((sectionKey) => {
          const SectionComponent = sectionComponents[sectionKey];
          return SectionComponent ? <div key={sectionKey}>{SectionComponent()}</div> : null;
        })}
      </div>
    </Card>
  );
};
