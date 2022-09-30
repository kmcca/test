---
"ft:title": "getbuildinfo.do"
"ft:prettyUrl": "r_getbuildinfo"
---
The `getbuildinfo.do` call provides information about the most recent scan or a specific scan of the application.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/5.0/getbuildinfo.do`

<p><span style="font-size: medium;">Parameters</span></p>

| Name                          | Type    | Description                                                              |
|:------------------------------|:--------|:-------------------------------------------------------------------------|
| `app_id` <br>**Required** | Integer | Application ID.                                                          |
| `build_id`                    | Integer | Application or sandbox build ID. Default is the most recent static scan. |
| `sandbox_id`                  | Integer | Target sandbox ID.                                                       |

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/getbuildinfo.do" "app_id==<app id>"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `getbuildinfo.do` call returns the `buildinfo` XML document, which references the [buildinfo.xsd](https://analysiscenter.veracode.com/resource/4.0/buildinfo.xsd) schema file. You can use the XSD schema file to validate the XML data.

For information on the build status messages, see [API Build Status Information](https://docs.veracode.com/r/c_buildinfo_table).

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<buildinfo xmlns="https://analysiscenter.veracode.com/schema/4.0/buildinfo" 
           xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  
           xsi:schemaLocation="https://analysiscenter.veracode.com/schema/4.0/buildinfo https://analysiscenter.veracode.com/resource/4.0/buildinfo.xsd"
           buildinfo_version="1.5" account_id="<account id>" app_id="<app id>" build_id="<build id>">
    <build build_id="<build id>" grace_period_expired="false" legacy_scan_engine="false" 
      lifecycle_stage="Not Specified" platform="Not Specified" policy_compliance_status="Not Assessed" 
      policy_name="Veracode Transitional Very High" policy_version="1" results_ready="true" rules_status="Not Assessed" scan_overdue="false" 
      submitter="Veracode" version="13 Aug 2019 Static">
      <analysis_unit analysis_type="Static" status="Scan In Process" eta_status="Under Investigation" engine_version="20190805180615"/>
    </build>
</buildinfo>
```

<p><span style="font-size: medium;">Java Example</span></p>

```java
java -jar vosp-api-wrappers-java-<version #>.jar -vid <VeracodeApiId> -vkey <VeracodeApiKey> -action getbuildinfo –appid <app id>
```

<p><span style="font-size: medium;">Java Results</span></p>

The `getbuildinfo.do` call returns the `buildinfo` XML document, which references the [buildinfo.xsd](https://analysiscenter.veracode.com/resource/2.0/buildlist.xsd) schema file. You can use the XSD schema file to validate the XML data. For information on the build status messages, see [API Build Status Information](https://docs.veracode.com/r/c_buildinfo_table).

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<buildinfo xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" 
      xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;4.0&#x2f;buildinfo" 
      xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;4.0&#x2f;buildinfo 
      https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;4.0&#x2f;buildinfo.xsd" buildinfo_version="1.5" 
      account_id="<account id>" app_id="<app id>" build_id="<build id>">
   <build version="outdated1" build_id="<build id>" 
      submitter="Veracode" platform="Not Specified" lifecycle_stage="Not Specified" results_ready="false" 
      policy_name="Veracode Transitional Very High" policy_version="1" policy_compliance_status="Not Assessed" 
      policy_updated_date="2019-08-13T14&#x3a;02&#x3a;08-04&#x3a;00" rules_status="Not Assessed" grace_period_expired="false" 
      scan_overdue="false" legacy_scan_engine="false">
      <analysis_unit analysis_type="Static" status="Scan In Process" eta_status="Under Investigation" engine_version="20190805180615"/>
   </build>
</buildinfo>

```

