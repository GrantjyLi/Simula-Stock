const numjobs = 10
var jobs = []

const SerpApi = require('google-search-results-nodejs')
const serach = new SerpApi.GoogleSearch("5d66abf8efb6f032ad65f4cd11bab642dad341257f01b965eeccf1703a1c51b7")

const params = {
    engine: "google_jobs",
    q: "Software engineer",
    location: "Ontario Ottawa",
    hl: "en"
}

const callback = function(data){
    data.jobs_results.forEach(element => {
        jobs.push(element)
    });
    
}
serach.json(params, callback)
module.exports = {jobs}

