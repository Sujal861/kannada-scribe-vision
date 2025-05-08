
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { UploadIcon } from 'lucide-react';

interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
}

const ImageUploader = ({ onImageUpload }: ImageUploaderProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  
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
    // Create preview
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
    
    // Pass file to parent component
    onImageUpload(file);
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
            <div className="flex justify-center">
              <Button 
                variant="outline" 
                onClick={() => {
                  setPreview(null);
                  onImageUpload({} as File); // Reset
                }}
              >
                Remove Image
              </Button>
            </div>
          </div>
        ) : (
          <label 
            htmlFor="image-upload"
            className="flex flex-col items-center justify-center h-40 cursor-pointer"
          >
            <UploadIcon size={40} className="mb-4 text-muted-foreground" />
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
