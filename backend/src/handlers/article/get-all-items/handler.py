import os
import json
import boto3

def getAllItemsHandler(event, context):
    try:
        table_name = os.environ['SAMPLE_TABLE']
        
        table = boto3.resource(
            'dynamodb',
        )
        table = table.Table(table_name)
        response = table.scan()
        items = response['Items']

        return {
            'statusCode': 200,
            'headers': {
                  "Access-Control-Allow-Origin" : "*", 
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
