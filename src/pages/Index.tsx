import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Compass, 
  Target, 
  Users, 
  BookOpen, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  GraduationCap,
  Star,
  Brain
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const features = [
    {
      icon: Brain,
      title: "Personalized Assessment",
      description: "5-minute quiz analyzing your interests, strengths, and personality to recommend the perfect career path."
    },
    {
      icon: Target, 
      title: "Stream Recommendations",
      description: "Get clear guidance on choosing between Science, Commerce, or Arts based on your profile."
    },
    {
      icon: BookOpen,
      title: "Course Matching",
      description: "Discover degree courses that align with your interests and future career goals."
    },
    {
      icon: TrendingUp,
      title: "Career Roadmaps",
      description: "Visual pathways showing job opportunities, salary ranges, and growth prospects."
    },
    {
      icon: GraduationCap,
      title: "College Finder",
      description: "Find nearby government colleges offering your recommended courses with fees and rankings."
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "AI-powered recommendations backed by career counseling expertise and industry insights."
    }
  ];

  const stats = [
    { value: "50,000+", label: "Students Guided" },
    { value: "95%", label: "Accuracy Rate" },
    { value: "500+", label: "Career Paths" },
    { value: "24/7", label: "Available" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        
        <div className="container-responsive relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8 animate-fade-in text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-responsive-xl font-bold leading-tight">
                  Your <span className="bg-gradient-hero bg-clip-text text-transparent">Career Journey</span> Starts Here
                </h1>
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Disha helps Indian students discover their perfect career path through personalized assessments, 
                  expert guidance, and comprehensive roadmaps for success.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/profile" className="w-full sm:w-auto">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto text-lg px-6 sm:px-8 py-4 sm:py-6 hover-scale">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/quiz" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-6 sm:px-8 py-4 sm:py-6 hover-lift">
                    Take Free Quiz
                  </Button>
                </Link>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-secondary" />
                <span className="text-center lg:text-left">Free forever • No registration required • Instant results</span>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-hero rounded-3xl blur-3xl opacity-20 animate-float" />
              <img 
                src={heroImage} 
                alt="Students discovering their career path with Disha"
                className="relative w-full h-auto rounded-3xl shadow-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 lg:py-16 bg-muted/20">
        <div className="container-responsive">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up hover-lift" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-20">
        <div className="container-responsive">
          <div className="text-center mb-12 lg:mb-16 animate-fade-in">
            <h2 className="text-responsive-lg font-bold mb-4">
              How Disha Guides Your <span className="text-primary">Career Discovery</span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive platform combines AI-powered assessments with expert insights 
              to create your personalized career roadmap.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group card-interactive border-0 bg-gradient-card animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto p-3 bg-gradient-primary rounded-full w-fit mb-4 group-hover:shadow-glow hover-glow transition-all duration-300">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg lg:text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-sm lg:text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">
              Your Journey in <span className="text-secondary">3 Simple Steps</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Get personalized career guidance in just a few minutes
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Create Profile",
                description: "Tell us about your class, location, and basic information to personalize your experience.",
                icon: Users
              },
              {
                step: "02", 
                title: "Take Assessment",
                description: "Complete our 5-minute quiz to discover your interests, strengths, and personality traits.",
                icon: Brain
              },
              {
                step: "03",
                title: "Get Recommendations",
                description: "Receive personalized stream, course, and career recommendations with detailed roadmaps.",
                icon: Compass
              }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4 animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative">
                  <div className="mx-auto p-6 bg-gradient-secondary rounded-full w-fit mb-4">
                    <item.icon className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-hero text-primary-foreground border-0 shadow-glow animate-scale-in">
            <CardContent className="p-12 text-center">
              <div className="max-w-2xl mx-auto space-y-6">
                <h2 className="text-4xl font-bold">
                  Ready to Discover Your Perfect Career Path?
                </h2>
                <p className="text-xl opacity-90">
                  Join thousands of students who have found their direction with Disha. 
                  Start your personalized career journey today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/profile">
                    <Button variant="outline" size="lg" className="bg-background text-foreground hover:bg-background/90 text-lg px-8 py-6">
                      Get Started Free
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm opacity-80">
                  <Star className="h-4 w-4 fill-current" />
                  <span>Trusted by 50,000+ students across India</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;