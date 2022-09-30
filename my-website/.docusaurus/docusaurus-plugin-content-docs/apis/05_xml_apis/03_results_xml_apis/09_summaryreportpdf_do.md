---
"ft:title": "summaryreportpdf.do"
"ft:prettyUrl": "r_summaryreportpdf"
---
The `summaryreportpdf.do` call downloads a PDF summary report of the scan results for the specified build.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/4.0/summaryreportpdf.do`

<p><span style="font-size: medium;">Parameters</span></p>

|Name|Type|Description|
|:---|:---|:----------|
|`build_id`<br>**Required**|Integer|Application or sandbox build ID.|

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> This call returns detailed flaw data only available for internally developed applications. Using this call for a third-party application returns an error.</p>

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac  -o summaryreport.pdf "https://analysiscenter.veracode.com/api/4.0/summaryreportpdf.do" "build_id==<build id>"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `summaryreporttpdf.do` call returns the `summaryreport_<app_name>_<build_id>` PDF format of the `summaryreport` XML file.

<p><span style="font-size: medium;">API Wrapper Examples</span></p>

To get the same result as `summaryreportpdf.do` using an API wrapper, you use the these parameters:

-   `-action thirdpartyreport`
-   `-format pdf`

Java example:

```shell
java -jar vosp-api-wrapper-java{version}.jar -vid <Veracode API ID> -vkey <Veracode API Key> -action summaryreport -buildid <build id> -format pdf -outputfilepath c:\javawrappers\summaryreport.pdf
```

C# example:

```shell
VeracodeC#API -vid <Veracode API ID> -vkey <Veracode API key> -action detailedreport -buildid <build id> -format pdf -outputfilepath c:\csharpwrappers\summaryreport.pdf
```

<p><span style="font-size: medium;">API Wrapper Results</span></p>

The `summaryreporttpdf.do` call returns the `summaryreport_<app_name>_<build_id>` PDF format of the `summaryreport` XML file.

