---
"ft:title": "getappbuilds.do"
"ft:prettyUrl": "r_getappbuilds"
---
The `getappbuilds.do` call compiles a detailed list of applications and statuses, including all the application and scan profile data.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

The default is to include the latest published report for each application if it has changed in the last 31 days. This API returns data from the latest scan of an application. If you want to obtain more than just the data from the latest scan, use `getapplist.do` to generate a list of applications and `getbuildlist.do` to generate a list of scans for an application. You can then use `getappinfo.do` and `getbuildinfo.do` to retrieve the data about specific applications and scans.

<p><span style="font-size: medium;">REST API Equivalent</span></p>

The REST API equivalent of this call is a `GET` to `/appsec/v1/applications` using the [Applications API](https://docs.veracode.com/r/c_apps_intro) and the [Findings API](https://docs.veracode.com/r/c_findings_v2_intro). Veracode strongly recommends that you use the REST API for this action. For new integrations, always use the REST APIs.

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/4.0/getappbuilds.do`

<p><span style="font-size: medium;">Parameters</span></p>

|Name|Type|Description|
|:---|:---|:----------|
|`report_changed_since`|String|Format: `mm/dd/yyyy`. Scan data is only included for scans of applications with changed or published reports since the specified date. Changes to a report include: <ul><li>Acceptance or rejection of a finding mitigation relevant to the scan report</li><li>Policy changes to the scan application profile since the publication of the previous report</li></ul>Default is `31` days ago.|
|`only_latest`|Boolean|Set to `true` to return the latest scan data for each application. Set to `false` to return scan data for all previous scans that have published reports. Default is `true`.|

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/4.0/getappbuilds.do" "report_changed_since==08/25/2019"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `getappbuilds.do` call returns the `appbuilds` XML document, which references the [applicationbuilds.xsd](https://analysiscenter.veracode.com/resource/2.0/applicationbuilds.xsd) schema file. You can use the XSD schema file to validate the XML data.

A partial XML example. Veracode has deprecated `assurance_level` and replaced it with [`business_criticality`](https://docs.veracode.com/r/review_assurancelevels).

```xml
<?xml version="1.0" encoding="UTF-8"?>
            
            <applicationbuilds xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" 
            xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;2.0&#x2f;applicationbuilds" 
            xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;2.0&#x2f;applicationbuilds 
            https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;2.0&#x2f;applicationbuilds.xsd" 
            account_id="<account id>">
            <application app_name="<app name>" app_id="<app id>" industry_vertical="Manufacturing" assurance_level="Very High" 
            business_criticality="Very High" origin="Not Specified" modified_date="2019-08-13T14&#x3a;00&#x3a;10-04&#x3a;00" 
            cots="false" business_unit="Not Specified" tags="">
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
            </applicationbuilds>
            <!-- Parameters&#x3a; report_changed_since&#x3d;08&#x2f;25&#x2f;2019 only_latest&#x3d;true -->
```

Use [getapplist.do](../02_upload_xml_apis/10_getapplist_do.md) or [getbuildlist.do](../02_upload_xml_apis/12_getbuildlist_do.md) to get scan information for multiple applications. If you use Archer, use the [Archer asynchronous APIs](https://docs.veracode.com/r/c_about_archer) to quickly obtain a detailed list of applications and statuses.

<p><span style="font-size: medium;">API Wrapper Examples</span></p>

Java example:

```java
java -jar vosp-api-wrapper-java{version}.jar -vid <Veracode API ID> -vkey <Veracode API Key> -action getappbuilds -reportchangedsince 08/25/2019
```

C# example:

```
VeracodeC#API -vid <Veracode API ID> -vkey <Veracode API key> -action getappbuilds -reportchangedsince 08/25/2019
```

<p><span style="font-size: medium;">API Wrapper Results</span></p>

The `getappbuilds.do` call returns the `appbuilds` XML document, which references the [applicationbuilds.xsd](https://analysiscenter.veracode.com/resource/2.0/applicationbuilds.xsd) schema file. You can use the XSD schema file to validate the XML data.

A partial XML example. Veracode has deprecated `assurance_level` and replaced it with [`business_criticality`](https://docs.veracode.com/r/review_assurancelevels).

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
        <applicationbuilds xmlns="https://analysiscenter.veracode.com/schema/2.0/applicationbuilds" 
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" account_id="74370" 
        xsi:schemaLocation="https://analysiscenter.veracode.com/schema/2.0/applicationbuilds 
        https://analysiscenter.veracode.com/resource/2.0/applicationbuilds.xsd">
        <application app_id="<app id>" app_name="<app name>" assurance_level="Medium" 
        business_criticality="Medium" business_owner="Veracode" 
        business_unit="Mobile Secure Ventures" cots="false" industry_vertical="Not Specified" 
        modified_date="2019-09-20T00:01:27-04:00" origin="Not Specified" tags="">
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
        <build build_id="5003771" grace_period_expired="false" lifecycle_stage="Not Specified" 
        platform="Not Specified" policy_compliance_status="Did Not Pass" 
        policy_name="Veracode Recommended Medium" policy_version="1" results_ready="true" 
        rules_status="Did Not Pass" scan_overdue="false" submitter="<VeracodeUserName>" 
        version="App Dynamic Scan">
        <analysis_unit analysis_type="Dynamic" published_date="2019-09-20T00:01:13-04:00" 
        published_date_sec="1568952073" status="Results Ready"/>
        </build>
        </application>
        <application app_id="<app id>" app_name="<app name>" assurance_level="Very High" 
        business_criticality="Very High" business_unit="Not Specified" cots="false" 
        industry_vertical="Not Specified" modified_date="2019-10-03T16:07:50-04:00" 
        origin="Not Specified" tags="">
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
        </applicationbuilds><!-- Parameters&#x3a; report_changed_since&#x3d;08&#x2f;25&#x2f;2019 
        only_latest&#x3d;true -->
```

