
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Download } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

interface TextOutputPanelProps {
  result: string | null;
  confidence: number | null;
  wordCount: number | null;
  charCount: number | null;
  processTime: number | null;
  wordLimit?: number;
  onDownload: () => void;
  onResultChange: (newText: string) => void;
}

const TextOutputPanel = ({
  result,
  confidence,
  wordCount,
  charCount,
  processTime,
  wordLimit = 50,
  onDownload,
  onResultChange,
}: TextOutputPanelProps) => {
  const isWordLimitExceeded = wordLimit && wordCount ? wordCount > wordLimit : false;
  const wordLimitPercentage = wordLimit && wordCount ? Math.min((wordCount / wordLimit) * 100, 100) : 0;
  
  return (
    <div className="mt-8 space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">Recognition Results</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 p-3 rounded-lg border">
            <p className="text-sm text-muted-foreground mb-1">Confidence Score</p>
            <div className="flex items-center gap-2">
              <Progress value={confidence || 0} className="h-2" />
              <span className="font-medium">{confidence?.toFixed(1)}%</span>
            </div>
          </div>
          
          <div className="bg-gray-50 p-3 rounded-lg border">
            <p className="text-sm text-muted-foreground mb-1">Processing Time</p>
            <p className="font-medium">{processTime} seconds</p>
          </div>
          
          <div className="bg-gray-50 p-3 rounded-lg border">
            <div className="flex justify-between items-start">
              <p className="text-sm text-muted-foreground mb-1">Word Count</p>
              {wordLimit && (
                <span className={`text-xs font-medium ${isWordLimitExceeded ? 'text-destructive' : 'text-muted-foreground'}`}>
                  {wordCount || 0}/{wordLimit}
                </span>
              )}
            </div>
            {wordLimit && (
              <Progress 
                value={wordLimitPercentage} 
                className={`h-1 mb-1 ${isWordLimitExceeded ? 'bg-destructive' : ''}`}
              />
            )}
            <p className="font-medium">{wordCount} words</p>
          </div>
          
          <div className="bg-gray-50 p-3 rounded-lg border">
            <p className="text-sm text-muted-foreground mb-1">Character Count</p>
            <p className="font-medium">{charCount} characters</p>
          </div>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg border">
          <p className="text-sm text-muted-foreground mb-2">Recognized Text:</p>
          <div className="mb-2">
            <Textarea
              className="min-h-[120px] font-kannada text-lg bg-white"
              value={result || ""}
              onChange={(e) => onResultChange(e.target.value)}
              placeholder="Recognition results will appear here"
            />
          </div>
          
          <div className="flex justify-between items-center mt-2 text-xs text-muted-foreground">
            <div>
              <span>Auto-detected language: <span className="font-semibold">Kannada</span></span>
            </div>
            <div>
              <span className={`${isWordLimitExceeded ? 'text-destructive font-medium' : ''}`}>
                {wordCount || 0} words / {charCount || 0} characters
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end mt-4">
          <Button variant="outline" size="sm" onClick={onDownload}>
            <Download className="mr-2 h-4 w-4" />
            Download Results
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TextOutputPanel;
