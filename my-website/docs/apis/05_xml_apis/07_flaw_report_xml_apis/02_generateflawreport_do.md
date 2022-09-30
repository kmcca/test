---
"ft:title": "generateflawreport.do"
"ft:prettyUrl": "r_generateflawreport"
---
The `generateflawreport.do` creates a report listing all fixed and unfixed flaws for the specified applications, scan types, or both. The return contains the token needed for downloading the flaw report.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/3.0/generateflawreport.do`

<p><span style="font-size: medium;">Permissions</span></p>

You need the [Archer API role](https://docs.veracode.com/r/c_API_roles_details) to use this call.

<p><span style="font-size: medium;">Parameters</span></p>

| Name                          | Type    | Description                                                                                                                      |
|:------------------------------|:--------|:---------------------------------------------------------------------------------------------------------------------------------|
| `app_id_list`<br>**Required** | Integer | Comma-separated list of the IDs for the applications you want included in the report. This parameter does not support wildcards. |
| `scan_type`                   | String  | Values are: `static`, `dynamic`, `manual`                                                                                        |

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac -o reporttoken.xml "https://analysiscenter.veracode.com/api/3.0/generateflawreport.do" "app_id_list==<app1 id>,<app2 id>,<app3 id>" "scan_type==static"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `generateflawreport.do` call initiates the process of creating the `generateflawreport` XML document, which references the [archerreportrequest.xsd](https://analysiscenter.veracode.com/resource/1.0/archerreportrequest.xsd) schema file. You can use the XSD schema file to validate the XML data.

The XML return contains the token string you need to retrieve the report, when it is available, using the [`downloadflawreport.do`](03_downloadflawreport_do.md#) call.

```xml
<?xml version="1.0" encoding="UTF-8"?>

<archerreport xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" 
      xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;1.0&#x2f;archerapi" 
      xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;1.0&#x2f;archerapi 
      https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;1.0&#x2f;archerreportrequest.xsd" 
      token="4aaa2b4e-c42a-44c3-a696-c650a82d9c78" archer_report_version="3.0">
</archerreport>
```