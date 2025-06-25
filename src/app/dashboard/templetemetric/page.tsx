'use client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Download, Star, Eye, Clock, Share2, MessageSquare, ArrowUp, Code } from 'lucide-react';

export default function TemplateMetricsPage() {
  return (
    <div className="max-w-6xl space-y-8">
      <header>
        <h1 className="text-3xl font-bold">Template Insights</h1>
        <p className="text-gray-400 mt-1">Track your template performance and engagement.</p>
      </header>

      {/* Main Metrics Card */}
      <Card className="bg-[#1a1a1d] border border-gray-800">
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle className="text-xl font-semibold">Template Performance</CardTitle>
          <span className="text-xs text-gray-500">Last 30 days</span>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { title: 'Downloads', value: '1,284', icon: Download, change: '+12%' },
              { title: 'Stars', value: '486', icon: Star, change: '+8%' },
              { title: 'Views', value: '3,752', icon: Eye, change: '+24%' },
              { title: 'Avg. Usage', value: '2.4 min', icon: Clock, change: '+5%' },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-3 hover:bg-[#252529] rounded-lg transition">
                <div className={`p-3 rounded-full ${index === 0 ? 'bg-blue-400/10' : 
                                index === 1 ? 'bg-yellow-400/10' : 
                                index === 2 ? 'bg-purple-400/10' : 'bg-green-400/10'}`}>
                  <item.icon className={`h-5 w-5 ${index === 0 ? 'text-blue-400' : 
                                      index === 1 ? 'text-yellow-400' : 
                                      index === 2 ? 'text-purple-400' : 'text-green-400'}`} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">{item.title}</p>
                  <p className="text-xl font-bold">{item.value}</p>
                  <p className="text-xs text-green-400 flex items-center">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    {item.change}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Template Engagement */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-[#1a1a1d] border border-gray-800">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Popular Templates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'E-commerce Starter', downloads: '428', stars: '142' },
                { name: 'Portfolio Pro', downloads: '312', stars: '98' },
                { name: 'Admin Dashboard', downloads: '289', stars: '76' },
                { name: 'Blog Template', downloads: '201', stars: '64' },
              ].map((template, index) => (
                <div key={index} className="flex justify-between items-center p-2 hover:bg-[#252529] rounded transition">
                  <span className="font-medium">{template.name}</span>
                  <div className="flex gap-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <Download className="h-3 w-3 mr-1" /> {template.downloads}
                    </span>
                    <span className="flex items-center">
                      <Star className="h-3 w-3 mr-1" /> {template.stars}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1a1d] border border-gray-800">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: 'New template shared', user: 'Sarah Johnson', time: '2h ago', icon: Share2 },
                { action: 'Template starred', user: 'Mike Chen', time: '5h ago', icon: Star },
                { action: 'Template forked', user: 'Emma Wilson', time: '1d ago', icon: Code },
                { action: 'Feedback received', user: 'David Kim', time: '2d ago', icon: MessageSquare },
              ].map((activity, index) => (
                <div key={index} className="flex items-center gap-3 p-2 hover:bg-[#252529] rounded transition">
                  <div className={`p-2 rounded-full ${index % 2 === 0 ? 'bg-blue-400/10' : 'bg-purple-400/10'}`}>
                    <activity.icon className={`h-4 w-4 ${index % 2 === 0 ? 'text-blue-400' : 'text-purple-400'}`} />
                  </div>
                  <div>
                    <p className="text-sm">
                      <span className="font-medium">{activity.user}</span> {activity.action}
                    </p>
                    <p className="text-xs text-gray-400">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}