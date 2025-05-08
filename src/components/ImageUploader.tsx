
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Image, Upload } from 'lucide-react';
import { removeBackground, loadImage } from '@/utils/backgroundRemoval';

interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
}

const ImageUploader = ({ onImageUpload }: ImageUploaderProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [isProcessingBackground, setIsProcessingBackground] = useState(false);
  const [originalImage, setOriginalImage] = useState<File | null>(null);
  
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };
  
  const handleFile = (file: File) => {
    // Store original file
    setOriginalImage(file);
    
    // Create preview
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
    
    // Pass file to parent component
    onImageUpload(file);
  };

  const handleRemoveBackground = async () => {
    if (!originalImage || !preview) return;
    
    try {
      setIsProcessingBackground(true);
      
      // Load image
      const img = await loadImage(originalImage);
      
      // Remove background
      const processedBlob = await removeBackground(img);
      
      // Convert to File object
      const processedFile = new File([processedBlob], originalImage.name, {
        type: 'image/png',
        lastModified: new Date().getTime()
      });
      
      // Update preview
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(processedBlob);
      
      // Pass processed file to parent
      onImageUpload(processedFile);
      
    } catch (error) {
      console.error('Background removal failed:', error);
    } finally {
      setIsProcessingBackground(false);
    }
  };

  return (
    <div className="w-full">
      <div 
        className={`
          border-2 border-dashed rounded-lg p-6 
          transition-colors duration-300 
          ${dragActive ? "border-primary bg-primary/5" : "border-gray-300 hover:border-primary/50"}
          ${preview ? "" : "text-center"}
        `}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input 
          type="file" 
          id="image-upload" 
          className="hidden"
          accept="image/*"
          onChange={handleChange}
        />
        
        {preview ? (
          <div className="space-y-4">
            <div className="relative max-h-80 overflow-hidden rounded-md">
              <img 
                src={preview} 
                alt="Uploaded preview" 
                className="mx-auto max-h-80 object-contain" 
              />
            </div>
            <div className="flex justify-center gap-3">
              <Button 
                variant="outline" 
                onClick={() => {
                  setPreview(null);
                  setOriginalImage(null);
                  onImageUpload({} as File); // Reset
                }}
              >
                Remove Image
              </Button>
              
              <Button
                variant="secondary"
                onClick={handleRemoveBackground}
                disabled={isProcessingBackground || !preview}
              >
                {isProcessingBackground ? (
                  <>
                    <span className="mr-2">Processing...</span>
                    <div className="h-4 w-4 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                  </>
                ) : (
                  <>
                    <Image className="mr-2 h-4 w-4" />
                    Remove Background
                  </>
                )}
              </Button>
            </div>
          </div>
        ) : (
          <label 
            htmlFor="image-upload"
            className="flex flex-col items-center justify-center h-40 cursor-pointer"
          >
            <Upload size={40} className="mb-4 text-muted-foreground" />
            <p className="font-medium text-primary">Click to upload or drag and drop</p>
            <p className="text-sm text-muted-foreground mt-1">
              PNG, JPG or JPEG (max 10MB)
            </p>
          </label>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
