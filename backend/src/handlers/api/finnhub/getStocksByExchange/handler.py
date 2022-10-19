import os
import json
import finnhub

"""
Retrieves the list of supported stock by exchange codes
Supported exchanges found at:
https://docs.google.com/spreadsheets/d/1I3pBxjfXB056-g_JYf_6o3Rns3BV2kMGG1nCatb91ls/edit#gid=0

optionally filter by
mic: Filter by MIC code
securityType: filter by security type using OpenFigi standard
currency: Filter by currency
"""
def getStocksByExchange(event, context):
    exchange = event.queryStringParameters['exchange']
    mic = event.queryStringParameters.get('mic', '')
    securityType = event.queryStringParameters.get('securityType', '')
    currency = event.queryStringParameters.get('currency', '')
    
    client = finnhub.Client(api_key=os.environ["FINNHUB_API_KEY"])
    # TODO: Implement additional optional filter arguments
    response = client.stock_symbols(exchange)                

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
