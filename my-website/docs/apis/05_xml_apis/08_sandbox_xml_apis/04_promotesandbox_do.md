---
"ft:title": "promotesandbox.do"
"ft:prettyUrl": "r_promotesandbox"
---
If the specified [sandbox](https://docs.veracode.com/r/c_about_sandbox) build scans successfully, the `promotesandbox.do` call promotes the build to be the policy scan for the application.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">REST API Equivalent</span></p>

The REST API equivalent of this call is a `POST` to `/appsec/v1/applications/{applicationGuid}/sandboxes/{sandboxGuid}/promote` using the [Development Sandbox API](https://docs.veracode.com/r/c_rest_sandbox_intro). Veracode strongly recommends that you use the REST API for this action. For new integrations, always use the REST APIs.

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/5.0/promotesandbox.do`

<p><span style="font-size: medium;">Parameters</span></p>

| Name                       | Type    | Description                                                             |
|:---------------------------|:--------|:------------------------------------------------------------------------|
| `build_id`<br>**Required** | Integer | ID of the latest build for the target sandbox.                          |
| `delete_on_promote`        | Boolean | If `true`, deletes the sandbox after its promotion. Default is `false`. |

You can identify your `build_id` by calling [getbuildlist.do](../02_upload_xml_apis/12_getbuildlist_do.md).

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/promotesandbox.do" "build_id==<build id>"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `promotesandbox.do` call returns the `sandboxinfo` XML document, which references the [sandboxinfo.xsd](https://analysiscenter.veracode.com/resource/4.0/sandboxinfo.xsd) schema file. You can use the XSD schema file to validate the XML data.

In the returned XML, the `sandbox_status="policy"` attribute indicates that the API successfully promoted the sandbox build.

```xml
<?xml version="1.0" encoding="UTF-8"?>

<sandboxinfo xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" 
      xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;4.0&#x2f;sandboxinfo" 
      xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;4.0&#x2f;sandboxinfo 
      https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;4.0&#x2f;sandboxinfo.xsd" sandboxinfo_version="1.2" 
      account_id="<account id>" app_id="<app id>" build_id="<build id>" analysis_id="4978995" analysis_unit_id="4994637">
   <sandbox sandbox_id="<sandbox id>" sandbox_status="policy" owner="<Veracodeusername>" 
         modified_date="2019-09-18T17&#x3a;11&#x3a;45-04&#x3a;00" created_date="2019-09-18T17&#x3a;11&#x3a;45-04&#x3a;00">
      <customfield name="Custom 1" value=""/>
      <customfield name="Custom 2" value=""/>
      <customfield name="Custom 3" value=""/>
      <customfield name="Custom 4" value=""/>
      <customfield name="Custom 5" value=""/>
   </sandbox>
</sandboxinfo>
```