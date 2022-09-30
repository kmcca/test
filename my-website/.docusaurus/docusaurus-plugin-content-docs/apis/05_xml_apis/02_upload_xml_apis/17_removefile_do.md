---
"ft:title": "removefile.do"
"ft:prettyUrl": "r_removefile"
---
The `removefile.do` call deletes a file from an existing application build.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/5.0/removefile.do`

<p><span style="font-size: medium;">Parameters</span></p>

|Name|Type|Description|
|:---|:---|:----------|
|`app_id`<br>**Required**|Integer|Application ID.|
|`file_id`<br>**Required**|Integer|Obtain the `file_id` by calling [getfilelist.do](13_getfilelist_do.md).|
|`sandbox_id`|Integer|Enter the ID of the sandbox that contains the file to delete.|

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/removefile.do" "app_id==<application ID>" "file_id==<file ID>"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `removefile.do` call returns the `removefile` XML document, which references the [removefile.xsd](https://analysiscenter.veracode.com/resource/removefile.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<?xml version="1.0" encoding="UTF-8"?>

<removefile xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
xmlns="https://analysiscenter.veracode.com/schema/removefile" 
xsi:schemaLocation="https://analysiscenter.veracode.com/schema/removefile 
https://analysiscenter.veracode.com/resource/removefile.xsd" account_id="29188" app_id="71935">
  <result>success</result>
</removefile>
```

