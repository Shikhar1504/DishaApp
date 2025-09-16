import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Users, 
  Award,
  CheckCircle2,
  X,
  ArrowRight,
  BarChart3,
  Target,
  Briefcase
} from "lucide-react";

interface Course {
  id: string;
  name: string;
  duration: string;
  type: string;
  description: string;
  curriculum: string[];
  careerProspects: {
    jobTitles: string[];
    averageSalary: string;
    growthRate: string;
    topEmployers: string[];
  };
  admissionRequirements: {
    minimumMarks: string;
    entranceExam: string;
    eligibility: string[];
  };
  fees: {
    government: string;
    private: string;
  };
  skills: string[];
  pros: string[];
  cons: string[];
}

const CourseComparison = () => {
  const [selectedCourses, setSelectedCourses] = useState<Course[]>([]);
  
  const availableCourses: Course[] = [
    {
      id: "1",
      name: "B.Sc. Computer Science",
      duration: "3 years",
      type: "Bachelor's Degree",
      description: "Comprehensive program covering computer programming, software development, algorithms, and system design.",
      curriculum: [
        "Programming Fundamentals (C, C++, Java)",
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Computer Networks",
        "Operating Systems",
        "Software Engineering",
        "Web Development",
        "Machine Learning Basics"
      ],
      careerProspects: {
        jobTitles: ["Software Developer", "System Analyst", "Web Developer", "Database Administrator"],
        averageSalary: "₹6-15 LPA",
        growthRate: "22%",
        topEmployers: ["TCS", "Infosys", "Google", "Microsoft", "Amazon"]
      },
      admissionRequirements: {
        minimumMarks: "60% in 12th",
        entranceExam: "University Entrance Test",
        eligibility: ["12th with PCM", "Mathematics is mandatory"]
      },
      fees: {
        government: "₹15,000/year",
        private: "₹80,000-2,00,000/year"
      },
      skills: ["Programming", "Problem Solving", "Logical Thinking", "Mathematics"],
      pros: ["High demand", "Good salary", "Remote work options", "Continuous learning"],
      cons: ["Rapidly changing technology", "High competition", "Long working hours"]
    },
    {
      id: "2", 
      name: "B.Tech Information Technology",
      duration: "4 years",
      type: "Bachelor's Degree",
      description: "Engineering program focused on information systems, networking, and technology solutions.",
      curriculum: [
        "Engineering Mathematics",
        "Digital Logic Design",
        "Computer Programming",
        "Data Communication & Networks",
        "Software Project Management",
        "Cybersecurity",
        "Cloud Computing",
        "Mobile App Development"
      ],
      careerProspects: {
        jobTitles: ["IT Consultant", "Network Engineer", "Software Engineer", "Systems Architect"],
        averageSalary: "₹8-18 LPA",
        growthRate: "18%",
        topEmployers: ["Wipro", "Accenture", "IBM", "Cognizant", "HCL"]
      },
      admissionRequirements: {
        minimumMarks: "75% in 12th",
        entranceExam: "JEE Main/State CET",
        eligibility: ["12th with PCM", "Physics, Chemistry, Mathematics mandatory"]
      },
      fees: {
        government: "₹50,000/year",
        private: "₹1,50,000-4,00,000/year"
      },
      skills: ["Technical Analysis", "System Design", "Project Management", "Communication"],
      pros: ["Engineering degree", "Higher starting salary", "Management opportunities", "Industry respect"],
      cons: ["Longer duration", "Higher fees", "More theoretical", "Intense coursework"]
    },
    {
      id: "3",
      name: "BCA (Bachelor of Computer Applications)",
      duration: "3 years", 
      type: "Bachelor's Degree",
      description: "Application-focused program emphasizing practical software development and computer applications.",
      curriculum: [
        "Programming in C/C++",
        "Java Programming",
        "Web Technologies (HTML, CSS, JS)",
        "Database Management",
        "System Analysis & Design",
        "Computer Graphics",
        "E-commerce",
        "Mobile Computing"
      ],
      careerProspects: {
        jobTitles: ["Application Developer", "Web Designer", "Software Tester", "Technical Support"],
        averageSalary: "₹4-12 LPA",
        growthRate: "15%",
        topEmployers: ["Tech Mahindra", "Capgemini", "Startups", "IT Service Companies"]
      },
      admissionRequirements: {
        minimumMarks: "50% in 12th",
        entranceExam: "University/College Entrance",
        eligibility: ["12th any stream", "Mathematics preferred but not always mandatory"]
      },
      fees: {
        government: "₹12,000/year", 
        private: "₹60,000-1,50,000/year"
      },
      skills: ["Application Development", "Creative Design", "User Interface", "Problem Solving"],
      pros: ["Practical approach", "Lower fees", "Flexible eligibility", "Industry-ready skills"],
      cons: ["Lower starting salary", "Less theoretical depth", "Limited research opportunities"]
    }
  ];

  const addCourse = (course: Course) => {
    if (selectedCourses.length < 3 && !selectedCourses.find(c => c.id === course.id)) {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  const removeCourse = (courseId: string) => {
    setSelectedCourses(selectedCourses.filter(c => c.id !== courseId));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-4 pt-20">
      <div className="container-responsive max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-responsive-lg font-bold mb-4">
            Course <span className="text-primary">Comparison Tool</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Compare courses side-by-side to make the best decision for your future
          </p>
        </div>

        {/* Course Selection */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Available Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {availableCourses.map((course) => (
              <Card 
                key={course.id} 
                className={`cursor-pointer transition-all duration-300 hover:shadow-card ${
                  selectedCourses.find(c => c.id === course.id) ? 'ring-2 ring-primary bg-primary/5' : ''
                }`}
                onClick={() => addCourse(course)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{course.name}</CardTitle>
                      <CardDescription>{course.duration} • {course.type}</CardDescription>
                    </div>
                    {selectedCourses.find(c => c.id === course.id) ? (
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    ) : (
                      <div className="h-5 w-5 border-2 border-muted-foreground rounded-full" />
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {course.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {selectedCourses.length === 0 && (
            <p className="text-center text-muted-foreground mt-6">
              Select up to 3 courses to compare
            </p>
          )}
        </div>

        {/* Comparison Table */}
        {selectedCourses.length > 0 && (
          <div className="animate-slide-up">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Course Comparison</h2>
              <p className="text-sm text-muted-foreground">
                {selectedCourses.length} of 3 courses selected
              </p>
            </div>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="careers">Careers</TabsTrigger>
                <TabsTrigger value="admission">Admission</TabsTrigger>
                <TabsTrigger value="comparison">Analysis</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <div className="grid gap-6">
                  {selectedCourses.map((course) => (
                    <Card key={course.id} className="relative">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2"
                        onClick={() => removeCourse(course.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                      
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <BookOpen className="h-5 w-5 text-primary" />
                          {course.name}
                        </CardTitle>
                        <CardDescription>{course.description}</CardDescription>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <p className="text-sm font-medium">Duration</p>
                            <p className="text-muted-foreground">{course.duration}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Government Fees</p>
                            <p className="text-muted-foreground">{course.fees.government}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Average Salary</p>
                            <p className="text-muted-foreground">{course.careerProspects.averageSalary}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="curriculum" className="mt-6">
                <div className="grid gap-6">
                  {selectedCourses.map((course) => (
                    <Card key={course.id}>
                      <CardHeader>
                        <CardTitle>{course.name} - Curriculum</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-3">
                          {course.curriculum.map((subject, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-secondary" />
                              <span className="text-sm">{subject}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="careers" className="mt-6">
                <div className="grid gap-6">
                  {selectedCourses.map((course) => (
                    <Card key={course.id}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Briefcase className="h-5 w-5 text-primary" />
                          {course.name} - Career Prospects
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium mb-2">Job Titles</h4>
                            <div className="flex flex-wrap gap-2">
                              {course.careerProspects.jobTitles.map((job, index) => (
                                <Badge key={index} variant="outline">{job}</Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Top Employers</h4>
                            <div className="flex flex-wrap gap-2">
                              {course.careerProspects.topEmployers.map((employer, index) => (
                                <Badge key={index} variant="secondary">{employer}</Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                          <div className="flex items-center gap-2">
                            <DollarSign className="h-4 w-4 text-secondary" />
                            <div>
                              <p className="text-sm font-medium">Average Salary</p>
                              <p className="text-sm text-muted-foreground">{course.careerProspects.averageSalary}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <TrendingUp className="h-4 w-4 text-secondary" />
                            <div>
                              <p className="text-sm font-medium">Growth Rate</p>
                              <p className="text-sm text-muted-foreground">{course.careerProspects.growthRate}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="admission" className="mt-6">
                <div className="grid gap-6">
                  {selectedCourses.map((course) => (
                    <Card key={course.id}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Award className="h-5 w-5 text-primary" />
                          {course.name} - Admission Requirements
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <p className="text-sm font-medium">Minimum Marks</p>
                            <p className="text-muted-foreground">{course.admissionRequirements.minimumMarks}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Entrance Exam</p>
                            <p className="text-muted-foreground">{course.admissionRequirements.entranceExam}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Fees Range</p>
                            <p className="text-muted-foreground">{course.fees.government} - {course.fees.private}</p>
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium mb-2">Eligibility Criteria</p>
                          <div className="space-y-1">
                            {course.admissionRequirements.eligibility.map((criteria, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <CheckCircle2 className="h-3 w-3 text-secondary" />
                                <span className="text-sm text-muted-foreground">{criteria}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="comparison" className="mt-6">
                {selectedCourses.length > 1 ? (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BarChart3 className="h-5 w-5 text-primary" />
                        Side-by-Side Analysis
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left p-3 font-medium">Criteria</th>
                              {selectedCourses.map(course => (
                                <th key={course.id} className="text-left p-3 font-medium">{course.name}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="p-3 font-medium">Duration</td>
                              {selectedCourses.map(course => (
                                <td key={course.id} className="p-3">{course.duration}</td>
                              ))}
                            </tr>
                            <tr className="border-b">
                              <td className="p-3 font-medium">Government Fees</td>
                              {selectedCourses.map(course => (
                                <td key={course.id} className="p-3">{course.fees.government}</td>
                              ))}
                            </tr>
                            <tr className="border-b">
                              <td className="p-3 font-medium">Average Salary</td>
                              {selectedCourses.map(course => (
                                <td key={course.id} className="p-3">{course.careerProspects.averageSalary}</td>
                              ))}
                            </tr>
                            <tr className="border-b">
                              <td className="p-3 font-medium">Growth Rate</td>
                              {selectedCourses.map(course => (
                                <td key={course.id} className="p-3">{course.careerProspects.growthRate}</td>
                              ))}
                            </tr>
                            <tr className="border-b">
                              <td className="p-3 font-medium">Minimum Marks</td>
                              {selectedCourses.map(course => (
                                <td key={course.id} className="p-3">{course.admissionRequirements.minimumMarks}</td>
                              ))}
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card>
                    <CardContent className="text-center py-12">
                      <Target className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                      <p className="text-muted-foreground">Select at least 2 courses to see detailed comparison</p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
            </Tabs>
          </div>
        )}

        {/* CTA */}
        {selectedCourses.length > 0 && (
          <Card className="bg-gradient-hero text-white border-0 shadow-glow animate-scale-in mt-8">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Make Your Choice?</h3>
              <p className="text-lg opacity-90 mb-6">
                Get personalized recommendations based on your profile and interests.
              </p>
              <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90">
                Get Personalized Guidance
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default CourseComparison;