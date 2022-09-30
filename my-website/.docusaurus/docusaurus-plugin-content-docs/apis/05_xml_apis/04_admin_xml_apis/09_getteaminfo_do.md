---
"ft:title": "getteaminfo.do (Deprecated)"
"ft:prettyUrl": "r_getteaminfo"
---
The `getteaminfo.do` call returns information about a specific team.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">REST API Equivalent</span></p>

The REST API equivalent of this call is a `GET` to `/api/authn/v2/teams/{teamId}` using the [Identity API](https://docs.veracode.com/r/c_identity_intro). Veracode strongly recommends that you use the REST API for this action. For new integrations, always use the REST APIs.

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/3.0/getteaminfo.do`

<p><span style="font-size: medium;">Permissions</span></p>

An [API service account](https://docs.veracode.com/r/c_about_veracode_accounts) requires the Admin API role to use this call. A [user account](https://docs.veracode.com/r/c_role_permissions) requires the Administrator role to use this call.

<p><span style="font-size: medium;">Parameters</span></p>

|Name|Type|Description|
|:---|:---|:----------|
|`team_id`<br>**Required**|Integer|Team ID.|
|`include_users`|String|Specify `Yes` to view the members of the team. Default is `No`.|
|`include_applications`|String|Specify `Yes` to view applications assigned to the team. Default is `No`.|

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac -o teaminfo.xml "https://analysiscenter.veracode.com/api/3.0/getteaminfo.do" "team_id==144659" "include_users==yes" "include_applications==yes"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `getteaminfo.do` call returns the `teaminfo` XML document, which references the [teaminfo.xsd](https://analysiscenter.veracode.com/resource/3.0/teaminfo.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<?xml version="1.0" encoding="UTF-8"?>

<teaminfo xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" 
      xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;teaminfo&#x2f;3.0" 
      xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;teaminfo&#x2f;3.0 
      https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;3.0&#x2f;teaminfo.xsd" 
      teaminfo_version="3.1" team_name="Demo Team" can_view_shared_types="false" business_unit="<business unit>">
   <user username="sviceroy&#x26;&#x23;x40&#x3b;example.com" first_name="Saiya" last_name="Viceroy" 
      email_address="sviceroy&#x40;example.com"/>
   <user username="aswallowtail&#x26;&#x23;x40&#x3b;example.com" first_name="Anna" last_name="Swallowtail" 
      email_address="aswallowtail&#x40;example.com"/>
   <user username="tmonarch&#x26;&#x23;x40&#x3b;example.com" first_name="Ted" last_name="Monarch" 
      email_address="tmonarch&#x40;example.com"/>
   <user username="lpieris&#x26;&#x23;x40&#x3b;example.com" first_name="Li" last_name="Pieris" 
      email_address="lpieris&#x40;example.com"/>
   <application app_id="<app id>" app_name="<app name>" assessment_type="SDLC" account_id="<account id>" 
      business_unit="Not Specified"/>
   <application app_id="<app id>" app_name="<app name>" assessment_type="SDLC" account_id="<account id>" 
      business_unit="Not Specified"/>
</teaminfo>
```

