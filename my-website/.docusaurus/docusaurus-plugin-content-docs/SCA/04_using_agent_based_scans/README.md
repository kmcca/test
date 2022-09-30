---
"author": ["Kevin McCarthy"]
"ft:lang": "en-US"
"ft:title" : "Using Agent-Based Scans"
"ft:prettyUrl" : "c_sc_what_is"
"media_dir": "images/"
---

<p><span style="font-size: medium;">What Agent-Based Scanning Does</span></p>

Veracode SCA agent-Based Scanning provides a way to easily check the open-source libraries used in your code repositories for vulnerabilities. By using the native build and package managers that manage your open-source libraries, agent-based scanning can accurately identify vulnerabilities in your open-source code and provide fix information for them.

<p><span style="font-size: medium;">How Agent-Based Scanning Does It</span></p>

Developers can use agent-based scanning on their desktop or with their continuous integration server. The Veracode SCA agent scans the application by building it with its native build or package manager and creating a call graph of the entire application. This call graph shows line-by-line details of code that is affected by a vulnerability, including all direct and transitive dependencies of the code. When the agent finds a vulnerability, Veracode SCA:

- Determines whether the application uses the vulnerable part of the component
- Identifies the vulnerable methods used in the library
- Supplies full stack traces back to the developer about which line of code is calling the vulnerable method

You can find details on this and what we collect from your environment during the scanning process in [Understanding Agent-Based Scanning Evidence Collection](https://docs.veracode.com/r/c_sc_evidence).

<p><span style="font-size: medium;">What Agent-Based Scanning Knows</span></p>

When an agent-based scan identifies the direct and transitive open-source libraries in your code, it provides substantial information including, but not limited to:

-   Vulnerability write-ups
-   Vulnerability exploit code
-   Fixed library versions
-   Outdated libraries in use
-   Indication of whether the vulnerable part of the library is being used, and where it is being used in your code

Veracode SCA provides the above information about the vulnerabilities in the Veracode Vulnerability Database, in addition to discovering vulnerabilities in a variety of ways. If you want to know more about the vulnerability discovery methods, read about [the science behind it](https://www.veracode.com/products/software-composition-analysis).

<p><span style="font-size: medium;">The Agent-Based Scanning Research Process</span></p>

Veracode SCA agent-based scanning uses multiple methods to identify open-source libraries, based on accuracy and availability for each language and package manager. These methods include build coordinates, SHA-2 file hashes, proprietary byte-code hashes, and filenames. For each identified library, Veracode SCA reports the vulnerabilities based on its vulnerability database. Veracode builds the database using machine learning and natural language processing over a variety of public sources that contain information about open-source libraries. These sources include NVD, GitHub commits, GitHub issues, Jira boards, Bugzilla, mailing lists, vendor advisory lists, and other security-relevant websites and discussion boards. Due to this unique approach, Veracode SCA can identify vulnerabilities that the NVD has not yet reported in addition to the reported vulnerabilities. Veracode goes through every item flagged by the machine learning model, reviews the code where the potential vulnerability was discovered, and confirms if it is a vulnerability. Veracode SCA then adds a CVSS score, descriptions of the vulnerability, and remediation advice to the database.

For more information on how to get started with agent-based scanning, see [Understanding Deployment Options for Agent-Based Scanning](https://docs.veracode.com/r/Understanding_Deployment_Options_for_Agent_Based_Scanning).
