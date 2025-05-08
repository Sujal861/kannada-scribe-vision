
import { Card, CardContent } from "@/components/ui/card";

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const TeamMemberCard = ({ name, role, bio, image }: TeamMemberCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={`${name} - ${role}`} 
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-primary mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{role}</p>
        <p className="text-sm">{bio}</p>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;
