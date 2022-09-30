---
"ft:title" : "Applications Explore Data Dictionary"
"ft:prettyUrl" : "r_applications_explore"
---

The following definitions describe the dimensions and measures used on the applications explore in Veracode Analytics.

<p><span style="font-size: medium;">Application Dimensions</span></p>

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
|Business Criticality|The business criticality of the application ranging from very high to very low.|
|Business Owner Email|The email address associated with the business owner of the application.|
|Business Owner Name|The first and last name of the user responsible for the application. Located from **Application** \> **Profile** \> **Organizational Information**.|
|Business Unit|The name of the business unit.|
|Created Date|The date the application was created.|
|Current Policy|The current policy associated with the application.|
|Current Policy Compliance|The application policy compliance based on the latest scan results.|
|Current Veracode Level|The Veracode Level achieved by an application, which allows a user at a glance to see the how their application measures against best practises. The Veracode Level is determined by the type of scans performed, severity of flaws detected, and/or the security score achieved. Values are 1,2,3,4,5, with 5 being the highest.|
|Current Veracode Level Without Mitigations|The current Veracode level achieved by an application not including mitigations.|
|Deployment Method|The type of deployment method for the application.|
|Dynamic Scan Due Date|The date by which a dynamic scan must run, per the application policy. If the date is in the past, the due date was missed.|
|Dynamic Scan Frequency|The dynamic scan frequency, such as weekly, monthly, quarterly, that the policy determines for the application.|
|Industry|The type of industry for which the application is used. Located from **Application** \> **Metadata** \> **Industry**.|
|First Published Date|Earliest date that the scan for the application was published.|
|Initial Published Date|The earliest date that a scan for the application was published.|
|Latest Language Scanned|Earliest date that the scan for the application was published.|
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
|Target Veracode Level|The application's Target Veracode Level.|
|Teams List|The list of teams and security lead teams who need access to the specific applications and scan results.|
|Web Application Flag|Determines if the application is a web application or not. This flag is set on the application metadata page.|

<p><span style="font-size: medium;">Application Measures</span></p>

|Measure|Description|
|-------|-----------|
|Application Scan Counts|The total count of applications scanned, rescanned, and not scanned in the past 90 and 365 days.|
|Applications with Consultations|The count of applications for which security consultations have been requested.|
|Count|The count of distinct application IDs|
|Percentage of Applications with Consultation Requests|The percentage of applications for which a consultation call was requested.|

<p><span style="font-size: medium;">Applications Policy Compliance History Dimensions</span></p>

|Dimension|Description|
|---------|-----------|
|Calendar Date|The calendar date, month, quarter, week, and year.|
|Days Since Last Scan|Days from last scan to calendar date.|
|Policy Compliance Status|Application policy compliance status: Calculating..., Conditional Pass, Did Not Pass, Pass, or Not Assessed.|
|Published Date|The published date of the last scan.|

<p><span style="font-size: medium;">Applications Policy Compliance History Measures</span></p>

|Measure|Description|
|-------|-----------|
|Days in Compliance|Number of days that an application is in compliance.|
|Days Since Most Recent Scan|Number of days from most recent published date to current day.|
|Months in Compliance|Number of months that an application is in compliance.|

<p><span style="font-size: medium;">Security Consultation Dimensions</span></p>

|Dimension|Description|
|---------|-----------|
|First Name|The first name of the user who requested a consultation.|
|Last Name|The last name of the user who requested a consultation.|
|Request Date|The date the consultation was requested.|

<p><span style="font-size: medium;">Security Consultation Measures</span></p>

|Measure|Description|
|-------|-----------|
|Count|The count of consultations requested for the application.|
