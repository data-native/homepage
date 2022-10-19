import os
import json
import requests

"""
Get basic company financials such as margin, P/E ratio, 52-week high/low 

symbol (req): Stock ticker
metric (req): Can be either [all]
"""
def getStockMetrics(event, context):
    base_url = os.environ.get('ENDPOINT_URL')
    query_endpoint = os.environ.get('')

    # Get query parameters
    symbol = event.queryStringParameters.get('symbol')
    interval = event.queryStringParameters.get('interval', '')
    range = event.queryStringParameters.get('range', '')
    period1 = event.queryStringParameters.get('period1', '')
    period2 = event.queryStringParameters.get('period2', '')
    close = event.queryStringParameters.get('close', '')
    includePrePost = event.queryStringParameters.get('includePrePost', '')

    query_params = "".join([f"?{param}={eval(param)}" for param in ['interval', 'range', 'period1', 'period2', 'close', 'includePrePost'] if eval(param) != ""])
    response = requests.get(
        f"{base_url}{query_endpoint.format(symbol=symbol, query_params=query_params)}"
    )

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
