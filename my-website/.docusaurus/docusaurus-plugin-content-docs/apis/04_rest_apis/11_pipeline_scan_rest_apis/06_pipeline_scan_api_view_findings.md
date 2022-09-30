---
"ft:title": "Viewing Pipeline Scan Findings with the REST API"
"ft:prettyUrl": "Obtaining_Pipeline_Scan_Findings_with_the_REST_API"
---
Use this command to obtain findings from a Pipeline Scan:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/pipeline_scan/v1/scans/{scan_id}/findings"
```

Obtain the `scan_id` from the response of the POST to the `/scans` endpoint as described in [Configuring a Pipeline Scan with the REST API](https://docs.veracode.com/r/Configuring_a_Pipeline_Scan_with_the_REST_API).
