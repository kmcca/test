---
"ft:title": "getsharedreportinfo.do"
"ft:prettyUrl": "r_getsharedreportinfo"
---
The `getsharedreportinfo.do` call returns information about a specific shared report or the latest shared report.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/4.0/getsharedreportinfo.do`

<p><span style="font-size: medium;">Parameters</span></p>

| Name                     | Type    | Description                                                                                                                                                                                                                                                                                     |
|:-------------------------|:--------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `app_id`<br>**Required** | Integer | Application ID.                                                                                                                                                                                                                                                                                 |
| `shared_report_id`       | Integer | Enter the ID for a shared report. You can get a shared report ID from the `sharedreportlist.xml` file returned by the [getsharedreportlist.do](05_getsharedreportlist_do.md) call.If you do not specify a shared report ID, the `getsharedreportinfo.do` call returns the latest shared report. |

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/4.0/getsharedreportinfo.do" "app_id==<app id>" "shared_report_id==10651"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `getsharedreportinfo.do` call returns the `sharedreportinfo` XML document, which references the [sharedreportinfo.xsd](https://analysiscenter.veracode.com/resource/3.0/sharedreportinfo.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<?xml version="1.0" encoding="UTF-8"?>

<sharedreportinfo xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" 
         xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;3.0&#x2f;sharedreportinfo" 
         xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;3.0&#x2f;sharedreportinfo 
         https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;3.0&#x2f;sharedreportinfo.xsd" 
         account_id="<account id>" app_id="<app id>" shared_report_id="10651">
   <sharedreport shared_report_id="10651" report_name="Vendor A's static scan" policy_name="3rd Party" policy_version="2" 
         policy_compliance_status="Did Not Pass" rule_status="Did Not Pass" scan_status="Pass" 
         shared_date="2019-07-22T09&#x3a;06&#x3a;19-05&#x3a;00">
      <analysis_unit analysis_type="Static" analysis_name="22 July 2019 Static"/>
   </sharedreport>
</sharedreportinfo>
```