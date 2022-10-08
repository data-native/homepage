import os
import requests 
import json
import boto3
from boto3.dynamodb.conditions import Key

def getByIdHandler(event, context):
    videoId = event["pathParameters"]["id"]
    dynamodb = boto3.resource('dynamodb', endpoint_url="http://docker.for.mac.host.internal:8000")
    tablename = os.environ['SAMPLE_TABLE']
    table = dynamodb.Table(tablename)
    try:

        response = table.query(
            KeyConditionExpression=Key('VideoId').eq(videoId)
        ) 

        return {
            'statusCode': 200,
            'body': json.dumps(response['Item'] )
            }

    except Exception as e:

        response_data =  {
            'statusCode': 400,
            'error': str(e) 
            }
    return response_data
