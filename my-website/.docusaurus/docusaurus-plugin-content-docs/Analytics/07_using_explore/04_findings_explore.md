---
"ft:title" : "Findings Data Dictionary"
"ft:prettyUrl" : "r_findings_explore"
---

The following definitions describe the dimensions and measures in the Findings explore in Veracode Analytics.

|Dimension|Description|
|---------|-----------|
|Application Custom Fields|The metadata entered in application custom fields 1-25. Located from **Application** \> **Metadata** \> **Asset** \> **Custom Fields**.|
|Application ID|The unique numerical identifier associated with the application profile, provided by Veracode.|
|Application Name|The name of the application, created by the user when creating an application on the Veracode Platform.|
|Application Passed Policy \(Yes/No\)|Determines if the application did or did not pass policy compliance. Values are Yes or No.|
|Application Purpose|The business purpose of the application, located from the application metadata.|
|Application Rescanned \(Yes/No\)|Determines if the application was rescanned. Values are Yes or No.|
|Application Scanned \(Yes/No\)|Determines if the application was scanned. Values are Yes or No.|
|Archer Application Name|The application name where the data is published to Archer. Located from **Application** \> **Metadata** \> **Archer Name**.|
|Business Owner Email|The email address associated with the business owner of the application.|
|Business Owner Name|The first and last name of the user responsible for the application. Located from **Application** \> **Profile** \> **Organizational Information**.|
|Business Unit|The name of the business unit.|
|Created Date|The date the application was created.|
|Current Policy|The current policy associated with the application.|
|Current Policy Compliance|The application policy compliance based on the latest scan results.|
|Dynamic Scan Due Date|The date by which a dynamic scan must run, per the application policy. If the date is in the past, the due date was missed.|
|Dynamic Scan Frequency|The dynamic scan frequency, such as weekly, monthly, quarterly, that the policy determines for the application.|
|Industry|The type of industry for which the application is used. Located from **Application** \> **Metadata** \> **Industry**.|
|Initial Published Date|The earliest date that a scan for the application was published.|
|Latest Published Date|The most-recent date that a scan for the application was published.|
|License Account|Scans licensed by this account. For third-party applications, it is the account that paid for the scan. For SDLC applications, it is the same as the scanning account.|
|License Type|The type of license: SDLC license or Third-party license. Most applications are software delivery lifecycle \(SDLC\) license, third-party license type is not commonly used. Veracode offers you the ability to scan your software supplier partners through the Veracode Platform. Values are either SDLC for internal testing of first-party software or third-party for permitting a software supplier to test the code they are developing for the Veracode user.|
|Manual Penetration Test Due Date|The date by which a manual penetration test is required, per the application policy. If the date is in the past, the due date was missed.|
|Manual Penetration Test Frequency|The manual penetration test frequency, such as weekly, monthly, quarterly, that the policy determines for the application.|
|Number of Dynamic Scans|The number of dynamic scans of the application.|
|Number of Static Scans|The number of static scans of the application.|
|Requested a Consultation|Veracode offers the ability to schedule a consultation with application security consultants to better understand Veracode scanning and results. Values are No Readout Requested or Readout Requested based on if the application has had a consultation requested.|
|Scanning Account|The account where scans occurred. For software delivery lifecycle \(SDLC\) applications, it is the same as the licensed account. For third-party applications, it is the vendor account. Third-party applications are not commonly used.|
|Scanning Status|The scanning status for the application. Values are DynamicMP + SDLC, DynamicMP Only, No Published Policy Scans, and SDLC only.|
|Static Scan Due Date|The date by which a static scan must run, per the application policy. If the date is in the past, the due date was missed.|
|Static Scan Frequency|The static scan frequency, such as weekly, monthly, quarterly, that the policy determines for the application.|
|Tags List|The list of tags for the application that are added from the application metadata. Veracode allows users to provide a tag to organize their applications as part of the application metadata.|
|Web Application Flag|Determines if the application is a web application or not. This flag is set on the application metadata page.|

<p><span style="font-size: medium;">Applications Measures</span></p>

|Measure|Description|
|-------|-----------|
|Application Scan Counts|The total count of applications scanned, rescanned, and not scanned in the past 90 and 365 days.|
|Applications with Consultations|The count of applications for which security consultations have been requested.|
|Count|The count of distinct application IDs|
|Percentage of Applications with Consultation Requests|The percentage of applications for which a consultation call was requested.|

<p><span style="font-size: medium;">CVE Dimensions</span></p>

|Dimension|Description|
|---------|-----------|
|Access Complexity|According to the CVSS standard, this metric measures the complexity of the attack required to exploit the vulnerability after an attacker has gained access to the target system.|
|Access Vector|According to the CVSS standard, this metric represents how the vulnerability is exploited.|
|Authentication|According to the CVSS standard, this metric measures the number of times an attacker must authenticate to a target to be able to exploit a vulnerability.|
|Availability Impact|According to the CVSS standard, this metric measures the impact a successfully exploited vulnerability will have on the accessibility of information resources.|
|Confidentiality Impact|From the CVSS standard, this metric measures the impact on confidentiality of a successfully exploited vulnerability.|
|CVE ID|The ID established by MITRE of publicly known cybersecurity vulnerabilities.|
|CVSSv2 Score|The numerical score produced by Version 2.0 of the Common Vulnerability Scoring System \(CVSS\) that reflects the severity of the principal characteristics of a vulnerability.|
|CVSSv3 Score|The numerical score produced by Version 3.0 of the Common Vulnerability Scoring System \(CVSS\) that reflects the severity of the principal characteristics of a vulnerability.|
|Integrity Impact|According to the CVSS standard, this value is the measure of the impact to the trustworthiness and guaranteed veracity of information by a successfully exploited vulnerability.|
|No-CVE ID|The ID Veracode provides in its proprietary database of vulnerabilities found in open-source libraries.|
|Published Date|Date the vulnerability was published to the National Vulnerability Database.|
|Summary|The description and details of the vulnerability.|
|Vulnerability Title|A short summary of the vulnerability.|

<p><span style="font-size: medium;">CWE Dimensions</span></p>

|Dimension|Description|
|---------|-----------|
|Category Name|Category of the common weakness enumeration \(CWE\) category for the finding found after the application was scanned.|
|Description|The CWE category description for the finding.|
|Flaw Name|The CWE name of the finding.|
|ID|The CWE ID of the finding. This dimension is most useful when combined with the Flaw Name dimension.|
|Latest CWE Top 25|A list of errors that can lead to the most serious software vulnerabilities according to the latest SANS/MITRE CWE Top 25.|
|OWASP 2013|The top ten vulnerabilities identified by the 2013 version of the Open Web Application Security Project \(OWASP\).|
|OWASP 2017|The top ten vulnerabilities identified by the 2017 version of the Open Web Application Security Project \(OWASP\).|
|Remediation Effort|The level of effort it takes to remediate the finding.|
|SANS 25|The list of the most significant errors that can lead to software vulnerabilities, according to the SANS top 25 list.|
|Top 5 Categories|The finding by CWE top 5 category of the most significant errors that can lead to software vulnerabilities, according to the SANS top 25 list.|

<p><span style="font-size: medium;">Findings Dimensions</span></p>

|Dimension|Description|
|---------|-----------|
|Application ID|The application ID associated with the finding.|
|Archived by Sandbox Expiration \(Yes / No\)|The flag to denote if Veracode archived the finding and deleted the scan from view due to sandbox scan expiration. Use this flag to filter in or out findings that only existed in archived scan data. Findings that exist in non-archived scan data is not considered archived.|
|Component Path|The custom name and severity of the library at the time of the build of the compilation of the application.|
|Custom Severity|The user-created severity for the finding. Located from**Policy** \> **Policies** \> **Custom Severities**.|
|Custom Severity Description|The description for the finding with user-created severity.|
|Custom Severity Name|The name of the severity of the finding. Values are Informational, Very Low, Low, Medium, High, or Very High.|
|CWE ID|The ID and the name of the common weakness enumeration \(CWE\) found after the application was scanned.|
|Description|Provides a brief description of the finding. For a category description, see the CWE Description dimension.|
|Dynamic Findings - General|Contains: <ul><li>Path: Provides the URL path where Dynamic Analysis discovered the vulnerability.</li><li>Vulnerable Parameter: The specific injection point that identifies the vulnerability discovered by Dynamic Analysis. Examples include cookies, query strings, and POST body data. Not all vulnerabilities have a vulnerable parameter.</li></ul> |
|Exploitability|The rating for the likelihood that an attacker could exploit the finding.|
|Exploitability Description|The description for the likelihood that an attacker could exploit the finding.|
|Fixed Date|The date a finding was closed because it was no longer present in the scan results for the application. The finding has been fixed or remediated.|
|Finding Status|The status of the finding. Values are Open or Closed.|
|First Found Date|The date the finding was first found. You can filter by Date, Month, Quarter, Time, Week, Year.|
|Flaw Age|The range between the Finding Found Date and Finding Resolved Date dimensions. If the resolved date is null, use today's date.|
|Flaw Age Tier|The length of time by days the finding was open. Values are 1, 7, 30, or 90 days.|
|Flaw ID|The ID of the finding on the Veracode Platform.|
|Grace Period Expiration Date|The date on which a grace period expires for the finding. Veracode calculates this date based on the last date a finding was opened \(First Found or Last Reopened date\), and based on the grace period provided in the security policy assigned to the application. This date only applies to open findings that impact policy compliance.|
|Last Found Date|The date the finding was last found. You can filter by Date, Month, Quarter, Time, Week, Year.|
|Library First Found in Active Scans|The earliest date of a scan where this library was found. This date can be later than when the Veracode SCA tool detected a vulnerability because you may have archived or deleted earlier scans with that library. |
|Mitigation Status|The mitigation status for the finding. Values are Proposed, Accepted, Rejected, or Not Mitigated. Provides the latest mitigation workflow status for a mitigation on a finding.|
|Module Name|The name of the module in which the finding was seen.|
|Most Recent Mitigation Details|The fields in this menu include the most recent mitigations details for:<ul><li>Acceptance Comment - the comment provided with the most recent acceptance action on a mitigation proposal.</li><li>Acceptance Date - date the most recent mitigation proposal was accepted.</li><li>Acceptance Time - time the most recent mitigation proposal was accepted.</li><li>Accepter Username - name of the person who accepted the most recent mitigation proposal.</li><li>MPR Comment - comment provided by Veracode in the most recent Mitigation Proposal Review of a mitigation proposal.</li><li>MPR Date - date of the most recent occurrence of a Mitigation Proposal Review for this mitigation proposal.</li><li>MPR Status - determines whether or not the finding conforms to the risk tolerance guidelines established by your organization.</li><li>MPR Time - time of the most recent occurrence of a Mitigation Proposal Review for this mitigation proposal.</li><li>MPR Username - Veracode provides Mitigation Proposal Reviews as a service to offer guidance on validity, propriety, and effectiveness of mitigation proposals according to the risk tolerance guidelines of your organization. Veracode is always the username returned in this field.</li><li>Proposal Comment - comment provided with the most recent mitigation proposal.</li><li>Proposal Date - date the most recent mitigation proposal was made.</li><li>Proposal Time - time the most recent mitigation proposal was made.</li><li>Proposer Username - username of the user who provided the most recent mitigation proposal.</li><li>Rejecter Username - username of the user who rejected the most recent mitigation proposal.</li><li>Rejection Comment - comment provided with the rejection of the most recent mitigation proposal.</li><li>Rejection Date - date of the most recent rejection the most recent mitigation proposal was rejected.</li><li>Rejection Time - time the most recent mitigation proposal was rejected.</li></ul>|
|New Finding \(Yes/No\)|Determines if the finding is new. Values are Yes or No.|
|Policy or Sandbox Scan|Determines if the finding is in a policy or sandbox scan.|
|Policy Rule Passed|Determines if a finding passed policy.|
|Policy Rule Passed \(Yes/No\)|Determines if a finding passed policy. Values are Yes or No.|
|Reopened Date|The date a finding was reopened. You can filter by Date, Month, Quarter, Time, Week, Year.|
|Reopened Finding \(Yes/No\)|Determines if the finding is a reopened finding.|
|Resolved Date|The date a finding was closed either through remediation, indicating the finding is no longer available in the results, or through a mitigation or resolution workflow that has been approved. You can filter by Date, Month, Quarter, Time, Week, Year.|
|Resolution and Mitigation Status|Provides the latest resolution workflow information for a finding. Values are Proposed, Accepted, Rejected, Closed through Scan, or No Resolution/Mitigation. A finding may be resolved through the mitigation workflow or through a scan.|
|Resolution and Mitigation Type|The type of resolution and mitigation.|
|Sandbox Name|The name of the sandbox scan in which the finding was found.|
|Scan Type|The type of scan that produced this finding. Values are Dynamic, Static or Manual Penetration Test.|
|Static Findings - General|Contains:  <ul><li>Attack Vector: the location of the flaw \(the sink\) discovered by Static Analysis in the function call, as seen in the Triage Flaws view of the Veracode Platform.</li><li>Class Path: the full name of the class path containing the finding, as seen in the Data Path details page in the Triage Flaws view of the Veracode Platform.</li><li>Filename/Class: the filename or class in which Veracode discovered the static finding. This value is combined with the line number in the Source field in the Triage Flaws view of the Veracode Platform.</li><li>Function Name: the name of the function in which Veracode discovered the static finding. This value replaces the filename in the Source field of the Triage Flaws view in the Veracode Platform when you compile and upload the modules without debug symbols.</li><li>Most Recent Line Number: in the most recent static scan, this value is the line number in which Veracode discovered this finding, or the relative location in the function that contains the finding.</li></ul>|
|Unique to a Single Context \(Yes/No\)|A finding is unique and has only been seen in a single sandbox or policy context within an application.|

<p><span style="font-size: medium;"> Findings Measures</span></p>

|Measure|Description|
|-------|-----------|
|Average Mitigation Process - Days|The average time that elapses between a finding being proposed to accepted.|
|Time to Resolve|The count of days that elapsed from the time a finding was opened or reopened to the earliest subsequent resolution. Resolution types are remediation or an accepted mitigation. This measure is calculated within a single sandbox. The Time To Resolve measure is always calculated on a per-context basis, meaning it is calculated for the time to resolve a finding within a single sandbox context, instead of the multiple instances of a finding across several sandboxes.|
|Total Mitigation Process Days|The total time that elapses between a finding being proposed to accepted.|
|Total Number of Flaws - Application|The total number of findings by application. You can use the dimensions below to filter on count of findings by severity.|
|Total Number of Sandbox Flaws|The total number of findings by sandbox. You can use the dimensions below to filter on count of findings by severity.|

<p><span style="font-size: medium;">SCA Dimensions</span></p>

|Dimension|Description|
|---------|-----------|
|Component ID|ID that Veracode gives to each unique component.|
|Component Name|Name of the library component, including version. For some languages, this name is the component filename.|
|Component Version|Version or extension of the component file.|
|Library|Name of the library component without version or extension.|
|Library Description|Description of the library. For Java, descriptions are sourced from Maven. For other languages, the description field is often blank.|
|Library Vendor|The organization of open-source projects that provides the library. For Java, vendor identities are sourced from Maven. For other languages, the vendor field is often blank.|

<p><span style="font-size: medium;">SCA Measures</span></p>

|Measure|Description|
|-------|-----------|
|Component Count|Count of unique component IDs.|

<p><span style="font-size: medium;">SCA License Dimensions</span></p>

|Dimension|Description|
|---------|-----------|
|License Name|Name of intellectual property licenses associated with a library.|
|License Risk|The risk ratings associated with the license \(Low, Medium, High\).|

<p><span style="font-size: medium;">SCA License Measures</span></p>

|Measure|Description|
|-------|-----------|
|License Count|Name of intellectual property licenses associated with a library.|
