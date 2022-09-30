---
"ft:title": "downloadflawreport.do"
"ft:prettyUrl": "r_downloadflawreport"
---
The `downloadflawreport.do` call returns a generated XML report when it is available. This report lists all fixed and unfixed flaws for the specified applications, scan type, or both.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> If you try to call <code>downloadflawreport.do</code> before <code>generateflawreport.do</code> has completed, you receive HTTP status code <code>204</code> to indicate no content is available. Try to download the report at a later time. After an excessively long time, if the Veracode Platform does not return the report, contact Veracode Technical Support.</p>

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/3.0/downloadflawreport.do`

<p><span style="font-size: medium;">Permissions</span></p>

You need the [Archer API role](https://docs.veracode.com/r/c_API_roles_details) to use this call.

<p><span style="font-size: medium;">Parameters</span></p>

| Name    | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|:--------|:-------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `token` | String | Universally unique identifier (UUID) token, which you obtain from the XML report returned by calling [generateflawreport.do](02_generateflawreport_do.md). Use this token to download the generated flaw report. You can obtain tokens for the five most recent reports. Tokens expire after 30 days. If you do not provide a token, the call returns the latest report produced by [generateflawreport.do](02_generateflawreport_do.md), if one exists. |

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac -o flawreport.xml "https://analysiscenter.veracode.com/api/3.0/downloadflawreport.do" "token==7edf8d8f-f70d-4b73-97ad-f78db97f50f9"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `downloadflawreport.do` call returns the flaw report as an XML document, which references [archerreport.xsd](https://analysiscenter.veracode.com/resource/2.0/archerreport.xsd) schema file. You can use the XSD schema file to validate the XML data.

A partial XML example. Veracode has deprecated `assurance_level` and replaced it with [`business_criticality`](https://docs.veracode.com/r/review_assurancelevels).

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Records
	xmlns="http&#x3a;&#x2f;&#x2f;www.archer-tech.com&#x2f;"
	xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance"
	xmlns:records_version="1.1" xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;2.0&#x2f;archerapi 
         https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;2.0&#x2f;archerreport.xsd">
	<Record>
		<app_name>FlowMeter</app_name>
		<app_id>123456</app_id>
		<archer_app_name>1234</archer_app_name>
		<assurance_level>veryhigh</assurance_level>
		<teams>Demo Team</teams>
		<platform>Not Specified</platform>
		<version>13 Aug 2019 Static</version>
		<lifecycle_stage>Not Specified</lifecycle_stage>
		<rating>D</rating>
		<mitigated_rating></mitigated_rating>
		<static_score>82</static_score>
		<dynamic_score>0</dynamic_score>
		<manual_score>0</manual_score>
		<static_mitigated_score>0</static_mitigated_score>
		<dynamic_mitigated_score>0</dynamic_mitigated_score>
		<manual_mitigated_score>0</manual_mitigated_score>
		<app_origin>Not Specified</app_origin>
		<generation_date>2019-08-13-14&#x3a;08</generation_date>
		<planned_deployment_date></planned_deployment_date>
		<last_update_date>2019-08-13-14&#x3a;08</last_update_date>
		<submitted_date>2019-08-13-13&#x3a;57</submitted_date>
		<policy_name>Veracode Transitional Very High</policy_name>
		<policy_version>1</policy_version>
		<policy_compliance_status>Did Not Pass</policy_compliance_status>
		<policy_rules_passed>false</policy_rules_passed>
		<grace_period_expired>true</grace_period_expired>
		<scan_overdue>true</scan_overdue>
		<business_owner></business_owner>
		<business_unit>Not Specified</business_unit>
		<tags></tags>
		<custom0></custom0>
		<custom1></custom1>
		<custom2></custom2>
		<custom3></custom3>
		<custom4></custom4>
		<customfield name="Custom 1" value=""/>
		<customfield name="Custom 2" value=""/>
		<customfield name="Custom 3" value=""/>
		<customfield name="Custom 4" value=""/>
		<customfield name="Custom 5" value=""/>
		<customfield name="Custom 6" value=""/>
		<customfield name="Custom 7" value=""/>
		<customfield name="Custom 8" value=""/>
		<customfield name="Custom 9" value=""/>
		<customfield name="Custom 10" value=""/>
		<any_scan_due_date></any_scan_due_date>
		<flaws>
			<Record>
				<app_name>Apache</app_name>
				<app_id>575960</app_id>
				<archer_app_name>2502</archer_app_name>
				<version>13 Aug 2019 Static</version>
				<platform>Not Specified</platform>
				<flaw_issue_id>1</flaw_issue_id>
				<module>httpd</module>
				<severity>2</severity>
				<type>Unchecked Error Condition</type>
				<flaw_description>&#x3c;span&#x3e;The result of this call to calloc&#x28;&#x29; is not checked for 
               success before being used. This can result in application instability or crashing if memory is 
               not available.&#x3c;&#x2f;span&#x3e; &#x3c;span&#x3e;Be sure to check the result and ensure it 
               is correct before use. Some functions return a pointer which should be validated as not NULL before 
               use.  Other functions return integers or Boolean values that must either be zero or non-zero for the 
               results of the function to be used.  Consult the API documentation to determine what a correct result 
               is from the function call.&#x3c;&#x2f;span&#x3e; &#x3c;span&#x3e;References&#x3a; &#x3c;a 
               href&#x3d;&#x22;https&#x3a;&#x2f;&#x2f;cwe.mitre.org&#x2f;data&#x2f;definitions&#x2f;391.html&#x22;&#x3e;
               CWE&#x3c;&#x2f;a&#x3e; &#x3c;a href&#x3d;&#x22;https&#x3a;&#x2f;&#x2f;www.owasp.org&#x2f;index.php&#x2f;
               Improper_Error_Handling&#x22;&#x3e;OWASP&#x3c;&#x2f;a&#x3e;&#x3c;&#x2f;span&#x3e;</flaw_description>
				<note></note>
				<cweid>391</cweid>
				<remediationeffort>2</remediationeffort>
				<exploitLevel>-1</exploitLevel>
				<sourcefile>scoreboard.c</sourcefile>
				<line>120</line>
				<sourcefilepath>home&#x2f;efeller&#x2f;httpd-2.2.8&#x2f;server&#x2f;scoreboard.c</sourcefilepath>
				<scope>UNKNOWN</scope>
				<functionprototype>void ap_init_scoreboard&#x28;void &#x2a;&#x29;</functionprototype>
				<functionrelativelocation>15</functionrelativelocation>
				<url></url>
				<categoryid>16</categoryid>
				<categoryname>Error Handling</categoryname>
				<pcirelated>false</pcirelated>
				<cwe_description>&#x5b;PLANNED FOR DEPRECATION. SEE MAINTENANCE NOTES.&#x5d; Ignoring exceptions and other error conditions may allow an attacker to induce unexpected behavior unnoticed.</cwe_description>
				<count>1</count>
				<capecid>0</capecid>
				<exploitdifficulty>0</exploitdifficulty>
				<exploit_desc></exploit_desc>
				<severity_desc></severity_desc>
				<remediation_desc></remediation_desc>
				<date_first_occurance>2019-08-13-13&#x3a;55</date_first_occurance>
				<date_first_occurrence>2019-08-13-13&#x3a;55</date_first_occurrence>
				<remediation_status>New</remediation_status>
				<cia_impact>nnp</cia_impact>
				<is_latest_build>true</is_latest_build>
				<published_date>2019-08-13-14&#x3a;08</published_date>
				<affects_policy_compliance>false</affects_policy_compliance>
				<mitigation_status>none</mitigation_status>
				<mitigation_status_desc>Not Mitigated</mitigation_status_desc>
				<mitigations/>
			</Record>
```