
import { Card, CardContent } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string;
  description?: string;
}

const MetricCard = ({ title, value, description }: MetricCardProps) => {
  return (
    <Card className="text-center hover:shadow-md transition-shadow duration-300">
      <CardContent className="p-6">
        <h3 className="text-lg font-medium text-muted-foreground mb-2">{title}</h3>
        <p className="text-3xl font-bold text-primary mb-2">{value}</p>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </CardContent>
    </Card>
  );
};

export default MetricCard;
