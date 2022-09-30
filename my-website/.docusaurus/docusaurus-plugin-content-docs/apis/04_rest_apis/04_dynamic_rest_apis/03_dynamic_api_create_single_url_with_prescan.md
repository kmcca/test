---
"ft:title": "Create a Dynamic Analysis of a Single URL with Prescan Verification Using the REST API"
"ft:prettyUrl": "orRWez4I0tnZNaA_i0zn9g/zeSONBs17jTBtw37BYnUDA"
---
You can use the Dynamic Analysis API to create an analysis with prescan verification.

<p font-size="13pt"><b>Before You Begin</b></p>

To be able to run a prescan verification before the Dynamic Analysis, you must allow two hours for the prescan to complete before you schedule the analysis to begin.

<p font-size="13pt"><b>Steps</b></p>

1.  Enter values for the `scan_config_request` and `schedule` properties in the JSON file.

2.  Run this command:

    ```shell
    http --auth-type=veracode_hmac POST "https://api.veracode.com/was/configservice/v1/analyses?run_verification=true" < input.json
    ```

    The `run_verification=true` query property specifies that the prescan run after the command creates the analysis.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> If your prescan verification fails, the Dynamic Analysis also fails.</p>

This is an example of a Dynamic Analysis for a single URL with prescan:

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
    "start_date": "2020-02-27T02:00+00:00",
    "duration": {
      "length": 3,
      "unit": "DAY"
    }
  }
}
```

You can call `GET /analyses` to see the status of your analyses.