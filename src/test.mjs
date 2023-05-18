import getJobs from "./googleScraper.mjs"

(async () => {
    const jobResults = await getJobs("barista");
    console.log(jobResults);
  })();