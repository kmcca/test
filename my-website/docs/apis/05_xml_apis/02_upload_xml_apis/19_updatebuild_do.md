---
"ft:title": "updatebuild.do"
"ft:prettyUrl": "r_updatebuild"
---
The `updatebuild.do` call updates the most recent build of an existing application in the portfolio. To update an earlier build, specify the `build_id` parameter.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/5.0/updatebuild.do`

<p><span style="font-size: medium;">Parameters</span></p>

| Name                     | Type    | Description                                                    |
|:-------------------------|:--------|:---------------------------------------------------------------|
| `app_id`<br>**Required** | Integer | Application ID.                                                |
| `build_id`               | Integer | Application or sandbox build ID.                               |
| `version`                | String  | Specify a unique identifier for the build.                     |
| `lifecycle_stage`        | String  | Validates against the names of the `Lifecycle` enums.          |
| `launch_date`            | String  | Validates against the `mm/dd/yyyy` date format.                |
| `sandbox_id`             | Integer | Enter the ID of the sandbox that contains the build to update. |

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/updatebuild.do" "app_id==<app id>" "version==outdated1"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `updatebuild.do` call returns the `buildinfo` XML document, which references the [buildinfo.xsd](https://analysiscenter.veracode.com/resource/4.0/buildinfo.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<?xml version="1.0" encoding="UTF-8"?>

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
      </analysis_unit analysis_type="Static" status="Scan In Process" eta_status="Under Investigation" engine_version="20190805180615"/>
   </build>
</buildinfo>
```

