import os
import json
import finnhub

def lookupSymbolByName(event, context):
    stock_name = event.params['name']
    client = finnhub.Client(api_key=os.environ["FINNHUB_API_KEY"])
    response = client.symbol_lookup(stock_name)                

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
