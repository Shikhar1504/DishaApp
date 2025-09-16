import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-card border-0 bg-gradient-card animate-scale-in text-center">
        <CardHeader>
          <div className="mx-auto p-4 bg-muted rounded-full w-fit mb-4">
            <Search className="h-12 w-12 text-muted-foreground" />
          </div>
          <CardTitle className="text-6xl font-bold text-primary mb-2">404</CardTitle>
          <CardTitle className="text-2xl font-bold mb-2">Page Not Found</CardTitle>
          <CardDescription className="text-lg">
            Sorry, we couldn't find the page you're looking for. Let's get you back on track with your career journey.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/" className="flex-1">
              <Button variant="hero" className="w-full hover-scale">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="flex-1 hover-lift"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
          
          <div className="pt-4 border-t">
            <p className="text-sm text-muted-foreground mb-3">
              Explore these popular sections:
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link to="/quiz">
                <Button variant="ghost" size="sm">Take Quiz</Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="ghost" size="sm">Dashboard</Button>
              </Link>
              <Link to="/compare-courses">
                <Button variant="ghost" size="sm">Compare Courses</Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
