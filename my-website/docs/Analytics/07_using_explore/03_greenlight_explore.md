---
"ft:title" : "IDE and Pipeline Scans Explore Data Dictionary"
"ft:prettyUrl" : "r_greenlight_explore"
---

These definitions describe the dimensions and measures used on the IDE and Pipeline Scans explore in Veracode Analytics.

<p><span style="font-size: medium;">IDE and Pipeline Scans Dimensions</span></p>

|Dimension|Description|
|---------|-----------|
|Account Name|The account name provided in the Veracode Platform.|
|IDE|The development environment in which the scan ran.|
|IDE Version|The version of the IDE where the scan started. If empty, it was an API scan.|
|OS|The operating system of the IDE that the user is using.|
|Plugin Version|The version of the Veracode IDE scan plugin or Pipeline Scan JAR file.|
|Project Name|Optional field for the name of the project containing the scanned files, where applicable.|
|Project Reference|Optional field for the source control reference, revision, or branch of the development project.|
|Project URI|Optional field for the URI of the development project.|
|Results Size \(MB\)|The size of the JSON results file \(MB\).|
|Scan End Date|The date and time the scan completed. Possible values are date, month, month name, quarter, time, week, and year.|
|Scan Language|The language of the files to be scanned.|
|Scan Start Date|The date and time the scan started. Possible values are date, month, month name, quarter, time, week, and year.|
|Scan Status|The status of the scan.|
|Scan Type|How the scan was submitted. Active = User-Initiated IDE Scan, Passive = Auto-Initiated IDE Scan, API = Pipeline Scan API, DevOps = Pipeline Scan Pre-Release, Pipeline = Pipeline Scan.|
|User Email|The email address of the user who submitted the scan.|
|User Timeout|User-defined value for the number of seconds to wait before a scan times out. This field only populates if you provide a value.|

<p><span style="font-size: medium;">IDE and Pipeline Scans Measures</span></p>

|Measure|Description|
|-------|-----------|
|Scan Counts|The total count of unique scans.|
|User Counts|The count of distinct users.|
