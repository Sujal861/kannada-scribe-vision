import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

interface AddTextDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onAddText: (text: string, position: 'start' | 'end' | 'custom', customPosition?: number) => void;
  currentText: string;
}

export function AddTextDialog({ isOpen, onClose, onAddText, currentText }: AddTextDialogProps) {
  const [text, setText] = useState('');
  const [position, setPosition] = useState<'start' | 'end' | 'custom'>('end');
  const [customPosition, setCustomPosition] = useState('');
  const { toast } = useToast();

  // Reset form when dialog opens
  useEffect(() => {
    if (isOpen) {
      setText('');
      setPosition('end');
      setCustomPosition('');
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!text.trim()) {
      toast({
        title: "Error",
        description: "Please enter some text",
        variant: "destructive",
      });
      return;
    }

    if (position === 'custom') {
      const pos = parseInt(customPosition);
      if (isNaN(pos) || pos < 0 || pos > currentText.length) {
        toast({
          title: "Error",
          description: "Please enter a valid position",
          variant: "destructive",
        });
        return;
      }
      onAddText(text, position, pos);
    } else {
      onAddText(text, position);
    }
    
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Text</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="text">Text to Add</Label>
            <Textarea
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text to add..."
              className="min-h-[100px]"
              autoFocus
            />
          </div>

          <div className="space-y-2">
            <Label>Insert Position</Label>
            <RadioGroup value={position} onValueChange={(value: 'start' | 'end' | 'custom') => setPosition(value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="start" id="start" />
                <Label htmlFor="start">At the beginning</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="end" id="end" />
                <Label htmlFor="end">At the end</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="custom" id="custom" />
                <Label htmlFor="custom">At specific position</Label>
              </div>
            </RadioGroup>
          </div>

          {position === 'custom' && (
            <div className="space-y-2">
              <Label htmlFor="position">Position (0-{currentText.length})</Label>
              <Input
                id="position"
                type="number"
                min="0"
                max={currentText.length}
                value={customPosition}
                onChange={(e) => setCustomPosition(e.target.value)}
                placeholder="Enter position number"
              />
            </div>
          )}

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Add Text</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
} 