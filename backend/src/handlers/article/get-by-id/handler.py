import os
import requests 
import json
import boto3
from boto3.dynamodb.conditions import Key

def getByIdHandler(event, context):
    articleId = event["pathParameters"]["id"]
    dynamodb = boto3.resource('dynamodb')
    tablename = os.environ['SAMPLE_TABLE']
    table = dynamodb.Table(tablename)
    try:

        response = table.get_item(
                Key = {'PK': 'Article', 'SK': articleId}
        ) 

        return {
            'statusCode': 200,
             'headers': {
                "Access-Control-Allow-Origin":"*",
                },
            'body': json.dumps(response['Item'] )
            }

    except Exception as e:

        response_data =  {
            'statusCode': 400,
             'headers': {
                "Access-Control-Allow-Origin":"'*'",
                },
            'error': str(e) 
            }
    return response_data
