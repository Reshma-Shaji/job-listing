import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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
const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const job = jobs.find(job => job.id === parseInt(id));

  if (!job) {
    return (
      <p className="text-center text-3xl font-bold mt-10">JOB NOT FOUND!</p>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold">{job.title}</h1>
      <p className="text-gray-600">Company: {job.company}</p>
      <p className="text-blue-500">Location: {job.location}</p>
      <p className="text-green-500 font-semibold">{job.salary}</p>
      <p className="text-gray-700 mt-4">{job.description}</p>
      <button
        onClick={() => navigate(-1)}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Go Back
      </button>
    </div>
  );
};

export default JobDetails;
