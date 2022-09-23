---
"ft:title" : "Viewing Agent-Based Scan Results"
"ft:prettyUrl" : "Viewing_Agent_Based_Scan_Results"
---

After a Veracode Software Composition Analysis (SCA) agent-based scan completes, the bottom of the output in your terminal includes a URL for the Veracode Platform where you can view the scan results in more detail. For example:

```
Licenses
    Unique Library Licenses              3
    Libraries Using GPL                  0
    Libraries With No License            1
    
    Full Report Details                  https://sca.analysiscenter.veracode.com/teams/abzs0qx/scans/22679557
```

Veracode displays the scan results in these categories:

- [Issues](https://docs.veracode.com/r/c_sc_issues_overview): includes out-of-date libraries, license violations, and vulnerabilities associated with a specific version of a library within a repository.

- [Vulnerabilities](https://docs.veracode.com/r/c_sc_vulnerabilities): represents the set of unique vulnerabilities across a project. If multiple libraries in a given project are associated with the same vulnerability, the vulnerability only appears once in this list.

- [Libraries](https://docs.veracode.com/r/View_Library_Details): includes each open source library Veracode SCA has identified within a code project.

- [Licenses](https://docs.veracode.com/r/c_integrated_license_agent): displays the software license information associated with each open-source library in use.

After viewing the scan results, you can fix the vulnerabilities using the instructions in the Veracode Platform and [validate the fixes](https://docs.veracode.com/r/Validating_Fixed_Agent_Based_Scan_Results). 