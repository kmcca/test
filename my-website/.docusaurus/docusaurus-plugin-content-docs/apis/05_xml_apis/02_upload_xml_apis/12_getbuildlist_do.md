---
"ft:title": "getbuildlist.do"
"ft:prettyUrl": "r_getbuildlist"
---
The `getbuildlist.do` call produces a list of the application policy or sandbox scans in progress or already complete.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/5.0/getbuildlist.do`

<p><span style="font-size: medium;">Parameters</span></p>

|Name|Type|Description|
|:---|:---|:----------|
|`app_id`<br>**Required**|Integer|Application ID.|
|`sandbox_id`|Integer|Target sandbox ID.|

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/getbuildlist.do" "app_id==<app id>"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `getbuildlist.do` call returns the `buildlist` XML document, which references the [buildlist.xsd](https://analysiscenter.veracode.com/resource/2.0/buildlist.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<?xml version="1.0" encoding="UTF-8"?>

<buildlist xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" 
      xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;2.0&#x2f;buildlist" 
      xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;2.0&#x2f;buildlist 
      https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;2.0&#x2f;buildlist.xsd" buildlist_version="1.3" 
      account_id="<account id>" app_id="<app id>" app_name="<app name>"><build build_id="<build id>" 
      version="13 Aug 2019 Static" policy_updated_date="2019-08-13T14&#x3a;02&#x3a;08-04&#x3a;00"/>
</buildlist>
```

<p><span style="font-size: medium;">Java Example</span></p>

```java
java -jar vosp-api-wrappers-java-<version #>.jar -vid <VeracodeApiId> -vkey <VeracodeApiKey> -action getbuildlist –appid <app id>
```

<p><span style="font-size: medium;">Java Results</span></p>

The `getbuildlist.do` call returns the `buildlist` XML document, which references the [buildlist.xsd](https://analysiscenter.veracode.com/resource/2.0/buildlist.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>

<buildlist xmlns="https://analysiscenter.veracode.com/schema/2.0/buildlist" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" account_id="74370" 
      app_id="<app id>" app_name="<app name>" buildlist_version="1.3" 
      xsi:schemaLocation="https://analysiscenter.veracode.com/schema/2.0/buildlist 
      https://analysiscenter.veracode.com/resource/2.0/buildlist.xsd">
   <build build_id="<build id>" 
      policy_updated_date="2019-08-13T14:09:11-04:00" version="13 Aug 2019 Static"/>
</buildlist>
```

