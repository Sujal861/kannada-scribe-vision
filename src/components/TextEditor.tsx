import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { AddTextDialog } from "./AddTextDialog";
import { useToast } from "@/components/ui/use-toast";
import { useHotkeys } from "react-hotkeys-hook";
import { translateText } from "@/lib/translation";

interface TextEditorProps {
  maxWords?: number;
  defaultLanguage?: string;
}

export function TextEditor({ maxWords = 500, defaultLanguage = 'en' }: TextEditorProps) {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [sourceLanguage, setSourceLanguage] = useState(defaultLanguage);
  const [targetLanguage, setTargetLanguage] = useState('kn'); // Kannada as default target
  const [translatedText, setTranslatedText] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);
  const [isAddTextDialogOpen, setIsAddTextDialogOpen] = useState(false);
  const { toast } = useToast();

  // Word count calculation
  useEffect(() => {
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    setWordCount(words.length);
    setCharCount(text.length);
  }, [text]);

  // Translation function
  const handleTranslate = async () => {
    if (!text.trim()) {
      toast({
        title: "Error",
        description: "Please enter some text to translate",
        variant: "destructive",
      });
      return;
    }
    
    setIsTranslating(true);
    try {
      const translated = await translateText(text, sourceLanguage, targetLanguage);
      setTranslatedText(translated);
      
      toast({
        title: "Success",
        description: "Text translated successfully",
      });
    } catch (error) {
      console.error('Translation failed:', error);
      toast({
        title: "Error",
        description: "Failed to translate text. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsTranslating(false);
    }
  };

  const handleAddText = (newText: string, position: 'start' | 'end' | 'custom', customPosition?: number) => {
    setText(prevText => {
      if (position === 'start') {
        return newText + (prevText ? ' ' + prevText : '');
      } else if (position === 'end') {
        return prevText + (prevText ? ' ' : '') + newText;
      } else if (position === 'custom' && typeof customPosition === 'number') {
        return prevText.slice(0, customPosition) + newText + prevText.slice(customPosition);
      }
      return prevText;
    });

    toast({
      title: "Text Added",
      description: "The text has been added successfully",
    });
  };

  // Keyboard shortcuts
  useHotkeys('ctrl+shift+a', (e) => {
    e.preventDefault();
    setIsAddTextDialogOpen(true);
  });

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Source Language</Label>
          <Select value={sourceLanguage} onValueChange={setSourceLanguage}>
            <SelectTrigger>
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="kn">Kannada</SelectItem>
              <SelectItem value="hi">Hindi</SelectItem>
              <SelectItem value="ta">Tamil</SelectItem>
              <SelectItem value="te">Telugu</SelectItem>
              <SelectItem value="ml">Malayalam</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Target Language</Label>
          <Select value={targetLanguage} onValueChange={setTargetLanguage}>
            <SelectTrigger>
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="kn">Kannada</SelectItem>
              <SelectItem value="hi">Hindi</SelectItem>
              <SelectItem value="ta">Tamil</SelectItem>
              <SelectItem value="te">Telugu</SelectItem>
              <SelectItem value="ml">Malayalam</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label>Input Text</Label>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Ctrl+Shift+A</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsAddTextDialogOpen(true)}
              className="flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Add Text
            </Button>
          </div>
        </div>
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your text here..."
          className="min-h-[200px]"
        />
      </div>

      <div className="flex justify-between text-sm text-muted-foreground">
        <div>Words: {wordCount}/{maxWords}</div>
        <div>Characters: {charCount}</div>
      </div>

      <Progress value={(wordCount / maxWords) * 100} className="h-2" />

      <Button 
        onClick={handleTranslate}
        disabled={isTranslating || !text.trim()}
        className="w-full"
      >
        {isTranslating ? 'Translating...' : 'Translate'}
      </Button>

      {translatedText && (
        <div className="space-y-2">
          <Label>Translated Text</Label>
          <div className="p-4 border rounded-md bg-muted">
            {translatedText}
          </div>
        </div>
      )}

      <AddTextDialog
        isOpen={isAddTextDialogOpen}
        onClose={() => setIsAddTextDialogOpen(false)}
        onAddText={handleAddText}
        currentText={text}
      />
    </div>
  );
} 