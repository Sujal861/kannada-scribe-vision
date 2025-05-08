
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";
import FeatureCard from "@/components/FeatureCard";
import { BarChart3, BookOpen, Database, Upload } from "lucide-react";

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-accent min-h-[90vh] flex items-center text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Kannada Handwritten Text Recognition
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Preserving cultural heritage through deep learning and computer vision
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link to="/demo">Try Demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-container">
        <SectionHeader
          title="Project Overview"
          subtitle="Bridging the gap between traditional Kannada handwriting and digital text"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <FeatureCard
            icon={<BookOpen size={36} />}
            title="Cultural Heritage"
            description="Preserving the rich linguistic heritage of Karnataka by digitizing handwritten Kannada texts."
          />
          <FeatureCard
            icon={<Database size={36} />}
            title="Comprehensive Dataset"
            description="Utilizing a diverse dataset of Kannada handwritten characters and words for robust recognition."
          />
          <FeatureCard
            icon={<BarChart3 size={36} />}
            title="Advanced Models"
            description="Implementing state-of-the-art CNN and RNN architectures for accurate text recognition."
          />
          <FeatureCard
            icon={<Upload size={36} />}
            title="Interactive Demo"
            description="Test our model with your own handwritten Kannada text samples in real-time."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience It?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Upload your handwritten Kannada text and see our deep learning model in action.
          </p>
          <Button asChild size="lg">
            <Link to="/demo">Try The Demo</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Index;
