---
"ft:title": "deletesandbox.do"
"ft:prettyUrl": "r_deletesandbox"
---
The `deletesandbox.do` call deletes the specified [sandbox](https://docs.veracode.com/r/c_about_sandbox).

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">REST API Equivalent</span></p>

The REST API equivalent of this call is a `DELETE` to `/appsec/v1/applications/{applicationGuid}/sandboxes/{sandboxGuid}` using the [Development Sandbox API](https://docs.veracode.com/r/c_rest_sandbox_intro). Veracode strongly recommends that you use the REST API for this action. For new integrations, always use the REST APIs.

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/5.0/deletesandbox.do`

The `deletesandbox.do` call deletes a sandbox and its contents. You cannot undo the deletion.

<p><span style="font-size: medium;">Permissions</span></p>

An [API service account](https://docs.veracode.com/r/c_about_veracode_accounts) requires the Upload and Scan [role](https://docs.veracode.com/r/c_API_roles) to use this call. A [user account](https://docs.veracode.com/r/c_about_veracode_accounts) requires the Creator, Security Lead, or Sandbox Administrator [role](https://docs.veracode.com/r/c_role_permissions) to use this call. If you have delete permission, you do not have to own the sandbox to delete it. If you are a team-restricted user, you can only delete sandboxes that your teams own.

<p><span style="font-size: medium;">Parameters</span></p>

| Name                         | Type    | Description               |
|:-----------------------------|:--------|:--------------------------|
| `sandbox_id`<br>**Required** | Integer | ID of the target sandbox. |

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/deletesandbox.do" "sandbox_id==1554802"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `deletesandbox.do` call returns the `deletesandboxresult` XML document, which references the [deletesandboxresult.xsd](https://analysiscenter.veracode.com/resource/deletesandboxresult.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<?xml version="1.0" encoding="UTF-8"?>

<deletesandboxresult xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns="https://analysiscenter.veracode.com/schema/deletesandboxresult" 
  xsi:schemaLocation="https://analysiscenter.veracode.com/schema/deletesandboxresult.xsd" 
  account_id="28823" app_id="61230" sandbox_id="1554802">
    <result>success</result>
</deletesandboxresult>

```