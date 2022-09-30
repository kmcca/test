---
"ft:title": "getappinfo.do"
"ft:prettyUrl": "r_getappinfo"
---
The `getappinfo.do` call provides information about the application.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">REST API Equivalent</span></p>

The REST API equivalent of this call is a `GET` to `/appsec/v1/applications` using the [Applications API](https://docs.veracode.com/r/r_applications_info). Veracode strongly recommends that you use the REST API for this action. For new integrations, always use the REST APIs.

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/5.0/getappinfo.do`

<p><span style="font-size: medium;">Parameters</span></p>

| Name                     | Type    | Description     |
|:-------------------------|:--------|:----------------|
| `app_id`<br>**Required** | Integer | Application ID. |

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/getappinfo.do" "app_id==<app id>"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `getappinfo.do` call returns the `appinfo` XML document, which references the [appinfo.xsd](https://analysiscenter.veracode.com/resource/2.0/appinfo.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<?xml version="1.0" encoding="UTF-8"?>

<appinfo xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" 
      xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;2.0&#x2f;appinfo" 
      xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;2.0&#x2f;appinfo 
      https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;2.0&#x2f;appinfo.xsd" appinfo_version="1.1" 
      account_id="<account id>">
   <application app_id="<app id>" app_name="<app name>" description="<app description>" business_criticality="Very High" 
      policy="Veracode Transitional Very High" policy_updated_date="2019-08-13T14&#x3a;02&#x3a;08-04&#x3a;00" 
      teams="Demo Team" origin="Not Specified" industry_vertical="Other" app_type="Other" deployment_method="Not Specified" 
      is_web_application="false" archer_app_name="<archer app name>" modified_date="2019-08-15T11&#x3a;27&#x3a;47-04&#x3a;00" 
      cots="false" vast="false" business_unit="Not Specified" tags="">
      <customfield name="Custom 1" value=""/>
      <customfield name="Custom 2" value=""/>
      <customfield name="Custom 3" value=""/>
      <customfield name="Custom 4" value=""/>
      <customfield name="Custom 5" value=""/>
      <customfield name="Custom 6" value=""/>
      <customfield name="Custom 7" value=""/>
      <customfield name="Custom 8" value=""/>
      <customfield name="Custom 9" value=""/>
      <customfield name="Custom 10" value="foo"/>
   </application>
</appinfo>
```

<p><span style="font-size: medium;">Java Example</span></p>

```java
java -jar vosp-api-wrappers-java-<version #>.jar -vid <VeracodeApiId> -vkey <VeracodeApiKey> -action getappinfo –appid <app id>
```

<p><span style="font-size: medium;">Java Results</span></p>

The `getappinfo.do` call returns the `appinfo` XML document, which references the [appinfo.xsd](https://analysiscenter.veracode.com/resource/2.0/appinfo.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>

<appinfo xmlns="https://analysiscenter.veracode.com/schema/2.0/appinfo" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      account_id="<account info>" appinfo_version="1.1" 
      xsi:schemaLocation="https://analysiscenter.veracode.com/schema/2.0/appinfo 
      https://analysiscenter.veracode.com/resource/2.0/appinfo.xsd">
   <application app_id="<app id>" app_name="<app name>" app_type="Other" archer_app_name="2501" 
      business_criticality="High" 
      business_unit="Not Specified" cots="false" deployment_method="Not Specified" 
      description="MyApp is a teaching web applications." industry_vertical="Other" 
      is_web_application="false" modified_date="2018-06-18T10:25:40-04:00" origin="Open Source" 
      policy="Scan Policy" policy_updated_date="2018-11-04T23:29:42-05:00" tags="" teams="" vast="false">
      <customfield name="Custom 1" value=""/>
      <customfield name="Custom 2" value=""/>
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

