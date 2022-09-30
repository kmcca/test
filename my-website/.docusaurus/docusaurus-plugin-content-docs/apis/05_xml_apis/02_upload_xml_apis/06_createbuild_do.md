---
"ft:title": "createbuild.do"
"ft:prettyUrl": "r_createbuild"
---
The `createbuild.do` call creates a new build of an existing application in the portfolio.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/5.0/createbuild.do`

<p><span style="font-size: medium;">Parameters</span></p>

The [`uploadfile.do`](20_uploadfile_do.md) call also creates a build. Therefore, it is not necessary to use this call as part of the [Upload API](c_about_upload_API.md) workflow.

| Name                          |Type|Description|
|:------------------------------|:---|:----------|
| `app_id`<br>**Required**      |Integer|Application ID.|
| `version`                     |String|Specify a unique identifier for the build.|
| `lifecycle_stage`             |String (case-sensitive)|Validates against the names of the `Lifecycle` enums: <ul><li>`In Development`. This category includes pre-Alpha.</li><li>`Internal or Alpha Testing`</li><li>`External or Beta Testing`</li><li>`Deployed`. This category includes in production and actively developed.</li><li>`Maintenance`. This category includes only bug fixes.</li><li>`Cannot Disclose`</li></ul> Only used if `lifecycle_stage_id` is not provided.|
| `launch_date`                 |String|Validates against the `mm/dd/yyyy` date format.|
| `sandbox_id`                  |Integer|Target sandbox ID.|
| `platform` <br>**Deprecated** |String|This parameter is not supported but maintained for backwards compatibility. Validates against the `Platform` enums. Only used if `platform_id` is not provided.|

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/createbuild.do" "app_id==<app id>" "version==<version name>"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `createbuild.do` call returns the `buildinfo` XML document, which references the [buildinfo.xsd](https://analysiscenter.veracode.com/resource/4.0/buildinfo.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<?xml version="1.0" encoding="UTF-8"?>

<buildinfo xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" 
      xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;4.0&#x2f;buildinfo" 
      xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;4.0&#x2f;buildinfo 
      https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;4.0&#x2f;buildinfo.xsd" buildinfo_version="1.5" 
      account_id="<account id>" app_id="<app id>" sandbox_id="<sandbox id>" build_id="<build id>"><build version="<build name>" 
      build_id="<build id>" submitter="<VeracodeUsername>" platform="Not Specified" lifecycle_stage="Not Specified" 
      results_ready="false" policy_name="Veracode Transitional Very High" policy_version="1" policy_compliance_status="Not Assessed" 
      rules_status="Not Assessed" grace_period_expired="false" scan_overdue="false" legacy_scan_engine="false">
      <analysis_unit analysis_type="Static" status="Incomplete"/>
   </build>
</buildinfo> 
```

