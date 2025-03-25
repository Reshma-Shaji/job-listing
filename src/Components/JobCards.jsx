import React from 'react';
import { useNavigate } from 'react-router-dom';

const jobs = [
  {
    id: '1',
    title: 'Software Engineer Fresher',
    company: 'Neologix Software Solutions',
    location: 'Thiruvananthapuram, Kerala',
    salary: '₹20,000 - ₹40,000 / month',
    description:
      'We need a skilled front-end developer to work on UI/UX implementation.',
  },
  {
    id: '2',
    title: 'React JS Developer (Front End)',
    company: 'Lightrains Technolabs',
    location: 'Thiruvananthapuram, Kerala',
    salary: '₹10,000 - ₹30,000 / month',
    description:
      'We need a skilled front-end developer to work on UI/UX implementation.',
  },
  {
    id: '3',
    title: 'Front-End Developer',
    company: 'Innspark Solutions Pvt. Ltd',
    location: 'Kollam, Kerala',
    salary: '₹3,00,000 - ₹6,00,000 a year',
    description:
      'We need a skilled front-end developer to work on UI/UX implementation.',
  },
  {
    id: '4',
    title: 'React Front-End Developer',
    company: 'UST',
    location: 'Thiruvananthapuram, Kerala',
    salary: '₹40,000 / month',
    description:
      'We need a skilled front-end developer to work on UI/UX implementation.',
  },
  {
    id: '5',
    title: 'React.js Developer',
    company: 'Riolabz',
    location: 'Kochi, Kerala',
    salary: '₹10,000 - ₹20,000 / month',
    description:
      'We need a skilled front-end developer to work on UI/UX implementation.',
  },
  {
    id: '6',
    title: 'Graduate Trainee',
    company: 'Saasvaap Techies Pvt Ltd',
    location: 'Thiruvananthapuram, Kerala',
    salary: '₹30,000 - ₹60,000 / month',
    description:
      'We need a skilled front-end developer to work on UI/UX implementation.',
  },
  {
    id: '7',
    title: 'Senior Digital Marketing Executive',
    company: 'Neologix Software Solutions',
    location: 'Maharashtra',
    salary: '₹38,000 - ₹45,000 / month',
    description:
      'We need a skilled front-end developer to work on UI/UX implementation.',
  },
  {
    id: '8',
    title: 'Sr. Marketing Executive',
    company: 'SMARTEDGE INDUSTRIES',
    location: 'Pune, Maharashtra',
    salary: '₹25,000 - ₹30,000 / month',
    description:
      'We need a skilled front-end developer to work on UI/UX implementation.',
  },
  {
    id: '9',
    title: 'Accounts Administrator',
    company: 'Fructo Trading LLP',

    location: 'Kochi, Kerala',

    salary: '₹15,000 - ₹25,000 a month',
    description:
      'We need a skilled front-end developer to work on UI/UX implementation.',
  },
  {
    id: '10',
    title: 'Financial Analyst Intern',
    company: 'Global Business Advisors',
    location: 'Kochi, Kerala•Remote',

    salary: '₹5,000 a month',
    description:
      'We need a skilled front-end developer to work on UI/UX implementation.',
  },
];

const JobCards = ({ searchQuery }) => {
  const navigate = useNavigate();

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-6 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        Job Listings
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredJobs.length > 0 ? (
          filteredJobs.map(job => (
            <div
              key={job.id}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-lg md:text-xl font-bold text-blue-600">
                {job.title}
              </h3>
              <p className="text-gray-700 font-medium text-sm md:text-base">
                {job.company}
              </p>
              <p className="text-gray-500 text-sm md:text-base">
                {job.location}
              </p>
              <p className="text-green-600 font-semibold mt-2">{job.salary}</p>
              <button
                onClick={() => navigate(`/job/${job.id}`)}
                className="mt-3 bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 transition"
              >
                View More
              </button>
            </div>
          ))
        ) : (
          <p className="text-red-600 font-bold text-center col-span-full">
            No jobs found
          </p>
        )}
      </div>
    </div>
  );
};

export default JobCards;
