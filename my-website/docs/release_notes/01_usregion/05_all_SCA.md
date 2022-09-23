---
"ft:title" : "Veracode Software Composition Analysis Release Notes"
"ft:prettyUrl" : "c_all_sca"
---
## September 15, 2022

### SCA Support for Go Aliases

Veracode Software Composition Analysis (SCA) now supports aliases in Go projects. This support includes agent-based and upload scans.

### Vulnerable Method Support for Java 17

Veracode SCA agent-based scanning now [supports vulnerable method analysis for Java 17](https://docs.veracode.com/r/c_sc_java).

## August 22, 2022

### Set SCM URI as Project Name

[You can now set the source code management (SCM) URI as your project name](https://docs.veracode.com/r/Veracode_SCA_Agent_Commands) using the `--uri-as-name` option in your Veracode SCA agent-based scans.


## July 22, 2022

### SBOM API Support for SCA Agent-Based Scans Linked to Application Profiles

[You can now use the Veracode SCA Agent REST API to create a software bill of materials](https://docs.veracode.com/r/Generate_a_Software_Bill_of_Materials_SBOM_for_Upload_Scans_with_the_REST_API) \(SBOM\) from the results of your Veracode SCA agent-based scans that you have linked to an application profile. The API generates an SBOM in CycloneDX JSON format.


## June 6, 2022

### Generate SBOMs for SCA Agent-Based Scans with the REST API

[You can now use the Veracode SCA Agent REST API to create a software bill of materials](https://docs.veracode.com/r/Generate_a_Software_Bill_of_Materials_SBOM_for_Agent_Based_Scans_with_the_REST_API) \(SBOM\) from the results of your Veracode SCA agent-based scans. The API generates an SBOM in CycloneDX JSON format.

## May 9, 2022

### SBOM API Support for Promoted Sandbox Scans

[You can now generate a software bill of materials](https://docs.veracode.com/r/Generate_a_Software_Bill_of_Materials_SBOM_for_Upload_Scans_with_the_REST_API) \(SBOM\) for Veracode SCA upload scans that have been promoted from sandbox to policy scans. The Veracode SCA Agent REST API includes promoted sandbox scan results when it returns a CycloneDX SBOM for an application.

### SCA Upload and Scan Table Update

[Veracode has removed the Number of Known Vulnerabilities](https://docs.veracode.com/r/c_about_SCA) by Severity column from the Applications table on the Upload and Scan page in the Veracode Platform. This update significantly reduces load times for the page. You can still view the number of known vulnerabilities by severity for each application in the application profile.

## April 26, 2022

### Generate SBOMs for SCA Upload Scans with the REST API

[You can now use the Veracode SCA Agent REST API to create a software bill of materials](https://docs.veracode.com/r/Generate_a_Software_Bill_of_Materials_SBOM_for_Upload_Scans_with_the_REST_API) \(SBOM\) from the results of your Veracode SCA upload scans. The API generates an SBOM in CycloneDX JSON format.

## January 20, 2022

### JSON Output for Agent-Based Scans Includes CVSS v3 Score

Veracode Software Composition Analysis \(SCA\) now provides the CVSS version 3 score in the JSON CLI output of your agent-based scan results. To use this feature, you must [upgrade your Veracode SCA agent](https://docs.veracode.com/r/c_sc_agent_management) to version 3.7.77 or later.
