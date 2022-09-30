---
"ft:title" : "Veracode SCA Best Practices for Reviewing Compliance for Periodic Releases"
"ft:prettyUrl" : "Veracode_SCA_Best_Practices_for_Reviewing_Compliance_for_Periodic_Releases"
---

Veracode recommends that you follow these best practices to effectively use Veracode Software Composition Analysis to review the security policy compliance of your code before releasing it to production.

## Perform a Veracode SCA Upload Scan as Part of a Static Analysis

Veracode analyzes your own code and third-party code in a single static scan. See [Using Veracode SCA Upload Scans](https://docs.veracode.com/r/c_about_SCA) for more information.

## Link Your Projects to an Application Profile

You can [link the projects](https://docs.veracode.com/r/Link_SCA_Projects_to_Applications) you create for Veracode SCA agent-based scans to your Veracode application profiles to enable a unified view of your results for all Veracode scans. You must perform an upload scan to allow Veracode to evaluate the policy status of third-party libraries included in an application profile through a linked project.

## Use the Findings REST API to View Scan Results

To access details about your Veracode SCA findings without logging in to the Veracode Platform, use the [Findings REST API](https://docs.veracode.com/r/c_findings_v2_intro).

## Include SCA Rules in Your Application Security Policies

You can [add Veracode SCA requirements in your policies](https://docs.veracode.com/r/t_sca_policy) to restrict the usage of vulnerable third-party components. You can also enforce that the application must meet minimum Veracode Levels, CVSS scores, and grace period requirements to pass policy.

## Search the Veracode Vulnerability Database Before Using a Library

The [Veracode Vulnerability Database](https://docs.veracode.com/r/Explore_the_Veracode_Vulnerability_Database) provides extensive details of the security impact of including open-source libraries in your code.


