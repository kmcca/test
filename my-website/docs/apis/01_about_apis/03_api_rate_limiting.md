---
"ft:title" : "About API Rate Limiting"
"ft:prettyUrl" : "About_API_Rate_Limiting"
---
To ensure optimal performance and availability of Veracode services to all users, Veracode reserves the right to limit API requests.

## API Rate Limits
Veracode rate limits, or throttles, API requests from any [Veracode account](https://docs.veracode.com/r/c_about_veracode_accounts) that exceeds the allowed limits. After reaching the request limit, any API requests to Veracode return HTTP status code `429`. The header information in the HTTP response indicates the number of seconds to wait before resending the request.

| API Calls                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Allowed Limit                   |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------|
| [Flaw Report](https://docs.veracode.com/r/c_about_flawreport) and [Results](https://docs.veracode.com/r/c_results_main) XML APIs:<ul><li>`detailedreport.do`</li><li>`summaryreport.do`</li><li>`generateflawreport.do`</li><li>`downloadflawreport.do`</li><li>`detailedreportpdf.do`</li><li>`summaryreportpdf.do`</li><li>`thirdpartyreportpdf.do`</li><li>`sharedreport.do`</li><li>`sharedreportpdf.do`</li><li>`getsharedreportinfo.do`</li><li>`getsharedreportlist.do`</li></ul> | 80 calls/minute per IP address  |
| All other XML APIs                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | 250 calls/minute per IP address |

## Resolving API Rate Limiting
If your automations appear to be experiencing rate limiting, you can review them for these issues or configuration settings in an attempt to remove the limiting and restore your API requests to normal performance:

-   Any bugs, for example, that might be causing the APIs to send unnecessary requests.
-   Any hard-coded API frequencies that you can reduce to ensure that they are under 250 API requests per minute.
-   Teams that are using the same API credentials for a large number of scans, such as running several scans with the same credentials in more than one development pipeline, and sending an excessive number of requests. Veracode recommends using separate API credentials for each project particularly for teams that need to run a high number of scans.
-   The interval value for the `retry-after` header is sufficient for your requests. Do not retry your requests until after this interval has expired.