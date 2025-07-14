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
      {/* <h2 className="text-2xl font-bold mb-8">5 search result(s) found</h2> */}
      <div className="grid xl:grid-cols-3 grid-cols-1 gap-8">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-xl">{job.data.category.title}</h3>
              <span className="text-sm text-gray-500">{job.data.job_type.title}</span>
            </div>
            <p className="text-gray-600 mb-4 line-clamp-3">{job.data.job_description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {job.data.skills.map((s, i) => (
                <span key={i} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                  {s.label}
                </span>
              ))}
              {job.data.keywords.map((s, i) => (
                <span key={i} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                  {s.title}
                </span>
              ))}
            </div>
            <div className="flex justify-between text-sm text-gray-700 mb-4">
             
              <span>💰 ${job.data.rate_from}–${job.data.rate_to}</span>
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