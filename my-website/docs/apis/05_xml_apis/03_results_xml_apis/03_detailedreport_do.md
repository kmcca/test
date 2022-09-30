---
"ft:title": "detailedreport.do"
"ft:prettyUrl": "r_detailedreport"
---
The `detailedreport.do` call returns a detailed XML report of all scan results related to the specified build.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

For performance reasons, this API automatically compresses the XML output, regardless of file size, in Gzip format. When accessing this API in production, Veracode strongly recommends that you use a user agent, such as HTTPie, which is the default, that supports Gzip. To test this API, you can use any tool that supports HTTP.

<p><span style="font-size: medium;">REST API Equivalent</span></p>

The REST API equivalent of this call is a `GET` to `/appsec/v1/applications/{applicationGuid}/findings` using the [Applications API](https://docs.veracode.com/r/c_apps_intro). Veracode strongly recommends that you use the REST API for this action. For new integrations, always use the REST APIs.

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/5.0/detailedreport.do`

<p><span style="font-size: medium;">Parameters</span></p>

|Name|Type|Description|
|:---|:---|:----------|
|`build_id`<br>**Required**|Integer|Application or sandbox build ID.|

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> This call returns detailed flaw data only available for internally developed applications. Using this call for a third-party application returns an error.</p>

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/detailedreport.do" "build_id==<build id>"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `detailedreport.do` call returns the `detailedreport` XML document, which references the [detailedreport.xsd](https://analysiscenter.veracode.com/resource/detailedreport.xsd) schema file. You can use the XSD schema file to validate the XML data.

A partial XML example. Veracode has deprecated `assurance_level` and replaced it with [`business_criticality`](https://docs.veracode.com/r/review_assurancelevels).

```xml
<?xml version='1.0' encoding='UTF-8'?>
          
          <detailedreport xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
          xmlns="https://www.veracode.com/schema/reports/export/1.0" 
          xsi:schemaLocation="https://www.veracode.com/schema/reports/export/1.0 
          https://analysiscenter.veracode.com/resource/detailedreport.xsd" 
          report_format_version="1.5" account_id="<account id>" app_name="<app name>" 
          app_id="<app id>" analysis_id="4705951" static_analysis_unit_id="4721671" 
          sandbox_id="<sandbox id>" first_build_submitted_date="2019-08-13 17:57:41 UTC" 
          version="13 Aug 2019 Static" build_id="4722565" submitter="Veracode" 
          platform="Not Specified" assurance_level="5" business_criticality="5" 
          generation_date="2019-09-03 19:54:36 UTC" veracode_level="VL1" total_flaws="22" 
          flaws_not_mitigated="22" teams="Demo Team" life_cycle_stage="Not Specified" 
          planned_deployment_date="" last_update_time="2019-08-13 18:08:47 UTC" 
          is_latest_build="true" policy_name="Veracode Transitional Very High" 
          policy_version="1" policy_compliance_status="Did Not Pass" 
          policy_rules_status="Did Not Pass" grace_period_expired="true" 
          scan_overdue="false" business_owner="" business_unit="Not Specified" tags="" 
          legacy_scan_engine="false">
          <static-analysis rating="D" score="82" submitted_date="2019-08-13 17:57:39 UTC" 
          published_date="2019-08-13 18:08:35 UTC" version="13 Aug 2019 Static" 
          analysis_size_bytes="16157840" engine_version="20190805180615">
          <modules>
          <module name="httpd" compiler="GCC_Linux_IA32_3_4_6" 
          os="Red Hat Enterprise Linux v4 (IA32)" architecture="IA32" loc="66813" 
          score="82" numflawssev0="0" numflawssev1="0" numflawssev2="6" numflawssev3="13" 
          numflawssev4="0" numflawssev5="3" />
          </modules>
          </static-analysis>
          <severity level="5">
          <category categoryid="3" categoryname="Buffer Overflow" pcirelated="false">
          <desc><para text="Buffer overflows (or buffer overruns) occur 
          when a program attempts to put more data in a buffer than it has been allocated to hold.  
          Writing to areas of memory not intended by the application developer can lead to serious 
          security vulnerabilities and can cause an application to execute arbitrary code on behalf 
          of an attacker." /><para text="The degree of exploitability of buffer overflows varies 
          depending on a number of factors, including buffer location, execution path, and platform.  Often, the resultant behavior is limited 
          to corrupting data or crashing the application.  However, in many cases, specially crafted attacks can be constructed that 
          will execute arbitrary code with the privileges of the vulnerable application.  " />
          </desc>
          <recommendations><para text="There are a number of mitigations that can be applied during both design and implementation to 
          prevent buffer overflows from occurring.  Using multiple techniques provides defense-in-depth. ">
          <bulletitem text="Always use bounded rather than unbounded string manipulation functions, e.g. strncpy() and strncat() 
          instead of strcpy() and strcat()." />
          <bulletitem text="When using functions that accept a number of bytes to copy, such as strncpy(), be aware that if the 
          destination buffer size is equal to the source buffer size, it may not null-terminate the string." />
          <bulletitem text="Be careful when working with multi-byte strings, as the number of logical characters in a string is not 
          equivalent to the number of bytes allocated in memory." /><bulletitem text="Use a safe string handling functions such as 
          Microsoft's strsafe.h. These functions prevent data from being written past the end of buffers and guarantees null 
          termination.  Alternatively, use a string abstraction library such as SafeStr, which automatically resizes strings as 
          required.  While neither of these approaches is foolproof, they will prevent many common mistakes." /></para>
          </recommendations>
          ...
```

<p><span style="font-size: medium;">API Wrapper Examples</span></p>

Java example:

```shell
java -jar vosp-api-wrapper-java{version}.jar -vid <Veracode API ID> -vkey <Veracode API Key> -action detailedreport -buildid <build id> -outputfilepath c:\javawrappers\detailedreport.xml
```

C# example:

```shell
VeracodeC#API -vid <Veracode API ID> -vkey <Veracode API key> -action detailedreport -buildid <build id> -outputfilepath c:\csharpwrappers\detailedreport.xml
```

<p><span style="font-size: medium;">API Wrapper Results</span></p>

The `detailedreport.do` call returns the `detailedreport` XML document, which references the [detailedreport.xsd](https://analysiscenter.veracode.com/resource/detailedreport.xsd) schema file. You can use the XSD schema file to validate the XML data.

A partial XML example. Veracode has deprecated `assurance_level` and replaced it with [`business_criticality`](https://docs.veracode.com/r/review_assurancelevels).

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
        <detailedreport xmlns="https://www.veracode.com/schema/reports/export/1.0" 
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" account_id="<account id>" analysis_id="4705951" 
        app_id="<app id>" app_name="Apache" assurance_level="5" build_id="<build id>" business_criticality="5" 
        business_owner="" business_unit="Not Specified" first_build_submitted_date="2019-08-13 17:57:41 UTC" 
        flaws_not_mitigated="22" generation_date="2019-10-09 21:31:49 UTC" 
        grace_period_expired="true" is_latest_build="true" last_update_time="2019-08-13 18:08:47 UTC" 
        legacy_scan_engine="false" life_cycle_stage="Not Specified" planned_deployment_date="" 
        platform="Not Specified" policy_compliance_status="Did Not Pass" 
        policy_name="Veracode Transitional Very High" policy_rules_status="Did Not Pass" policy_version="1" 
        report_format_version="1.5" sandbox_id="1358509" scan_overdue="false" static_analysis_unit_id="4721671" 
        submitter="Veracode" tags="" teams="Demo Team" total_flaws="22" veracode_level="VL1" 
        version="13 Aug 2019 Static" xsi:schemaLocation="https://www.veracode.com/schema/reports/export/1.0 
        https://analysiscenter.veracode.com/resource/detailedreport.xsd">
        <static-analysis analysis_size_bytes="16157840" engine_version="20190805180615" 
        published_date="2019-08-13 18:08:35 UTC" rating="D" score="82" submitted_date="2019-08-13 17:57:39 UTC" 
        version="13 Aug 2019 Static">
        <modules>
        <module architecture="IA32" compiler="GCC_Linux_IA32_3_4_6" loc="66813" name="httpd" numflawssev0="0" 
        numflawssev1="0" numflawssev2="6" numflawssev3="13" numflawssev4="0" numflawssev5="3" 
        os="Red Hat Enterprise Linux v4 (IA32)" score="82"/>
        </modules>
        </static-analysis>
        <severity level="5">
        <category categoryid="3" categoryname="Buffer Overflow" pcirelated="false">
        <desc>
        <para text="Buffer overflows (or buffer overruns) occur when a program attempts to put more data in a buffer 
        than it has been allocated to hold.  Writing to areas of memory not intended by the application developer 
        can lead to serious security vulnerabilities and can cause an application to execute arbitrary code on 
        behalf of an attacker."/>
        <para text="The degree of exploitability of buffer overflows varies depending on a number of factors, including 
        buffer location, execution path, and platform.  Often, the resultant behavior is limited to corrupting data 
        or crashing the application.  However, in many cases, specially crafted attacks can be constructed that will 
        execute arbitrary code with the privileges of the vulnerable application.  "/>
        </desc>
        <recommendations>
        <para text="There are a number of mitigations that can be applied during both design and implementation to 
        prevent buffer overflows from occurring.  Using multiple techniques provides defense-in-depth. ">
        <bulletitem text="Always use bounded rather than unbounded string manipulation functions, e.g. strncpy() and 
        strncat() instead of strcpy() and strcat()."/>
        <bulletitem text="When using functions that accept a number of bytes to copy, such as strncpy(), be aware that 
        if the destination buffer size is equal to the source buffer size, it may not null-terminate the string."/>
        <bulletitem text="Be careful when working with multi-byte strings, as the number of logical characters in a 
        string is not equivalent to the number of bytes allocated in memory."/>
        <bulletitem text="Use a safe string handling functions such as Microsoft's strsafe.h. These functions prevent 
        data from being written past the end of buffers and guarantees null termination.  Alternatively, use a string 
        abstraction library such as SafeStr, which automatically resizes strings as required.  While neither of these 
        approaches is foolproof, they will prevent many common mistakes."/>
        </para>
        </recommendations>
```