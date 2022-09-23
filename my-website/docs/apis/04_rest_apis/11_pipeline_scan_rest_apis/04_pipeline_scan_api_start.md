---
"ft:title": "Starting a Pipeline Scan with the REST API"
"ft:prettyUrl": "Starting_a_Pipeline_Scan_with_the_REST_API"
---
Use this command to start a Pipeline Scan:

```shell
http --auth-type=veracode_hmac PUT "https://api.veracode.com/pipeline_scan/v1/scans/{scan_id}" < input.json        

```

Obtain the `scan_id` from the response of the POST to the `/scans` endpoint as described in [Configuring a Pipeline Scan with the REST API](https://docs.veracode.com/r/Configuring_a_Pipeline_Scan_with_the_REST_API).

The API passes the JSON file that you populate with the necessary values as shown in this example payload:

```json
{
  "scan_status": "STARTED"
} 
```