import os
import requests 
import json
import boto3

def getByIdHandler(event, context):
    articleId = 
    dynamodb = boto3.resource('dynamodb')
    tablename = os.environ['SAMPLE_TABLE']
    table = dynamodb.Table(tablename)
    try:

        response = table.get_item(
            Key={
                'id': articleId 
            }
        ) 

        return {
            'statusCode': 200,
            'body': f"{dynamodb.tables.all()}"
            }

    except Exception as e:

        response_data =  {
            'statusCode': 400,
            'error': str(e) 
            }
    return response_data
