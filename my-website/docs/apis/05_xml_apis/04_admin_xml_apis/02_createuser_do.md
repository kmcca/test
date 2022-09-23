---
"ft:title": "createuser.do (Deprecated)"
"ft:prettyUrl": "r_createuser"
---
The `createuser.do` call creates a new user account. You must be logged into a API service account to create a user account with this call. To create a API service account, you must use the Veracode Platform or the Identity REST API.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">REST API Equivalent</span></p>

The REST API equivalent of this call is a `POST` to `/api/authn/v2/users` using the [Identity API](https://docs.veracode.com/r/c_identity_intro). Veracode strongly recommends that you use the REST API for this action. For new integrations, always use the REST APIs.

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/3.0/createuser.do`

<p><span style="font-size: medium;">Permissions</span></p>

An [API service account](https://docs.veracode.com/r/c_about_veracode_accounts) requires the Admin API role to use this call. A [user account](https://docs.veracode.com/r/c_role_permissions) requires the Administrator role to use this call.

<p><span style="font-size: medium;">Parameters</span></p>

|Name|Type| Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|:---|:---|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|`first_name`<br>**Required**|String| First name of the user.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|`last_name`<br>**Required**|String| Last name of the user.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|`email_address`<br>**Required**|String| Email address of the user.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|`custom_id`<br>**Required**|String| Required for SAML users only. The SAML Subject field value from the user account.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|`roles`<br>**Required**|String (case-sensitive)| Comma-separated list of valid, user account roles: <ul><li>`Administrator`</li><li>`Creator`</li><li>`Delete Scans`</li><li>`eLearning`</li><li>`Executive`</li><li>`Greenlight IDE User`</li><li>`Mitigation Approver`</li><li>`Policy Administrator`</li><li>`Reviewer`</li><li>`Sandbox Administrator`</li><li>`Sandbox User`</li><li>`Security Insights`</li><li>`Security Lead`</li><li>`Submitter`</li><li>`Vendor Manager`</li></ul>You cannot pass any of the API roles for [API service accounts](https://docs.veracode.com/r/c_API_roles_details). If you specify the `Creator`, `Security Lead`, or `Submitter` role, Veracode automatically applies the Any Scan permission to the scans. You can apply scan permissions to these types of scans: Static Analysis, Dynamic Analysis, Discovery, manual, and Dynamic Analysis. |
|`is_saml_user`|Boolean| You can only update this parameter if your account is SAML-enabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|`login_enabled`|Boolean| Specifies whether the user can log in to the account.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|`phone`|String| Contact phone number for the user.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|`requires_token`|Boolean| Specifies whether a user must provide a two-factor authentication token.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|`teams`|String (case-sensitive)| Comma-separated list of team names. For a user with team membership restrictions, ensure all specified teams are on the Team Memberships list for that user.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|`title`|String| User title or position.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac -o newuserinfo.xml "https://analysiscenter.veracode.com/api/3.0/createuser.do" "first_name==Regina" "last_name==Monarch" "email_address==rmonarch@example.com" "teams==Demo Team" "roles==Creator,Submitter,eLearning"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `createuser.do` call returns the `userinfo` XML document, which references the [userinfo.xsd](https://analysiscenter.veracode.com/resource/3.0/userinfo.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<?xml version="1.0" encoding="UTF-8"?>

<userinfo xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" 
      xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;userinfo&#x2f;3.0" 
      xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;userinfo&#x2f;3.0 
      https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;3.0&#x2f;userinfo.xsd" userinfo_version="3.0" 
      username="rmonarch&#x40;example.com">
   <login_account first_name="Regina" last_name="Monarch" login_account_type="user" email_address="rmonarch&#x40;example.com" 
      login_enabled="true" requires_token="false" teams="Demo Team" roles="Creator,eLearning,Submitter,Any Scan" 
      is_elearning_manager="false" elearning_manager="No Manager" elearning_track="No Track Assigned" 
      elearning_curriculum="No Curriculum Assigned" keep_elearning_active="false"/>
</userinfo>
```

<p><span style="font-size: medium;">API Wrapper Examples: Create Multiple Users</span></p>

Using the `inputfilepath` parameter of the Java or C# API wrapper and a CSV file, you can make multiple calls to `createuser.do`.

The first column of the CSV contains the action (`createuser`) and each subsequent column represents a parameter. The first row of the CSV file contains the included parameter names. There must be a column for each required parameter. Columns for optional parameters may be omitted.

CSV data:

| action     | firstname | lastname | emailaddress             | roles               | teams        |
|------------|-----------|----------|--------------------------|---------------------|--------------|
| createuser | Wayne     | Shorter  | wayneshorter@example.com | Security Lead       | Release Team |
| createuser | Tony      | Williams | tonywilliams@example.com | "Creator,Submitter" | Demo Team    |
| createuser | Carla     | Bley     | carlabley@example.com    | Security Insights   |              |

CSV file:

```plaintext
action,firstname,lastname,emailaddress,roles,teams
createuser,Wayne,Shorter,wayneshorter@example.com,Security Lead,Release Team
createuser,Tony,Williams,tonywilliams@example.com,"Creator,Submitter",Demo Team
createuser,Carla,Bley,carlabley@example.com,Security Insights
```

Java example:

```java
java -jar vosp-api-wrapper-java{version}.jar -vid <Veracode API ID> -vkey <Veracode API Key> -action createuser -inputfilepath c:\javawrappers\newusers.csv
```

C# example:

```csharp
VeracodeC#API -vid <Veracode API ID> -vkey <Veracode API key> -action createuser -inputfilepath c:\csharpwrappers\newusers.csv
```

<p><span style="font-size: medium;">API Wrapper Results</span></p>

The `createuser.do` call returns the `userinfo` XML document, which references the [userinfo.xsd](https://analysiscenter.veracode.com/resource/3.0/userinfo.xsd) schema file. You can use the XSD schema file to validate the XML data.

The API wrapper returns three XML documents:

```xml
<?xml version="1.0" encoding="utf-8"?>

<userinfo xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
         xmlns="https://analysiscenter.veracode.com/schema/userinfo/3.0" 
         xsi:schemaLocation="https://analysiscenter.veracode.com/schema/userinfo/3.0 
         https://analysiscenter.veracode.com/resource/3.0/userinfo.xsd" userinfo_version="3.0" 
         username="wayneshorter@example.com">
   <login_account first_name="Wayne" last_name="Shorter" login_account_type="user" 
         email_address="wayneshorter@example.com" login_enabled="true" requires_token="false" 
         teams="Release Team" roles="Security Lead,Any Scan" />
</userinfo>
```

```xml
<?xml version="1.0" encoding="utf-8"?>

<userinfo xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
         xmlns="https://analysiscenter.veracode.com/schema/userinfo/3.0" 
         xsi:schemaLocation="https://analysiscenter.veracode.com/schema/userinfo/3.0 
         https://analysiscenter.veracode.com/resource/3.0/userinfo.xsd" userinfo_version="3.0" 
         username="tonywilliams@example.com">
   <login_account first_name="Tony" last_name="Williams" login_account_type="user" 
         email_address="tonywilliams@example.com" login_enabled="true" requires_token="false" 
         teams="Demo Team" roles="Creator,Submitter,Any Scan" />
</userinfo>
```

```xml
<?xml version="1.0" encoding="utf-8"?>

<userinfo xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
         xmlns="https://analysiscenter.veracode.com/schema/userinfo/3.0" 
         xsi:schemaLocation="https://analysiscenter.veracode.com/schema/userinfo/3.0 
         https://analysiscenter.veracode.com/resource/3.0/userinfo.xsd" userinfo_version="3.0" 
         username="carlabley@example.com">
   <login_account first_name="Carla" last_name="Bley" login_account_type="user" 
         email_address="carlabley@example.com" login_enabled="true" requires_token="false" 
          teams="" roles="Security Insights" />
</userinfo>
```

