#pip install google-search-results
from serpapi import GoogleSearch #https://serpapi.com/google-jobs-api
import json

counter =0

params = {
	'api_key': '5d66abf8efb6f032ad65f4cd11bab642dad341257f01b965eeccf1703a1c51b7',                           # https://serpapi.com/manage-api-key
	# https://site-analyzer.pro/services-seo/uule/
	'q': "Software Engineer",              		# search query
    'location':'Ottawa, Ontario',
    'hl': 'en',                         		# language of the search
    'gl': 'ca',                         		# country of the search
	'engine': 'google_jobs',					# SerpApi search engine
	'start': 0									# num of pages = (num-1)*10
}

google_jobs_results = [None]*10
search = GoogleSearch(params)
results = search.get_dict()
jobs_results = results["jobs_results"]

for result in results['jobs_results']:
    
    if counter == len(google_jobs_results):
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

    dict = {}

    dict['Title'] = result['title']
    dict['Compary'] = result['company_name']
    dict['Location'] = result['location']
    dict['Time Posted'] = date
    dict['Salary'] = salary
    dict['Job Type'] = result['detected_extensions']['schedule_type']
    dict['link'] = link
    

    google_jobs_results[counter] = dict
    counter+=1
    

for job in google_jobs_results:
    print(job)
    print("")

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
