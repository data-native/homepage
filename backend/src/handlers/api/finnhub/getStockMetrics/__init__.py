import os
import requests 
import json
import finnhub

"""
Provides Market News feeds

Currently available
* general
* forex
* crypto
* merger

API Documentation at:
https://finnhub.io/docs/api/market-news

"""
def getMarketNews(event, context):
    category = event.queryStringParameters['category']
    min_id = event.queryStringParameters.get('minId', 0)
    client = finnhub.Client(api_key=os.environ["FINNHUB_API_KEY"])
    response = client.general_news(category, min_id=min_id)

    try:
        return {
            'statusCode': 200,
            'headers': {
                  "Access-Control-Allow-Origin" : "*", 
            },
            'body': json.dumps(response['data']) 
            }

    except Exception as e:
        response_data =  {
            'statusCode': 400,
            'error': str(e) 
            }
    return response_data
