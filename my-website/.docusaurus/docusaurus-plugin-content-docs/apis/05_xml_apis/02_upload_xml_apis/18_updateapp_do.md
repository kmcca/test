---
"ft:title": "updateapp.do"
"ft:prettyUrl": "r_updateapp"
---
The `updateapp.do` call modifies the settings of an existing application in the portfolio.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">REST API Equivalent</span></p>

The REST API equivalent of this call is a `PUT` to `/appsec/v1/applications` using the [Applications API](https://docs.veracode.com/r/r_applications_update). Veracode strongly recommends that you use the REST API for this action. For new integrations, always use the REST APIs.

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/5.0/updateapp.do`

<p><span style="font-size: medium;">Parameters</span></p>

| Name                                                      | Type                      | Description                                                                                                                                                                                                                                                                                                                  |
|-----------------------------------------------------------|---------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `app_id`<br>**Required**                                  | Integer                   | Application ID.                                                                                                                                                                                                                                                                                                              |
| `app_name`                                                | String                    | Changes the application name.                                                                                                                                                                                                                                                                                                |
| `description`                                             | String                    | Changes the application description.                                                                                                                                                                                                                                                                                         |
| `business_criticality`<br>Name for wrapper: `criticality` | String (case-sensitive) | Matches the names of the business criticality enums:`Very High`, `High`, `Medium`, `Low`, `Very Low` <br>You cannot change this value for applications that a vendor shares with your account.                                                                                                                               |
| `policy`                                                  | String (case-sensitive) | Validates against the names of existing policies for this account. You cannot change this value for applications that a vendor shares with your account. Default is the policy set as default for the `business_criticality` parameter.                                                                                      |
| `business_unit`                                           | String (case-sensitive) | Validates against the names of existing business units for this account.                                                                                                                                                                                                                                                     |
| `business_owner`                                          | String                    | Name of the business owner for the application.                                                                                                                                                                                                                                                                              |
| `business_owner_email`                                    | String                    | Email address for the business owner of the application.                                                                                                                                                                                                                                                                     |
| `teams`                                                   | String (case-sensitive) | Comma-separated list of team names. Validates against the names of existing teams for this account.                                                                                                                                                                                                                          |
| `origin`                                                  | String (case-sensitive) | Validates against the names of the `Origin` enums:<ul><li>`3rd party library`</li><li>`Purchased Application`</li><li>`Contractor`</li><li>`Internally Developed`</li><li>`Open Source`</li><li>`Outsourced Team`</li></ul>Defaults to `Not Specified`.                                                                      |
| `industry`                                                | String (case-sensitive) | Validates against the names of the `Industry` enums. See [`industry` Parameter Values](#industryparam). Defaults to the same industry as the account.                                                                                                                                                                        |
| `app_type`                                                | String (case-sensitive) | Validates against the names of the `Application Purpose` enums. See [`app_type` Parameter Values](#apptypeparam). Defaults to `Not Specified`.                                                                                                                                                                               |
| `deployment_method`<br>Name for wrapper: `deploymenttype` | String (case-sensitive) | Validates against the names of the `Deployment Method` enums. Defaults to `Not Specified`. Case-sensitive enum values are: <ul><li>`Web Based`</li><li>`Enterprise Application Enhancement`</li><li>`Client/Server`</li><li>`Mobile`</li><li>`Stand Alone`</li></ul>                                                         |
| `archer_app_name`                                         | String                    | Name of the application in Archer.                                                                                                                                                                                                                                                                                           |
| `tags`                                                    | String                    | Comma-separated list of tags.                                                                                                                                                                                                                                                                                                |
| `custom_field_name`                                       | String (case-sensitive) | Specifies the custom field that `custom_field_value` changes. If either is present, then the other is required. Call `updateapp.do` once for each custom field you need to update.                                                                                                                                           |
| `custom_field_value`                                      | String                    | The value of the custom field that `custom_field_name` specifies. If either is present, then the other is required. Call `updateapp.do` once for each custom field you need to update.                                                                                                                                       |
| `next_day_scheduling_enabled`                             | Boolean                   | Specifies if a user can schedule next-day consultations. Only available to [user accounts](https://docs.veracode.com/r/c_role_permissions) with the Security Lead or Administrator roles and to [API service accounts](https://docs.veracode.com/r/c_API_roles_details) with the Upload and Scan API role. Default is `false`. |

<a name="industryparam"></a>
<p><span style="font-size: medium;"><code>industry</code> Parameter Values</span></p>

Values are case-sensitive.

|Value|Description|
|-----|-----------|
|`agmine`|Agriculture & Mining|
|`busiserv`|Business Services|
|`compelec`|Computers & Electronics|
|`conserv`|Consumer Services|
|`edu`|Education|
|`enerutil`|Energy & Utilities|
|`fed`|Federal|
|`finserv`|Financial Services|
|`gvmt`|Government|
|`hpb`|Healthcare, Pharmaceuticals, & Biotech|
|`local`|Local|
|`manu`|Manufacturing|
|`mediaent`|Media & Entertainment|
|`non-profit`|Non-Profit|
|`notspec`|Not Specified|
|`prtnr`|Partner|
|`realconst`|Real Estate & Construction|
|`retail`|Retail|
|`softint`|Software & Internet|
|`telcom`|Telecommunications|
|`transerv`|Transportation & Storage|
|`travel`|Travel, Recreation, and Leisure|
|`wholedist`|Wholesale & Distribution|

<a name="apptypeparam"></a>
<p><span style="font-size: medium;"><code>app_type</code> Parameter Values</span></p>

Values are case-sensitive.

-   `Application Design/Construction/IDE/Analysis`
-   `Application Life-Cycle Management`
-   `Application Server/Integration Server`
-   `Back-Office Enterprise`
-   `CRM/Groupware/Messaging`
-   `Consumer`
-   `Content Management/Authoring`
-   `Engineering`
-   `Enterprise Resource Planning`
-   `Information Access/Delivery/Mining/Portal`
-   `Information/Data Management/Database`
-   `Middleware/Message-oriented/Transaction`
-   `Network Management`
-   `Networking`
-   `Other`
-   `Other Development Tools`
-   `Security`
-   `ServerWare/Clustering/Web/VM`
-   `Storage`
-   `System-Level Software`
-   `Systems Management`
-   `Testing Tools`

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/updateapp.do" "app_id==<app id>" "custom_field_name==Custom 10" "custom_field_value==jjones"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `updateapp.do` call returns the `appinfo` XML document, which references the [appinfo.xsd](https://analysiscenter.veracode.com/resource/2.0/appinfo.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<?xml version="1.0" encoding="UTF-8"?>

<appinfo xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" 
      xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;2.0&#x2f;appinfo" 
      xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;2.0&#x2f;appinfo 
      https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;2.0&#x2f;appinfo.xsd" appinfo_version="1.1" 
      account_id="<account id>">
   <application app_id="<app id>" app_name="<app name>" description="<app description>" 
      business_criticality="Very High" policy="Veracode Transitional Very High" 
      policy_updated_date="2019-08-13T14&#x3a;02&#x3a;08-04&#x3a;00" teams="Demo Team" origin="Not Specified" 
      industry_vertical="Other" app_type="Other" deployment_method="Not Specified" is_web_application="false" 
      archer_app_name="<archer app name>" modified_date="2019-08-13T13&#x3a;59&#x3a;38-04&#x3a;00" cots="false" 
      vast="false" business_unit="Not Specified" tags="">
      <customfield name="Custom 1" value=""/>
      <customfield name="Custom 2" value=""/>
      <customfield name="Custom 3" value=""/>
      <customfield name="Custom 4" value=""/>
      <customfield name="Custom 5" value=""/>
      <customfield name="Custom 6" value=""/>
      <customfield name="Custom 7" value=""/>
      <customfield name="Custom 8" value=""/>
      <customfield name="Custom 9" value=""/>
      <customfield name="Custom 10" value="jjones"/>
   </application>
</appinfo>
```