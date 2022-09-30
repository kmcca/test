---
"ft:title" : "Conditions of Controls in Agent-Based Scanning Rules"
"ft:prettyUrl" : "Conditions_of_Controls_in_Agent_Based_Scanning_Rules"
---

A control condition is a rule to enforce, such as `library should not contain high-risk vulnerabilities`.

A condition is made up of three parts:

-   Resource: the entity which is being inspected for certain conditions. Currently, Veracode SCA agent-based scanning can inspect libraries with four dependency relationships
    -   Any: a library which is either referenced in your configuration file or used by a direct dependency. Encompasses all your libraries.
    -   Direct: a library which is specifically referenced in your configuration file.
    -   Transitive: other libraries which are used by the direct dependencies.
    -   Both: a library which is both referenced in your configuration file and used by a direct dependency.
-   Matcher: a comparison operator that defines how the resource is inspected. The values are `should not contain` and `should be`.
-   Descriptor: the descriptor and its parameters define the checks performed against the resource. The current descriptors available are vulnerability, license, and library.
    -   Veracode SCA agent-based scanning can check that:
        -   A library should not contain vulnerabilities with certain parameters. This check uses the `should not contain` matcher.
        -   A library should not contain licenses with certain parameters. This check uses the `should not contain` matcher.
        -   A library should be the latest version. This check uses the `should be` matcher.
    -   Parameters for vulnerability descriptor
        -   Severity: check for a vulnerability of high, medium, or low risk.
        -   Vulnerable Method: check for vulnerabilities where vulnerable methods were or were not found.
        -   Override Control Severity with CVSS Score: for vulnerability issues only, set the severity of the violated control to the CVSS score of that vulnerability instead of manually assigning a severity. See [Properties of a Control](https://docs.veracode.com/r/Properties_of_Controls_in_Agent_Based_Scanning_Rules).
    -   Parameters for license descriptor
        -   Kind: check for specific licenses by name or check for licenses with a selected [risk rating](https://docs.veracode.com/r/c_integrated_license_agent). You can exclude specific licenses by name from the risk rating parameter.
