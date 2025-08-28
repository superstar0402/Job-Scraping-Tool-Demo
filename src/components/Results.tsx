import React, { useState } from 'react';
import { ExternalLink, User, Phone, Mail, MapPin, Calendar } from 'lucide-react';

export function Results() {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('all');

  const mockJobs = [
    {
      id: 1,
      title: 'Senior HR Director',
      company: 'TechCorp Solutions',
      location: 'Portland, OR',
      postedDate: '2025-01-08',
      url: '#',
      contact: {
        name: 'Sarah Johnson',
        title: 'VP of Human Resources',
        email: 'sarah.johnson@techcorp.com',
        phone: '+1 (503) 555-0123',
        mobile: '+1 (503) 555-0124',
        linkedin: 'linkedin.com/in/sarahjohnson-hr',
        supervisor: {
          name: 'Mark Williams',
          title: 'Chief People Officer',
          email: 'mark.williams@techcorp.com',
          phone: '+1 (503) 555-0125',
        }
      },
      status: 'Contact Found',
    },
    {
      id: 2,
      title: 'HR Business Partner',
      company: 'Northwest Industries',
      location: 'Seattle, WA',
      postedDate: '2025-01-08',
      url: '#',
      contact: {
        name: 'Michael Chen',
        title: 'HR Manager',
        email: 'michael.chen@nwi.com',
        phone: '+1 (206) 555-0156',
        mobile: '+1 (206) 555-0157',
        linkedin: 'linkedin.com/in/michaelchen-hr',
        supervisor: {
          name: 'Jennifer Liu',
          title: 'Director of People Operations',
          email: 'jennifer.liu@nwi.com',
          phone: '+1 (206) 555-0158',
        }
      },
      status: 'Contact Found',
    },
    {
      id: 3,
      title: 'HR Coordinator',
      company: 'Idaho Tech Hub',
      location: 'Boise, ID',
      postedDate: '2025-01-07',
      url: '#',
      contact: {
        name: 'Emily Davis',
        title: 'HR Specialist',
        email: 'emily.davis@idahotech.com',
        phone: '+1 (208) 555-0189',
        mobile: 'N/A',
        linkedin: 'linkedin.com/in/emilydavis-hr',
        supervisor: {
          name: 'Robert Johnson',
          title: 'HR Director',
          email: 'robert.johnson@idahotech.com',
          phone: '+1 (208) 555-0190',
        }
      },
      status: 'Pending Enrichment',
    },
  ];

  const filteredJobs = mockJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter === 'all' || 
                           job.location.toLowerCase().includes(locationFilter.toLowerCase());
    return matchesSearch && matchesLocation;
  });

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="bg-white shadow rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search Jobs
            </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by title or company..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Filter by Location
            </label>
            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Locations</option>
              <option value="oregon">Oregon</option>
              <option value="washington">Washington</option>
              <option value="idaho">Idaho</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4">
        {filteredJobs.map((job) => (
          <div key={job.id} className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-medium text-gray-900">{job.title}</h3>
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
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.company} • {job.location}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {job.postedDate}
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <a
                    href={job.url}
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Contact Information */}
              {job.contact && (
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Primary Contact */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        Primary Contact
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium">{job.contact.name}</span>
                          <span className="text-gray-600 ml-2">({job.contact.title})</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Mail className="w-3 h-3 mr-2" />
                          {job.contact.email}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Phone className="w-3 h-3 mr-2" />
                          {job.contact.phone}
                          {job.contact.mobile !== 'N/A' && (
                            <span className="ml-2 text-gray-500">• Mobile: {job.contact.mobile}</span>
                          )}
                        </div>
                        <div className="text-blue-600 hover:text-blue-800">
                          <a href={`https://${job.contact.linkedin}`} target="_blank" rel="noopener noreferrer">
                            LinkedIn Profile
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Supervisor */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        Supervisor
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium">{job.contact.supervisor.name}</span>
                          <span className="text-gray-600 ml-2">({job.contact.supervisor.title})</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Mail className="w-3 h-3 mr-2" />
                          {job.contact.supervisor.email}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Phone className="w-3 h-3 mr-2" />
                          {job.contact.supervisor.phone}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">
              Showing {filteredJobs.length} results
            </h3>
            <div className="mt-2 text-sm text-blue-700">
              <p>
                Last updated: Today at 9:00 AM PT • Next scrape: Today at 9:00 PM PT
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}