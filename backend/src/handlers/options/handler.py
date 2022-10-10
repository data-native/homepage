def optionsHandler(event, context):
    return {
        'headers': {
            "Access-Control-Allow-Origin": "*",
        }:,
            "Access-Control-Allow-Methods": "'POST, GET, PUT, DELETE'",
            "Access-Control-Allow-Headers": "'Content-Type,X-Amz-Date,Authorization,X-Api-Key'",
        }:,
        'statusCode': 200
    }
