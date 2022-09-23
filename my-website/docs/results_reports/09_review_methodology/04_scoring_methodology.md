---
"ft:title" : "Scoring Methodology"
"ft:prettyUrl" : "review_scoringmethodology"
---
The Veracode scoring system, Security Quality Score, is built on the foundation of two industry standards, the Common Weakness Enumeration \([CWE](http://cwe.mitre.org)\) and Common Vulnerability Scoring System \([CVSS](http://nvd.nist.gov/cvss.cfm)\). CWE provides the dictionary of security flaws and CVSS provides the foundation for computing severity, based on the potential Confidentiality, Integrity, and Availability impact of a flaw, if exploited.

The Security Quality Score is a single score from 0 to 100, where 0 is the most insecure application and 100 is an application with no detectable security flaws. The score calculation includes non-linear factors so that, for instance, a single Severity 5 flaw is weighted more heavily than five Severity 1 flaws, and so that each additional flaw at a given severity contributes progressively less to the score.

Veracode assigns a [severity level](https://docs.veracode.com/r/review_severity_exploitability) to each flaw type based on three foundational application security requirements: Confidentiality, Integrity, and Availability. Each of the severity levels reflects the potential business impact if a security breach occurs across one or more of these security dimensions.

**Confidentiality Impact**

According to CVSS, this metric measures the impact on confidentiality if a exploit should occur using the vulnerability on the target system. At the weakness level, the scope of the Confidentiality in this model is within an application and is measured at three levels of impact: None, Partial, and Complete.

**Integrity Impact**

This metric measures the potential impact on integrity of the application being analyzed. Integrity refers to the trustworthiness and guaranteed veracity of information within the application. Integrity measures are meant to protect data from unauthorized modification. When the integrity of a system is sound, it is protected from unauthorized modification of its contents.

**Availability Impact**

This metric measures the potential impact on availability if a successful exploit of the vulnerability is performed on a target application. Availability refers to the accessibility of information resources. Almost exclusive to this domain are denial-of-service vulnerabilities. Attacks that compromise authentication and authorization for application access, application memory, and administrative privileges are examples of impact on the availability of an application.

<p><span style="font-size: medium;">Security Quality Score Calculation</span></p>

The overall Security Quality Score is computed by aggregating impact levels of all weaknesses within an application and representing the score on a 100 point scale. This score does not predict vulnerability potential as much as it enumerates the security weaknesses and their impact levels within the application code.

The Raw Score formula puts weights on each flaw based on its impact level. These weights are exponential and determined by empirical analysis by Veracode's application security experts with validation from industry experts. The score is normalized to a scale of 0 to 100, where a score of 100 is an application with 0 detected flaws using the analysis technique for the application's business criticality.

<p><span style="font-size: medium;">Veracode Level Calculation</span></p>

The [Veracode Level](https://docs.veracode.com/r/policy_veracodelevel) is calculated based on the scan types performed, score attained in each scan, and the severity of flaws found.

