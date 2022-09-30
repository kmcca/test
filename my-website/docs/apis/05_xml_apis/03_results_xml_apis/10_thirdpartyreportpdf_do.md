---
"ft:title": "thirdpartyreportpdf.do"
"ft:prettyUrl": "r_thirdpartyreportpdf"
---
The `thirdpartyreportpdf.do` call downloads a PDF file of the scan results for the specified build of a third-party application.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/4.0/thirdpartyreportpdf.do`

<p><span style="font-size: medium;">Parameters</span></p>

|Name|Type|Description|
|:---|:---|:----------|
|`build_id`<br>**Required**|Integer|Application or sandbox build ID.|

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac -o thirdpartyreport.pdf "https://analysiscenter.veracode.com/api/4.0/thirdpartyreportpdf.do" "build_id==<build id>"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `thirdpartyreportpdf.do` call returns the `thirdpartyreport_<app_name>_<build_id>` PDF format of the scan results of a third-party application.

<p><span style="font-size: medium;">API Wrapper Examples</span></p>

To get the same result as `thirdpartyreportpdf.do` using an API wrapper, you use the following parameters:

-   `-action thirdpartyreport`
-   `-format pdf`

Java example:

```shell
java -jar vosp-api-wrapper-java{version}.jar -vid <Veracode API ID> -vkey <Veracode API Key> -action thirdpartyreport -buildid <build id> -format pdf -outputfilepath c:\javawrappers\thirdpartyreport.pdf
```

C# example:

```
VeracodeC#API -vid <Veracode API ID> -vkey <Veracode API Key> -action thirdpartyreport -buildid <build id> -format pdf -outputfilepath c:\csharpwrappers\thirdreport.pdf
```

<p><span style="font-size: medium;">API Wrapper Results</span></p>

The `thirdpartyreportpdf.do` call returns the scan results of a third-party application as a PDF with filename `thirdpartyreport_<app_name>_<build_id>.pdf`.

