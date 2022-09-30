---
"ft:title": "getfilelist.do"
"ft:prettyUrl": "r_getfilelist"
---
The `getfilelist.do` call compiles a list of files uploaded for a static scan. The returned XML provides MD5 checksums for these files if available.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/5.0/getfilelist.do`

<p><span style="font-size: medium;">Parameters</span></p>

|Name|Type|Description|
|:---|:---|:----------|
|`app_id`<br>**Required**|Integer|Application ID.|
|`build_id`|Integer|Application or sandbox build ID. Default is the most recent static scan.|
|`sandbox_id`|Integer|Create a list of files from the sandbox with this ID.|

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/getfilelist.do" "app_id==<app id>" "build_id==<build id>"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `getfilelist.do` call returns the `filelist` XML document, which references the [filelist.xsd](https://analysiscenter.veracode.com/resource/2.0/filelist.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<?xml version="1.0" encoding="UTF-8"?>

<filelist xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" 
      xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;2.0&#x2f;filelist" 
      xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;2.0&#x2f;filelist 
      https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;2.0&#x2f;filelist.xsd" filelist_version="1.1" 
      account_id="<account id>" app_id="<app id>" build_id="<build id>">
   <file file_id="<file id>" file_name="<file name>" file_status="Uploaded" file_md5="<file md5>"/>
   <file file_id="<file id>" file_name="<file name>" file_status="Uploaded" file_md5="<file md5>"/>
</filelist>
```

<p><span style="font-size: medium;">Java Example</span></p>

```java
java -jar vosp-api-wrappers-java-<version #>.jar -vid <VeracodeApiId> -vkey <VeracodeApiKey> -action getfilelist –appid <app id>
```

<p><span style="font-size: medium;">Java Results</span></p>

The `getfilelist.do` call returns the `filelist` XML document, which references the [filelist.xsd](https://analysiscenter.veracode.com/resource/2.0/filelist.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>

<filelist xmlns="https://analysiscenter.veracode.com/schema/2.0/filelist" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      account_id="<account id>" app_id="<app id>" build_id="<build id>" filelist_version="1.1" 
      xsi:schemaLocation="https://analysiscenter.veracode.com/schema/2.0/filelist 
      https://analysiscenter.veracode.com/resource/2.0/filelist.xsd">
   <file file_id="<file id>" file_md5="<file md5>" 
      file_name="<file name>" file_status="Uploaded"/>
</filelist>
```

