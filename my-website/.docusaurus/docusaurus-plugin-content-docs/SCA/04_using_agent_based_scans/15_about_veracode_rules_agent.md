---
"ft:title" : "About Veracode Default Rules for Agent-Based Scanning"
"ft:prettyUrl" : "About_Veracode_Default_Rules_for_Agent_Based_Scanning"
---

If you do not [customize the workspace rules](https://docs.veracode.com/r/c_sc_policies_custom), Veracode SCA applies the default rules.

Using the Veracode default rules, issues get created when:

-   A vulnerability exists in either direct or transitive libraries.
-   A direct library is out of date.
-   A direct library contains a high-risk license.

Additional controls that you can use with custom rules include:

-   A library has multiple licenses.
-   A library has no license.

The issue severities are set as follows:

-   Vulnerability issues, direct or transitive: the CVSS score of the vulnerability 
-   Outdated library issues, direct: 3.0
