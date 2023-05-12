//https://serpapi.com/google-jobs-api
import SerpApi from 'google-search-results-nodejs'
const serach = new SerpApi.GoogleSearch("5d66abf8efb6f032ad65f4cd11bab642dad341257f01b965eeccf1703a1c51b7")

const params = {
    engine: "google_jobs",
    q: "Software engineer",
    location: "Ontario Ottawa",
    hl: "en"
}

let jobs =[]

function getJobs(data){
   data.jobs_results.forEach(element => {
       jobs.push(element)
    });
}

serach.json(params, getJobs)

setTimeout(function(){console.log(jobs);}, 2500)

export default jobs