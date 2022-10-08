import os
import requests 
import json
import boto3
import uuid
from datetime import datetime

def putItemHandler(event, context):
    if ('body' not in event or event['httpMethod'] != 'POST'):
        return {
            'statusCode': 400,
            'headers': {
                "Access-Control-Allow-Origin": "*"
            },
            'body': json.dumps({'msg': 'Bad request'})
        }

    table_name = os.environ.get('SAMPLE_TABLE')
    article_table = boto3.resource('dynamodb', endpoint_url="http://docker.for.mac.host.internal:8000")
    article = json.loads(event['body'])

    params = {
        'PK': 'Article',
        'SK': str(uuid.uuid4()),
        'CreatedAt': str(datetime.timestamp(datetime.now())),
        'Status': article['status'],
        'Title': article['title'],
        'Subtitle': article['subtitle'],
        'Tags': article['tags'],
        'Content': article['content'],
    }

    table = article_table.Table(table_name)
    table.put_item(
        TableName=table_name,
        Item=params
    ) 

    return {
        'body': json.dumps({'msg': 'Entry created '})
        }

