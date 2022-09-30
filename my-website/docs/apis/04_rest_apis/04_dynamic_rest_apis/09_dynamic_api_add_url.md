---
"ft:title": "Add a URL Scan to a Dynamic Analysis with the REST API"
"ft:prettyUrl": "t_dynamic_add_scan"
---
You can use the Dynamic Analysis API to add a URL to an existing analysis.

<p font-size="13pt"><b>Steps</b></p>

1.  Add the URL to the `scan_config_request` property in the JSON file.

2.  Ensure the `action_type` property is set to `ADD` in the JSON file.

3.  Run this command to get a list of analyses by name:

    ```shell
    http --auth-type=veracode_hmac GET "https://api.veracode.com/was/configservice/v1/analyses/"
    ```

4.  Run this command, where `name` is the name of the analysis you want to edit:

    ```shell
    http --auth-type=veracode_hmac GET "https://api.veracode.com/was/configservice/v1/analyses?name={name}"
    ```

5.  Obtain the `analysis_id` of the analysis you want to edit.

6.  Run this command to add the URL:

    ```shell
    http --auth-type=veracode_hmac PUT "https://api.veracode.com/was/configservice/v1/analyses/{analysis_id}?method=PATCH" < input.json
    ```

The API passes the JSON file that you populate with the necessary values as shown in this example payload:

```json
{
  "name": "Name-of-Your-Dynamic-Analysis",
  "scans": [
    {
      "scan_config_request": {
        "target_url": {
          "url": "https://www.example.com"
        }
      },
      "action_type": "ADD"
    }
  ]
}
```