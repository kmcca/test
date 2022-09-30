---
"ft:title": "beginprescan.do"
"ft:prettyUrl": "r_beginprescan"
---
The `beginprescan.do` call runs the prescan of the application.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

The `beginprescan` call determines whether the auto-scan feature is on or off based on:

-   The value of the `auto_scan` parameter.
-   The `auto_scan` setting of the previous scan.
-   If it is the first scan of an application, the `auto_scan` setting is based on the `auto_scan` feature switch value.

When auto_scan is true, the specified build automatically begins scanning after the prescan completes.

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/5.0/beginprescan.do`

<p><span style="font-size: medium;">Parameters</span></p>

| Name                                  | Type    | Description                                                                                                                                                                                                                                                                                                                       |
|:--------------------------------------|:--------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `app_id`<br>**Required**              | Integer | Application ID.                                                                                                                                                                                                                                                                                                                   |
| `auto_scan`                           | Boolean | If you want to automatically submit a full scan, use this parameter. If this parameter is not present, `auto_scan` is set based on the <ul><li>`auto_scan` setting of previous scans of the application</li><li>Feature switch value of `auto_scan`</li></ul>The full scan does not submit if the prescan results in errors. |
| `sandbox_id`                          | Integer | Target sandbox ID.                                                                                                                                                                                                                                                                                                                |
| `scan_all_nonfatal_top_level_modules` | Boolean | If `auto_scan` is `false`, this parameter is ignored. The scan starts after prescan as long as the application has more than one module, and at least one of the top-level modules has no fatal errors. Default is `false`.                                                                                                       |

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/beginprescan.do" "app_id==<app id>" "auto_scan==false"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `beginprescan.do` call returns the `buildinfo` XML document, which references the [buildinfo.xsd](https://analysiscenter.veracode.com/resource/4.0/buildinfo.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<buildinfo xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;
      XMLSchema-instance"xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema
      &#x2f;4.0&#x2f;buildinfo"xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;
      analysiscenter.veracode.com&#x2f;schema&#x2f;4.0&#x2f;buildinfohttps&#x3a;&#x2f;&#x2f;
      analysiscenter.veracode.com&#x2f;resource&#x2f;4.0&#x2f;
      buildinfo.xsd"buildinfo_version="1.5" account_id="<account id>" 
      app_id="<app id>" build_id="<build id>">
   <build version="v1" build_id="<build id>" submitter="<VeracodeUsername>" platform="Not Specified" 
      lifecycle_stage="Not Specified" results_ready="false" policy_name="Veracode Transitional Very High" 
      policy_version="1" policy_compliance_status="Not Assessed" rules_status="Not Assessed" 
      grace_period_expired="false" scan_overdue="false" legacy_scan_engine="false">
      <analysis_unit analysis_type="Static" status="Prescan Submitted"/>
   </build>
</buildinfo>
```

<p><span style="font-size: medium;">Java Example</span></p>

```java
java -jar vosp-api-wrappers-java-<version #>.jar -vid <VeracodeApiId> -vkey <VeracodeApiKey> -action beginprescan -appid <app id>
```

<p><span style="font-size: medium;">Java Results</span></p>

The `beginprescan.do` call returns the `buildinfo` XML document, which references the [buildinfo.xsd](https://analysiscenter.veracode.com/resource/4.0/buildinfo.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?> 

<buildinfo xmlns="https://analysiscenter.veracode.com/schema/4.0/buildinfo"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      account_id=<account id> app_id=<app id> build_id=<build id> buildinfo_version="1.5"
      xsi:schemaLocation="https://analysiscenter.veracode.com/schema/4.0/buildinfo
      https://analysiscenter.veracode.com/resource/4.0/buildinfo.xsd"> 
   <build build_id=<build id> grace_period_expired="false" legacy_scan_engine="false" lifecycle_stage="Not Specified" 
      platform="Not Specified" policy_compliance_status="Not Assessed" policy_name="Veracode Recommended Very High" 
      policy_version="1" results_ready="false" rules_status="Not Assessed" scan_overdue="false" 
      submitter=<VeracodeUsername> version="4 Dec 2018 Static">
      <analysis_unit analysis_type="Static" status="Prescan Submitted"/>
   </build>
</buildinfo>
```