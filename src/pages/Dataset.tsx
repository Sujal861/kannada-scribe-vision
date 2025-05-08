
import { useState } from 'react';
import SectionHeader from "@/components/SectionHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, ExternalLink } from "lucide-react";

const Dataset = () => {
  const [selectedTab, setSelectedTab] = useState("overview");
  
  return (
    <div className="pt-24">
      <div className="section-container">
        <SectionHeader
          title="Dataset Information"
          subtitle="Explore the data behind our Kannada handwritten text recognition model"
        />
        
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="examples">Examples</TabsTrigger>
            <TabsTrigger value="download">Download</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="md:col-span-2">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Dataset Composition</h3>
                  <p className="mb-4">
                    Our Kannada handwritten text recognition dataset consists of over 25,000 handwritten samples collected from more than 1,000 writers across different age groups, educational backgrounds, and geographical regions in Karnataka. The dataset includes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Individual Kannada characters (both vowels and consonants)</li>
                    <li>Compound characters and special symbols</li>
                    <li>Common words and phrases</li>
                    <li>Complete sentences and paragraphs</li>
                  </ul>
                  <p>
                    Each sample in the dataset is carefully annotated with the corresponding text, writer demographic information, and writing tool used (pen, pencil, etc.). The dataset is balanced across different character frequencies to ensure robust training.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Dataset Statistics</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Samples</p>
                      <p className="text-2xl font-bold">25,000+</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Unique Writers</p>
                      <p className="text-2xl font-bold">1,000+</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Character Classes</p>
                      <p className="text-2xl font-bold">49</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Dataset Size</p>
                      <p className="text-2xl font-bold">4.2 GB</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Split Ratio (Train/Val/Test)</p>
                      <p className="text-2xl font-bold">70/15/15</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="examples" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden border">
                  <div className="p-4 bg-gray-50 border-b">
                    <h4 className="font-medium">Example {index}</h4>
                  </div>
                  <div className="p-4">
                    <div className="aspect-square bg-gray-100 flex items-center justify-center mb-3">
                      <img 
                        src={`https://picsum.photos/seed/${index + 100}/300/300`}
                        alt={`Kannada handwriting sample ${index}`}
                        className="max-w-full max-h-full"
                      />
                    </div>
                    <p className="text-sm text-center text-muted-foreground">Handwritten sample</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="download" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Download Dataset</h3>
                <p className="mb-6">
                  Our dataset is available for academic and research purposes. Please fill out the request form to get access to the dataset. By downloading, you agree to cite our paper and adhere to the usage terms.
                </p>
                
                <div className="space-y-6">
                  <div className="p-4 border rounded-lg flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">Full Dataset (4.2 GB)</h4>
                      <p className="text-sm text-muted-foreground">Contains all samples with annotations</p>
                    </div>
                    <Button>
                      <Download className="mr-2 h-4 w-4" /> Download
                    </Button>
                  </div>
                  
                  <div className="p-4 border rounded-lg flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">Sample Dataset (500 MB)</h4>
                      <p className="text-sm text-muted-foreground">Contains 2,000 representative samples</p>
                    </div>
                    <Button>
                      <Download className="mr-2 h-4 w-4" /> Download
                    </Button>
                  </div>
                  
                  <div className="p-4 border rounded-lg flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">Dataset Paper</h4>
                      <p className="text-sm text-muted-foreground">Technical documentation and methodology</p>
                    </div>
                    <Button variant="outline">
                      <ExternalLink className="mr-2 h-4 w-4" /> View Paper
                    </Button>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">Citation</h4>
                  <pre className="bg-white p-3 rounded text-xs overflow-x-auto">
                    {`@article{kannada_htr_dataset_2023,
  title={A Large-scale Dataset for Kannada Handwritten Text Recognition},
  author={Sharma, A. and Patel, M. and Kumar, R.},
  journal={Journal of Document Analysis and Recognition},
  year={2023},
  volume={26},
  pages={1247--1263}
}`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dataset;
