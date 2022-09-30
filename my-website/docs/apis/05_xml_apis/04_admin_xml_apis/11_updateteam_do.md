---
"ft:title": "updateteam.do (Deprecated)"
"ft:prettyUrl": "r_updateteam"
---
The `updateteam.do` call updates or changes the member information of the specified team.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">REST API Equivalent</span></p>

The REST API equivalent of this call is a `PUT` to `/api/authn/v2/teams/{teamId}` using the [Identity API](https://docs.veracode.com/r/c_identity_intro). Veracode strongly recommends that you use the REST API for this action. For new integrations, always use the REST APIs.

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/3.0/updateteam.do`

<p><span style="font-size: medium;">Permissions</span></p>

An [API service account](https://docs.veracode.com/r/c_about_veracode_accounts) requires the Admin API role to use this call. A [user account](https://docs.veracode.com/r/c_role_permissions) requires the Administrator role to use this call.

<p><span style="font-size: medium;">Parameters</span></p>

| Name                      | Type    | Description                                                                                               |
|:--------------------------|:--------|:----------------------------------------------------------------------------------------------------------|
| `team_id`<br>**Required** | Integer | Team ID.                                                                                                  |
| `members`                 | String  | Comma-separated list of team member names. Provide the complete revised list to replace the current list. |
| `team_name`               | String  | To change the team name, provide a new name.                                                              |

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

To get the current membership of the team before you change it, call `getuserlist.do`.

```shell
http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/3.0/getuserlist.do" "teams==<teamid>"
```

This example updates the members of the team.

```shell
http --auth-type=veracode_hmac -o `updatedteaminfo.xml` "https://analysiscenter.veracode.com/api/3.0/updateteam.do" "members="aswallowtail@example.com,lpieris@example.com,sviceroy@example.com,tmonarch@example.com,wbuckeye@example.com" "team_id==144659"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `updateteam.do` call returns the `teaminfo` XML document, which references the [teaminfo.xsd](https://analysiscenter.veracode.com/resource/3.0/teaminfo.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<?xml version="1.0" encoding="UTF-8"?>

<teaminfo xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" 
      xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;teaminfo&#x2f;3.0" 
      xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;teaminfo&#x2f;3.0 
      https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;3.0&#x2f;teaminfo.xsd" teaminfo_version="3.1" 
      account_id="<account id>" team_id="144659" team_name="Demo Team" creation_date="08&#x2f;13&#x2f;2019">
   <users usernames="lpieris&#x40;example.com,wbuckeye&#x40;example.com,tmonarch&#x40;example.com"/>
</teaminfo>
```