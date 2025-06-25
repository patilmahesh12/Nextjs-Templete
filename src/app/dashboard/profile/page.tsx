'use client';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { User, Mail, Lock, Globe, Github, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen bg-[#0f0f11] text-white">
      <div className="flex-1 p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Profile Settings</h1>
            <p className="text-gray-400 text-sm">Manage your account information</p>
          </div>
          <span className="text-sm text-gray-500">Last updated: Today</span>
        </div>

        {/* Profile Card */}
        <Card className="bg-[#1a1a1d] border border-gray-800">
          <CardHeader>
            <CardTitle className="text-lg">Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            {[
              { label: 'Full Name', icon: User, value: 'John Doe', color: 'text-blue-400' },
              { label: 'Email', icon: Mail, value: 'john@example.com', color: 'text-purple-400' },
              { label: 'Website', icon: Globe, value: 'johndoe.dev', color: 'text-green-400' },
              { label: 'GitHub', icon: Github, value: '@johndoe', color: 'text-gray-400' },
            ].map((item, idx) => (
              <div key={idx} className="space-y-1">
                <label className="flex items-center gap-2 text-sm text-gray-400">
                  <item.icon className={`h-4 w-4 ${item.color}`} />
                  {item.label}
                </label>
                <input
                  placeholder={item.value}
                  className="w-full bg-[#252529] border border-gray-700 rounded-md px-3 py-2 text-sm"
                />
              </div>
            ))}
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button className="bg-blue-600 hover:bg-blue-500">Save Changes</Button>
          </CardFooter>
        </Card>

        {/* Security Card */}
        <Card className="bg-[#1a1a1d] border border-gray-800">
          <CardHeader>
            <CardTitle className="text-lg">Security</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm text-gray-400">
                <Lock className="h-4 w-4 text-red-400" />
                Change Password
              </label>
              <input
                type="password"
                placeholder="Current password"
                className="w-full bg-[#252529] border border-gray-700 rounded-md px-3 py-2 text-sm"
              />
              <div className="flex gap-4">
                <input
                  type="password"
                  placeholder="New password"
                  className="w-full bg-[#252529] border border-gray-700 rounded-md px-3 py-2 text-sm"
                />
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="w-full bg-[#252529] border border-gray-700 rounded-md px-3 py-2 text-sm"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button variant="outline" className="border-gray-700 hover:bg-[#252529]">
              Cancel
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-500">Update Password</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}