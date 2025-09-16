import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Brain, CheckCircle2, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const questions = [
    {
      id: 1,
      question: "Do you enjoy building things with your hands?",
      options: [
        "I love creating and building things",
        "I enjoy it sometimes", 
        "Not really my thing",
        "I prefer mental challenges"
      ]
    },
    {
      id: 2,
      question: "How do you feel about leading a team?",
      options: [
        "I love taking charge and leading",
        "I'm comfortable when needed",
        "I prefer being part of a team",
        "I work better alone"
      ]
    },
    {
      id: 3,
      question: "Do you like solving complex puzzles or problems?",
      options: [
        "Absolutely! I love challenges",
        "Yes, but not too complex",
        "Sometimes, depends on the topic",
        "I prefer straightforward tasks"
      ]
    },
    {
      id: 4,
      question: "What motivates you the most?",
      options: [
        "Helping others and making a difference",
        "Achieving personal success",
        "Learning new things constantly",
        "Financial stability and security"
      ]
    },
    {
      id: 5,
      question: "How do you prefer to work?",
      options: [
        "In collaborative team environments",
        "Independently with occasional check-ins",
        "In structured, organized settings",
        "In creative, flexible environments"
      ]
    }
  ];

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz completed
      localStorage.setItem("dishaQuizAnswers", JSON.stringify(newAnswers));
      toast.success("Quiz completed! Generating your personalized recommendations...");
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl animate-scale-in">
        <Card className="shadow-card border-0 bg-gradient-card">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto p-3 bg-gradient-secondary rounded-full w-fit animate-float">
              <Brain className="h-8 w-8 text-secondary-foreground" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold">Discovery Quiz</CardTitle>
              <p className="text-muted-foreground mt-2">
                Question {currentQuestion + 1} of {questions.length}
              </p>
            </div>
            <Progress value={progress} className="w-full h-2" />
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="text-center space-y-6">
              <h2 className="text-xl font-semibold">
                {questions[currentQuestion].question}
              </h2>

              <div className="grid gap-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="h-auto p-4 text-left justify-start hover:bg-primary/5 hover:border-primary transition-all duration-300"
                    onClick={() => handleAnswer(index)}
                  >
                    <div className="flex items-center w-full">
                      <div className="w-6 h-6 rounded-full border-2 border-primary/30 mr-3 flex items-center justify-center">
                        {answers[currentQuestion] === index && (
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                        )}
                      </div>
                      <span className="flex-1">{option}</span>
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Button>
                ))}
              </div>
            </div>

            {currentQuestion > 0 && (
              <Button
                variant="outline"
                onClick={() => setCurrentQuestion(currentQuestion - 1)}
                className="w-full"
              >
                Previous Question
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Quiz;