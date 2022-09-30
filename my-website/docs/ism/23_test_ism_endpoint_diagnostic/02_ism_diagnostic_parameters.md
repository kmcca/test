---
"ft:title" : "ISM Diagnostic Tool Parameters"
"ft:prettyUrl" : "r_ism_diagnostic_parameters"
---

You can set your preferred parameters for the Veracode Internal Scanning Management (ISM) endpoint diagnostic tool in your `application.properties` file to avoid having to set them every time you run a test.

This table describes the parameters you can define for diagnosing ISM connection issues.

| Parameter                     | Description                                                                                  |
|-------------------------------|----------------------------------------------------------------------------------------------|
| `diagnosticUrl`               | Destination URL that you want to scan with Veracode Dynamic Analysis.                        |
| `diagnosticTunnelBatchSizeKB` | Size, in kilobytes, of the data package sent to the Veracode gateway. Default is `1000`.     |
| `diagnosticTunnelBatchCount`  | Number of times the endpoint resends the test data to the Veracode gateway. Default is `10`. |
| `diagnosticUrlBatchCount`     | Number of times the endpoint attempts to connect to the destination URL. Default is `10`.    |

This example `application.properties` file includes all the diagnostic tool parameters:

```
#application key
token = $TOKEN$
#gateway host name
gateway = $GATEWAY$
websocketProtocol = wss
wsendpoint = /wsendpoint
socketConnectionTimeoutMs = 5000
socketReadTimeoutMs = 5000
diagnosticUrl = http://www.veracode.com 
diagnosticTunnelBatchSizeKB = 500
diagnosticTunnelBatchCount = 5
diagnosticUrlBatchCount = 5
```


