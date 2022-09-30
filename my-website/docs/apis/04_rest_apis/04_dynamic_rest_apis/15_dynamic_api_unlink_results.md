---
"ft:title": "Unlink Dynamic Analysis Results from an Application with the REST API"
"ft:prettyUrl": "Unlink_Dynamic_Analysis_Results_from_an_Application_with_the_REST_API"
---
You can use the Dynamic Analysis API to unlink scan results from an application profile when you no longer want to associate the results with a specific application.

<p font-size="13pt"><b>Overview</b></p>

After unlinking results from an [application profile](https://docs.veracode.com/r/request_profile), all future scan results are no longer associated with that application. The results from previous scans remain available and you can link them to the same or a different application profile.

<p font-size="13pt"><b>Steps</b></p>

1.  Run this command to get a list of analyses for your organization:

    ```shell
    http --auth-type=veracode_hmac GET "https://api.veracode.com/was/configservice/v1/analyses/"
    ```

2.  Locate the ID of the analysis that contains the scan to unlink.

3.  Run this command to get a list of scans for an analysis, where `analysis_id` is the analysis ID you obtained from the previous step:

    ```shell
    http --auth-type=veracode_hmac GET "https://api.veracode.com/was/configservice/v1/analyses/{analysis_id}/scans"
    ```

4.  Locate the ID of the scan to unlink.

5.  Run this command to unlink the scan from its associated application profile, where `scan_id` is the scan ID you obtained from the previous step:

    ```shell
    http --auth-type=veracode_hmac PUT "https://api.veracode.com/was/configservice/v1/scans/{scan_id}?method=PATCH" < input.json
    ```

The API passes the JSON file that you populate with the necessary values as shown in this example payload:

```json
{
  "name": "Name-of-Your-Dynamic-Analysis",
  "scans": [
    {"linked_platform_app_uuid":""}
  ]
}         
```

In this example, `linked_platform_app_uuid` has an empty value. Because scan results can only be linked to a single application profile, the empty value specifies to unlink the associated scan.

