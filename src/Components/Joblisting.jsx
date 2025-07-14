import React, { useEffect, useState } from "react";
import { Link } from "react-router"; // ✅ FIX: use react-router-dom, not react-router

const Joblisting = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/Jobs.json") // make sure jobs.json is in the /public folder
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching job data:", error);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <p className="text-center mt-10 text-lg font-medium">Loading jobs...</p>
    );

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {jobs.map((job, i) => (
          <div
            key={i}
            className='bg-white h-102 rounded-xl p-6 hover:shadow-2xl hover:transform hover:ease-in'
          >
            <p className="text-sm text-gray-500 mb-2">{job.date}</p>
            <h3 className="text-lg font-semibold mb-3 h-12">{job.title}</h3>

            <div className="flex justify-between items-center mb-3 p-2 bg-gray-100 text-gray-700">
              <span className="text-xs px-2 py-1  rounded">{job.type}</span>
              <span className="text-sm text-gray-800 font-semibold">
                {job.price}
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-4 line-clamp-3 h-16">
              {job.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-3">
              {job.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`text-white text-xs px-2 py-1 rounded-full ${tag.color}`}
                >
                  {tag.label}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-4 text-xs font-medium">
              {job.categories.map((cat, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-gray-100 text-gray-700 rounded"
                >
                  {cat}
                </span>
              ))}
              {job.extraCategories > 0 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded">
                  +{job.extraCategories} more
                </span>
              )}
            </div>

            <p className="text-sm text-gray-500 mb-3">
              Posted by <strong>{job.author}</strong>
            </p>

            <button className="px-4 py-2 rounded-3xl font-semibold text-white bg-black hover:bg-green-500 transition duration-300">
              {job.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Joblisting;
