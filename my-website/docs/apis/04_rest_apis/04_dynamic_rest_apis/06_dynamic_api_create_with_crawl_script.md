---
"ft:title": "Create a Dynamic Analysis with a Crawl Script Using the REST API"
"ft:prettyUrl": "orRWez4I0tnZNaA_i0zn9g/4D9WXhuzrUIQsEKvpOaCJA"
---
You can use the Dynamic Analysis API with a prerecorded crawl sequence to supplement the crawl automation of the Veracode scan engine.

<p font-size="13pt"><b>Steps</b></p>

1.  Enter values for the `scan_config_request`, `crawl_configuration`, and `schedule` properties in the JSON file.

2.  Run this command:

    ```shell
    http --auth-type=veracode_hmac POST "https://api.veracode.com/was/configservice/v1/analyses" < input.json
    ```

This is an example of how to use a Dynamic Analysis with a crawl script:

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Before you paste the crawl script into the API body, you must escape the JSON. If you need assistance, use the JSON escape utility available at <a href="https://jsonformatter.org">https://jsonformatter.org</a>.</p>

```json

{
  "name": "Name-of-Your-Dynamic-Analysis",
  "scans": [
    {
      "scan_config_request": {
        "target_url": {
          "url": "http://www.example.com",
          "http_and_https": true,
          "directory_restriction_type": "DIRECTORY_AND_SUBDIRECTORY"
        },
      "crawl_configuration": {
        "scripts": [
          {
            "crawl_script_data": {
              "script_type": "SELENIUM",
              "script_body": "<escaped JSON>"
            },
            "name": "ExampleCrawlScript.side"
          }
        ],
        "disabled": false
      }
        }
    }
  ],
  "schedule": {
    "now": true,
    "duration": {
      "length": 1,
      "unit": "DAY"
    }
  }
}
```

