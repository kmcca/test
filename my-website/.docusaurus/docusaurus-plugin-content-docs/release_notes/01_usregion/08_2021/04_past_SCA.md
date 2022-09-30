---
"ft:title" : "Veracode Software Composition Analysis 2021 Release Notes"
"ft:prettyUrl" : "c_past_SCA"
---
View the list below for highlights of previous releases.

## November 12, 2021

### SCA Component License Rules in Policies

You can now apply these configurations to the component license rules in your application security polices:

-   Allow or disallow non-OSS licenses
-   Specify how to classify components with multiple licenses
-   Add a blocklist or allowlist of specific licenses

If an application does not pass the component license rule, the Veracode Platform displays the requirement that caused the component to violate policy.

## October 28, 2021

### Agent-Based Scan Project Table Displays Multiple Languages

- The Project List table on the Agent-Based Scan page of the Veracode Platform now indicates if projects use multiple programming languages or operating systems. The Language/OS column displays the full list of languages and operating systems in use in the project repository.

## October 7, 2021 {#oct7 .section}

### Extended Support for Maven Libraries
- Veracode Software Composition Analysis \(SCA\) has improved the Veracode Vulnerability Database to include library support for Google Maven, Spring Maven, and Cloudera Maven.

## September 23, 2021

### New API Endpoint for Listing Libraries by Project

- The Veracode SCA Agent REST API includes a new endpoint for querying libraries by the project ID. This endpoint enables you to view libraries in a specific project in an agent-based scan workspace.

## September 22, 2021

### Decimal Values for CVSS Scores in Policy Rules

- Veracode security policies now support using values that include decimals when specifying the allowable CVSS score for vulnerabilities in Veracode Software Composition Analysis \(SCA\) scans. For example, you can set policies to not allow vulnerabilities with a CVSS score of 6.1 or above.

## July 15, 2021

### My Workspace

- My Workspace provides developers a personal testing space for up to three agent-based scan projects without requiring administrative setup or permission configuration. If you currently use Software Composition Analysis \(SCA\) upload and scan, Veracode recommends using My Workspace to explore the additional features available with agent-based scanning, such as dependency mapping, vulnerable methods, and automated pull requests.

- My Workspace is available for all Veracode SCA users.

## June 21, 2021

### New Grace Periods for SCA Policy Rules

- Veracode supports configuring new grace periods in policy rules for Veracode Software Composition Analysis \(SCA\) scans. The new grace periods are independent of the grace periods you can configure for Veracode Static Analysis and Dynamic Analysis. You can use this feature to manage the different compliance needs of first-party code and open-source libraries in your security program within the same security policy.

## April 6, 2021

### License Risk Mitigations

- License risk mitigations are now available for Veracode Software Composition Analysis \(SCA\) upload scans. You can use a new set of mitigation actions relevant to licenses to mitigate license risk findings based on your assessment of the license in use.

### Improved Visibility into SCA Upload Scans

- You can now view the status of initialized, in progress, and failed Software Composition Analysis upload scans in the Veracode Platform. If a scan fails, you can restart the SCA scan without restarting the associated Static Analysis.

## March 26, 2021

### Unified Documentation for Veracode SCA

- All Help Center documentation for Veracode Software Composition Analysis \(SCA\), including agent-based scanning and static upload scanning, now appears in a single Veracode Software Composition Analysis section. Additionally, new content is available with information about getting started with Veracode SCA.

- If you bookmarked any URLs for Veracode SCA Help Center content, this update may impact them.

## Jan 21, 2021

### New API Endpoint for Listing Issues by Project

- The Veracode SCA Agent REST API includes a new endpoint for querying issues by the project ID. This endpoint enables you to view issues specific to a project in an agent-based scan workspace. If the project is a container, the API also lists all issues linked to projects inside the container.
