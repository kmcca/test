---
"ft:title": "deleteuser.do (Deprecated)"
"ft:prettyUrl": "r_deleteuser"
---
The `deleteuser.do` call deletes a [user account](https://docs.veracode.com/r/c_about_veracode_accounts). To delete a API service account, you must use the Veracode Platform or the Identity REST API.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">REST API Equivalent</span></p>

The REST API equivalent of this call is a `DELETE` to `/api/authn/v2/users/{userId}` using the [Identity API](https://docs.veracode.com/r/c_identity_intro). Veracode strongly recommends that you use the REST API for this action. For new integrations, always use the REST APIs.

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/3.0/deleteuser.do`

<p><span style="font-size: medium;">Permissions</span></p>

An [API service account](https://docs.veracode.com/r/c_about_veracode_accounts) requires the Admin API role to use this call. A [user account](https://docs.veracode.com/r/c_role_permissions) requires the Administrator role to use this call.

<p><span style="font-size: medium;">Parameters</span></p>

|Name|Type|Description|
|:---|:---|:----------|
|`username`<br>**Required**|String|Required for non-SAML users. Usually the email address of the user.|
|`custom_id`<br>**Required**|String|Required for SAML users. The SAML Subject field value from the user account.|

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac -o deleteduserinfo.xml "https://analysiscenter.veracode.com/api/3.0/deleteuser.do" "username==rmonarch@example.com"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `deleteuser.do` call returns the `deleteuserresult` XML document, which references the [deleteuserresult.xsd](https://analysiscenter.veracode.com/resource/deleteuserresult.xsd) schema file. You can use the XSD schema file to validate the XML data.

In the return, the `<filters .../>` element lists the deleted usernames, while the `<users .../>` element lists the remaining users.

```xml
<?xml version="1.0" encoding="UTF-8"?>

<deleteuserresult xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
xmlns="https://analysiscenter.veracode.com/schema/deleteuserresult" 
xsi:schemaLocation="https://analysiscenter.veracode.com/schema/deleteuserresult 
https://analysiscenter.veracode.com/resource/deleteuserresult.xsd" userlist_version="3.0" username="username-99-1596061905076">
  <result>success</result>
</deleteuserresult>
```