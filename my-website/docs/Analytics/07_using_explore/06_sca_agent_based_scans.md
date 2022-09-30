---
"ft:title" : "SCA Agent-Based Scans Explore Data Dictionary"
"ft:prettyUrl" : "r_sca_agent_based_scans"
---

The following definitions describe the dimensions and measures used on the Software Composition Analysis \(SCA\) agent-based scans explore in Veracode Analytics.

<p><span style="font-size: medium;">SCA Agent-Based Scans Dimensions</span></p>

|Dimension|Description|
|---------|-----------|
|Workspace Issue Summary \> Vulnerability Issues|Count of issue IDs associated with vulnerabilities in the workspace.|
|Workspace Issue Summary \> Library Issues|Count of issue IDs associated with outdated libraries in the workspace.|
|Workspace Issue Summary \> License Issues|Count of issue IDs associated with software licenses in the workspace.|
|Workspace Issue Summary \> Total Issues|Count of total issues created, regardless of type, associated with the workspace.|
|Project Issue Summary \> Vulnerability Issues|Count of issue IDs associated with vulnerabilities in the project.|
|Project Issue Summary \> Library Issues|Count of issue IDs associated with outdated libraries in the project.|
|Project Issue Summary \> License Issues|Count of issue IDs associated with software licenses in the project.|
|Project Issue Summary \> Total Issues|Count of total issues created regardless of type associated with the projects.|
|Issues \> Vulnerabilities Issues|Total count of all vulnerability issues in the scan.|
|Issues \> License Issues|Count of all license issues in the scan.|
|Issues \> Outdated License Issues|Count of issue IDs associated with outdated libraries in the project.|
|Issues \> Total Issues|Total count of all issues in the scan, regardless of issue type.|
|Severity Count \> Severity High Count|Total count of all issues with High severity, regardless of issue type.|
|Severity Count \> Severity Medium Count|Total count of all issues with Medium severity, regardless of issue type.|
|Severity Count \> Severity Low Count|Total count of all issues with Low severity, regardless of issue type.|
|Latest Scanned Libraries \> Safe Version|Recommended safe version of this library.|
|Latest Scanned Libraries \> Severity High Count|The count of High severity vulnerabilities in this library. One vulnerability can have multiple issues.|
|Latest Scanned Libraries \> Severity Medium Count|The count of Medium severity vulnerabilities in this library. One vulnerability can have multiple issues.|
|Latest Scanned Libraries \> Severity Low Count|The count of Low severity vulnerabilities in this library. One vulnerability can have multiple issues.|


<p><span style="font-size: medium;">SCA Agent-Based Scans Measures</span></p>

|Measure|Description|
|-------|-----------|
|Workspaces \> Count|Count of unique workspaces.|
|Projects \> Count|Count of unique projects.|
|Projects \> Count of Projects Linked to Application Profiles|Count of projects linked to application profiles.|
|Scans \> Average Count of Vulnerability Issues per Scan|Average number of vulnerability issues per scan.|
|Scans \> Scan Count|Count of agent scans.|
|Scans \> Total Severity Count|This category comprises the measures of:<ul><li>Total Count of High Severity Issues</li><li>Total Count of Medium Severity Issues</li><li>Total Count of Low Severity Issues</li></ul>|
|Scans \> Total Vulnerability Issues|Total number of vulnerability issues.|
|Latest Scanned Libraries \> Count|Count of unique libraries found in the agent scans.|
|Latest Scanned Libraries \> Count with Safe Version|Count of unique libraries containing vulnerabilities found by agent scans for which Veracode has recommended the use of a safe library version.|
|Latest Scanned Libraries \> Count with Vulnerabilities|Count of unique libraries with vulnerabilities found by agent scans.|
|Licenses \> License Count|Count of unique licenses associated with a library.|
