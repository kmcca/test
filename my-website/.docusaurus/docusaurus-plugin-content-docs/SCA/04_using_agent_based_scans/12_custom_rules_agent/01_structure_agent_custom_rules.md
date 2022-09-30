---
"ft:title" : "Structure of Controls in Agent-Based Scanning Rules"
"ft:prettyUrl" : "Structure_of_Controls_in_Agent_Based_Scanning_Rules"
---

There is one rule for each Veracode Software Composition Analysis (SCA) agent-based scanning workspace. Every project in a workspace inherits the workspace rules.

Each rule consists of one or more controls. A control checks if the project meets specific parameters.

Each control has this structure:

-   [Properties](https://docs.veracode.com/r/Properties_of_Controls_in_Agent_Based_Scanning_Rules)
    -   Control Name
    -   Severity
    -   Level
-   [Condition](https://docs.veracode.com/r/Conditions_of_Controls_in_Agent_Based_Scanning_Rules)
    -   Resource
    -   Matcher
    -   Descriptor
        -   Parameters for vulnerability descriptors
            -   Severity
                -   Check for a vulnerability of high, medium, or low risk. The level of risk that a vulnerability has is determined by its CVSS score. Veracode SCA supports the use of vulnerability severities based off of either CVSS v2 or CVSS v3 scores.
            -   Vulnerable Method
            -   Override Control Severity with CVSS Score
        -   Parameters for license descriptor
            -   Kind
                -   Check for specific licenses by name or select a risk rating.
            -   Including
                -   If you select **License by name**, select the licenses to include in the rule.
            -   Excluding
                -   If you select a risk rating, select the licenses to exclude from the rule.
-   [Action](https://docs.veracode.com/r/Actions_of_Controls_in_Agent_Based_Scanning_Rules)
    -   Create Issue