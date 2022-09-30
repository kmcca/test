---
"ft:title": "getmitigationinfo.do"
"ft:prettyUrl": "r_getmitigationinfo"
---
The `getmitigationinfo.do` call retrieves all action information for listed flaws in the specified build.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">REST API Equivalent</span></p>

The REST API equivalent of this call is a `GET` to `/appsec/v2/applications/{application_guid}/findings?include_annot=true` using the [Findings API](https://docs.veracode.com/r/c_findings_v2_intro). For new integrations, always use the REST APIs.

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/getmitigationinfo.do`

<p><span style="font-size: medium;">Parameters</span></p>

| Name                           | Type    | Description                                                                                                                                                                                                                                                           |
|:-------------------------------|:--------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `build_id`<br>**Required**     | Integer | ID of the latest build.                                                                                                                                                                                                                                               |
| `flaw_id_list`<br>**Required** | String  | Comma-separated list of flaw IDs. Find flaw IDs on the [Triage Flaws page](https://docs.veracode.com/r/improve_mitigation) in the Veracode Platform or in the `issueid` fields returned by the [Detailed Report API](../03_results_xml_apis/03_detailedreport_do.md). |

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/getmitigationinfo.do" "build_id==<build id>" "flaw_id_list==2,3,7,20,25"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `getmitigationinfo.do` call returns the `mitigationinfo` XML document, which references [mitigationinfo.xsd](https://analysiscenter.veracode.com/resource/mitigationinfo.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<mitigationinfo xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance"
      xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;mitigationinfo&#x2f;1.0" 
      xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;mitigationinfo&#x2f;1.0 
      https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;mitigationinfo.xsd" mitigationinfo_version="1.1" 
      build_id="<build id>">
   <issue flaw_id="2" category="Exposure of Private Information ('Privacy Violation')">
      <mitigation_action action="appdesign" desc="Mitigate by Design" reviewer="VendorTechnique : M1 :  Establish and maintain 
         control over all of your inputs  
         Specifics : Specifics comment added by vendor.
         Remaining Risk : Remaining Risk comment added by vendor.
         Verification : Verification comment added by vendor."/>
      <mitigation_action action="deviates" desc="Deviates from Guidelines" reviewer="Veracode" date="2017-01-20 02:29:32" 
         comment="Deviates comment added by internal admin."/>
   </issue>
   <issue flaw_id="3" category="Exposure of Private Information ('Privacy Violation')">
      <mitigation_action action="appdesign" desc="Mitigate by Design" reviewer="VendorTechnique : M1 :  Establish and maintain 
         control over all of your inputs
         Specifics : Specifics comment added by vendor.
         Remaining Risk : Remaining Risk comment added by vendor.
         Verification : Verification comment added by vendor."/>
      <mitigation_action action="conforms" desc="Conforms to Guidelines" reviewer="Veracode" date="2017-01-20 02:29:07" 
         comment="Conform comment added by internal admin."/>
   </issue>
   <issue flaw_id="20" category="Process Control"/>
   <issue flaw_id="25" category="Missing Release of Memory after Effective Lifetime"/>
   <issue flaw_id="7" category="Authorization Bypass Through User-Controlled Key">
      <mitigation_action action="appdesign" desc="Mitigate by Design" reviewer="<Veracodeuserid>" date="2019-09-17 12&#x3a;16&#x3a;48" 
         comment="Test mitigation details."/>
   </issue>
</mitigationinfo>
```