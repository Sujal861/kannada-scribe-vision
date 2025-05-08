
import SectionHeader from "@/components/SectionHeader";

const About = () => {
  return (
    <div className="pt-24">
      <div className="section-container">
        <SectionHeader 
          title="About The Project" 
          subtitle="Understanding our mission and the importance of Kannada handwriting recognition"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1588582268448-81f78975cb2e?auto=format&fit=crop&w=1200&q=80" 
              alt="Kannada handwriting samples" 
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">Our Mission</h3>
            <p>
              The Kannada Handwritten Text Recognition project aims to bridge the gap between traditional handwritten documents and digital text using advanced deep learning techniques. By creating an accurate recognition system for Kannada script, we're working to preserve Karnataka's rich linguistic heritage while making historical documents more accessible in the digital age.
            </p>
            <p>
              Kannada, one of the oldest Dravidian languages, has a complex script with unique characters that present significant challenges for optical character recognition systems. Our research focuses on developing specialized neural networks that can handle these complexities and accurately recognize handwritten Kannada text.
            </p>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-primary mb-6">Key Objectives</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h4 className="text-xl font-medium mb-3">Cultural Preservation</h4>
              <p className="text-muted-foreground">
                Digitize and preserve valuable handwritten documents in Kannada, including historical manuscripts, personal letters, and scholarly works.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h4 className="text-xl font-medium mb-3">Research Advancement</h4>
              <p className="text-muted-foreground">
                Contribute to the field of optical character recognition for Indic scripts by developing novel deep learning architectures optimized for Kannada.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h4 className="text-xl font-medium mb-3">Accessibility</h4>
              <p className="text-muted-foreground">
                Make Kannada literature and documents more accessible through accurate text recognition, enabling search, analysis, and translation.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-primary mb-6">Project Timeline</h3>
          <div className="relative border-l-2 border-primary pl-8 ml-4 space-y-8">
            <div>
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px]"></div>
              <h4 className="text-xl font-medium">Phase 1: Dataset Collection</h4>
              <p className="text-muted-foreground mt-2">
                Gathering diverse handwritten Kannada samples from different demographics, creating a balanced dataset for training.
              </p>
            </div>
            
            <div>
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px]"></div>
              <h4 className="text-xl font-medium">Phase 2: Model Development</h4>
              <p className="text-muted-foreground mt-2">
                Designing and training CNN/CRNN models specifically optimized for Kannada script recognition challenges.
              </p>
            </div>
            
            <div>
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px]"></div>
              <h4 className="text-xl font-medium">Phase 3: System Integration</h4>
              <p className="text-muted-foreground mt-2">
                Building a complete end-to-end system with pre-processing, recognition, and post-processing stages.
              </p>
            </div>
            
            <div>
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px]"></div>
              <h4 className="text-xl font-medium">Phase 4: Deployment & Improvement</h4>
              <p className="text-muted-foreground mt-2">
                Launching the public demo and continuously refining the model based on user feedback and new data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
