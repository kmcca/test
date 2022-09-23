---
"ft:title": "getsharedreportlist.do"
"ft:prettyUrl": "r_getsharedreportlist"
---
The `getsharedreportlist.do` call returns a list of published shared reports that are linked to the application.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/4.0/getsharedreportlist.do`

<p><span style="font-size: medium;">Parameters</span></p>

| Name                     | Type    | Description     |
|:-------------------------|:--------|:----------------|
| `app_id`<br>**Required** | Integer | Application ID. |

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/4.0/getsharedreportlist.do" "app_id==<app id>"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

The `getsharedreportlist.do` call returns the `sharedreportlist` XML document, which references the [sharedreportlist.xsd](https://analysiscenter.veracode.com/resource/3.0/sharedreportlist.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<?xml version="1.0" encoding="UTF-8"?>

<sharedreportlist xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" 
         xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;3.0&#x2f;sharedreportlist" 
         xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;3.0&#x2f;sharedreportlist 
         https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;3.0&#x2f;sharedreportlist.xsd" 
         account_id="<account id>" app_id="<app id>" app_name="<app name>" vendor_name="<vendor name>">
   <sharedreport shared_report_id="13391" report_name="Vendor A's static scan" 
      shared_date="2019-07-22T09&#x3a;06&#x3a;19-05&#x3a;00"/>
   <sharedreport shared_report_id="13288" report_name="Vendor A's static scan" 
      shared_date="2019-05-02T22&#x3a;20&#x3a;41-05&#x3a;00"/>
   <sharedreport shared_report_id="13007" report_name="Vendor A's static scan" 
      shared_date="2019-04-18T18&#x3a;40&#x3a;57-05&#x3a;00"/>
</sharedreportlist>
```