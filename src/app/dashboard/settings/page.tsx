'use client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Bell, Moon, Lock, Shield, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen bg-[#0f0f11] text-white">
      <div className="flex-1 p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Settings</h1>
            <p className="text-gray-400 text-sm">Configure your application preferences</p>
          </div>
          <span className="text-sm text-gray-500">Last updated: Today</span>
        </div>

        {/* Notification Settings Card */}
        <Card className="bg-[#1a1a1d] border border-gray-800">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Bell className="h-5 w-5 text-blue-400" />
              <CardTitle>Notification Settings</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <label className="text-sm">Email Notifications</label>
              </div>
              <input 
                type="checkbox" 
                className="h-4 w-4 rounded border-gray-700 bg-[#252529] text-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="h-4 w-4 text-gray-400" />
                <label className="text-sm">Push Notifications</label>
              </div>
              <input 
                type="checkbox" 
                className="h-4 w-4 rounded border-gray-700 bg-[#252529] text-blue-500 focus:ring-blue-500"
              />
            </div>
          </CardContent>
        </Card>

        {/* Appearance Card */}
        <Card className="bg-[#1a1a1d] border border-gray-800">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Moon className="h-5 w-5 text-purple-400" />
              <CardTitle>Appearance</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <label className="text-sm">Dark Mode</label>
              <input 
                type="checkbox" 
                defaultChecked
                className="h-4 w-4 rounded border-gray-700 bg-[#252529] text-blue-500 focus:ring-blue-500"
              />
            </div>
          </CardContent>
        </Card>

        {/* Security Card */}
        <Card className="bg-[#1a1a1d] border border-gray-800">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-red-400" />
              <CardTitle>Security</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <Lock className="h-4 w-4 text-gray-400" />
                <div>
                  <p className="text-sm font-medium">Two-Factor Authentication</p>
                  <p className="text-xs text-gray-400">Add an extra layer of security</p>
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-500">Enable</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}