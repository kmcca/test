---
"ft:title" : "Properties of Controls in Agent-Based Scanning Rules"
"ft:prettyUrl" : "Properties_of_Controls_in_Agent_Based_Scanning_Rules"
---

The properties of a control are basic fields that identify a control and its severity.

-   Control Name: a string that helps you quickly identify the control
-   Severity: a number from 0.1 \(lowest\) to 10.0 \(highest\) that lets you determine how serious a control violation is considered in this rule. If you choose to create an issue when a control is violated, the severity of the failed control defines the severity of the issue. Severities appear on lists of issues to make them easier to rank.
    -   Severity is different from a vulnerability risk \(CVSS\) score. However, if you wish to use the CVSS score as the severity for vulnerability issues, you can set that option. See [`Descriptor`](https://docs.veracode.com/r/Conditions_of_Controls_in_Agent_Based_Scanning_Rules).
-   Level: there are two levels
    -   Error: A level of `error` means that a non-zero will be returned, which can be used \(for example, by CI build scripts\) to break a build. The exact value of the exit code depends on the severity of all controls which were violated. See note below for more details.
    -   Warning: A level of `warning` will return an exit code of `0` which can be used to allow the build to continue.
    -   To determine the exit code for a scan, enter `echo $?` in the CLI after the scan concludes. If `0` is returned, that means no controls of level `error` were violated. If a number greater than `0` is returned, that means a control of level `error` was violated, and the number reflects the highest-severity control that was violated, rounded to the nearest integer.
