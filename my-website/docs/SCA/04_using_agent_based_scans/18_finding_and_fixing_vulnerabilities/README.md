---
"author": ["Kevin McCarthy"]
"ft:lang": "en-US"
"ft:title" : "Finding and Fixing Vulnerabilities"
"ft:prettyUrl" : "Finding_and_Fixing_Vulnerabilities"
"media_dir": "images/"
---

You can run Veracode Software Composition Analysis (SCA) agent-based scans using the command-line interface or the CI integrations to find vulnerabilities in your repositories.

**Fixing Direct Vulnerabilities**

When your configuration file references a library, Veracode SCA considers the library a direct dependency. You can identify the vulnerabilities in direct dependencies from the Vulnerability issues list on the [Issues page](https://docs.veracode.com/r/View_SCA_Issue_Details) of your workspace. From this list, click the issue ID for details about the vulnerability, including instructions for fixing it.

Usually, the best way to fix a vulnerability in a direct dependency is to update the version in use to the version that Veracode SCA recommends. Some libraries include vulnerabilities that are not yet fixed. Therefore, the agent-based scan cannot always provide reliable update versions. In these cases, Veracode recommends you either create a pull request to the unfixed library or use a different library in your code.

**Fixing Transitive Vulnerabilities**

Direct dependencies often depend on other libraries known as transitive dependencies. Vulnerabilities in transitive dependencies are common because often, without Veracode SCA, the developer does not realize that the library they are adding to their project depends on a vulnerable library. Fixing vulnerabilities in transitive dependencies can be difficult because the direct dependency may require a specific version rather than a version range. You can find details on these issues by [viewing your issues](https://docs.veracode.com/r/View_SCA_Issue_Details) and leaving the **Direct Libraries** checkbox cleared. Transitive vulnerabilities are indicated in the Library column by the smaller arrow next to the library name. Selecting the issue number to view the issue details additionally provides the type of library; either direct or transitive.

**Fixing Vulnerability Issues**

When reviewing the scan results, [view the issue details](https://docs.veracode.com/r/View_SCA_Issue_Details) and follow the fix instructions provided in the Veracode Platform.

**Fixing Vulnerable Methods**

Within the issues across a given project, you can filter your list to display only vulnerabilities where a vulnerable method is in use by clicking the **Vulnerable methods** checkbox above your issues list. If a vulnerable method is in use, as indicated by the warning icon, it means that the specific piece of code which causes a given library to be vulnerable is being used by the code project it is found in. This is a crucial distinction from other vulnerabilities where you might not be using the vulnerable part of the code. In those cases, the vulnerability is more a matter of code hygiene where you would want to prevent developers from using this library in the future.

Within the issue details for a vulnerability where a vulnerable method in use, Veracode SCA provides the full call path for every instance of a given vulnerable method. This helps users evaluate the importance of the vulnerability based on the usage within their project and alter their actual code rather than fixing the vulnerability by updating the library.
