import os
import requests 
import json
import boto3

def getAllItemsHandler(event, context):
    try:
        table_name = os.environ['SAMPLE_TABLE']
        
        table = boto3.resource(
            'dynamodb',
            endpoint_url='http://docker.for.mac.host.internal:8000'
        )
        table = table.Table(table_name)
        response = table.scan()
        items = response['Items']

        return {
            'statusCode': 200,
            'headers': {
                  "Access-Control-Allow-Origin" : "*", 
                  "Access-Control-Allow-Headers" : "*", 
            },
            'body': json.dumps({
                'table': table_name,
                'items': items
                               }) 
            }

    except Exception as e:
        response_data =  {
            'statusCode': 400,
            'error': str(e) 
            }
    return response_data
