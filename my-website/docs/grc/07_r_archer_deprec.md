---
"ft:title" : "archer.do"
"ft:prettyUrl" : "r_archer_deprec"
---
Veracode has deprecated the `archer.do` call. Although this call is functional, Veracode recommends that you use the asynchronous Archer API calls to avoid lengthy wait times and timeouts when retrieving large data sets.

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/archer.do`

<p><span style="font-size: medium;">Parameters</span></p>

The `archer.do` call has no required parameters.

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
<td><code>app_id</code></td>
<td>Integer</td>
<td>Application ID of the target application for which you wish to pull data. You can find the application ID in the main Archer feed or by using the <a href="https://docs.veracode.com/r/review_main">Results API</a>.</td>
</tr>
<tr>
<td><code>period</code></td>
<td>String</td>
<td>Use to select published applications with modifications (either published or mitigated) during the specified time period. Values are: <code>yesterday</code>, <code>last week</code> (preceding Saturday to Sunday), <code>last month</code> (preceding calendar month)</td>
</tr>
<tr>
<td><code>from_date</code></td>
<td>String</td>
<td>Specify the beginning of a date range using the format <code>MM-dd-yyyy</code>. The range begins at 12:00AM ET on the specified date. Use this parameter with the <code>to_date</code> parameter.</td>
</tr>
<tr>
<td><code>to_date</code></td>
<td>String</td>
<td>Specify the end of a date range using the format <code>MM-dd-yyyy</code>. The range ends at 12:00AM ET the morning after the specified date. Use this parameter with the <code>from_date</code> parameter.</td>
</tr>
<tr>
<td><code>scan_type</code></td>
<td>String</td>
<td>Specify a flaw type: <code>static</code>, <code>dynamic</code>, <code>manual</code></td>
</tr>
</tbody>
</table>

<p><span style="font-size: medium;">HTTPie Examples</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

`http --auth-type=veracode_hmac -o archerfeed.xml "https://analysiscenter.veracode.com/api/archer.do"`

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `archer.do` call returns the archer XML document, which references the [`archerreport.xsd`](https://analysiscenter.veracode.com/resource/2.0/archerreport.xsd) schema file. You can use the XSD schema file to validate the XML data. The XML report lists [details about the scan](https://docs.veracode.com/r/c_archer_xml) of your Archer application.

A partial XML example. Veracode has deprecated assurance level and replaced it with [business criticality](https://docs.veracode.com/r/review_assurancelevels).

```xml
<?xml version="1.0" encoding="UTF-8"?>

<ArcherRecords xmlns="http&#x3a;&#x2f;&#x2f;www.archer-tech.com&#x2f;">
   <ArcherRecord>
      <Field name="app_name"><![CDATA[AWebGoat]]></Field>
      <Field name="assurance_level">medium</Field>
      <Field name="teams"><![CDATA[Debug Team,Demo Team,Quality Team,Release Team]]></Field>
      <Field name="platform">Not Specified</Field>
      <Field name="version"><![CDATA[18 Sep 2019 Static Promoted]]></Field>
      <Field name="lifecycle_stage">Not Specified</Field>
      <Field name="rating">C</Field>
      <Field name="mitigated_rating"></Field>
      <Field name="static_score">53</Field>
      <Field name="dynamic_score">0</Field>
      <Field name="manual_score">0</Field>
      <Field name="static_mitigated_score">0</Field>
      <Field name="dynamic_mitigated_score">0</Field>
      <Field name="manual_mitigated_score">0</Field>
      <Field name="app_origin">Not Specified</Field>
      <Field name="generation_date">2019-09-18-17&#x3a;54</Field>
      <Field name="planned_deployment_date">2019-09-18-17&#x3a;12</Field>
      <Field name="last_update_date">2019-09-18-17&#x3a;54</Field>
      <Field name="submitted_date">2019-09-18-17&#x3a;53</Field>
      <Field name="policy_name">Veracode Recommended Medium</Field>
      <Field name="policy_version">1</Field>
      <Field name="policy_compliance_status">Did Not Pass</Field>
      <Field name="policy_rules_passed">false</Field>
      <Field name="grace_period_expired">false</Field>
      <Field name="scan_overdue">true</Field>
      <Field name="business_owner"></Field>
      <Field name="business_unit">Mobile Secure Ventures</Field>
      <Field name="tags"></Field>
      <Field name="custom0"></Field>
      <Field name="custom1"></Field>
      <Field name="custom2"></Field>
      <Field name="custom3"></Field>
      <Field name="custom4"></Field>
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
      <Field name="modules">
         <ArcherRecords>
            <ArcherRecord>
               <Field name="module"><![CDATA[WebGoat-5.0-with-jsp.war]]></Field>
               <Field name="analysis_type">static</Field>
               <Field name="compiler">JAVAC_5</Field>
               <Field name="os">Java J2SE 6</Field>
               <Field name="architecture">JVM</Field>
               <Field name="next_scan_due">2019-12-18-17&#x3a;54</Field>
            </ArcherRecord>
            <ArcherRecord>
               <Field name="module"><![CDATA[WebGoat-5.0-with-jsp.war_htmljscode.veracodegen.htmla.jsa]]></Field>
               <Field name="analysis_type">static</Field>
               <Field name="compiler">JAVASCRIPT_5_1</Field>
               <Field name="os">JavaScript</Field>
               <Field name="architecture">JAVASCRIPT</Field>
               <Field name="next_scan_due">2019-12-18-17&#x3a;54</Field>
            </ArcherRecord>
         </ArcherRecords>
      </Field>
      <Field name="flaws">
         <ArcherRecords>
            <ArcherRecord>
               <Field name="app_name"><![CDATA[AWebGoat]]></Field>
               <Field name="version"><![CDATA[18 Sep 2019 Static Promoted]]></Field>
               <Field name="platform">Not Specified</Field>
               <Field name="flaw_issue_id">253</Field>
               <Field name="module"><![CDATA[WebGoat-5.0-with-jsp.war]]></Field>
               <Field name="severity">0</Field>
               <Field name="type"><![CDATA[Reliance on Security Through Obscurity]]></Field>
               <Field name="flaw_description"><![CDATA[<span>The application decrypts or decodes embedded data. Encryption or encoding of embedded data is typically done to obfuscate the true intention of the data and to hinder reverse engineering efforts. javax.crypto.Cipher.doFinal</span> <span>This message is purely information and does not represent a flaw in the code. Therefore, no remediation is necessary.</span> <span>References: <a href="https://cwe.mitre.org/data/definitions/656.html">CWE</a></span>]]></Field>
               <Field name="note"><![CDATA[]]></Field>
               <Field name="cweid">656</Field>
               <Field name="remediationeffort">3</Field>
               <Field name="exploitLevel">0</Field>
               <Field name="sourcefile"><![CDATA[Encoding.java]]></Field>
               <Field name="line">501</Field>
               <Field name="sourcefilepath"><![CDATA[org/owasp/webgoat/lessons/Encoding.java]]></Field>
               <Field name="scope"><![CDATA[org.owasp.webgoat.lessons.Encoding]]></Field>
               <Field name="functionprototype"><![CDATA[java.lang.String decryptString(java.lang.String, java.lang.String)]]></Field>
               <Field name="functionrelativelocation">80</Field>
               <Field name="url"><![CDATA[]]></Field>
               <Field name="categoryid">30</Field>
               <Field name="categoryname">Reliance on Security Through Obscurity</Field>
               <Field name="pcirelated">false</Field>
               <Field name="cwe_description"><![CDATA[The software uses a protection mechanism whose strength depends heavily on its obscurity, such that knowledge of its algorithms or key data is sufficient to defeat the mechanism.]]></Field>
               <Field name="count">1</Field>
               <Field name="capecid">0</Field>
               <Field name="exploitdifficulty">0</Field>
               <Field name="exploit_desc"><![CDATA[]]></Field>
               <Field name="severity_desc"><![CDATA[]]></Field>
               <Field name="remediation_desc"><![CDATA[]]></Field>
               <Field name="date_first_occurance">2019-09-18-17&#x3a;12</Field>
               <Field name="date_first_occurrence">2019-09-18-17&#x3a;12</Field>
               <Field name="remediation_status">New</Field>
               <Field name="cia_impact">zzz</Field>
               <Field name="is_latest_build">false</Field>
               <Field name="published_date">2019-09-18-17&#x3a;54</Field>
               <Field name="affects_policy_compliance">false</Field>
               <Field name="mitigation_status">none</Field>
               <Field name="mitigation_status_desc">Not Mitigated</Field>
               <Field name="mitigations">
                  <ArcherRecords/>
               </Field>
            </ArcherRecord>
...
```
