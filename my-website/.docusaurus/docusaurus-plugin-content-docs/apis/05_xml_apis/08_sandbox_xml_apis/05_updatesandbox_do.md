---
"ft:title": "updatesandbox.do"
"ft:prettyUrl": "r_updatesandbox"
---
The `updatesandbox.do` call allows you to update the custom field values for the specified [sandbox](https://docs.veracode.com/r/c_about_sandbox).

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">REST API Equivalent</span></p>

The REST API equivalent of this call is a `PUT` to `/appsec/v1/applications/{applicationGuid}/sandboxes/{sandboxGuid}` using the [Development Sandbox API](https://docs.veracode.com/r/c_rest_sandbox_intro). Veracode strongly recommends that you use the REST API for this action. For new integrations, always use the REST APIs.

<p><span style="font-size: medium;">Permissions</span></p>

You must have the [Creator](https://docs.veracode.com/r/c_role_permissions), [Security Lead](https://docs.veracode.com/r/c_role_permissions), or [Sandbox Administrator API](https://docs.veracode.com/r/c_API_roles_details) role to use this API.

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/5.0/updatesandbox.do`

<p><span style="font-size: medium;">Parameters</span></p>

| Name                         | Type    | Description                                                                                                                                                                                                                                                                                                                                                                          |
|:-----------------------------|:--------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `sandbox_name`               | String  | Name of the sandbox.                                                                                                                                                                                                                                                                                                                                                                 |
| `sandbox_id`<br>**Required** | Integer | ID of the target sandbox.                                                                                                                                                                                                                                                                                                                                                            |
| `custom_field_name`          | String  | Specifies the custom field to update with the `custom_field_value`. You can change one custom field value per call to `updatesandbox.do`. <br><p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> If you include the <code>custom_field_value</code> parameter, you must also include the <code>custom_field_name</code> parameter.</p> |
| `custom_field_value`         | String  | Specifies the `custom_field_value` to store in the specified `custom_field_name`. You can change one custom field value per call to `updatesandbox.do`.                                                                                                                                                                                                                              |
| `auto_recreate`              | Boolean | If true, creates a new sandbox with the same name when the current sandbox expires. Default is false.                                                                                                                                                                                                                                                                                |

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/updatesandbox.do" "sandbox_id==<sandbox id>" "custom_field_name==Custom 2" "custom_field_value==Work on hold." "auto_recreate==false"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `updatesandbox.do` call returns the `sandboxinfo` XML document, which references the [sandboxinfo.xsd](https://analysiscenter.veracode.com/resource/4.0/sandboxinfo.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<sandboxinfo xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
xmlns="https://analysiscenter.veracode.com/schema/4.0/sandboxinfo" 
xsi:schemaLocation="https://analysiscenter.veracode.com/schema/4.0/sandboxinfo 
https://analysiscenter.veracode.com/resource/4.0/sandboxinfo.xsd" sandboxinfo_version="1.2" 
account_id="<account id>" app_id="<app id>" build_id="<build id>" analysis_id="4978995" analysis_unit_id="4994637">
<sandbox sandbox_id="<sandbox id>" sandbox_status="policy" owner="<Veracodeusername>" 
modified_date="2019-09-18T17:11:45-04:00" created_date="2019-09-18T17:11:45-04:00" auto_recreate="false">
<sandbox sandbox_id="<sandbox id>" sandbox_name="Project Security" sandbox_status="sandbox" owner="<Veracodeusername>" modified_date="2019-09-17T14&#x3a;08&#x3a;35-04&#x3a;00" created_date="2019-09-17T14&#x3a;08&#x3a;35-04&#x3a;00"> <customfield name="Custom 1" value=""/>
<customfield name="Custom 2" value="Work on hold."/>
<customfield name="Custom 3" value=""/>
<customfield name="Custom 4" value=""/>
<customfield name="Custom 5" value=""/>
</sandbox>
</sandboxinfo>
```

<p><span style="font-size: medium;">HTTPie Example</span></p>

```shell
http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/updatesandbox.do" "sandbox_id==<sandbox id>" "sandbox_name==<sandbox name>""custom_field_name==Custom 2" "custom_field_value==Work on hold." "auto_recreate==true"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

```xml
<?xml version="1.0" encoding="UTF-8"?>
<sandbox sandbox_id=<sandbox id> <sandbox_name=<sandbox name> <last_modified="2020-03-19T15:04:30-04:00" 
<expires="2020-06-17T15:04:30-04:00" <auto_recreate="true">
<customfield name="Custom 1" value=""/>
<customfield name="Custom 2" value="Work on hold."/>
<customfield name="Custom 2" value=""/>
<customfield name="Custom 3" value=""/>
<customfield name="Custom 4" value=""/>
<customfield name="Custom 5" value=""/>
</sandbox>
</sandboxinfo>    
```