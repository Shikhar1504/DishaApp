import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, BookOpen, MapPin, ArrowRight, Mail, Phone, Target, Heart } from "lucide-react";
import { toast } from "sonner";

const Profile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    class: "",
    location: "",
    interests: [] as string[],
    careerGoals: "",
    preferredStream: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.class || !formData.location || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    // Store profile data
    localStorage.setItem("dishaProfile", JSON.stringify(formData));
    toast.success("Profile created successfully!");
    navigate("/quiz");
  };

  const classOptions = [
    "Class 8",
    "Class 9", 
    "Class 10",
    "Finished Class 10",
    "Class 11 Science",
    "Class 11 Commerce", 
    "Class 11 Arts",
    "Class 12 Science",
    "Class 12 Commerce",
    "Class 12 Arts",
    "Finished Class 12"
  ];

  const interestOptions = [
    "Technology", "Healthcare", "Business", "Arts & Design", "Education", 
    "Engineering", "Sports", "Music", "Writing", "Research", "Social Service", "Travel"
  ];

  const streamOptions = [
    "Science", "Commerce", "Arts", "Not sure yet"
  ];

  const handleInterestChange = (interest: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({ ...prev, interests: [...prev.interests, interest] }));
    } else {
      setFormData(prev => ({ ...prev, interests: prev.interests.filter(i => i !== interest) }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl animate-scale-in">
        <Card className="shadow-card border-0 bg-gradient-card">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto p-3 bg-gradient-primary rounded-full w-fit">
              <User className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold">Create Your Profile</CardTitle>
              <CardDescription className="mt-2">
                Tell us about yourself to get personalized career guidance
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Your Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-11"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-11"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-11"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-sm font-medium flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Your Location *
                  </Label>
                  <Input
                    id="location"
                    type="text"
                    placeholder="Enter your city/state"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="h-11"
                  />
                </div>
              </div>

              {/* Educational Information */}
              <div className="space-y-2">
                <Label htmlFor="class" className="text-sm font-medium flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Your Class *
                </Label>
                <Select onValueChange={(value) => setFormData({ ...formData, class: value })}>
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select your current class" />
                  </SelectTrigger>
                  <SelectContent>
                    {classOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label className="text-sm font-medium flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Preferred Stream (if known)
                </Label>
                <Select onValueChange={(value) => setFormData({ ...formData, preferredStream: value })}>
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select preferred stream" />
                  </SelectTrigger>
                  <SelectContent>
                    {streamOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Interests */}
              <div className="space-y-3">
                <Label className="text-sm font-medium flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  Your Interests (select all that apply)
                </Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {interestOptions.map((interest) => (
                    <div key={interest} className="flex items-center space-x-2">
                      <Checkbox
                        id={interest}
                        checked={formData.interests.includes(interest)}
                        onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                      />
                      <Label htmlFor={interest} className="text-sm cursor-pointer">
                        {interest}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Goals */}
              <div className="space-y-2">
                <Label htmlFor="careerGoals" className="text-sm font-medium">
                  Career Goals or Dreams (optional)
                </Label>
                <Textarea
                  id="careerGoals"
                  placeholder="Tell us about your career aspirations or what you want to achieve..."
                  value={formData.careerGoals}
                  onChange={(e) => setFormData({ ...formData, careerGoals: e.target.value })}
                  className="min-h-[80px] resize-none"
                />
              </div>

              <Button type="submit" variant="hero" className="w-full h-12 hover-scale" size="lg">
                Continue to Quiz
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                * Required fields. Your information will be used to provide personalized career guidance.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;