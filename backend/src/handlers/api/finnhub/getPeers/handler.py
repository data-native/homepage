import os
import json
import finnhub

"""
Get basic company financials such as margin, P/E ratio, 52-week high/low 

symbol (req): Stock ticker
metric (req): Can be either [all]
"""
def getStockMetrics(event, context):
    stock_ticker = event.queryStringParameters['symbol']
    metric = event.queryStringParameters['metric']
    client = finnhub.Client(api_key=os.environ["FINNHUB_API_KEY"])
    response = client.company_basic_financials(stock_ticker, metric)                

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
