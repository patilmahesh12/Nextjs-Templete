'use client';
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LayoutTemplate, Palette, Code, Zap, ArrowUp, RefreshCw } from 'lucide-react';

export default function TemplateDashboard() {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  
  const refreshData = () => {
    setLastUpdated(new Date());
  };

  const stats = [
    { 
      title: 'Total Templates', 
      value: '48', 
      change: '+8', 
      icon: LayoutTemplate, 
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10'
    },
    { 
      title: 'UI Components', 
      value: '120+', 
      change: '+15', 
      icon: Palette, 
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10'
    },
    { 
      title: 'Code Examples', 
      value: '86', 
      change: '+12', 
      icon: Code, 
      color: 'text-green-400',
      bgColor: 'bg-green-400/10'
    },
    { 
      title: 'Quick Starts', 
      value: '24', 
      change: '+5', 
      icon: Zap, 
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10'
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#0f0f11] text-white">
      <div className="flex-1 p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Template Dashboard</h1>
            <p className="text-gray-400 text-sm">Manage your Next.js templates collection</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">
              Updated: {lastUpdated.toLocaleTimeString()}
            </span>
            <button 
              onClick={refreshData}
              className="p-2 rounded-full hover:bg-[#252529] transition"
            >
              <RefreshCw className="h-4 w-4 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ title, value, change, icon: Icon, color, bgColor }, idx) => (
            <Card 
              key={idx} 
              className="bg-[#1a1a1d] border border-gray-800 hover:border-gray-700 transition-all"
            >
              <CardHeader className="flex flex-row justify-between items-center pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">{title}</CardTitle>
                <div className={`p-2 rounded-full ${bgColor}`}>
                  <Icon className={`h-4 w-4 ${color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-white">{value}</p>
                <div className="flex items-center text-xs text-gray-400 mt-1">
                  <ArrowUp className="h-3 w-3 text-green-500 mr-1" />
                  <span>{change} this month</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <button className="p-6 border border-gray-800 rounded-lg hover:border-blue-400 hover:bg-[#252529] transition flex items-center gap-4 bg-[#1a1a1d]">
            <LayoutTemplate className="h-6 w-6 text-blue-400" />
            <div className="text-left">
              <h3 className="font-medium">New Template</h3>
              <p className="text-sm text-gray-400">Create from scratch</p>
            </div>
          </button>
          
          <button className="p-6 border border-gray-800 rounded-lg hover:border-purple-400 hover:bg-[#252529] transition flex items-center gap-4 bg-[#1a1a1d]">
            <Palette className="h-6 w-6 text-purple-400" />
            <div className="text-left">
              <h3 className="font-medium">UI Library</h3>
              <p className="text-sm text-gray-400">Browse components</p>
            </div>
          </button>
          
          <button className="p-6 border border-gray-800 rounded-lg hover:border-green-400 hover:bg-[#252529] transition flex items-center gap-4 bg-[#1a1a1d]">
            <Code className="h-6 w-6 text-green-400" />
            <div className="text-left">
              <h3 className="font-medium">Code Snippets</h3>
              <p className="text-sm text-gray-400">Reusable examples</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}