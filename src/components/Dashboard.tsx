import React from 'react';
import { TrendingUp, Users, Calendar, Download } from 'lucide-react';

export function Dashboard() {
  const stats = [
    {
      name: 'Total Jobs Scraped',
      value: '1,247',
      change: '+12%',
      changeType: 'positive',
      icon: TrendingUp,
    },
    {
      name: 'Active Contacts',
      value: '892',
      change: '+5%',
      changeType: 'positive',
      icon: Users,
    },
    {
      name: 'Last Scrape',
      value: '2 hours ago',
      change: 'Successful',
      changeType: 'neutral',
      icon: Calendar,
    },
    {
      name: 'Export Ready',
      value: '156 jobs',
      change: 'New today',
      changeType: 'positive',
      icon: Download,
    },
  ];

  const recentJobs = [
    {
      id: 1,
      title: 'HR Director',
      company: 'TechCorp Solutions',
      location: 'Portland, OR',
      postedDate: '2025-01-08',
      contact: 'Sarah Johnson',
      status: 'Contact Found',
    },
    {
      id: 2,
      title: 'HR Manager',
      company: 'Northwest Industries',
      location: 'Seattle, WA',
      postedDate: '2025-01-08',
      contact: 'Michael Chen',
      status: 'Contact Found',
    },
    {
      id: 3,
      title: 'HR Business Partner',
      company: 'Idaho Tech Hub',
      location: 'Boise, ID',
      postedDate: '2025-01-07',
      contact: 'Emily Davis',
      status: 'Pending',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.name}
              className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-200"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Icon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {item.name}
                      </dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900">
                          {item.value}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center text-sm">
                    <span
                      className={`font-medium ${
                        item.changeType === 'positive'
                          ? 'text-green-600'
                          : item.changeType === 'negative'
                          ? 'text-red-600'
                          : 'text-gray-600'
                      }`}
                    >
                      {item.change}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Job Postings</h3>
          <div className="flow-root">
            <ul className="-my-5 divide-y divide-gray-200">
              {recentJobs.map((job) => (
                <li key={job.id} className="py-5 hover:bg-gray-50 transition-colors duration-200 rounded-md px-2">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {job.title}
                      </p>
                      <p className="text-sm text-gray-500">
                        {job.company} • {job.location}
                      </p>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <p className="text-sm text-gray-900">
                        Contact: {job.contact}
                      </p>
                      <p className="text-sm text-gray-500">
                        Posted: {job.postedDate}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                          job.status === 'Contact Found'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {job.status}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">System Status</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Indeed Scraper</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Active
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Contact Enrichment</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Running
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Email Alerts</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Enabled
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm font-medium">
              Run Scrape Now
            </button>
            <button className="w-full bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors duration-200 text-sm font-medium">
              Export Latest Results
            </button>
            <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors duration-200 text-sm font-medium">
              View Logs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}