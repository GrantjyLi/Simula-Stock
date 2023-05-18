import SerpApi from 'google-search-results-nodejs';

const search = new SerpApi.GoogleSearch("5d66abf8efb6f032ad65f4cd11bab642dad341257f01b965eeccf1703a1c51b7");

let jobs = [];
async function getJobs(j) {
  const params = {
    engine: "google_jobs",
    q: j,
    location: "Ontario Ottawa",
    hl: "en"
  };

  function getJobs(data) {
    data.jobs_results.forEach(element => {
      jobs.push(element);
    });
  }

  await new Promise((resolve, reject) => {
    search.json(params, (data, error) => {
      if (error) {
        reject(error);
      } else {
        getJobs(data);
        resolve();
      }
    });
  });

  return jobs;
}

export default getJobs