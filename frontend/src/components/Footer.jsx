import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo / About */}
        <div>
          <h2 className="text-2xl font-bold text-white">JobHub</h2>
          <p className="mt-4 text-sm">
            JobHub is a modern job portal connecting talent with top companies.
            Find jobs, apply easily, and grow your career.
          </p>
        </div>

        {/* Job Seekers */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Job Seekers</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Browse Jobs</li>
            <li className="hover:text-white cursor-pointer">Companies</li>
            <li className="hover:text-white cursor-pointer">Saved Jobs</li>
            <li className="hover:text-white cursor-pointer">Applied Jobs</li>
          </ul>
        </div>

        {/* Employers */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Employers</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Post a Job</li>
            <li className="hover:text-white cursor-pointer">Manage Jobs</li>
            <li className="hover:text-white cursor-pointer">View Applicants</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">
              Terms & Conditions
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm">
        © {new Date().getFullYear()} JobHub. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer
