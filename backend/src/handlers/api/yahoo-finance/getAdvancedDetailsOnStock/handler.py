import os
import json
import requests

"""
Retrieves advanced details on a given stock ticker

PARAMS
------------
@modules: csv of modules selected
- assetProfile
- defaultKeyStatistics
- recommendationTrend
- financialData
- majorHoldersBreakdown
- earnings
- earningsHistory
- earningsTrend
- indexTrend
- industryTrend
- netSharePurchaseActivity
- sectorTrend
- insiderHolders
- upgradeDowngradeHistory
"""
def getAdvancedDetails(event, context):
    base_url = os.environ.get('BASE_URL')
    ticker = event.params['ticker']
    modules = event.params['modules']
    response = requests.get(
        url=f"{base_url}/{ticker}?modules={modules}"
    )

    try:
        return {
            'statusCode': 200,
            'headers': {
                  "Access-Control-Allow-Origin" : "*", 
            },
            'body': json.dumps(response['data']) 
            }

    except Exception as e:
        return   {
            'statusCode': 400,
            'error': str(e) 
            }
