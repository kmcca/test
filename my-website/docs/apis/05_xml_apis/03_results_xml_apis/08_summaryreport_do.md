---
"ft:title": "summaryreport.do"
"ft:prettyUrl": "r_summaryreport"
---
The `summaryreport.do` call returns a summary XML report of the scan results for the specified build.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">REST API Equivalent</span></p>

The REST API equivalent of this call is a `GET` to `/appsec/v2/applications/{application_guid}/summary_report` using the [Summary Report API](https://docs.veracode.com/r/c_rest_summary_report_intro). Veracode strongly recommends that you use the REST API for this action. For new integrations, always use the REST APIs.

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/4.0/summaryreport.do`

<p><span style="font-size: medium;">Parameters</span></p>

| Name                       | Type    | Description                      |
|:---------------------------|:--------|:---------------------------------|
| `build_id`<br>**Required** | Integer | Application or sandbox build ID. |

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> This call returns detailed flaw data only available for internally developed applications. Using this call for a third-party application returns an error.</p>

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/4.0/summaryreport.do" "build_id==<build id>"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `summaryreport.do` call returns the `summaryreport` XML document, which references the [summaryreport.xsd](https://analysiscenter.veracode.com/resource/summaryreport.xsd) schema file. You can use the XSD schema file to validate the XML data.

A partial XML example. Veracode has deprecated `assurance_level` and replaced it with [`business_criticality`](https://docs.veracode.com/r/review_assurancelevels).

```xml
<?xml version='1.0' encoding='UTF-8'?>
          
          <summaryreport xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
          xmlns="https://www.veracode.com/schema/reports/export/1.0" 
          xsi:schemaLocation="https://www.veracode.com/schema/reports/export/1.0 
          https://analysiscenter.veracode.com/resource/summaryreport.xsd" report_format_version="1.3" 
          account_id="<account id>" app_name="<app name>" app_id="<app id>" analysis_id="4705951" static_analysis_unit_id="4721671" 
          sandbox_id="1358509" first_build_submitted_date="2019-08-13 17:57:41 UTC" version="13 Aug 2019 Static" build_id="<build id>" 
          submitter="Veracode" platform="Not Specified" assurance_level="5" business_criticality="5" 
          generation_date="2019-09-04 20:06:49 UTC" veracode_level="VL1" total_flaws="22" flaws_not_mitigated="22" teams="Demo Team" 
          life_cycle_stage="Not Specified" planned_deployment_date="" last_update_time="2019-08-13 18:08:47 UTC" is_latest_build="true" 
          policy_name="Veracode Transitional Very High" policy_version="1" policy_compliance_status="Did Not Pass" 
          policy_rules_status="Did Not Pass" grace_period_expired="true" scan_overdue="false" business_owner="" 
          business_unit="Not Specified" tags="" legacy_scan_engine="false">
          <static-analysis rating="D" score="82" submitted_date="2019-08-13 17:57:39 UTC" published_date="2019-08-13 18:08:35 UTC" 
          version="13 Aug 2019 Static" analysis_size_bytes="16157840" engine_version="20190805180615">
          <modules>
          <module name="httpd" compiler="GCC_Linux_IA32_3_4_6" os="Red Hat Enterprise Linux v4 (IA32)" architecture="IA32" loc="66813" 
          score="82" numflawssev0="0" numflawssev1="0" numflawssev2="6" numflawssev3="13" numflawssev4="0" numflawssev5="3" />
          </modules>
          </static-analysis>
          <severity level="5">
          <category categoryname="Numeric Errors" severity="Very High" count="2" />
          <category categoryname="Buffer Overflow" severity="Very High" count="1" />
          </severity>
          <severity level="4" />
          <severity level="3">
          <category categoryname="Buffer Management Errors" severity="Medium" count="9" />
          <category categoryname="Numeric Errors" severity="Medium" count="3" />
          <category categoryname="Cryptographic Issues" severity="Medium" count="1" />
          </severity>
          <severity level="2">
          <category categoryname="Error Handling" severity="Low" count="6" />
          </severity>
          <severity level="1" />
          <severity level="0" />
          <flaw-status new="22" reopen="0" open="0" cannot-reproduce="0" fixed="0" total="22" not_mitigated="22" sev-1-change="0" sev-2-change="6" 
          sev-3-change="13" sev-4-change="0" sev-5-change="3" />
          <customfields>
          <customfield name="Custom 1" value="" />
          <customfield name="Custom 2" value="" />
          <customfield name="Custom 3" value="" />
          <customfield name="Custom 4" value="" />
          <customfield name="Custom 5" value="" />
          <customfield name="Custom 6" value="" />
          <customfield name="Custom 7" value="" />
          <customfield name="Custom 8" value="" />
          <customfield name="Custom 9" value="" />
          <customfield name="Custom 10" value="" />
          </customfields>
          <software_composition_analysis third_party_components="0" violate_policy="false" components_violated_policy="0">
          <vulnerable_components />
          </software_composition_analysis>
          </summaryreport>
```

<p><span style="font-size: medium;">API Wrapper Examples</span></p>

Java:

```shell
java -jar vosp-api-wrappers-java-<version #>.jar -vid <Veracode API ID> -vkey <Veracode API Key> -action summaryreport -buildid <build id> -outputfilepath c:\javawrappers\summaryreport.xml
```

C#:

```shell
VeracodeC#API -vid <Veracode API ID> -vkey <Veracode API key> -action summaryreport -buildid <build id> -outputfilepath c:\csharpwrappers\summaryreport.xml
```

<p><span style="font-size: medium;">API Wrapper Results</span></p>

The `summaryreport.do` call returns the `summaryreport` XML document, which references the [summaryreport.xsd](https://analysiscenter.veracode.com/resource/summaryreport.xsd) schema file. You can use the XSD schema file to validate the XML data.

A partial XML example. Veracode has deprecated `assurance_level` and replaced it with [`business_criticality`](https://docs.veracode.com/r/review_assurancelevels).

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
        
        <summaryreport xmlns="https://www.veracode.com/schema/reports/export/1.0" 
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" account_id="<account id>" analysis_id="4978995" 
        app_id="<app id>" app_name="<app name>" assurance_level="3" build_id="<build id>" business_criticality="3" 
        business_owner="" business_unit="Mobile Secure Ventures" first_build_submitted_date="2019-09-18 21:15:28 UTC" 
        flaws_not_mitigated="276" generation_date="2019-09-30 22:06:34 UTC" grace_period_expired="true" is_latest_build="true" 
        last_update_time="2019-09-18 21:54:25 UTC" legacy_scan_engine="false" life_cycle_stage="Not Specified" 
        planned_deployment_date="2019-09-18 21:12:23 UTC" platform="Not Specified" policy_compliance_status="Did Not Pass" 
        policy_name="Veracode Recommended Medium" policy_rules_status="Did Not Pass" policy_version="1" 
        report_format_version="1.3" sandbox_id="<sandbox id>" scan_overdue="false" static_analysis_unit_id="4994637" 
        submitter="<Veracodeusername>" tags="" teams="Demo Team,Release Team" total_flaws="276" 
        veracode_level="VL1" version="18 Sep 2019 Static Promoted" 
        xsi:schemaLocation="https://www.veracode.com/schema/reports/export/1.0 
        https://analysiscenter.veracode.com/resource/summaryreport.xsd">
        <static-analysis analysis_size_bytes="3735562" engine_version="20190826182718" next_scan_due="2019-12-18 22:54:12 UTC" 
        published_date="2019-09-18 21:54:12 UTC" rating="C" score="53" submitted_date="2019-09-18 21:53:07 UTC" 
        version="18 Sep 2019 Static Promoted">
        <modules>
        <module architecture="JVM" compiler="JAVAC_5" loc="40531" name="<app name>" numflawssev0="1" 
        numflawssev1="0" numflawssev2="19" numflawssev3="232" numflawssev4="22" numflawssev5="2" os="Java J2SE 6" 
        score="53"/>
        ...
```

