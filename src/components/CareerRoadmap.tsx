import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  GraduationCap, 
  Building, 
  TrendingUp, 
  ArrowRight, 
  ArrowDown,
  CheckCircle2,
  Star,
  Clock,
  DollarSign
} from "lucide-react";

interface RoadmapProps {
  courseName: string;
  onClose?: () => void;
}

const CareerRoadmap = ({ courseName, onClose }: RoadmapProps) => {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  // Mock data based on the course - this would come from API
  const roadmapData = {
    "B.Sc. Computer Science": {
      afterGraduation: [
        {
          category: "Entry-Level Jobs",
          icon: Briefcase,
          color: "bg-primary",
          jobs: [
            { name: "Web Developer", salary: "₹3-8 LPA", experience: "0-2 years", growth: "High" },
            { name: "Software Tester", salary: "₹2.5-6 LPA", experience: "0-1 years", growth: "Medium" },
            { name: "Junior Software Developer", salary: "₹4-10 LPA", experience: "0-2 years", growth: "High" },
            { name: "Technical Support Engineer", salary: "₹3-7 LPA", experience: "0-1 years", growth: "Medium" }
          ]
        },
        {
          category: "Mid-Level Jobs (2-5 years)",
          icon: TrendingUp,
          color: "bg-secondary",
          jobs: [
            { name: "Full-Stack Developer", salary: "₹8-18 LPA", experience: "2-5 years", growth: "Very High" },
            { name: "Data Analyst", salary: "₹6-15 LPA", experience: "2-4 years", growth: "High" },
            { name: "System Administrator", salary: "₹5-12 LPA", experience: "2-5 years", growth: "Medium" },
            { name: "UI/UX Designer", salary: "₹7-16 LPA", experience: "2-4 years", growth: "High" }
          ]
        }
      ],
      higherStudies: [
        {
          degree: "MCA (Master of Computer Applications)",
          duration: "2-3 years",
          description: "Advanced programming, software development, and system design",
          careerBoost: "Senior Developer, Technical Lead, Project Manager",
          avgSalary: "₹12-25 LPA"
        },
        {
          degree: "M.Sc. Computer Science",
          duration: "2 years", 
          description: "Research-oriented program in computer science theory and applications",
          careerBoost: "Research Scientist, Data Scientist, Academic Career",
          avgSalary: "₹8-20 LPA"
        },
        {
          degree: "MBA in IT Management",
          duration: "2 years",
          description: "Combination of business management and technology leadership",
          careerBoost: "IT Manager, Product Manager, Technology Consultant", 
          avgSalary: "₹15-35 LPA"
        }
      ],
      governmentJobs: [
        {
          exam: "GATE + PSU Recruitment",
          positions: ["Software Engineer in ISRO", "Technical Officer in DRDO", "Scientist in BARC"],
          salary: "₹8-15 LPA",
          preparation: "6-12 months"
        },
        {
          exam: "SSC CGL",
          positions: ["Statistical Investigator", "Junior Statistical Officer", "Auditor"],
          salary: "₹5-8 LPA", 
          preparation: "4-8 months"
        },
        {
          exam: "Bank PO/Clerk Exams",
          positions: ["Probationary Officer", "Specialist Officer (IT)", "Clerk"],
          salary: "₹4-12 LPA",
          preparation: "6-10 months"
        },
        {
          exam: "Civil Services (IAS/IPS/IFS)",
          positions: ["IAS Officer", "IPS Officer", "IFS Officer"],
          salary: "₹8-20+ LPA",
          preparation: "12-24 months"
        }
      ]
    }
  };

  const currentRoadmap = roadmapData[courseName as keyof typeof roadmapData] || roadmapData["B.Sc. Computer Science"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-4 pt-20">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">
            Career Roadmap: <span className="text-primary">{courseName}</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Explore your future possibilities and plan your career journey
          </p>
          {onClose && (
            <Button variant="outline" onClick={onClose} className="mb-4">
              ← Back to Dashboard
            </Button>
          )}
        </div>

        {/* Roadmap Flow */}
        <div className="space-y-8">
          {/* After Graduation - Jobs */}
          <section className="animate-slide-up">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-secondary mb-2">After Graduation</h2>
              <p className="text-muted-foreground">Immediate career opportunities</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {currentRoadmap.afterGraduation.map((category, categoryIndex) => (
                <Card key={categoryIndex} className="shadow-card hover:shadow-glow transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className={`mx-auto p-3 ${category.color} rounded-full w-fit mb-3`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.jobs.map((job, jobIndex) => (
                        <div
                          key={jobIndex}
                          className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                          onClick={() => setSelectedPath(job.name)}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-primary">{job.name}</h4>
                            <Badge variant={job.growth === "Very High" ? "success" : job.growth === "High" ? "default" : "secondary"}>
                              {job.growth}
                            </Badge>
                          </div>
                          <div className="flex justify-between text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <DollarSign className="h-3 w-3" />
                              <span>{job.salary}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>{job.experience}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Arrow Divider */}
          <div className="flex justify-center">
            <div className="p-4 bg-gradient-hero rounded-full">
              <ArrowDown className="h-8 w-8 text-white animate-float" />
            </div>
          </div>

          {/* Higher Studies */}
          <section className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-primary mb-2">Higher Studies Options</h2>
              <p className="text-muted-foreground">Advance your career with specialized education</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {currentRoadmap.higherStudies.map((study, index) => (
                <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 group">
                  <CardHeader className="text-center">
                    <div className="mx-auto p-3 bg-gradient-primary rounded-full w-fit mb-3 group-hover:shadow-glow transition-all duration-300">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{study.degree}</CardTitle>
                    <CardDescription className="flex items-center justify-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{study.duration}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{study.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary" />
                        <span className="text-sm font-medium">Career Boost:</span>
                      </div>
                      <p className="text-sm text-muted-foreground pl-6">{study.careerBoost}</p>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t">
                      <span className="text-sm font-medium">Avg. Salary</span>
                      <Badge variant="success">{study.avgSalary}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Arrow Divider */}
          <div className="flex justify-center">
            <div className="p-4 bg-gradient-secondary rounded-full">
              <ArrowDown className="h-8 w-8 text-white animate-float" />
            </div>
          </div>

          {/* Government Jobs */}
          <section className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-accent mb-2">Government Job Opportunities</h2>
              <p className="text-muted-foreground">Secure your future with government positions</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {currentRoadmap.governmentJobs.map((govJob, index) => (
                <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-secondary rounded-full">
                          <Building className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{govJob.exam}</CardTitle>
                          <CardDescription className="flex items-center gap-1 mt-1">
                            <Clock className="h-3 w-3" />
                            Prep: {govJob.preparation}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge variant="outline">{govJob.salary}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-medium text-muted-foreground">Available Positions:</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {govJob.positions.map((position, posIndex) => (
                            <Badge key={posIndex} variant="secondary" className="text-xs">
                              {position}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <Card className="bg-gradient-hero text-white border-0 shadow-glow animate-scale-in">
            <CardContent className="p-8 text-center">
              <div className="max-w-2xl mx-auto space-y-4">
                <h3 className="text-2xl font-bold">Ready to Start Your Journey?</h3>
                <p className="text-lg opacity-90">
                  Create a detailed plan and get personalized guidance for your chosen career path.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90">
                    <Star className="mr-2 h-5 w-5" />
                    Save This Roadmap
                  </Button>
                  <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90">
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Get Personalized Plan
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CareerRoadmap;