---
"ft:title": "getprescanresults.do"
"ft:prettyUrl": "r_getprescanresults"
---
The `getprescanresults.do` call fetches the results of the prescan.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/5.0/getprescanresults.do`

<p><span style="font-size: medium;">Parameters</span></p>

|Name|Type|Description|
|:---|:---|:----------|
|`app_id`<br>**Required**|Integer|Application ID.|
|`build_id`|Integer|Application or sandbox build ID.|
|`sandbox_id`|Integer|The ID of the source sandbox for prescan results.|

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/getprescanresults.do" "app_id==<app id>"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `getprescanresults.do` call returns the `prescanresults` XML document, which references the [prescanresults.xsd](https://analysiscenter.veracode.com/resource/2.0/prescanresults.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<?xml version="1.0" encoding="UTF-8"?>

<prescanresults xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" 
      xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;2.0&#x2f;prescanresults" 
      xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;2.0&#x2f;prescanresults 
      https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;2.0&#x2f;prescanresults.xsd" prescanresults_version="1.4" 
      account_id="<account id>" app_id="<app id>" build_id="<build id>"><module id="<module id>" name="<app name>" 
      app_file_id="<app file id>" checksum="<checksum>" platform="JVM &#x2f; Java J2SE 8 &#x2f; JAVAC_8" size="0KB" status="OK" 
      has_fatal_errors="false" is_dependency="false"> <issue details="No supporting files or PDB files"/>
   </module>
   <module id="<module id" name="JS files within <app id>" app_file_id="<app file id>" platform="JAVASCRIPT &#x2f; JavaScript &#x2f; 
      JAVASCRIPT_5_1" size="8KB" status="OK" has_fatal_errors="false" is_dependency="false">
      <issue details="No supporting files or PDB files"/>
   </module>
</prescanresults>
```

See [API Prescan Status Information](22_xml_api_prescan_status.md) for more information.

<p><span style="font-size: medium;">Java Example</span></p>

```java
java -jar vosp-api-wrappers-java-<version #>.jar -vid <VeracodeApiId> -vkey <VeracodeApiKey> -action getprescanresults -appid <app id>
```

<p><span style="font-size: medium;">Java Results</span></p>

The `getprescanresults.do` call returns the `prescanresults` XML document, which references the [prescanresults.xsd](https://analysiscenter.veracode.com/resource/2.0/prescanresults.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>

<prescanresults xmlns="https://analysiscenter.veracode.com/schema/2.0/prescanresults" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      account_id="<account id>" app_id="<app id>" build_id="<build id>" prescanresults_version="1.4" 
      xsi:schemaLocation="https://analysiscenter.veracode.com/schema/2.0/prescanresults 
      https://analysiscenter.veracode.com/resource/2.0/prescanresults.xsd">
   <module app_file_id="<app file id>" checksum="<checksum>" has_fatal_errors="false" id="1035970068" 
      is_dependency="false" name="httpd" platform="IA32 / Red Hat Enterprise Linux v4 (IA32) / GCC_Linux_IA32_3_4_6" 
      size="15MB" status="OK">
      <file_issue details="Found (Optional)" filename="<filename>"/>
      <file_issue details="Found (Optional)" filename="<filename"/>
   </module>
   <module app_file_id="<app file id>" checksum="<checksum>" has_fatal_errors="false" id="1035970069" 
      is_dependency="true" name="<filename>" platform="IA32 / Red Hat Enterprise Linux v4 (IA32) / GCC_Linux_IA32_3_4_6" 
      size="5MB" status="OK">
      <issue details="No supporting files or PDB files"/>
   </module>
   <module app_file_id="<app file id>" checksum="<checksum>" has_fatal_errors="false" id="1035970070" 
      is_dependency="true" name="filename" platform="IA32 / Red Hat Enterprise Linux v4 (IA32) / GCC_Linux_IA32_3_4_6" 
      size="8MB" status="OK">
      <file_issue details="Found (Optional)" filename="<filename>"/>
   </module>
</prescanresults>
```

