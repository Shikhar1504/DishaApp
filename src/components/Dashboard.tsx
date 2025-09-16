import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  BookOpen, 
  TrendingUp, 
  MapPin, 
  Star, 
  GraduationCap,
  Briefcase,
  School,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("recommendations");

  // Mock data based on quiz results
  const recommendations = {
    stream: "Science",
    confidence: 92,
    courses: [
      { 
        name: "B.Sc. Computer Science", 
        match: 95, 
        description: "Perfect for logical thinking and problem-solving skills",
        duration: "3 years",
        scope: "Software Development, Data Science, AI/ML"
      },
      { 
        name: "B.Tech Information Technology", 
        match: 88, 
        description: "Great for technical innovation and team leadership",
        duration: "4 years",
        scope: "Software Engineering, System Design, Tech Leadership"
      },
      { 
        name: "B.Sc. Mathematics", 
        match: 85, 
        description: "Ideal for analytical and problem-solving mindset",
        duration: "3 years",
        scope: "Data Analysis, Research, Finance, Teaching"
      }
    ],
    careers: [
      { name: "Software Developer", growth: "22%", salary: "₹6-15 LPA" },
      { name: "Data Scientist", growth: "35%", salary: "₹8-25 LPA" },
      { name: "Cybersecurity Analyst", growth: "31%", salary: "₹7-20 LPA" },
      { name: "AI/ML Engineer", growth: "40%", salary: "₹10-30 LPA" }
    ],
    colleges: [
      { 
        name: "Delhi University", 
        type: "Government", 
        fees: "₹15,000/year", 
        ranking: "1st",
        location: "Delhi",
        distance: "5 km",
        courses: ["B.Sc. Computer Science", "B.Sc. Mathematics", "B.Com"],
        cutoff: "95%",
        admissionProcess: "Merit-based + Entrance",
        facilities: ["Library", "Labs", "Hostel", "Canteen", "Sports"],
        accreditation: "NAAC A++",
        establishedYear: "1922"
      },
      { 
        name: "Jamia Millia Islamia", 
        type: "Government", 
        fees: "₹12,000/year", 
        ranking: "3rd",
        location: "New Delhi",
        distance: "12 km",
        courses: ["B.Tech CSE", "B.Sc. IT", "B.Com"],
        cutoff: "88%",
        admissionProcess: "Entrance Test (JMI EEE)",
        facilities: ["Modern Labs", "Library", "Hostel", "Medical Center"],
        accreditation: "NAAC A",
        establishedYear: "1920"
      },
      { 
        name: "IP University", 
        type: "Government", 
        fees: "₹18,000/year", 
        ranking: "5th",
        location: "Delhi",
        distance: "8 km",
        courses: ["B.Tech IT", "BCA", "B.Sc. Computer Science"],
        cutoff: "82%",
        admissionProcess: "IPU CET",
        facilities: ["Computer Labs", "Library", "Placement Cell", "Cafeteria"],
        accreditation: "NAAC A",
        establishedYear: "1998"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-20 pb-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">
            Your Personalized Career Dashboard
          </h1>
          <p className="text-xl text-muted-foreground">
            Based on your profile and quiz results
          </p>
        </div>

        {/* Main Recommendation Card */}
        <Card className="mb-8 shadow-card border-0 bg-gradient-card animate-scale-in">
          <CardHeader className="text-center">
            <div className="mx-auto p-4 bg-gradient-primary rounded-full w-fit mb-4">
              <Target className="h-8 w-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">Recommended Stream: {recommendations.stream}</CardTitle>
            <CardDescription>
              <div className="flex items-center justify-center gap-2 mt-2">
                <span>Confidence Score:</span>
                <Badge variant="secondary" className="text-lg font-semibold">
                  {recommendations.confidence}%
                </Badge>
              </div>
            </CardDescription>
            <Progress value={recommendations.confidence} className="w-full h-3 mt-4" />
          </CardHeader>
        </Card>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-muted/50 p-1 rounded-lg">
            {[
              { id: "recommendations", label: "Courses", icon: BookOpen },
              { id: "careers", label: "Careers", icon: Briefcase },
              { id: "colleges", label: "Colleges", icon: School }
            ].map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "hero" : "ghost"}
                size="sm"
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center gap-2"
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="animate-fade-in">
          {activeTab === "recommendations" && (
            <div className="grid gap-6">
              <h2 className="text-2xl font-bold text-center mb-6">Top Course Recommendations</h2>
              {recommendations.courses.map((course, index) => (
                <Card key={index} className="shadow-soft hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-primary">{course.name}</h3>
                        <p className="text-muted-foreground mt-1">{course.description}</p>
                      </div>
                      <Badge variant="success" className="ml-4">
                        {course.match}% Match
                      </Badge>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4 text-primary" />
                        <span><strong>Duration:</strong> {course.duration}</span>
                      </div>
                      <div className="md:col-span-2">
                        <strong>Career Scope:</strong> {course.scope}
                      </div>
                    </div>

                    <Button 
                      variant="outline" 
                      className="mt-4 w-full md:w-auto"
                      onClick={() => navigate(`/roadmap/${encodeURIComponent(course.name)}`)}
                    >
                      View Roadmap
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {activeTab === "careers" && (
            <div className="grid gap-6">
              <h2 className="text-2xl font-bold text-center mb-6">Career Opportunities</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {recommendations.careers.map((career, index) => (
                  <Card key={index} className="shadow-soft hover:shadow-card transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold">{career.name}</h3>
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Growth Rate</span>
                          <Badge variant="success">+{career.growth}</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Salary Range</span>
                          <span className="font-semibold">{career.salary}</span>
                        </div>
                      </div>

                      <Button variant="outline" size="sm" className="mt-4 w-full">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "colleges" && (
            <div className="grid gap-6">
              <h2 className="text-2xl font-bold text-center mb-6">Nearby Government Colleges</h2>
              {recommendations.colleges.map((college, index) => (
                <Card key={index} className="shadow-soft hover:shadow-card transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-primary mb-2">{college.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{college.location} • {college.distance}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <GraduationCap className="h-4 w-4" />
                            <span>Est. {college.establishedYear}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="outline">{college.type}</Badge>
                          <Badge variant="secondary">{college.accreditation}</Badge>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="text-sm font-semibold">Rank {college.ranking}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Course Information */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Available Courses:</h4>
                      <div className="flex flex-wrap gap-2">
                        {college.courses.map((course, courseIndex) => (
                          <Badge key={courseIndex} variant="outline" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Admission Details */}
                    <div className="grid md:grid-cols-2 gap-4 mb-4 p-4 bg-muted/20 rounded-lg">
                      <div>
                        <span className="text-xs font-medium text-muted-foreground">Cutoff</span>
                        <p className="text-sm font-semibold text-primary">{college.cutoff}</p>
                      </div>
                      <div>
                        <span className="text-xs font-medium text-muted-foreground">Admission Process</span>
                        <p className="text-sm">{college.admissionProcess}</p>
                      </div>
                    </div>
                    
                    {/* Facilities */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium mb-2">Facilities:</h4>
                      <div className="flex flex-wrap gap-2">
                        {college.facilities.map((facility, facilityIndex) => (
                          <div key={facilityIndex} className="flex items-center gap-1 text-xs text-muted-foreground bg-muted/30 px-2 py-1 rounded">
                            <CheckCircle2 className="h-3 w-3 text-secondary" />
                            <span>{facility}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <span className="text-lg font-bold text-secondary">
                          {college.fees}
                        </span>
                        <p className="text-xs text-muted-foreground">Annual fees</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Compare
                        </Button>
                        <Button variant="hero" size="sm">
                          View Details
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;