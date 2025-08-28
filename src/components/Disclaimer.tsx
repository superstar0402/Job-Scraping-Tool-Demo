import React from 'react';
import { AlertTriangle } from 'lucide-react';

export function Disclaimer() {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
      <div className="flex">
        <div className="flex-shrink-0">
          <AlertTriangle className="h-5 w-5 text-amber-400" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-amber-800">
            Demo Application - Important Notice
          </h3>
          <div className="mt-2 text-sm text-amber-700">
            <p className="mb-2">
              This is a demonstration interface for a job scraping tool. Please note:
            </p>
            <ul className="list-disc ml-5 space-y-1">
              <li>Web scraping of job sites may violate their Terms of Service</li>
              <li>Contact information extraction requires appropriate data sources and permissions</li>
              <li>Real implementation would need proper legal compliance and rate limiting</li>
              <li>Consider using official APIs when available (LinkedIn, job board APIs)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}