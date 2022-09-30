---
"ft:title": "Viewing Pipeline Scan Details with the REST API"
"ft:prettyUrl": "Get_Pipeline_Scan_Details_with_the_REST_API"
---
Use this command to obtain scan details for a Pipeline Scan:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/pipeline_scan/v1/scans/{scan_id}"
```

Obtain the `scan_id` from the response of the POST to the `/scans` endpoint as described in [Configuring a Pipeline Scan with the REST API](https://docs.veracode.com/r/Configuring_a_Pipeline_Scan_with_the_REST_API).

This command checks the status of a running scan. [Retrieve available results](https://docs.veracode.com/r/Obtaining_Pipeline_Scan_Findings_with_the_REST_API) if the `scan_status` value is `"SUCCESS"`.