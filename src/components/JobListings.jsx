import {useState, useEffect } from 'react';

import JobListing from './JobListing';

const JobListings = ({isHome = false}) => {

  const [Jobs, setJobs] = useState([]);
  const [Loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://localhost:8000/jobs');
        const jobs = await response.json();
        setJobs(jobs);
      }
      catch (error) {
        console.error(error);
      }
      finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Jobs.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
