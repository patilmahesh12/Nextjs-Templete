import { CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const features = [
  {
    title: 'Drag & Drop Builder',
    description: 'Easily create beautiful layouts without coding.',
    icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
  },
  {
    title: 'Responsive Design',
    description: 'Looks great on all devices automatically.',
    icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
  },
  {
    title: 'SEO Optimized',
    description: 'Built-in tools to help you rank higher.',
    icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
  },
  {
    title: 'Fast Performance',
    description: 'Lightning fast page loads for better UX.',
    icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-[#0f0f11] text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Everything you need to build a stunning and high-performance website.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-[#1a1a1d] border border-gray-700 text-white transition-all hover:shadow-lg hover:border-primary"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  {feature.icon}
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Background blur circles */}
      <div className="absolute -top-32 left-1/2 w-96 h-96 bg-blue-700/20 rounded-full blur-3xl -z-10 transform -translate-x-1/2" />
      <div className="absolute -bottom-32 right-1/3 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default FeaturesSection;
