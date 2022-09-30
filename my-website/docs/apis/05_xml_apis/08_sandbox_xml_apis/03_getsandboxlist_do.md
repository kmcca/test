---
"ft:title": "getsandboxlist.do"
"ft:prettyUrl": "r_getsandboxlist"
---
The `getsandboxlist.do` call returns the list of [sandboxes](https://docs.veracode.com/r/c_about_sandbox) associated with the specified application.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">REST API Equivalent</span></p>

The REST API equivalent of this call is a `GET` to `/appsec/v1/applications/{applicationGuid}/sandboxes` using the [Development Sandbox API](https://docs.veracode.com/r/c_rest_sandbox_intro). Veracode strongly recommends that you use the REST API for this action. For new integrations, always use the REST APIs.

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/5.0/getsandboxlist.do`

<p><span style="font-size: medium;">Parameters</span></p>

| Name                     | Type    | Description     |
|:-------------------------|:--------|:----------------|
| `app_id`<br>**Required** | Integer | Application ID. |

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/getsandboxlist.do" "app_id==<app id>"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `getsandboxlist.do` call returns the `sandboxlist` XML document, which references the [sandboxlist.xsd](https://analysiscenter.veracode.com/resource/4.0/sandboxlist.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<?xml version="1.0" encoding="UTF-8"?>

<sandboxlist xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" 
      xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;4.0&#x2f;sandboxlist" 
      xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;4.0&#x2f;sandboxlist 
      https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;4.0&#x2f;sandboxlist.xsd" 
      sandboxlist_version="1.0" account_id="<account id>" app_id="<app id>">
   <sandbox sandbox_id="<"sandbox id>"> sandbox_name="Project Security" owner="<Veracodeusername>" 
         last_modified="2019-09-17T14&#x3a;08&#x3a;35-04&#x3a;00">
      <customfield name="Custom 1" value=""/>
      <customfield name="Custom 2" value=""/>
      <customfield name="Custom 3" value=""/>
      <customfield name="Custom 4" value=""/>
      <customfield name="Custom 5" value=""/>
   </sandbox>
   <sandbox sandbox_id="<sandbox id>" sandbox_name="Project Refactor" owner="<Veracodeusername>" 
         last_modified="2019-09-17T14&#x3a;04&#x3a;13-04&#x3a;00">
      <customfield name="Custom 1" value=""/>
      <customfield name="Custom 2" value=""/>
      <customfield name="Custom 3" value=""/>
      <customfield name="Custom 4" value=""/>
      <customfield name="Custom 5" value=""/>
   </sandbox>
</sandboxlist>
```

