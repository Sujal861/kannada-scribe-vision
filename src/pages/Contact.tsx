
import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="pt-24">
      <div className="section-container">
        <SectionHeader 
          title="Contact Us" 
          subtitle="Get in touch with our team for feedback, queries, or collaboration opportunities"
          centered={true}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8">
                We'd love to hear from you! Whether you have questions about our research, want to contribute to the project, or are interested in implementing our technology, please reach out using the form or contact details below.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-primary/10 rounded-full text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Address</h4>
                    <p className="text-muted-foreground">
                      Department of Computer Science<br />
                      Institute of Advanced Research<br />
                      123 Innovation Road, Bengaluru 560001<br />
                      Karnataka, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-primary/10 rounded-full text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a 
                      href="mailto:info@kannadascript.ai" 
                      className="text-primary hover:underline"
                    >
                      info@kannadascript.ai
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-primary/10 rounded-full text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-muted-foreground">
                      +91 (80) 2345-6789
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t">
              <h3 className="text-xl font-semibold mb-4">Follow Our Research</h3>
              <p className="text-muted-foreground mb-4">
                Stay updated with our latest research papers and developments in Kannada script recognition.
              </p>
              <ul className="list-disc list-inside space-y-2 text-primary">
                <li><a href="#" className="hover:underline">GitHub Repository</a></li>
                <li><a href="#" className="hover:underline">Research Publications</a></li>
                <li><a href="#" className="hover:underline">Blog & Updates</a></li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16 h-96 bg-gray-200 w-full">
        {/* This would be a real map in a production environment */}
        <div className="h-full w-full flex items-center justify-center bg-gray-100">
          <p className="text-gray-500">Interactive Map Would Be Displayed Here</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
