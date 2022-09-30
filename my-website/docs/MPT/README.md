---
"author": ["Scott Jordan"]
"ft:originID": "understanding_manual"
"ft:lang": "en-US"
"ft:title": "Manual Penetration Testing"
"ft:prettyUrl": "c_understanding_manual"
---

You can conduct a manual penetration assessment to observe the application in a runtime environment and simulate real-world attack scenarios. Penetration testing includes efforts to:

-  Identify design flaws.
-  Exploit vulnerabilities.
-  Leverage combinations of lower impact flaws into higher impact vulnerabilities.
-  Determine if identified flaws affect the confidentiality, integrity, or availability of the application.

The objectives of a web-focused penetration assessment include testing using proprietary or public tools to:

-   Assess how vulnerabilities might be exploited against a target while establishing a running profile of attack methods discovered.
-   Execute test cases to confirm the vulnerability and attempt to determine the impact to business.
-   Customize and expand attack payloads, accounting for the specifics of the implementation of the target and environment.
-   Analyze captured data for vulnerability patterns, interpreting the results, and developing remediation recommendations.

Human testers identify unorthodox ways of attacking applications and infrastructures to understand the design and functionality, complex authorization processes, and business logic requirements that might not be possible for computing systems to replicate today. These insights enable developers to secure their applications and infrastructure against a broader range of attacks.

Veracode recommends that your organization utilize Veracode Manual Penetration Testing in conjunction with other automated security assessments such as Veracode Static Analysis, Dynamic Analysis, and SCA to ensure maximum coverage from your security program.

Veracode uses industry standards for classifying and reporting manual penetration test vulnerabilities, including:

-   [Common Vulnerability Scoring System (CVSS) v3](https://www.first.org/cvss/specification-document)
-   [Common Weakness Enumeration (CWE)](https://cwe.mitre.org/)
-   [Common Attack Pattern Enumeration and Classification (CAPEC)](https://capec.mitre.org/)

Details of Veracode Manual Penetration Testing are available in the methodology section of the Veracode Detailed PDF Report and Customizable PDF Report.

Veracode performs all Manual Penetration Testing according to industry-standard testing methodologies where applicable. The following table describes testing types, methodologies, and vulnerability types that form the foundation of Veracode manual penetration testing.

|Test Type|Methodology|Vulnerabilities|
|---------|-----------|---------------|
|Web application/API|PTES \(Penetration Testing Execution Standard\), OWASP Testing Guide|OWASP Top 10 and CWE Top 25|
|Mobile application|PTES \(Penetration Testing Execution Standard\), OWASP Mobile Security Testing Guide|OWASP Mobile Top 10|
|Desktop or thick-client applications|PTES \(Penetration Testing Execution Standard\), OWASP recommended testing guidance and best practices|<ul><li>Application Logic</li><li>Code Injection</li><li>Local Storage</li><li>Binary Exploitation and Reverse Engineering</li><li>Excessive Privileges</li><li>Unencrypted Storage of Sensitive Information</li><li>Unencrypted Transmission of Sensitive Information</li><li>Weak Encryption Implementations</li><li>Weak Assembly Controls</li><li>Weak GUI Controls</li><li>Weak or Default Passwords</li></ul>|
|Internet of things \(IoT\) and embedded systems|PTES \(Penetration Testing Execution Standard\), OWASP IoT Testing Guide and other industry best practices|OWASP IoT Top 10|
|Infrastructure and Operations \(DevOps Penetration Testing\)|PTES \(Penetration Testing Execution Standard\), NIST SP 800-115, PCI DSS 11.3 \(for PCI engagements\)|Can vary depending on scope and rules of engagement|
