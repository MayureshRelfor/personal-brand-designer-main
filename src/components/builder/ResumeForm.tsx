import { ResumeData } from "@/pages/Builder";
import { Dispatch, SetStateAction } from "react";
import { EducationSection } from "./sections/EducationSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { PersonalInfoSection } from "./sections/PersonalInfoSection";
import { SkillsSection } from "./sections/SkillsSection";

interface ResumeFormProps {
  resumeData: ResumeData;
  setResumeData: Dispatch<SetStateAction<ResumeData>>;
}

export const ResumeForm = ({ resumeData, setResumeData }: ResumeFormProps) => {
  return (
    <div className="space-y-6">
      <PersonalInfoSection resumeData={resumeData} setResumeData={setResumeData} />
      <ExperienceSection resumeData={resumeData} setResumeData={setResumeData} />
      <EducationSection resumeData={resumeData} setResumeData={setResumeData} />
      <SkillsSection resumeData={resumeData} setResumeData={setResumeData} />
    </div>
  );
};
