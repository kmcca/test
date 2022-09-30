---
"ft:title": "getuserinfo.do (Deprecated)"
"ft:prettyUrl": "r_getuserinfo"
---
The `getuserinfo.do` call returns information about the specified user.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">REST API Equivalent</span></p>

The REST API equivalent of this call is a `GET` to `/api/authn/v2/users/{userId}` using the [Identity API](https://docs.veracode.com/r/c_identity_intro). Veracode strongly recommends that you use the REST API for this action. For new integrations, always use the REST APIs.

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/3.0/getuserinfo.do`

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
http --auth-type=veracode_hmac -o userinfo.xml "https://analysiscenter.veracode.com/api/3.0/getuserinfo.do" "username==tmonarch@example.com" 
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `getuserinfo.do` call returns the `userinfo` XML document, which references the [userinfo.xsd](https://analysiscenter.veracode.com/resource/3.0/userinfo.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<?xml version="1.0" encoding="UTF-8"?>

<userinfo xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" 
      xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;userinfo&#x2f;3.0" 
      xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;userinfo&#x2f;3.0 
      https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;3.0&#x2f;userinfo.xsd" userinfo_version="3.0" 
      username="tmonarch&#x40;example.com">
   <login_account first_name="Ted" last_name="Monarch" login_account_type="user" email_address="tmonarch&#x40;example.com" 
      login_enabled="true" requires_token="false" teams="Demo Team" roles="Creator,eLearning,Submitter,Any Scan" 
      is_elearning_manager="false" elearning_manager="No Manager" elearning_track="No Track Assigned" 
      elearning_curriculum="No Curriculum Assigned" keep_elearning_active="false"/>
</userinfo>
```

