---
"ft:title" : "SCA Agent-Based Issues Explore Data Dictionary"
"ft:prettyUrl" : "r_sca_agent_based_issues"
---

The following definitions describe the dimensions and measures used on the Software Composition Analysis \(SCA\) agent-based issues explore in Veracode Analytics.

<p><span style="font-size: medium;">SCA Agent-Based Issues Dimensions</span></p>

|Dimension|Description|
|---------|-----------|
|Workspaces \> Creation Date|The date the workspace was created. Possible values include date, month, quarter, time, week, and year.|
|Workspaces \> Most Recent Repository Scan ID|The ID of the most recent scan in the workspace.|
|Workspaces \> Most Recent Scan Date|The date of the most recent scan in the workspace.|
|Workspaces \> Name|Name of the workspace.|
|Workspaces \> Total Projects|Count of all the projects within the workspace.|
|Workspaces \> Workspace Issue Summary|Consists of:<ul><li>Vulnerability Issues: count of issue IDs associated with vulnerabilities in the workspace.</li><li>Library Issues: count of issue IDs associated with outdated libraries in the workspace.</li><li>License Issues: count of issue IDs associated with software licenses in the workspace.</li><li>Total Issues: count of total issues created, regardless of type, associated with the workspace.</li></ul>|
|Workspaces \> Team Name|Name of workspace team.|
|Projects \> Client Repository ID|Alternate unique project identifier.|
|Projects \> Creation Date|The date the project was created. Possible values include date, month, quarter, time, week, and year.|
|Projects \> Default Branch|The name of the default branch in the project, if configured.|
|Projects \> Display Name|You can optionally set a user-friendly display name for the project which, if present, overrides the name in the UI.|
|Projects \> Host|The generic term for the host of the repo. For example, in `https://github.com/srcclr/example-java-maven` the path is `srcclr` and the name is `example-java-maven`. Host + path + name + subpath uniquely identify a repository in a workspace.|
|Projects \> Languages|The mix of software languages within the project.|
|Projects \> Latest Repository Scan ID|The scan ID for the most recent scan within the project.|
|Projects \> Linked Application ID|The ID for the application profile linked to the project.|
|Projects \> Linked Application|The name of the linked application.|
|Projects \> Most Recent Scan Date|The date of the most recent scan in the project. Possible values include date, month, quarter, time, week, and year.|
|Projects \> Name|The generic term for grouping within a repository. For example, in `https://github.com/srcclr/example-java-maven` the path is `srcclr` and the name is `example-java-maven`. Host + path + name + subpath.|
|Projects \> Path|The generic term for either the Git repository user or organization \(might be called something else in Bitbucket-style repositories\). For example, in `https://github.com/srcclr/example-java-maven` the path is `srcclr` and the name is `example-java-maven`. Host + path + name + subpath uniquely identifies a repository in a workspace.|
|Projects \> Project Issue Summary|Consists of:<ul><li>Vulnerability Issues: count of issue IDs associated with vulnerabilities in the project.</li><li>Library Issues: count of issue IDs associated with outdated libraries in the project.</li><li>License Issues: count of issue IDs associated with software licenses in the project.</li><li>Total Issues: count of total issues created, regardless of type, associated with the project.</li><ul>|
|Projects \> Project Name|The name of the project within the workspace.|
|Projects \> Subpath|The generic term for grouping within a repository. For example, in `https://github.com/srcclr/example-java-maven` the path is `srcclr` and the name is `example-java-maven`. Host + path + name + subpath.|
|Projects \> Type|The type of project, application, repository, or container.|
|Projects \> Web URL|The scanned repository URL \(for example, the cloned GitHub URL\).|
|Issues \> Branch|The branch where the issue was discovered.|
|Issues \> Commit Hash|The commit hash where the issue was discovered.|
|Issues \> Creation Date|The date the issue was created. Possible values are date, month, quarter, time, week, and year.|
|Issues \> CVE ID|The CVE \(Common Vulnerabilities and Exposures\) of the issue, if there is one. Applied to vulnerability type issues only.|
|Issues \> CWE ID|The CWE \(Common Weakness Enumeration\) for the issue. Applied to vulnerability type issues only.|
|Issues \> Issue Fix Date|The date the issue was fixed. Possible values are date, month, quarter, time, week, and year.|
|Issues \> Delta Score|The Update Risk Score for an out-of-date library issue only.|
|Issues \> Dependency Mode|Tracks how the given library that caused the issue is pulled into the user repository: direct, transitive, or both.|
|Issues \> Direct Library or Transitive Library|Does the issue arise from a direct library or a transitive library?|
|Issues \> Duration to Resolve|The number of days from opening to closing of the issue, regardless of issue type.|
|Issues \> Fixed Repository Scan ID|The scan that marked the issue as fixed, if any.|
|Issues \> Has Vulnerable Methods \(Yes/No\)|Does the project use the vulnerable part of the library associated with the issue? Yes or no.|
|Issues \> Ignored \(Yes/No\)|Indicates if the user ignored the issue.|
|Issues \> Ignored by Username|The username of the user who ignored the issue.|
|Issues \> Issue Ignored Date|The date the user ignored the issue. Possible values are date, week, month, quarter, and year.|
|Issues \> Issue ID|The unique identifier for this issue.|
|Issues \> Issue Name|The name of the issue.|
|Issues \> Issue Type|The type of issue: license, outdated library, or vulnerability.|
|Issues \> Last Repository Scan ID|The most recent scan associated with this issue.|
|Issues \> Most Recent Version|The most current version of the library.|
|Issues \> Name Tag|The tag where the issue was discovered.|
|Issues \> Opened Repository Scan ID|The scan ID that created the issue.|
|Issues \> Policy ID|The ID for the policy or rules that created or updated the issue at scan time.|
|Issues \> Policy Revision|The version of the policy, if any, that created or updated the issue at scan time.|
|Issues \> Repository ID|The project ID that contains the issue.|
|Issues \> Severity|The numerical ranking of the severity \(1 = Low, 10 = High\).|
|Issues \> Severity Level|The severity of the issue: High, Medium, or Low.|
|Issues \> Status|The status of the issue: Open or Fixed.|
|Libraries \> Author|The author of the library in use.|
|Libraries \> Author URL|The author URL of the library in use.|
|Libraries \> Bug Tracker URL|The URL for viewing bugs found with the library.|
|Libraries \> Code Repository URL|The URL for the code repository of the library.|
|Libraries \> Coordinate Type|Where the library is located in the open-source community, such as Maven, NPM, Nuget.|
|Libraries \> Current Version|The version of the library in use.|
|Libraries \> Current Version Release Date|The date the library found in the scan was first released publicly. Possible values are date, month, quarter, time, week, and year.|
|Libraries \> Description|The description of the library from the maintainer.|
|Libraries \> Language Type|The high-level language classification of the library.|
|Libraries \> Library Name|The name of the library component.|
|Libraries \> Most Recent Release Date|The date of the most recent update to the library. Possible values are date, month, quarter, time, week, and year.|
|Libraries \> Most Recent Version|The most recent version of the library to be released.|
|Libraries \> Updated Date|The date the library was updated. Possible values are date, month, quarter, time, week, and year.|
|CVE \> Access Complexity|According to the CVSS standard, this metric measures the complexity of the attack required to exploit the vulnerability after an attacker has gained access to the target system.|
|CVE \> Access Vector|According to the CVSS standard, this metric represents how the vulnerability is exploited.|
|CVE \> Authentication|According to the CVSS standard, this metric measures the number of times an attacker must authenticate to a target to be able to exploit a vulnerability.|
|CVE \> Availability Impact|According to the CVSS standard, this metric measures the impact a successfully exploited vulnerability will have on the accessibility of information resources.|
|CVE \> Confidentiality Impact|From the CVSS standard, this metric measures the impact on confidentiality of a successfully exploited vulnerability.|
|CVE \> CVE ID|The ID established by MITRE of publicly known cybersecurity vulnerabilities.|
|CVE \> CVSSv2 Score|The numerical score produced by Version 2.0 of the Common Vulnerability Scoring System \(CVSS\) that reflects the severity of the principal characteristics of a vulnerability.|
|CVE \> CVSSv3 Score|The numerical score produced by Version 3.0 of the Common Vulnerability Scoring System \(CVSS\) that reflects the severity of the principal characteristics of a vulnerability.|
|CVE \> Integrity Impact|According to the CVSS standard, this value is the measure of the impact to the trustworthiness and guaranteed veracity of information by a successfully exploited vulnerability.|
|CVE \> Published Date|Date the vulnerability was published to the National Vulnerability Database. Possible values are date, month, quarter, time, week, and year.|
|CVE \> SRCCLR ID|The ID Veracode provides in its proprietary database of vulnerabilities found in open-source libraries.|
|CVE \> Summary|The description and details of the vulnerability.|
|CVE \> Vulnerability Title|A short summary of the vulnerability.|
|CWE \> Category Name|Category of the Common Weakness Enumeration \(CWE\) found after the application was scanned.|
|CWE \> Description|The description of the CWE.|
|CWE \> Flaw Name|The name of the Common Weakness Enumeration \(CWE\) found after the application was scanned.|
|CWE \> ID|The ID of the Common Weakness Enumeration \(CWE\) found after the application was scanned. Most useful in combination with CWE Name.|
|CWE \> Name|The CWE ID and the name of the Common Weakness Enumeration \(CWE\) found after the application was scanned.|
|CWE \> OWASP 2013|The top ten vulnerabilities identified by the Open Web Application Security Project \(OWASP\) in 2013. The dimension is infrequently used.|
|CWE \> OWASP 2017|The top ten vulnerabilities identified by the Open Web Application Security Project \(OWASP\) in 2017.|
|CWE \> Remediation Effort|The level of effort it takes to remediate the finding.|
|CWE \> SANS 25|The list of the most significant errors that can lead to serious software vulnerabilities, according to the SANS top 25 list.|
|CWE \> Severity|The severity of the finding.|
|Licenses \> Full Text|The full text of the license associated with the library.|
|Licenses \> License Name|The name of the license associated with the library.|
|Licenses \> OSI-Approved|Whether or not the Open Source Initiative \(OSI\) has approved the license. To be approved, a license must go through the Open Source Initiative license review process.|
|Licenses \> Risk|The risk associated with the use of this license.|
|Licenses \> SPDX ID|The classification for the license from the Software Package Data Exchange \(SPDX\) license list \(`https://spdx.org/licenses/`\).|
|Licenses \> Version|License version.|

<p><span style="font-size: medium;">SCA Agent-Based Scans Measures</span></p>

|Measure|Description|
|-------|-----------|
|Workspaces \> Count|Count of unique workspaces.|
|Projects \> Count|Count of unique projects.|
|Projects \> Count of Projects Linked to Application Profiles|Count of projects linked to application profiles.|
|Issues \> Issue Count|Count of issues, regardless of type.|
|Issues \> Libraries with Issue|Number of unique libraries with at least one issue.|
|Issues \> Time to Resolve|The average count of days from the opening to the closing of the issue, regardless of issue type.|
|Issues \> Vulnerability Count|Count of vulnerability issues.|
|Libraries \> Count|Count of distinct libraries.|
|CWE \> Count|Count of CWE vulnerabilities.|
|Licenses \> License Count|Count of unique licenses associated with a library.|
