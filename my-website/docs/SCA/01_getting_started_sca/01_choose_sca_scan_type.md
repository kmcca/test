---
"ft:title" : "Choosing the SCA Scan Type for Your Use Case"
"ft:prettyUrl" : "Choosing_the_SCA_Scan_Type_for_Your_Use_Case"
---

The Veracode Software Composition Analysis (SCA) scan types provide distinct benefits depending on how you use them. This section provides some guidelines to help you determine which scan type is best for your use cases.

<p><span style="font-size: medium;">Agent-Based Scans</span></p>

**Frequent Scanning Early in Development Pipeline**

Agent-based scans execute from a command line and you can incorporate them in any continuous integration pipeline to prevent developers from introducing new vulnerabilities. Depending on the CI tool, they can execute in parallel with other security testing methods for faster throughput.

**Prioritizing and Fixing Findings**

Some functionality for prioritizing and fixing findings is only available through agent-based scans. These features include vulnerable method detection, automated pull requests for upgrading libraries, and dependency graphs with transitive libraries and vulnerabilities.

**Docker Container Scanning**

You can use agent-based scanning to scan Docker containers or images. Veracode recommends scanning your repositories before including them in a Docker image so that fixes to the underlying code are prioritized first.

<p><span style="font-size: medium;">Upload Scans</span></p>

**Getting an Overview of Your Open-Source Risk**

If you use Veracode Static Analysis, Veracode automatically performs Veracode SCA upload scans as part of your static policy or sandbox scans. The upload scan provides SCA findings for the application without needing to configure additional projects or integrations.

**Assessing Compliance Prior to Release**

As you prepare to release an application, performing a Veracode SCA upload scan allows you to use the robust mitigation, policy evaluation, analytics, and reporting features available in the Veracode Platform.

