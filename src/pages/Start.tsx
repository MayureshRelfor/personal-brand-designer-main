import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface QuestionnaireData {
  experience: string;
  status: string;
  field: string;
  education: string;
}

const Start = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<QuestionnaireData>({
    experience: "",
    status: "",
    field: "",
    education: "",
  });

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleFinish = () => {
    // Store questionnaire data in session storage
    sessionStorage.setItem("questionnaireData", JSON.stringify(data));
    navigate("/templates?recommended=true");
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return data.experience !== "";
      case 2:
        return data.status !== "";
      case 3:
        return data.field !== "";
      case 4:
        return data.education !== "";
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gradient-to-br from-accent via-background to-background py-12 px-4">
        <div className="container max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8 space-y-2 animate-fade-in">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Step {step} of {totalSteps}</span>
              <span>{Math.round(progress)}% complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <div className="bg-card border border-border rounded-lg shadow-xl p-8 md:p-12 animate-scale-in">
            {/* Step 1: Experience */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold text-foreground">How long have you been working?</h1>
                  <p className="text-muted-foreground">This helps us recommend the right template style for you.</p>
                </div>

                <RadioGroup value={data.experience} onValueChange={(value) => setData({ ...data, experience: value })}>
                  <div className="space-y-3">
                    {[
                      { value: "student", label: "Student / No Experience" },
                      { value: "0-1", label: "0–1 years" },
                      { value: "1-3", label: "1–3 years" },
                      { value: "3-7", label: "3–7 years" },
                      { value: "7+", label: "7+ years" },
                    ].map((option) => (
                      <div
                        key={option.value}
                        className="flex items-center space-x-3 border border-border rounded-lg p-4 hover:bg-accent hover:border-primary transition-all cursor-pointer"
                      >
                        <RadioGroupItem value={option.value} id={option.value} />
                        <Label htmlFor={option.value} className="flex-1 cursor-pointer font-medium">
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            )}

            {/* Step 2: Status */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold text-foreground">What's your current status?</h1>
                  <p className="text-muted-foreground">We'll suggest templates that match your career stage.</p>
                </div>

                <RadioGroup value={data.status} onValueChange={(value) => setData({ ...data, status: value })}>
                  <div className="space-y-3">
                    {[
                      { value: "student", label: "Student" },
                      { value: "graduate", label: "Recent Graduate" },
                      { value: "professional", label: "Working Professional" },
                      { value: "switcher", label: "Career Switcher" },
                      { value: "executive", label: "Executive / Senior Level" },
                    ].map((option) => (
                      <div
                        key={option.value}
                        className="flex items-center space-x-3 border border-border rounded-lg p-4 hover:bg-accent hover:border-primary transition-all cursor-pointer"
                      >
                        <RadioGroupItem value={option.value} id={option.value} />
                        <Label htmlFor={option.value} className="flex-1 cursor-pointer font-medium">
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            )}

            {/* Step 3: Field */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold text-foreground">Your field or occupation</h1>
                  <p className="text-muted-foreground">Different industries prefer different resume styles.</p>
                </div>

                <Select value={data.field} onValueChange={(value) => setData({ ...data, field: value })}>
                  <SelectTrigger className="w-full h-14 text-base">
                    <SelectValue placeholder="Select your field" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="software">Software / IT</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="finance">Finance / Accounting</SelectItem>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="hr">Human Resources</SelectItem>
                    <SelectItem value="operations">Operations</SelectItem>
                    <SelectItem value="design">Design / Creative</SelectItem>
                    <SelectItem value="legal">Legal</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Step 4: Education */}
            {step === 4 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold text-foreground">Your highest education level</h1>
                  <p className="text-muted-foreground">This is the final step before we show you recommendations.</p>
                </div>

                <RadioGroup value={data.education} onValueChange={(value) => setData({ ...data, education: value })}>
                  <div className="space-y-3">
                    {[
                      { value: "highschool", label: "High School" },
                      { value: "diploma", label: "Diploma" },
                      { value: "bachelor", label: "Bachelor's Degree" },
                      { value: "master", label: "Master's Degree" },
                      { value: "mba", label: "MBA" },
                      { value: "phd", label: "PhD / Doctorate" },
                    ].map((option) => (
                      <div
                        key={option.value}
                        className="flex items-center space-x-3 border border-border rounded-lg p-4 hover:bg-accent hover:border-primary transition-all cursor-pointer"
                      >
                        <RadioGroupItem value={option.value} id={option.value} />
                        <Label htmlFor={option.value} className="flex-1 cursor-pointer font-medium">
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8 pt-6 border-t border-border">
              {step > 1 && (
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="flex-1"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
              )}

              {step < totalSteps ? (
                <Button
                  onClick={handleNext}
                  disabled={!isStepValid()}
                  className="flex-1"
                >
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleFinish}
                  disabled={!isStepValid()}
                  className="flex-1 bg-gradient-to-r from-primary to-primary/80"
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  Show Recommended Templates
                </Button>
              )}
            </div>
          </div>

          {/* Skip Option */}
          <div className="text-center mt-6">
            <button
              onClick={() => navigate("/templates")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors underline"
            >
              Skip and browse all templates
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Start;
