---
"ft:title": "createteam.do (Deprecated)"
"ft:prettyUrl": "r_createteam"
---
The `createteam.do` call creates a new team of users.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines).

<p><span style="font-size: medium;">REST API Equivalent</span></p>

The REST API equivalent of this call is a `POST` to `/api/authn/v2/teams` using the [Identity API](https://docs.veracode.com/r/c_identity_intro). Veracode strongly recommends that you use the REST API for this action. For new integrations, always use the REST APIs.

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/3.0/createteam.do`

<p><span style="font-size: medium;">Permissions</span></p>

An [API service account](https://docs.veracode.com/r/c_about_veracode_accounts) requires the Admin API role to use this call. A [user account](https://docs.veracode.com/r/c_role_permissions) requires the Administrator role to use this call.

<p><span style="font-size: medium;">Parameters</span></p>

|Name|Type|Description|
|:---|:---|:----------|
|`team_name`<br>**Required**|String|Must be unique.|
|`members`|String|Comma-separated list of usernames.|

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac -o newteaminfo.xml "https://analysiscenter.veracode.com/api/3.0/createteam.do" "team_name==Release Team" "members==bmetalmark@example.com,tmonarch@example.com"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `createteam.do` call returns the `teaminfo` XML document, which shows a user list filtered by the new team name, listing the users in the team. This XML document references the [teaminfo.xsd](https://analysiscenter.veracode.com/resource/3.0/teaminfo.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<?xml version="1.0" encoding="UTF-8"?>

<teaminfo xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" 
      xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;teaminfo&#x2f;3.0" 
      xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;teaminfo&#x2f;3.0 
      https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;3.0&#x2f;teaminfo.xsd" teaminfo_version="3.1" 
      account_id="<account id>" team_id="<team id>" team_name="Release Team" creation_date="09&#x2f;06&#x2f;2019">
   <users usernames="bmetalmark&#x40;example.com,tmonarch&#x40;example.com"/>
</teaminfo>
```

