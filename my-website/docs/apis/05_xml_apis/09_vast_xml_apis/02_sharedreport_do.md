---
"ft:title": "sharedreport.do"
"ft:prettyUrl": "r_sharedreport"
---
The `sharedreport.do` call returns the details of a shared report.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/4.0/sharedreport.do`

<p><span style="font-size: medium;">Parameters</span></p>

| Name                               | Type    | Description                                                                                                                                        |
|:-----------------------------------|:--------|:---------------------------------------------------------------------------------------------------------------------------------------------------|
| `app_id`<br>**Required**           | Integer | Application ID.                                                                                                                                    |
| `shared_report_id`<br>**Required** | Integer | You can get the shared report ID from the `sharedreportlist.xml` file returned by the [getsharedreportlist.do call](05_getsharedreportlist_do.md). |

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/4.0/sharedreport.do" "app_id==<app id>" "shared_report_id==10651"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `sharedreport.do` call returns the `summaryreport` XML document, which references the [summaryreport.xsd](https://analysiscenter.veracode.com/resource/summaryreport.xsd) schema file. You can use the XSD schema file to validate the XML data.

A partial XML example. Veracode has deprecated `assurance_level` and replaced it with [`business_criticality`](https://docs.veracode.com/r/review_assurancelevels).

```xml
<?xml version="1.0" encoding="UTF-8"?>

<summaryreport xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" 
         xmlns="https&#x3a;&#x2f;&#x2f;www.veracode.com&#x2f;schema&#x2f;reports&#x2f;export&#x2f;1.0" 
         xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;www.veracode.com&#x2f;schema&#x2f;reports&#x2f;export&#x2f;1.0 
         https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;summaryreport.xsd" 
         report_format_version="1.3" account_id="<account id>" app_name="<app name>" app_id="<app id>" 
         analysis_id="674675" static_analysis_unit_id="690423" sandbox_id="<sandbox id>" 
         first_build_submitted_date="2015-12-22 15&#x3a;47&#x3a;59 UTC" version="22 July 2019 Static" 
         build_id="<build id>" submitter="<vendor name>" platform="Not Specified" assurance_level="3" 
         business_criticality="3" generation_date="2019-10-03 18&#x3a;03&#x3a;20 UTC" veracode_level="VL1" 
         total_flaws="366" flaws_not_mitigated="365" teams="" life_cycle_stage="Not Specified" 
         planned_deployment_date="2019-12-22 15&#x3a;27&#x3a;13 UTC" last_update_time="2019-07-22 16&#x3a;05&#x3a;52 UTC" 
         is_latest_build="true" policy_name="3rd Party" policy_version="2" policy_compliance_status="Did Not Pass" 
         policy_rules_status="Did Not Pass" grace_period_expired="false" scan_overdue="false" business_owner="" 
         business_unit="Not Specified" tags="" legacy_scan_engine="false">
   <static-analysis rating="C" score="53" submitted_date="2015-12-22 15&#x3a;47&#x3a;47 UTC" 
         published_date="2015-12-22 16&#x3a;05&#x3a;49 UTC" version="22 July 2019 Static" mitigated_rating="C" 
         mitigated_score="53" next_scan_due="2019-12-01 15&#x3a;05&#x3a;49 UTC" analysis_size_bytes="5696667" 
         engine_version="88693">
      <modules>
         <module name="<module name>" compiler="JAVAC_7" os="Java J2SE 7" architecture="JVM" loc="77543" score="52" 
            numflawssev0="1" numflawssev1="0" numflawssev2="22" numflawssev3="321" numflawssev4="20" numflawssev5="2"/>
      </modules>
   </static-analysis>
   <severity level="5">
      <category categoryname="Command or Argument Injection" severity="Very High" count="2"/>
   </severity>
   <severity level="4">
      <category categoryname="SQL Injection" severity="High" count="20"/>
   </severity>
   <severity level="3">
      <category categoryname="Cross-Site Scripting &#x28;XSS&#x29;" severity="Medium" count="252"/>
      <category categoryname="Credentials Management" severity="Medium" count="44"/>
      <category categoryname="CRLF Injection" severity="Medium" count="8"/>
      <category categoryname="Cryptographic Issues" severity="Medium" count="5"/>
      <category categoryname="Insufficient Input Validation" severity="Medium" count="4"/>
      <category categoryname="Code Quality" severity="Medium" count="3"/>
      <category categoryname="Directory Traversal" severity="Medium" count="3"/>
      <category categoryname="Encapsulation" severity="Medium" count="2"/>
   </severity>
   <severity level="2">
      <category categoryname="Information Leakage" severity="Low" count="10"/>
      <category categoryname="Cryptographic Issues" severity="Low" count="5"/>
      <category categoryname="Code Quality" severity="Low" count="5"/>
      <category categoryname="API Abuse" severity="Low" count="2"/>
   </severity>
   <severity level="1"/>
   <severity level="0">
      <category categoryname="Potential Backdoor" severity="Informational" count="1"/>
   </severity>
   <flaw-status new="366" reopen="0" open="0" cannot-reproduce="0" fixed="0" total="366" not_mitigated="365" 
       sev-1-change="0" sev-2-change="22" sev-3-change="321" sev-4-change="20" sev-5-change="2"/>
   <customfields>
      <customfield name="JIRA" value=""/>
      <customfield name="JenkinsID" value=""/>
      <customfield name="SDLC Stage" value=""/>
      <customfield name="Custom 4" value=""/>
      <customfield name="Custom 5" value=""/>
      <customfield name="Custom 6" value=""/>
      <customfield name="Custom 7" value=""/>
      <customfield name="Custom 8" value=""/>
      <customfield name="Custom 9" value=""/>
      <customfield name="Custom 10" value=""/>
   </customfields>
   <software_composition_analysis third_party_components="0" violate_policy="false" components_violated_policy="0" 
         sca_service_available="false">
      <vulnerable_components/>
   </software_composition_analysis>
</summaryreport>
```