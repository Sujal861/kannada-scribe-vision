
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="h-full hover:shadow-md transition-shadow duration-300">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="text-accent mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm flex-grow">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
