---
"ft:title": "createsandbox.do"
"ft:prettyUrl": "r_createsandbox"
---
The `createsandbox.do` call creates a [sandbox](https://docs.veracode.com/r/c_about_sandbox) for the specified application. If you have already reached the maximum number of sandboxes for the application, this call fails.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">REST API Equivalent</span></p>

The REST API equivalent of this call is a `POST` to `/appsec/v1/applications/{applicationGuid}/sandboxes` using the [Development Sandbox API](https://docs.veracode.com/r/c_rest_sandbox_intro). Veracode strongly recommends that you use the REST API for this action. For new integrations, always use the REST APIs.

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/5.0/createsandbox.do`

<p><span style="font-size: medium;">Parameters</span></p>

| Name                           | Type    | Description                                                                                           |
|:-------------------------------|:--------|:------------------------------------------------------------------------------------------------------|
| `app_id`<br>**Required**       | Integer | Application ID.                                                                                       |
| `sandbox_name`<br>**Required** | String  | Name of the sandbox.                                                                                  |
| `auto_recreate`                | Boolean | If true, creates a new sandbox with the same name when the current sandbox expires. Default is false. |

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/createsandbox.do" "app_id==<app id>" "sandbox_name==Project Security"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `createsandbox.do` call returns the `sandboxinfo` XML document, which references the [sandboxinfo.xsd](https://analysiscenter.veracode.com/resource/4.0/sandboxinfo.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<sandboxinfo xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" 
      xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;4.0&#x2f;sandboxinfo" 
      xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;4.0&#x2f;sandboxinfo 
      https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;4.0&#x2f;sandboxinfo.xsd" sandboxinfo_version="1.2" 
      account_id="<account id>" app_id="<app id>">
   <sandbox sandbox_id="<sandbox id>" sandbox_name="Project Security" sandbox_status="sandbox" owner="<Veracodeusername>" 
         modified_date="2019-09-17T14&#x3a;08&#x3a;35-04&#x3a;00" created_date="2019-09-17T14&#x3a;08&#x3a;35-04&#x3a;00">
      <customfield name="Custom 1" value=""/>
      <customfield name="Custom 2" value=""/>
      <customfield name="Custom 3" value=""/>
      <customfield name="Custom 4" value=""/>
      <customfield name="Custom 5" value=""/>
   </sandbox>
</sandboxinfo>
```

If you exceed the maximum number of sandboxes for the application, the return contains:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<error>An application can have up to 25 sandboxes. To create a new sandbox, you must delete one.</error>
```