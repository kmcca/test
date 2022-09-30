---
"ft:title" : "downloadarcherreport.do"
"ft:prettyUrl" : "r_downloadarcher"
---
The `downloadarcherreport.do` call returns the Archer XML report generated by the `generatearcherreport.do` call.

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/3.0/downloadarcherreport.do`

<p><span style="font-size: medium;">Parameters</span></p>

<style>
table.veracode {
  width: 100%;
  background-color: #ffffff;
  border-collapse: collapse;
  border-width: 1px;
  border-color: #000000;
  border-style: solid;
  color: #000000;
}

table.veracode td, table.veracode th {
border-width: 1px;
border-color: #000000;
border-style: solid;
padding: 2px;
}

table.veracode thead {
background-color: ##F8F8F8;
}
</style>
<table class="veracode">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>token</code></td>
<td>String</td>
<td>Universally unique identifier (UUID). Obtain this token from the XML report returned by calling <code><a href="https://docs.veracode.com/r/r_generatearcher">generatearcherreport.do</a></code>. Use this token to download the Archer report. You can obtain tokens for the five most recent reports. Tokens expire after 30 days. <p>If you do not provide a token, the call returns the latest report produced by <code>generatearcherreport.do</code>, if one exists.</p></td>
</tr>
</tbody>
</table>

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```
http --auth-type=veracode_hmac -o archerreport.xml "https://analysiscenter.veracode.com/api/3.0/downloadarcherreport.do" "token==<Archer report token>"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `downloadarcherreport.do` call returns the archerreport XML document, which references the [archerreport.xsd](https://analysiscenter.veracode.com/resource/2.0/archerreport.xsd) schema file. You can use the XSD schema file to validate the XML data. The XML report lists [details about the scan](https://docs.veracode.com/r/c_archer_xml) of your Archer application.

A partial XML example. Veracode has deprecated assurance level and replaced it with [business criticality](https://docs.veracode.com/r/review_assurancelevels).

```xml
<?xml version="1.0" encoding="UTF-8"?>

<Records xmlns="http&#x3a;&#x2f;&#x2f;www.archer-tech.com&#x2f;"
  xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance"
  xmlns:records_version="1.1"
  xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com
  &#x2f;schema&#x2f;2.0&#x2f;archerapi
  https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource
  &#x2f;2.0&#x2f;archerreport.xsd">
   <Record>
      <app_name>AWebGoat</app_name>
      <app_description></app_description>
      <app_id>593078</app_id>
      <assurance_level>medium</assurance_level>
      <teams>Debug Team,Demo Team,Quality Team,Release Team</teams>
      <platform>Not Specified</platform>
      <version>18 Sep 2019 Static Promoted</version>
      <lifecycle_stage>Not Specified</lifecycle_stage>
      <rating>C</rating>
      <mitigated_rating></mitigated_rating>
      <static_score>53</static_score>
      <dynamic_score>0</dynamic_score>
      <manual_score>0</manual_score>
      <static_mitigated_score>0</static_mitigated_score>
      <dynamic_mitigated_score>0</dynamic_mitigated_score>
      <manual_mitigated_score>0</manual_mitigated_score>
      <app_origin>Not Specified</app_origin>
      <generation_date>2019-09-18-17&#x3a;54</generation_date>
      <planned_deployment_date>2019-09-18-17&#x3a;12</planned_deployment_date>
      <last_update_date>2019-09-18-17&#x3a;54</last_update_date>
      <submitted_date>2019-09-18-17&#x3a;53</submitted_date>
      <policy_name>Veracode Recommended Medium</policy_name>
      <policy_version>1</policy_version>
      <policy_compliance_status>Did Not Pass</policy_compliance_status>
      <policy_rules_passed>false</policy_rules_passed>
      <grace_period_expired>false</grace_period_expired>
      <scan_overdue>true</scan_overdue>
      <business_owner></business_owner>
      <business_unit>Mobile Secure Ventures </business_unit>
      <business_owner_email></business_owner_email>
      <application_purpose>Other Development Tools</application_purpose>
      <deployment_method>Not Specified</deployment_method>
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
      <modules>
         <Record>
            <module>WebGoat-5.0-with-jsp.war</module>
            <analysis_type>static</analysis_type>
            <compiler>JAVAC_5</compiler>
            <os>Java J2SE 6</os>
            <architecture>JVM</architecture>
            <next_scan_due>2019-12-18-17&#x3a;54</next_scan_due>
         </Record>
         <Record>
            <module>WebGoat-5.0-with-jsp.war_htmljscode.veracodegen.htmla.jsa</module>
            <analysis_type>static</analysis_type>
            <compiler>JAVASCRIPT_5_1</compiler>
            <os>JavaScript</os>
            <architecture>JAVASCRIPT</architecture>
            <next_scan_due>2019-12-18-17&#x3a;54</next_scan_due>
         </Record>
      </modules>
      <flaws>
         <Record>
            <app_name>AWebGoat</app_name>
            <app_id>593078</app_id>
            <version>18 Sep 2019 Static Promoted</version>
            <platform>Not Specified</platform>
            <flaw_issue_id>253</flaw_issue_id>
            <module>WebGoat-5.0-with-jsp.war</module>
            <severity>0</severity>
            <type>Reliance on Security Through Obscurity</type>
            <flaw_description>&#x3c;span&#x3e;The application decrypts or decodes embedded data.
              Encryption or encoding of embedded data is typically done to obfuscate the true
              intention of the data and to hinder reverse engineering efforts.
              javax.crypto.Cipher.doFinal&#x3c;&#x2f;span&#x3e; &#x3c;span&#x3e;
              This message is purely information and does not represent a flaw in the code.
              Therefore, no remediation is necessary.&#x3c;&#x2f;span&#x3e;&#x3c;span&#x3e;
              References&#x3a;&#x3c;ahref&#x3d;&#x22;https&#x3a;&#x2f;&#x2f;
              cwe.mitre.org&#x2f;data&#x2f;definitions&#x2f;656.html&#x22;&#x3e;CWE&
              #x3c;&#x2f;a&#x3e;&#x3c;&#x2f;span&#x3e;
            </flaw_description>
            <note></note>
            <cweid>656</cweid>
            <remediationeffort>3</remediationeffort>
            <exploitLevel>0</exploitLevel>
            <sourcefile>Encoding.java</sourcefile>
            <line>501</line>
            <sourcefilepath>org&#x2f;owasp&#x2f;webgoat&#x2f;lessons&#x2f;
            Encoding.java</sourcefilepath>
            <scope>org.owasp.webgoat.lessons.Encoding</scope>
            <functionprototype>java.lang.String decryptString&#x28;java.lang.String,
            java.lang.String&#x29;</functionprototype>
            <functionrelativelocation>80</functionrelativelocation>
            <url></url>
            <categoryid>30</categoryid>
            <categoryname>Potential Backdoor</categoryname>
            <pcirelated>false</pcirelated>
            <cwe_description>The software uses a protection mechanism whose strength depends heavily
            on its obscurity, such that knowledge of its algorithms or key data is sufficient to
            defeat the mechanism.
            </cwe_description>
            <count>1</count>
            <capecid>0</capecid>
            <exploitdifficulty>0</exploitdifficulty>
            <exploit_desc></exploit_desc>
            <severity_desc></severity_desc>
            <remediation_desc></remediation_desc>
            <date_first_occurance>2019-09-18-17&#x3a;12</date_first_occurance>
            <date_first_occurrence>2019-09-18-17&#x3a;12</date_first_occurrence>
            <remediation_status>New</remediation_status>
            <cia_impact>zzz</cia_impact>
            <is_latest_build>false</is_latest_build>
            <published_date>2019-09-18-17&#x3a;54</published_date>
            <affects_policy_compliance>false</affects_policy_compliance>
            <mitigation_status>none</mitigation_status>
            <mitigation_status_desc>Not Mitigated</mitigation_status_desc>
            <mitigations/>
            <recommendations/>
         </Record>
...
```