---
"ft:title" : "Understanding Agent-Based Scanning Vulnerabilities"
"ft:prettyUrl" : "c_sc_vulnerabilities"
---

Veracode uses multiple data sources for vulnerabilities: Common Vulnerabilities and Exposures \(CVE\) from the [National Vulnerability Database](https://nvd.nist.gov/) \(NVD\), and Veracode vulnerabilities \(SRCCLR\) from the [Veracode Vulnerability Database](https://www.sourceclear.com/vulnerability-database/search).

To find vulnerabilities outside the NVD, Veracode researchers curate and validate public database entries and track developer lists, code commits and releases, discussion forums, underground bulletin boards, and social chatter. The technology uses machine learning, extracting patterns from known vulnerabilities and applying new techniques and theories. Veracode Software Composition Analysis agent-based scanning uses clone verification to validate versions are patched as intended.

<p><span style="font-size: medium;">Vulnerability Data Sources</span></p>

The Veracode Platform may list two different data sources in the Vulnerability column for vulnerabilities: a CVE ID indicates that the vulnerability came from the NVD and a SRCCLR ID indicates that the vulnerability came from the Veracode Vulnerability Database.
