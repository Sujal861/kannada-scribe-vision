
import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import ImageUploader from "@/components/ImageUploader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, Download } from "lucide-react";
import { toast } from "sonner";

const Demo = () => {
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [confidence, setConfidence] = useState<number | null>(null);
  
  const handleImageUpload = (file: File) => {
    setImage(file);
    setResult(null);
    setConfidence(null);
  };
  
  const handleRecognition = async () => {
    if (!image) {
      toast.error("Please upload an image first");
      return;
    }
    
    setLoading(true);
    
    try {
      // Simulate API call with a timeout
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      // Mock result - in a real app this would come from the API
      setResult("ಕನ್ನಡ ಲಿಪಿ ಗುರುತಿಸುವಿಕೆ ಯಂತ್ರ ಕಲಿಕೆ ಮಾದರಿ");
      setConfidence(94.7);
      
      toast.success("Text recognition completed");
    } catch (error) {
      console.error("Recognition error:", error);
      toast.error("Failed to process the image. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  
  const handleDownload = () => {
    if (!result) return;
    
    const element = document.createElement("a");
    const file = new Blob([result], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "recognized_text.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="pt-24">
      <div className="section-container">
        <SectionHeader 
          title="Interactive Demo" 
          subtitle="Try our Kannada handwritten text recognition model with background removal"
          centered={true}
        />
        
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Upload Handwritten Text</h3>
                <p className="text-muted-foreground mb-6">
                  Upload a clear image of handwritten Kannada text. For best results, use the background removal tool to isolate text. 
                  We support JPG, PNG, and JPEG formats.
                </p>
                <ImageUploader onImageUpload={handleImageUpload} />
              </div>
              
              <div className="flex justify-center mt-8 mb-8">
                <Button 
                  onClick={handleRecognition}
                  disabled={!image || loading}
                  className="px-8"
                >
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {loading ? "Processing..." : "Recognize Text"}
                </Button>
              </div>
              
              {result && (
                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Recognition Result</h3>
                    {confidence && (
                      <div className="mb-3 flex items-center">
                        <span className="text-sm text-muted-foreground mr-2">Confidence:</span>
                        <div className="h-2 bg-gray-200 rounded-full flex-grow max-w-xs">
                          <div 
                            className="h-full bg-green-500 rounded-full" 
                            style={{ width: `${confidence}%` }}
                          ></div>
                        </div>
                        <span className="ml-2 text-sm font-medium">{confidence.toFixed(1)}%</span>
                      </div>
                    )}
                    
                    <div className="p-4 bg-gray-50 rounded-lg border min-h-[100px]">
                      <p className="text-lg font-kannada">{result}</p>
                    </div>
                    
                    <div className="flex justify-end mt-4">
                      <Button variant="outline" size="sm" onClick={handleDownload}>
                        <Download className="mr-2 h-4 w-4" />
                        Download Text
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
          
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Usage Guidelines</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-gray-50 rounded-lg border">
                <h4 className="font-medium mb-2">Background Removal</h4>
                <p className="text-sm text-muted-foreground">
                  Use our background removal tool to isolate text from noisy backgrounds for better recognition accuracy.
                </p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg border">
                <h4 className="font-medium mb-2">Image Quality</h4>
                <p className="text-sm text-muted-foreground">
                  For optimal results, use well-lit images with good contrast. The text should be clearly visible against the background.
                </p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg border">
                <h4 className="font-medium mb-2">Limitations</h4>
                <p className="text-sm text-muted-foreground">
                  The model may struggle with extremely stylized handwriting, low-quality images, or text with excessive background noise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
