---
"ft:title": "updatemitigationinfo.do"
"ft:prettyUrl": "r_updatemitigationinfo"
---
The `updatemitigationinfo.do` call enables you to perform several actions on a list of one or more flaws in the specified build. These actions include commenting on a flaw, proposing a mitigation action, and rejecting or accepting a mitigation action.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">REST API Equivalent</span></p>

The REST API equivalent of this call is a `POST` to `/appsec/v2/applications/{application_guid}/annotations` using the [Annotations API](https://docs.veracode.com/r/c_rest_annotations_intro). For new integrations, always use the REST APIs.

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/updatemitigationinfo.do`

<p><span style="font-size: medium;">Parameters</span></p>

| Name                           | Type    | Description                                                                                                                                                                                                                                                           |
|:-------------------------------|:--------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `build_id`<br>**Required**     | Integer | ID of the latest build, otherwise the call fails.                                                                                                                                                                                                                     |
| `action`<br>**Required**       | String  | [Mitigation action](https://docs.veracode.com/r/improve_mitigation) for the selected findings: `comment`, `fp` (false positive), `appdesign`, `osenv`, `netenv`, `library`, `rejected`, `accepted`, `acceptrisk`                                                      |
| `comment`<br>**Required**      | String  | Comment string to associate with the action. Limit of 2048 characters.                                                                                                                                                                                                |
| `flaw_id_list`<br>**Required** | String  | Comma-separated list of flaw IDs. Find flaw IDs on the [Triage Flaws page](https://docs.veracode.com/r/improve_mitigation) in the Veracode Platform or in the `issueid` fields returned by the [Detailed Report API](../03_results_xml_apis/03_detailedreport_do.md). |

<p><span style="font-size: medium;">HTTPie Examples</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/updatemitigationinfo.do" "build_id==<build id>" "action==comment" "comment==Test comment." "flaw_id_list==5,7,49"
```

```shell
http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/updatemitigationinfo.do" "build_id==<build id>" "action==appdesign" "comment==Test mitigation details." "flaw_id_list==7"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `updatemitigationinfo.do` call returns the `mitigationinfo` XML document, which references the [mitigationinfo.xsd](https://analysiscenter.veracode.com/resource/mitigationinfo.xsd) schema file. You can use the XSD schema file to validate the XML data.

In this comment-only example, note that this API handles non-existant flaw IDs in an `error` element at the end of the XML.

```xml
<?xml version="1.0" encoding="UTF-8"?>
            
<mitigationinfo xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" 
      xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;mitigationinfo&#x2f;1.0" 
      xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;mitigationinfo&#x2f;1.0 
      https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;mitigationinfo.xsd" mitigationinfo_version="1.1" 
      build_id="<build id>">
   <issue flaw_id="7" category="Authorization Bypass Through User-Controlled Key">
      <mitigation_action action="comment" desc="Add Comment" reviewer="<Veracodeusername>" date="2019-09-16 10&#x3a;33&#x3a;00" 
         comment="Test comment."/>
   </issue>
   <issue flaw_id="5" category="Unchecked Error Condition">
      <mitigation_action action="comment" desc="Add Comment" reviewer="<Veracodeusername>" date="2019-09-16 10&#x3a;33&#x3a;00" 
         comment="Test comment."/>
   </issue>
   <error type="not_found" flaw_id_list="49"/>
</mitigationinfo>
```

In the mitigated-by-design example, note that the API returns the complete list of actions for the flaw ID with the new action added to the end.

```xml
<?xml version="1.0" encoding="UTF-8"?>

<mitigationinfo xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" 
      xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;mitigationinfo&#x2f;1.0" 
      xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;mitigationinfo&#x2f;1.0 
      https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;mitigationinfo.xsd" mitigationinfo_version="1.1" 
      build_id="<build id>">
   <issue flaw_id="7" category="Authorization Bypass Through User-Controlled Key">
      <mitigation_action action="comment" desc="Add Comment" reviewer="<Veracodeuserid>" date="2019-09-16 10&#x3a;33&#x3a;41" 
         comment="Test comment."/>
      <mitigation_action action="appdesign" desc="Mitigate by Design" reviewer="<Veracodeuserid>" date="2019-09-17 12&#x3a;16&#x3a;48" 
         comment="Test mitigation details."/>
   </issue>
</mitigationinfo>
```

