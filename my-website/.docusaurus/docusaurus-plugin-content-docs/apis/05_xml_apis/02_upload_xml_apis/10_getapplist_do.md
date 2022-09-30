---
"ft:title": "getapplist.do"
"ft:prettyUrl": "r_getapplist"
---
The `getapplist.do` call compiles a list of the applications in the portfolio. If you use the optional parameter to include user information, this call also returns details about tasks you have permissions to perform, such as view scan results and approve mitigations.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">REST API Equivalent</span></p>

The REST API equivalent of this call is a `GET` to `/appsec/v1/applications` using the [Applications API](https://docs.veracode.com/r/r_applications_list). Veracode strongly recommends that you use the REST API for this action. For new integrations, always use the REST APIs.

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/5.0/getapplist.do`

<p><span style="font-size: medium;">Parameters</span></p>

| Name                | Type    | Description                                                                                                                                |
|:--------------------|:--------|:-------------------------------------------------------------------------------------------------------------------------------------------|
| `include_user_info` | Boolean | If true, the list of applications concludes with information about the user, account type, and the assigned permissions. Default is false. |

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/getapplist.do" "include_user_info==true"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `getapplist.do` call returns the `applist` XML document, which references the [applist.xsd](https://analysiscenter.veracode.com/resource/2.0/applist.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<?xml version="1.0" encoding="UTF-8"?>

<applist xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" 
      xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;2.0&#x2f;applist" 
      xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;2.0&#x2f;applist 
      https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;2.0&#x2f;applist.xsd" applist_version="1.2" 
      account_id="<account id>">
   <app app_id="<app id>" app_name="<app name>" policy_updated_date="2019-08-13T14&#x3a;09&#x3a;11-04&#x3a;00"/>
   <app app_id="<app id>" app_name="<app name>" policy_updated_date="2019-07-13T14&#x3a;03&#x3a;33-04&#x3a;00"/>
   <app app_id="<app id>" app_name="<app name>" policy_updated_date="2019-08-16T14&#x3a;03&#x3a;33-11&#x3a;00"/>
   <app app_id="<app id>" app_name="<app name>" policy_updated_date="2019-09-03T14&#x3a;03&#x3a;33-07&#x3a;00"/>
   <user login_account_type="user" username="<VeracodeUsername>" create_application_profile="true" create_sandbox="true" 
      create_new_build="true" create_policy_scan="true" create_sandbox_scan="true" assign_app_to_team="true" 
      assign_app_to_any_team="true" view_sandbox="true" view_results="true" approve_mitigations="true" 
      submit_static_scan="true" submit_policy_static_scan="true" submit_sandbox_static_scan="true"/>
</applist>
```

<p><span style="font-size: medium;">Java Example</span></p>

```java
java -jar vosp-api-wrappers-java-<version #>.jar -vid <VeracodeApiId> -vkey <VeracodeApiKey> -action getapplist
```

<p><span style="font-size: medium;">Java Results</span></p>

The `getapplist.do` call returns the `applist` XML document, which references the [applist.xsd](https://analysiscenter.veracode.com/resource/2.0/applist.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<applist xmlns="https://analysiscenter.veracode.com/schema/2.0/applist"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" account_id="12345" 
      applist_version="1.2" xsi:schemaLocation="https://analysiscenter.veracode.com/schema/2.0/applist 
      https://analysiscenter.veracode.com/resource/2.0/applist.xsd">
   <app app_id="<app id>" app_name="<app name>" policy_updated_date="2017-11-16T13:55:05-05:00"/>
   <app app_id="<app id>" app_name="<app name>" policy_updated_date="2018-08-17T02:24:25-04:00"/>
   <app app_id="<app id>" app_name="<app name>"/>
</applist>
```