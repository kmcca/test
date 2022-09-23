---
"ft:title": "Create a Dynamic Analysis of a Single URL with the REST API"
"ft:prettyUrl": "t_dynamic_single"
---
You can use the Dynamic Analysis API to create an analysis of a single URL.

<p font-size="13pt"><b>Steps</b></p>

1.  Enter values for the `scan_config_request` and `schedule` properties in the JSON file.

2.  Run this command:

    ```shell
    http --auth-type=veracode_hmac POST "https://api.veracode.com/was/configservice/v1/analyses" < input.json
    ```

This is an example of a Dynamic Analysis for one URL that runs immediately for one day:

```json
{
  "name": "Name-of-Your-Dynamic-Analysis",
  "scans": [
    {
      "scan_config_request": {
        "target_url": {
          "url": "http://www.example.com"
        }
      }
    }
  ],
  "schedule": {
    "duration": {
      "length": 1,
      "unit": "DAY"
    },
    "scheduled": true,
    "now": true
  }
}   
```

