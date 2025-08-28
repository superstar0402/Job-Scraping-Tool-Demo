import React, { useState } from 'react';
import { Clock, Mail, Save } from 'lucide-react';

export function Schedule() {
  const [scheduleType, setScheduleType] = useState('daily');
  const [scheduleTime, setScheduleTime] = useState('09:00');
  const [emailAlerts, setEmailAlerts] = useState('sarah@company.com');
  const [alertTypes, setAlertTypes] = useState({
    newJobs: true,
    completionReport: true,
    errors: true,
  });

  return (
    <div className="space-y-8">
      {/* Schedule Configuration */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex items-center mb-6">
            <Clock className="h-6 w-6 text-gray-400 mr-3" />
            <h3 className="text-lg font-medium text-gray-900">Scraping Schedule</h3>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Frequency
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['hourly', 'daily', 'weekly'].map((type) => (
                  <label key={type} className="relative">
                    <input
                      type="radio"
                      name="schedule-type"
                      value={type}
                      checked={scheduleType === type}
                      onChange={(e) => setScheduleType(e.target.value)}
                      className="sr-only"
                    />
                    <div className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                      scheduleType === type
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}>
                      <div className="text-center">
                        <div className="text-sm font-medium text-gray-900 capitalize">
                          {type}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {type === 'hourly' && 'Every hour'}
                          {type === 'daily' && 'Once per day'}
                          {type === 'weekly' && 'Once per week'}
                        </div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Run Time (Pacific Time)
              </label>
              <input
                type="time"
                value={scheduleTime}
                onChange={(e) => setScheduleTime(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="bg-gray-50 p-4 rounded-md">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Current Schedule</h4>
              <p className="text-sm text-gray-600">
                Scraping will run {scheduleType} at {scheduleTime} PT
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Email Alert Configuration */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex items-center mb-6">
            <Mail className="h-6 w-6 text-gray-400 mr-3" />
            <h3 className="text-lg font-medium text-gray-900">Email Alerts</h3>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Recipients
              </label>
              <textarea
                value={emailAlerts}
                onChange={(e) => setEmailAlerts(e.target.value)}
                placeholder="Enter email addresses (one per line)"
                rows={3}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">
                Separate multiple email addresses with new lines
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Alert Types
              </label>
              <div className="space-y-3">
                <div className="flex items-center">
                  <input
                    id="new-jobs"
                    name="new-jobs"
                    type="checkbox"
                    checked={alertTypes.newJobs}
                    onChange={(e) => setAlertTypes({...alertTypes, newJobs: e.target.checked})}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="new-jobs" className="ml-2 block text-sm text-gray-900">
                    New job postings found
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    id="completion-report"
                    name="completion-report"
                    type="checkbox"
                    checked={alertTypes.completionReport}
                    onChange={(e) => setAlertTypes({...alertTypes, completionReport: e.target.checked})}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="completion-report" className="ml-2 block text-sm text-gray-900">
                    Daily scraping completion report
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    id="errors"
                    name="errors"
                    type="checkbox"
                    checked={alertTypes.errors}
                    onChange={(e) => setAlertTypes({...alertTypes, errors: e.target.checked})}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="errors" className="ml-2 block text-sm text-gray-900">
                    System errors and failures
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Settings */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-6">Advanced Settings</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Concurrent Scraping Threads
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="1">1 (Slow but safe)</option>
                <option value="3">3 (Recommended)</option>
                <option value="5">5 (Fast but higher detection risk)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Retry Failed Jobs
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="1">1 time</option>
                <option value="3">3 times</option>
                <option value="5">5 times</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center">
              <input
                id="avoid-duplicates"
                name="avoid-duplicates"
                type="checkbox"
                defaultChecked
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="avoid-duplicates" className="ml-2 block text-sm text-gray-900">
                Skip duplicate job postings (based on title and company)
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2">
          <Save className="w-4 h-4" />
          <span>Save Schedule Settings</span>
        </button>
      </div>
    </div>
  );
}