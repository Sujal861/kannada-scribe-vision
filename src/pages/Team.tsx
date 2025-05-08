
import SectionHeader from "@/components/SectionHeader";
import TeamMemberCard from "@/components/TeamMemberCard";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Ananya Sharma",
      role: "Project Lead",
      bio: "Ph.D. in Computer Vision with 10+ years of experience in OCR systems. Leading the architectural design of the recognition model.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Mahesh Patel",
      role: "ML Engineer",
      bio: "Specializes in deep learning for natural language processing. Responsible for model training and optimization.",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Rajiv Kumar",
      role: "Dataset Curator",
      bio: "Linguist with expertise in Kannada script. Oversees the collection and annotation of the handwritten samples dataset.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Sunita Rao",
      role: "Software Developer",
      bio: "Full-stack developer responsible for implementing the web interface and API integration for the recognition system.",
      image: "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Dr. Venkat Iyer",
      role: "Research Advisor",
      bio: "Professor of Computer Science with research focus on pattern recognition and document analysis systems.",
      image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Priya Desai",
      role: "UI/UX Designer",
      bio: "Expert in creating intuitive user interfaces for AI-powered applications with focus on accessibility.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80"
    },
  ];

  return (
    <div className="pt-24">
      <div className="section-container">
        <SectionHeader 
          title="Our Team" 
          subtitle="Meet the researchers and developers behind the Kannada Handwritten Text Recognition project"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
            />
          ))}
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-8 text-center">Our Partners & Collaborators</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((index) => (
              <div 
                key={index} 
                className="p-6 bg-white rounded-lg border flex items-center justify-center h-24"
              >
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Partner Logo</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold mb-4">Join Our Research Team</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're looking for passionate researchers and developers to join our team and help advance Kannada script recognition technology.
          </p>
          <a 
            href="#" 
            className="inline-block bg-primary hover:bg-primary/90 text-white rounded-md px-6 py-3 transition duration-200"
          >
            View Open Positions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Team;
