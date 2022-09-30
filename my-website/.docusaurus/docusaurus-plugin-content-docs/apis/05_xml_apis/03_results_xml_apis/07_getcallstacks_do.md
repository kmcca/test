---
"ft:title": "getcallstacks.do"
"ft:prettyUrl": "r_getcallstacks"
---
The `getcallstacks.do` call retrieves the call stacks for a specified flaw in a specific build.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">REST API Equivalent</span></p>

The REST API equivalent of this call is a `GET` to `/appsec/v1/custom_fields` using the [Findings API](https://docs.veracode.com/r/c_findings_v2_intro). Veracode strongly recommends that you use the REST API for this action. For new integrations, always use the REST APIs.

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/5.0/getcallstacks.do`

<p><span style="font-size: medium;">Parameters</span></p>

|Name|Type|Description|
|:---|:---|:----------|
|`build_id` <br>**Required**|Integer|Application or sandbox build ID.|
|`flaw_id`<br>**Required**|Integer|To find `flaw_id` values, look for `issueid` fields in the [detailed XML report](https://docs.veracode.com/r/c_about_XML_report).|

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> This call returns detailed flaw data only available for internally developed applications. Using this call for a third-party application returns an error.</p>

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/getcallstacks.do" "build_id==<build_id>" "flaw_id==13"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `getcallstacks.do` call returns the `callstacks_<app_id>_<build_id>_<flaw_id>` XML document, which references the [callstacks.xsd.](https://analysiscenter.veracode.com/resource/2.0/callstacks.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<?xml version="1.0" encoding="UTF-8"?>

<callstacks xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" 
            xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;2.0&#x2f;callstacks" 
            xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;2.0&#x2f;callstacks 
            https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;2.0&#x2f;callstacks.xsd" 
            callstacks_version="1.1" build_id="4722563" flaw_id="13">
   <callstack module_name="app_web_commentview.ascx.cd7a1e1e.dll" steps="1" local_path="documents and settings&#x2f;
            tjones#x2f;my documents&#x2f;demo&#x2f;blogenginedotnet&#x2f;1.3&#x2f;blogengine.web&#x2f;themes&#x2f;
            python-demo&#x2f;commentview.ascx" function_name="__Render__control1" line_number="8">
      <call data_path="1" file_name="commentview.ascx" file_path="documents and settings&#x2f;tjones#x2f;my documents&#x2f;
            demo&#x2f;blogenginedotnet&#x2f;1.3&#x2f;blogengine.web&#x2f;themes&#x2f;python-demo&#x2f;commentview.ascx" 
            function_name="__Render__control1" line_number="8"/>
   </callstack>
</callstacks>
```

<p><span style="font-size: medium;">API Wrapper Examples</span></p>

Java example:

```shell
java -jar vosp-api-wrapper-java{version}.jar -vid <Veracode API ID> -vkey <Veracode API Key> -action getcallstacks -buildid <build id> -flawid 13
```

C# example:

```shell
VeracodeC#API -vid <Veracode API ID> -vkey <Veracode API key> -action getcallstacks -buildid <build id> -flawid 13
```

<p><span style="font-size: medium;">API Wrapper Results</span></p>

The `getcallstacks.do` call returns the `callstacks_<app_id>_<build_id>_<flaw_id>` XML document, which references the [callstacks.xsd.](https://analysiscenter.veracode.com/resource/2.0/callstacks.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
        
        <callstacks xmlns="https://analysiscenter.veracode.com/schema/2.0/callstacks" 
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" build_id="<build id>" 
        callstacks_version="1.1" flaw_id="13" 
        xsi:schemaLocation="https://analysiscenter.veracode.com/schema/2.0/callstacks 
        https://analysiscenter.veracode.com/resource/2.0/callstacks.xsd">
        <callstack function_name="__Render__control1" line_number="8" 
        local_path="documents and settings/juno/my 
        documents/demo/blogenginedotnet/1.3/blogengine.web/themes/barks/commentview.ascx" 
        module_name="app_web_commentview.ascx.cd7a1e1e.dll" steps="1">
        <call data_path="1" file_name="commentview.ascx" file_path="documents and settings/juno/my 
        documents/demo/blogenginedotnet/1.3/blogengine.web/themes/barks/commentview.ascx" 
        function_name="__Render__control1" line_number="8"/>
        </callstack>
        </callstacks>
```

