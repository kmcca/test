---
"ft:title": "deleteteam.do (Deprecated)"
"ft:prettyUrl": "r_deleteteam"
---
The `deleteteam.do` call deletes a specified team.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">REST API Equivalent</span></p>

The REST API equivalent of this call is a `DELETE` to `/api/authn/v2/teams/{teamId}` using the [Identity API](https://docs.veracode.com/r/c_identity_intro). Veracode strongly recommends that you use the REST API for this action. For new integrations, always use the REST APIs.

<p><span style="font-size: medium;">Resource URL</span></p>

```shell
https://analysiscenter.veracode.com/api/3.0/deleteteam.do
```

<p><span style="font-size: medium;">Permissions</span></p>

An [API service account](https://docs.veracode.com/r/c_about_veracode_accounts) requires the Admin API role to use this call. A [user account](https://docs.veracode.com/r/c_role_permissions) requires the Administrator role to use this call.

<p><span style="font-size: medium;">Parameters</span></p>

|Name|Type|Description|
|:---|:---|:----------|
|`team_id`<br>**Required**|Integer|Team ID.|

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac -o teamlist.xml "https://analysiscenter.veracode.com/api/3.0/deleteteam.do" "team_id==<team ID>"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `deleteteam.do` call returns the `deleteteamresult` XML document, which references the [deleteteamresult.xsd](https://analysiscenter.veracode.com/resource/deleteteamresult.xsd) schema file. You can use the XSD schema file to validate the XML data.

The return lists the remaining teams.

```xml
<?xml version="1.0" encoding="UTF-8"?>

<deleteteamresult xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
xmlns="https://analysiscenter.veracode.com/schema/deleteteamresult" 
xsi:schemaLocation="https://analysiscenter.veracode.com/schema/deleteteamresult 
https://analysiscenter.veracode.com/resource/deleteteamresult.xsd" userlist_version="3.0" account_id="10023" team_id="10243">
  <result>success</result>
</deleteteamresult>
```

