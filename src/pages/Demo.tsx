import { useState, useEffect } from "react";
import SectionHeader from "@/components/SectionHeader";
import ImageUploader from "@/components/ImageUploader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import TextOutputPanel from "@/components/TextOutputPanel";
import { TextEditor } from "@/components/TextEditor";

const Demo = () => {
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [confidence, setConfidence] = useState<number | null>(null);
  const [wordCount, setWordCount] = useState<number | null>(null);
  const [charCount, setCharCount] = useState<number | null>(null);
  const [processTime, setProcessTime] = useState<number | null>(null);
  const [wordLimit, setWordLimit] = useState<number>(50);
  
  const handleImageUpload = (file: File) => {
    setImage(file);
    setResult(null);
    setConfidence(null);
    setWordCount(null);
    setCharCount(null);
    setProcessTime(null);
  };
  
  const calculateTextMetrics = (text: string) => {
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const chars = text.replace(/\s+/g, '').length;
    
    setWordCount(words.length);
    setCharCount(chars);
    
    return { words: words.length, chars };
  };
  
  const handleResultChange = (newText: string) => {
    setResult(newText);
    calculateTextMetrics(newText);
  };
  
  const handleRecognition = async () => {
    if (!image) {
      toast.error("Please upload an image first");
      return;
    }
    
    setLoading(true);
    const startTime = performance.now();
    
    try {
      // Simulate API call with a timeout
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      // Mock result - in a real app this would come from the API
      const recognizedText = "ಕನ್ನಡ ಲಿಪಿ ಗುರುತಿಸುವಿಕೆ ಯಂತ್ರ ಕಲಿಕೆ ಮಾದರಿ";
      setResult(recognizedText);
      
      // Calculate metrics
      setConfidence(94.7);
      calculateTextMetrics(recognizedText);
      setProcessTime(Number(((performance.now() - startTime) / 1000).toFixed(2)));
      
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
    
    // Create a rich text file with metadata
    const metadata = `
Recognized Text Analysis:
------------------------
Date: ${new Date().toLocaleString()}
Confidence Score: ${confidence?.toFixed(1)}%
Word Count: ${wordCount}
Character Count: ${charCount}
Processing Time: ${processTime}s
Word Limit Status: ${wordCount && wordLimit ? (wordCount > wordLimit ? "EXCEEDED" : "Within limit") : "N/A"}

RECOGNIZED TEXT:
------------------------
${result}
`;
    
    const element = document.createElement("a");
    const file = new Blob([metadata], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "recognized_kannada_text.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast.success("Text file downloaded successfully");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SectionHeader
        title="Interactive Demo"
        subtitle="Try our Kannada handwritten text recognition model with enhanced output formatting"
        centered={true}
      />
      
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Image Upload Section */}
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
              <TextOutputPanel
                result={result}
                confidence={confidence}
                wordCount={wordCount}
                charCount={charCount}
                processTime={processTime}
                wordLimit={wordLimit}
                onDownload={handleDownload}
                onResultChange={handleResultChange}
              />
            )}
          </CardContent>
        </Card>

        {/* Text Editor Section */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Text Editor & Translation</h3>
            <p className="text-muted-foreground mb-6">
              Edit, format, and translate your text with our advanced editor. 
              Use the Add Text button or Ctrl+Shift+A to add more content.
            </p>
            <TextEditor />
          </CardContent>
        </Card>

        {/* Usage Guidelines */}
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
              <h4 className="font-medium mb-2">Word Limits</h4>
              <p className="text-sm text-muted-foreground">
                For best performance, try to keep your text under the recommended word limit. Exceeding limits may affect processing speed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
