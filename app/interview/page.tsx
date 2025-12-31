'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function InterviewPage() {
  const [jobRole, setJobRole] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [interviewType, setInterviewType] = useState('');

  const isFormComplete = jobRole && experienceLevel && interviewType;

  const jobRoles = [
    'Software Engineer',
    'Product Manager',
    'Data Scientist',
    'UX/UI Designer',
    'Marketing Manager',
    'Sales',
    'Other'
  ];

  const experienceLevels = [
    'Entry Level',
    'Junior (1-3 years)',
    'Mid-Level (3-7 years)',
    'Senior (7+ years)',
    'Lead/Manager'
  ];

  const interviewTypes = [
    'Technical',
    'Behavioral',
    'System Design',
    'Mixed'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Start Your{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              AI Mock Interview
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 dark:text-slate-400 mb-12">
            Choose your job role and level to begin your personalized interview experience
          </p>

          {/* Form */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12">
            <form className="space-y-8">
              {/* Job Role Dropdown */}
              <div className="text-left">
                <label htmlFor="jobRole" className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">
                  Job Role
                </label>
                <select
                  id="jobRole"
                  value={jobRole}
                  onChange={(e) => setJobRole(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                >
                  <option value="">Select your job role</option>
                  {jobRoles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>

              {/* Experience Level Dropdown */}
              <div className="text-left">
                <label htmlFor="experienceLevel" className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">
                  Experience Level
                </label>
                <select
                  id="experienceLevel"
                  value={experienceLevel}
                  onChange={(e) => setExperienceLevel(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                >
                  <option value="">Select your experience level</option>
                  {experienceLevels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>

              {/* Interview Type Dropdown */}
              <div className="text-left">
                <label htmlFor="interviewType" className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">
                  Interview Type
                </label>
                <select
                  id="interviewType"
                  value={interviewType}
                  onChange={(e) => setInterviewType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                >
                  <option value="">Select interview type</option>
                  {interviewTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Start Button */}
              <button
                type="button"
                disabled={!isFormComplete}
                className={`w-full py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-200 ${
                  isFormComplete
                    ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                    : 'bg-gray-300 dark:bg-slate-600 text-gray-500 dark:text-slate-400 cursor-not-allowed'
                }`}
              >
                {isFormComplete ? 'Start Interview Now' : 'Complete all fields to start'}
              </button>

              {/* Pro Note */}
              <p className="text-sm text-gray-500 dark:text-slate-400 text-center">
                Pro users get unlimited sessions and voice mode
              </p>
            </form>
          </div>

          {/* Back to Dashboard Link */}
          <div className="mt-8">
            <Link
              href="/dashboard"
              className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-colors"
            >
              ← Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}