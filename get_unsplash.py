import urllib.request
import re
import sys

def get_unsplash_id(query):
    url = f"https://unsplash.com/s/photos/{query.replace(' ', '-')}"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        match = re.search(r'images\.unsplash\.com/photo-([a-zA-Z0-9\-]+)\?', html)
        if match:
            print(f"{query}: photo-{match.group(1)}")
        else:
            print(f"{query}: NOT FOUND")
    except Exception as e:
        print(f"{query}: ERROR {e}")

queries = [
    "glass house forest",
    "goa beach villa",
    "karjat valley",
    "coorg coffee estate",
    "alibaug luxury",
    "mahabaleshwar",
    "heritage bungalow india",
    "luxury private pool villa",
    "dog friendly home",
    "party mansion"
]

for q in queries:
    get_unsplash_id(q)
