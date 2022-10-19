import os
import json
import finnhub
from  datetime import date
"""
Get company news for companies.

symbol (req): Stock ticker
from (req): From date YYYY-MM-DD
to (req): To date YYYY-MM-DD
"""
def getStockMetrics(event, context):
    stock_ticker = event.queryStringParameters['symbol']
    from_date = event.queryStringParameters['from']
    to_date = event.queryStringParameters.get('to', date.today().strftime("%Y-%M-%D"))

    client = finnhub.Client(api_key=os.environ["FINNHUB_API_KEY"])
    response = client.company_news(stock_ticker, _from=from_date, _to=to_date)                

    try:
        return {
            'statusCode': 200,
            'headers': {
                  "Access-Control-Allow-Origin" : "*", 
            },
            'body': json.dumps(
                response
               ) 
            }

    except Exception as e:
        response_data =  {
            'statusCode': 400,
            'error': str(e) 
            }
    return response_data
