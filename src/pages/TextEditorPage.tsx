import { TextEditor } from "@/components/TextEditor";

export default function TextEditorPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Kannada Text Editor</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Write, translate, and format your text with our powerful editor. 
          Features include real-time word counting, translation capabilities, 
          and proper text formatting.
        </p>
        <TextEditor />
      </div>
    </div>
  );
} 