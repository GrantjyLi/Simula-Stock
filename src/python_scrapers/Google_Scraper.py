#pip install google-search-results
from serpapi import GoogleSearch #https://serpapi.com/google-jobs-api
import json
import sys
import ast #used for arrays/json

numJobs =10
counter =0
data = sys.argv[1]
params = {
	'api_key': '5d66abf8efb6f032ad65f4cd11bab642dad341257f01b965eeccf1703a1c51b7',                           # https://serpapi.com/manage-api-key
	# https://site-analyzer.pro/services-seo/uule/
	'q': data,              		# search query
    'location':'Ottawa, Ontario',
    'hl': 'en',                         		# language of the search
    'gl': 'ca',                         		# country of the search
	'engine': 'google_jobs',					# SerpApi search engine
	'start': 0									# num of pages = (num-1)*10
}

results = GoogleSearch(params).get_dict() # this prints the URL for some reason

jobs_results = results["jobs_results"]

dict = {}
for result in results['jobs_results']:
    
    if counter == numJobs:
        break
    
    salary = "salarys unspecified"
    link = 'links unspecified'
    date = 'dates unspecified'

    if 'posted_at' in result['detected_extensions']:
        date = result['detected_extensions']['posted_at']

    if 'salary' in result['detected_extensions']: 
        salary = result['detected_extensions']['salary']

    if 'link' in result['related_links'][0]:
        link = result['related_links'][0]['link']

    dict['Title'] = result['title']
    dict['Compary'] = result['company_name']
    dict['Location'] = result['location']
    dict['Time Posted'] = date
    dict['Salary'] = salary
    dict['Job Type'] = result['detected_extensions']['schedule_type']
    dict['link'] = link
    
    counter+=1
    print(json.dumps(dict))
    
"""
title
company
date posted
salary
job type
job description
manditory requirements
parent link
"""
