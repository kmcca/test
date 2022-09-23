---
"author": ["Kevin McCarthy"]
"ft:originID": "r_cwes_impact_policy"
"ft:lang": "en-US"
"ft:title" : "Appendix: CWEs That Violate Security Standards"
"ft:prettyUrl" : "r_cwes_impact_policy"
"media_dir": "images/"
---
This appendix lists all the CWEs that violate the security standards you can apply to your policies in the Veracode Platform. It also indicates which CWEs are supported by Veracode Static Analysis and Dynamic Analysis. Veracode Manual Penetration Testing scans may report any valid CWE, including those not listed here.

Veracode identifies the CWEs in these ways:

- Reporting CWEs explicitly listed in the official CWE mappings for the security standard.
- Reporting CWEs that are children or parents of a CWE listed in the official CWE mappings. Veracode generally includes these CWEs if it reports a security category under a more specific or more general CWE than what appears in the standard mapping. For example, Veracode usually reports cross-site scripting found in Static Analyses as CWE 80, but a standard mapping lists it as CWE 79.
