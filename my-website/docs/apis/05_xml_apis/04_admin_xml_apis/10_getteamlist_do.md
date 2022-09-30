---
"ft:title": "getteamlist.do (Deprecated)"
"ft:prettyUrl": "r_getteamlist"
---
The `getteamlist.do` call returns a list of the user teams in your organization.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">REST API Equivalent</span></p>

The REST API equivalent of this call is a `GET` to `/api/authn/v2/teams` using the [Identity API](https://docs.veracode.com/r/c_identity_intro). Veracode strongly recommends that you use the REST API for this action. For new integrations, always use the REST APIs.

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/3.0/getteamlist.do`

<p><span style="font-size: medium;">Permissions</span></p>

An [API service account](https://docs.veracode.com/r/c_about_veracode_accounts) requires the Admin API role to use this call. A [user account](https://docs.veracode.com/r/c_role_permissions) requires the Administrator role to use this call.

<p><span style="font-size: medium;">Parameters</span></p>

This call takes no parameters.

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac -o teamlist.xml "https://analysiscenter.veracode.com/api/3.0/getteamlist.do"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `getteamlist.do` call returns the `teamlist` XML document, which references the [teamlist.xsd](https://analysiscenter.veracode.com/resource/3.0/teamlist.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<?xml version="1.0" encoding="UTF-8"?>

<teamlist xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" 
      xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;teamlist&#x2f;3.0" 
      xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;teamlist&#x2f;3.0 
      https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;3.0&#x2f;teamlist.xsd" teamlist_version="3.0" 
      account_id="<account id>">
   <team team_id="145696" team_name="Debug Team" creation_date="09&#x2f;06&#x2f;2019"/>
   <team team_id="144659" team_name="Demo Team" creation_date="08&#x2f;13&#x2f;2019"/>
   <team team_id="145690" team_name="Engineering" creation_date="09&#x2f;06&#x2f;2019"/>
   <team team_id="145675" team_name="Quality Team" creation_date="09&#x2f;06&#x2f;2019"/>
   <team team_id="145689" team_name="Release Team" creation_date="09&#x2f;06&#x2f;2019"/>
</teamlist>
```

