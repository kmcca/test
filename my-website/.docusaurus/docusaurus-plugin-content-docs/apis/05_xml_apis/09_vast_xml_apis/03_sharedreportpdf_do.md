---
"ft:title": "sharedreportpdf.do"
"ft:prettyUrl": "r_sharedreportpdf"
---
The `sharedreportpdf.do` call returns the shared report as a PDF document to the specified directory.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/4.0/sharedreportpdf.do`

<p><span style="font-size: medium;">Parameters</span></p>

| Name                               | Type    | Description                                                                                                                                        |
|:-----------------------------------|:--------|:---------------------------------------------------------------------------------------------------------------------------------------------------|
| `app_id`<br>**Required**           | Integer | Application ID.                                                                                                                                    |
| `shared_report_id`<br>**Required** | Integer | You can get the shared report ID from the `sharedreportlist.xml` file returned by the [getsharedreportlist.do](05_getsharedreportlist_do.md) call. |

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac -o c:\veracodeapi\sharedreport.pdf "https://analysiscenter.veracode.com/api/4.0/sharedreportpdf.do" "app_id==<app id>" "shared_report_id==10651"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `sharedreportpdf.do` call returns the `summaryreport` PDF document.