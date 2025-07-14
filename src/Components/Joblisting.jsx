import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Joblisting = () => {
 const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("https://api.mnimedu.com/api/browse/pro-jobs/")
      .then((res) => res.json())
      .then((data) => setJobs(data.data))
      .catch(console.error);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold mb-8">5 search result(s) found</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {jobs.slice(0, 5).map((job) => (
          <div key={job.id} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-xl">{job.title}</h3>
              <span className="text-sm text-gray-500">{job.type}</span>
            </div>
            <p className="text-gray-600 mb-4 line-clamp-3">{job.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {job.skills.map((s, i) => (
                <span key={i} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                  {s}
                </span>
              ))}
            </div>
            <div className="flex justify-between text-sm text-gray-700 mb-4">
              <span>📍 {job.location}</span>
              <span>💰 ${job.budget_min}–${job.budget_max}</span>
            </div>
            <Link
              to={`/jobs/${job.id}`}
              className="inline-block bg-green-500 hover:bg-green-600 text-white text-center w-full py-2 rounded font-semibold"
            >
              View Job
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Joblisting;