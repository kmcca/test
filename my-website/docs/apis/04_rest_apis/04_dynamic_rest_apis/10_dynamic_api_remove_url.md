---
"ft:title": "Remove a URL Scan from a Dynamic Analysis with the REST API"
"ft:prettyUrl": "t_dynamic_delete_scan"
---
You can use the Dynamic Analysis API to delete a URL scan from an analysis.

<p font-size="13pt"><b>Steps</b></p>

1.  Run this command to get a list of analyses by name:

    ```shell
    http --auth-type=veracode_hmac GET "https://api.veracode.com/was/configservice/v1/analyses/"
    ```

2.  Run this command, where `name` is the name of the analysis you want to edit:

    ```shell
    http --auth-type=veracode_hmac GET "https://api.veracode.com/was/configservice/v1/analyses?name={name}"
    ```

3.  Obtain the `analysis_id` of the analysis you want to edit.

4.  Run this command to find the `scan_id`:

    ```shell
    http --auth-type=veracode_hmac GET "https://api.veracode.com/was/configservice/v1/analyses/{analysis_id}/scans"
    ```

5.  Add the scan ID to the JSON file.

6.  Ensure the `action_type` property is set to `REMOVE` in the JSON file.

7.  Run this command, where `analysis_id` is the ID of the analysis from which to delete the scan:

    ```shell
    http --auth-type=veracode_hmac PUT "https://api.veracode.com/was/configservice/v1/analyses/{analysis_id}?method=PATCH" < input.json
    ```

The API passes the JSON file that you populate with the necessary values as shown in this example payload:

```json
{
  "name": "Name-of-Your-Dynamic-Analysis",
  "scans": [
    {
      "action_type": "REMOVE",
      "scan_id": "{scan_id}"
    }
  ]
}
```