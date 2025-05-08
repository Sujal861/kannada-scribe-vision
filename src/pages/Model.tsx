
import SectionHeader from "@/components/SectionHeader";
import MetricCard from "@/components/MetricCard";
import { Card, CardContent } from "@/components/ui/card";

const Model = () => {
  return (
    <div className="pt-24">
      <div className="section-container">
        <SectionHeader 
          title="Model Architecture" 
          subtitle="Understanding our deep learning approach to Kannada handwritten text recognition"
        />
        
        {/* Model Diagram Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">Network Architecture</h3>
          <Card>
            <CardContent className="p-6">
              <div className="bg-gray-50 p-4 rounded-lg border mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=1200&q=80" 
                  alt="Neural Network Architecture Diagram" 
                  className="mx-auto max-h-96 object-contain"
                />
              </div>
              
              <p className="mb-6">
                Our model uses a hybrid CNN-RNN architecture optimized for Kannada script recognition:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">1. Convolutional Layers</h4>
                  <p className="text-muted-foreground">
                    A series of convolutional layers extract visual features from handwritten text images. We use a VGG-style architecture with 5 convolutional blocks, each containing two conv layers followed by max-pooling. This enables the network to learn hierarchical features from strokes to characters.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">2. Recurrent Layers</h4>
                  <p className="text-muted-foreground">
                    Bidirectional LSTM layers process the sequential features extracted by the CNN. With 2 BiLSTM layers having 256 hidden units each, the model effectively captures context in both directions, handling the complex connections between Kannada characters.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">3. Attention Mechanism</h4>
                  <p className="text-muted-foreground">
                    We implement a Bahdanau-style attention mechanism that helps the model focus on relevant parts of the input sequence during decoding, significantly improving recognition of complex ligatures and combined characters.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">4. CTC Decoder</h4>
                  <p className="text-muted-foreground">
                    A Connectionist Temporal Classification (CTC) layer aligns the output sequence with the input, handling the variable length nature of handwritten text without requiring explicit segmentation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Training Process Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">Training Process</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardContent className="p-6">
                  <h4 className="text-xl font-medium mb-4">Training Methodology</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium">Data Preprocessing</h5>
                      <p className="text-sm text-muted-foreground">
                        Images were normalized, resized to 128x32 pixels, and augmented with random affine transformations, elastic distortions, and varying contrast to improve model robustness.
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium">Optimization</h5>
                      <p className="text-sm text-muted-foreground">
                        The model was trained using the Adam optimizer with an initial learning rate of 0.001 and CTC loss function. Learning rate was reduced when validation loss plateaued.
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium">Regularization</h5>
                      <p className="text-sm text-muted-foreground">
                        We employed dropout (0.3) between LSTM layers and batch normalization after convolutional layers to prevent overfitting.
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium">Training Infrastructure</h5>
                      <p className="text-sm text-muted-foreground">
                        Training was performed on 4 NVIDIA A100 GPUs for 100 epochs, with a batch size of 64, taking approximately 72 hours to complete.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="h-full">
              <CardContent className="p-6">
                <h4 className="text-xl font-medium mb-4">Training Metrics</h4>
                <div className="aspect-square bg-white flex items-center justify-center mb-4 border rounded-md p-2">
                  <img 
                    src="https://images.unsplash.com/photo-1573164574511-73c773193279?auto=format&fit=crop&w=600&q=80" 
                    alt="Training loss and accuracy graph" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Training and validation curves showing convergence after approximately 75 epochs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Performance Metrics Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Performance Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MetricCard 
              title="Character Accuracy" 
              value="96.8%" 
              description="Individual character recognition rate"
            />
            <MetricCard 
              title="Word Accuracy" 
              value="92.4%" 
              description="Correctly recognized whole words"
            />
            <MetricCard 
              title="Character Error Rate" 
              value="3.2%" 
              description="CER on test dataset"
            />
            <MetricCard 
              title="Word Error Rate" 
              value="7.6%" 
              description="WER on test dataset"
            />
          </div>
          
          <Card>
            <CardContent className="p-6">
              <h4 className="text-xl font-medium mb-4">Comparative Analysis</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Model</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Character Accuracy</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Word Accuracy</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Inference Time (ms)</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">Our CRNN+Attention</td>
                      <td className="px-6 py-4 whitespace-nowrap">96.8%</td>
                      <td className="px-6 py-4 whitespace-nowrap">92.4%</td>
                      <td className="px-6 py-4 whitespace-nowrap">45</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">Basic CRNN</td>
                      <td className="px-6 py-4 whitespace-nowrap">94.2%</td>
                      <td className="px-6 py-4 whitespace-nowrap">89.1%</td>
                      <td className="px-6 py-4 whitespace-nowrap">38</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">Transformer-based</td>
                      <td className="px-6 py-4 whitespace-nowrap">95.9%</td>
                      <td className="px-6 py-4 whitespace-nowrap">91.2%</td>
                      <td className="px-6 py-4 whitespace-nowrap">62</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">CNN-only</td>
                      <td className="px-6 py-4 whitespace-nowrap">91.5%</td>
                      <td className="px-6 py-4 whitespace-nowrap">85.3%</td>
                      <td className="px-6 py-4 whitespace-nowrap">32</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Model;
