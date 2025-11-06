import { Card } from "@/components/ui/card";
import { ResumeData } from "@/pages/Builder";
import { Briefcase, GraduationCap, Mail, MapPin, Phone } from "lucide-react";

interface ResumePreviewProps {
  resumeData: ResumeData;
}

export const ResumePreview = ({ resumeData }: ResumePreviewProps) => {
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  return (
    <Card className="p-8 bg-white shadow-xl min-h-[1000px]">
      <div className="space-y-6">
        {/* Personal Info */}
        <div className="border-b pb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {resumeData.personalInfo.fullName || "Your Name"}
          </h1>
          <p className="text-lg text-primary font-medium mb-3">
            {resumeData.personalInfo.title || "Your Professional Title"}
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            {resumeData.personalInfo.email && (
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                {resumeData.personalInfo.email}
              </div>
            )}
            {resumeData.personalInfo.phone && (
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                {resumeData.personalInfo.phone}
              </div>
            )}
            {resumeData.personalInfo.location && (
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {resumeData.personalInfo.location}
              </div>
            )}
          </div>
        </div>

        {/* Summary */}
        {resumeData.personalInfo.summary && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {resumeData.personalInfo.summary}
            </p>
          </div>
        )}

        {/* Experience */}
        {resumeData.experience.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              Work Experience
            </h2>
            <div className="space-y-4">
              {resumeData.experience.map((exp) => (
                <div key={exp.id} className="border-l-2 border-primary pl-4">
                  <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <div className="text-sm text-gray-600 mb-2">
                    {exp.location && <span>{exp.location} • </span>}
                    {formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}
                  </div>
                  {exp.description && (
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {resumeData.education.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Education
            </h2>
            <div className="space-y-4">
              {resumeData.education.map((edu) => (
                <div key={edu.id} className="border-l-2 border-primary pl-4">
                  <h3 className="font-semibold text-gray-900">{edu.degree} in {edu.field}</h3>
                  <p className="text-primary font-medium">{edu.school}</p>
                  <div className="text-sm text-gray-600 mb-2">
                    {edu.location && <span>{edu.location} • </span>}
                    {formatDate(edu.graduationDate)}
                  </div>
                  {edu.description && (
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {resumeData.skills.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};
