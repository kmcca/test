---
"ft:title": "createapp.do"
"ft:prettyUrl": "r_createapp"
---
The `createapp.do` call creates a new application profile in the portfolio.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">REST API Equivalent</span></p>

The REST API equivalent of this call is a `POST` to `/appsec/v1/applications` in the [Applications API](https://docs.veracode.com/r/r_applications_create). Veracode strongly recommends that you use the REST API for this action. For new integrations, always use the REST APIs.

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/5.0/createapp.do`

<p><span style="font-size: medium;">Parameters</span></p>

| Name                                   | Type                      | Description                                                                                                                                                                                                                                                                                                                       |
|:---------------------------------------|:--------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `app_name` <br>**Required**            | String                    | Your application name.                                                                                                                                                                                                                                                                                                            |
| `business_criticality`<br>**Required** | String (case-sensitive) | Matches the names of `Business Criticality` enums: `Very High`, `High`, `Medium`, `Low`, `Very Low`                                                                                                                                                                                                                               |
| `description`                          | String                    | Description of the target application.                                                                                                                                                                                                                                                                                            |
| `vendor_id`                            | Integer                   | Indicates a third-party (COTS) application. It validates against existing vendors.                                                                                                                                                                                                                                                |
| `policy`                               | String (case-sensitive)   | Validates against the names of existing policies for this account. Default is the policy set as default for the business criticality parameter.                                                                                                                                                                                   |
| `business_unit`                        | String (case-sensitive)   | Validates against the names of existing business units for this account.                                                                                                                                                                                                                                                          |
| `business_owner`                       | String                    | Name of the business owner for the application.                                                                                                                                                                                                                                                                                   |
| `business_owner_email`                 | String                    | Email for the business owner of the application.                                                                                                                                                                                                                                                                                  |
| `teams`                                | String                    | Comma-separated list of team names associated with the specified application. Validates against the names of existing teams for this account.                                                                                                                                                                                     |
| `origin`                               | String (case-sensitive) | Validates against the names of the `Origin` enums:<ul><li>`3rd party library`</li><li>`Purchased Application`</li><li>`Contractor`</li><li>`Internally Developed`</li><li>`Open Source`</li><li>`Outsourced Team`</li></ul>                                                                                                       |
| `industry`                             | String (case-sensitive) | Validates against the names of the `Industry` enums. See [`industry` Parameter Values](#industryparam). Default is the same industry as the account.                                                                                                                                                                              |
| `app_type`                             | String (case-sensitive) | Validates against the names of the `Application Purpose` enums. See [`app_type` Parameter Values](#apptypeparam).                                                                                                                                                                                                                 |
| `deployment_method`                    | String (case-sensitive) | Validates against the names of the `Deployment Method` enums: <ul><li>`Web Based`</li><li>`Enterprise Application Enhancement`</li><li>`Client/Server`</li><li>`Mobile`</li><li>`Stand Alone`</li></ul>                                                                                                                           |
| `web_application`                      | Boolean                   | Default is false.                                                                                                                                                                                                                                                                                                                 |
| `archer_app_name`                      | String                    | Name of the application in Archer.                                                                                                                                                                                                                                                                                                |
| `tags`                                 | String                    | Comma-separated list of tags.                                                                                                                                                                                                                                                                                                     |
| `next_day_scheduling_enabled`          | Boolean                   | Specifies if a user can schedule next-day consultations. Only available to [user accounts](https://docs.veracode.com/r/c_role_permissions) with the Security Lead role or Administrator role and to [API service account](https://docs.veracode.com/r/c_API_roles_details) with the Upload and Scan API role. Default is `false`. |

<a name="industryparam"></a>
<p><span style="font-size: medium;"><code>industry</code> Parameter Values</span></p>

Values are case-sensitive.

| Value        | Description                            |
|--------------|----------------------------------------|
| `agmine`     | Agriculture & Mining                   |
| `busiserv`   | Business Services                      |
| `compelec`   | Computers & Electronics                |
| `conserv`    | Consumer Services                      |
| `edu`        | Education                              |
| `enerutil`   | Energy & Utilities                     |
| `fed`        | Federal                                |
| `finserv`    | Financial Services                     |
| `gvmt`       | Government                             |
| `hpb`        | Healthcare, Pharmaceuticals, & Biotech |
| `local`      | Local                                  |
| `manu`       | Manufacturing                          |
| `mediaent`   | Media & Entertainment                  |
| `non-profit` | Non-Profit                             |
| `notspec`    | Not Specified                          |
| `prtnr`      | Partner                                |
| `realconst`  | Real Estate & Construction             |
| `retail`     | Retail                                 |
| `softint`    | Software & Internet                    |
| `telcom`     | Telecommunications                     |
| `transerv`   | Transportation & Storage               |
| `travel`     | Travel, Recreation, and Leisure        |
| `wholedist`  | Wholesale & Distribution               |

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
http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/createapp.do" "app_name==<app name>" "business_criticality==Very High"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `createapp.do` call returns the `appinfo` XML document, which references the [appinfo.xsd](https://analysiscenter.veracode.com/resource/2.0/appinfo.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<?xml version="1.0" encoding="UTF-8"?>

<appinfo xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" 
      xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;2.0&#x2f;appinfo" 
      xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;2.0&#x2f;appinfo 
      https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;2.0&#x2f;appinfo.xsd" appinfo_version="1.1" 
      account_id="<account id>">
   <application app_id="<app id>" app_name="<app name>" business_criticality="Very High" 
      policy="Veracode Recommended Very High" teams="" origin="Not Specified" industry_vertical="Not Specified" 
      app_type="Not Specified" deployment_method="Not Specified" is_web_application="false" 
      modified_date="2019-08-15T13&#x3a;56&#x3a;46-04&#x3a;00" cots="false" vast="false" 
      business_unit="Not Specified" tags="">
      <customfield name="Custom 1" value="100"/>
      <customfield name="Custom 2" value="Deferred"/>
      <customfield name="Custom 3" value=""/>
      <customfield name="Custom 4" value=""/>
      <customfield name="Custom 5" value=""/>
      <customfield name="Custom 6" value=""/>
      <customfield name="Custom 7" value=""/>
      <customfield name="Custom 8" value=""/>
      <customfield name="Custom 9" value=""/>
      <customfield name="Custom 10" value=""/>
   </application>
</appinfo>
```

<p><span style="font-size: medium;">Java Example</span></p>

```java
java -jar vosp-api-wrappers-java-<version #>.jar -vid <VeracodeApiId> -vkey <VeracodeApiKey> -action createapp -appname MyApp -criticality veryhigh
```

<p><span style="font-size: medium;">Java Results</span></p>

The `createapp.do` call returns the `appinfo` XML document, which references the [appinfo.xsd](https://analysiscenter.veracode.com/resource/2.0/appinfo.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>

<appinfo xmlns="https://analysiscenter.veracode.com/schema/2.0/appinfo" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      account_id=<account id> appinfo_version="1.1" 
      xsi:schemaLocation="https://analysiscenter.veracode.com/schema/2.0/appinfo https://analysiscenter.veracode.com/resource/2.0/appinfo.xsd">   
   <application app_id=<app id> app_name="MyApp" app_type="Not Specified" business_criticality="Very High" business_unit="Not Specified" 
      cots="false" deployment_method="Not Specified" industry_vertical="Not Specified" is_web_application="false" 
      modified_date="2018-12-04T11:18:38-05:00" origin="Not Specified" policy="Veracode Recommended Very High" tags="" teams="" vast="false">
      <customfield name="Custom 1" value="100"/>
      <customfield name="Custom 2" value="Deferred"/>
      <customfield name="Custom 3" value=""/>
      <customfield name="Custom 4" value=""/>
      <customfield name="Custom 5" value=""/>
      <customfield name="Custom 6" value=""/>
      <customfield name="Custom 7" value=""/>
      <customfield name="Custom 8" value=""/>
      <customfield name="Custom 9" value=""/>
      <customfield name="Custom 10" value=""/>
   </application>
 </appinfo>
```