import React, { useState } from 'react';
import { Download, FileText, Database, Table } from 'lucide-react';

export function Export() {
  const [exportFormat, setExportFormat] = useState('csv');
  const [includeContacts, setIncludeContacts] = useState(true);
  const [includeSupervisors, setIncludeSupervisors] = useState(true);
  const [dateRange, setDateRange] = useState('7');

  // Mock job data for demo
  const mockJobs = [
    {
      id: 1,
      title: 'HR Manager',
      company: 'TechCorp Inc.',
      location: 'Portland, OR',
      postedDate: '2025-01-15',
      url: 'https://indeed.com/job1',
      status: 'Contact Found',
      contact: {
        name: 'Sarah Johnson',
        email: 'sarah.johnson@techcorp.com',
        phone: '(503) 555-0123',
        mobile: '(503) 555-0124',
        title: 'HR Director',
        linkedin: 'https://linkedin.com/in/sarahjohnson',
        supervisor: {
          name: 'Michael Chen',
          email: 'michael.chen@techcorp.com',
          phone: '(503) 555-0125',
          mobile: '(503) 555-0126',
          title: 'VP of Human Resources',
          linkedin: 'https://linkedin.com/in/michaelchen'
        }
      }
    },
    {
      id: 2,
      title: 'HR Business Partner',
      company: 'InnovateCo',
      location: 'Seattle, WA',
      postedDate: '2025-01-14',
      url: 'https://indeed.com/job2',
      status: 'Contact Found',
      contact: {
        name: 'Emily Rodriguez',
        email: 'emily.rodriguez@innovateco.com',
        phone: '(206) 555-0234',
        mobile: '(206) 555-0235',
        title: 'Senior HR Business Partner',
        linkedin: 'https://linkedin.com/in/emilyrodriguez',
        supervisor: {
          name: 'David Kim',
          email: 'david.kim@innovateco.com',
          phone: '(206) 555-0236',
          mobile: '(206) 555-0237',
          title: 'Chief People Officer',
          linkedin: 'https://linkedin.com/in/davidkim'
        }
      }
    },
    {
      id: 3,
      title: 'HR Coordinator',
      company: 'StartupXYZ',
      location: 'Boise, ID',
      postedDate: '2025-01-13',
      url: 'https://indeed.com/job3',
      status: 'Pending Review',
      contact: null
    }
  ];

  // Filter jobs based on date range
  const filteredJobs = mockJobs.filter(job => {
    if (dateRange === 'all') return true;
    const jobDate = new Date(job.postedDate);
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - parseInt(dateRange));
    return jobDate >= cutoffDate;
  });

  const handleExport = () => {
    // Mock export functionality
    alert(`Exporting to ${exportFormat.toUpperCase()}...`);
  };

  const exportOptions = [
    {
      id: 'csv',
      name: 'CSV File',
      description: 'Comma-separated values file for Excel or Google Sheets',
      icon: FileText,
    },
    {
      id: 'googlesheets',
      name: 'Google Sheets',
      description: 'Direct export to Google Sheets with real-time updates',
      icon: Table,
    },
    {
      id: 'airtable',
      name: 'Airtable',
      description: 'Export to Airtable base with structured data',
      icon: Database,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Export Format Selection */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-6">Export Format</h3>
          
          <div className="space-y-4">
            {exportOptions.map((option) => {
              const Icon = option.icon;
              return (
                <label key={option.id} className="relative">
                  <input
                    type="radio"
                    name="export-format"
                    value={option.id}
                    checked={exportFormat === option.id}
                    onChange={(e) => setExportFormat(e.target.value)}
                    className="sr-only"
                  />
                  <div className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                    exportFormat === option.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}>
                    <div className="flex items-center">
                      <Icon className="h-6 w-6 text-gray-400 mr-3" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {option.name}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {option.description}
                        </div>
                      </div>
                    </div>
                  </div>
                </label>
              );
            })}
          </div>
        </div>
      </div>

      {/* Export Options */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-6">Export Options</h3>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date Range
              </label>
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="w-full md:w-1/2 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="1">Last 24 hours</option>
                <option value="3">Last 3 days</option>
                <option value="7">Last week</option>
                <option value="14">Last 2 weeks</option>
                <option value="30">Last month</option>
                <option value="all">All time</option>
              </select>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-medium text-gray-900">Include in Export</h4>
              
              <div className="flex items-center">
                <input
                  id="include-contacts"
                  name="include-contacts"
                  type="checkbox"
                  checked={includeContacts}
                  onChange={(e) => setIncludeContacts(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="include-contacts" className="ml-2 block text-sm text-gray-900">
                  Contact information (name, email, phone, LinkedIn)
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  id="include-supervisors"
                  name="include-supervisors"
                  type="checkbox"
                  checked={includeSupervisors}
                  onChange={(e) => setIncludeSupervisors(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="include-supervisors" className="ml-2 block text-sm text-gray-900">
                  Supervisor information
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-6">Export Preview</h3>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Job Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  {includeSupervisors && (
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Supervisor
                    </th>
                  )}
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredJobs.slice(0, 3).map((job) => (
                  <tr key={job.id} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{job.title}</div>
                        <div className="text-sm text-gray-500">{job.company}</div>
                        <div className="text-sm text-gray-500">{job.location}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {includeContacts && job.contact && (
                        <div className="text-sm">
                          <div className="font-medium text-gray-900">{job.contact.name}</div>
                          <div className="text-gray-500">{job.contact.email}</div>
                          <div className="text-gray-500">{job.contact.phone}</div>
                        </div>
                      )}
                    </td>
                    {includeSupervisors && (
                      <td className="px-6 py-4 whitespace-nowrap">
                        {job.contact?.supervisor && (
                          <div className="text-sm">
                            <div className="font-medium text-gray-900">{job.contact.supervisor.name}</div>
                            <div className="text-gray-500">{job.contact.supervisor.email}</div>
                            <div className="text-gray-500">{job.contact.supervisor.phone}</div>
                          </div>
                        )}
                      </td>
                    )}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        job.status === 'Contact Found'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {job.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Export Actions */}
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-600">
          Ready to export {filteredJobs.length} job postings
        </div>
        <button
          onClick={handleExport}
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
        >
          <Download className="w-5 h-5" />
          <span>Export Data</span>
        </button>
      </div>

      {/* Integration Setup */}
      {exportFormat !== 'csv' && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">
                Setup Required
              </h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  Configure your {exportFormat === 'googlesheets' ? 'Google Sheets' : 'Airtable'} integration 
                  in the settings to enable direct exports.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}