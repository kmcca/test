---
"ft:title" : "CWEs That Violate the OWASP 2021 Standard"
"ft:prettyUrl" : "CWEs_That_Violate_the_OWASP_2021_Standard"
---
This table lists all the CWEs that may cause an application to not pass a policy that includes an Auto-Update OWASP policy rule.

|CWE ID|CWE Name|Static Support|Dynamic Support|Veracode Severity|
|------|--------|--------------|---------------|-----------------|
|15|External Control of System or Configuration Setting|X| |4 - High|
|16|Configuration| |X|0 - Informational|
|20|Improper Input Validation|X| |0 - Informational|
|22|Improper Limitation of a Pathname to a Restricted Directory \(Path Traversal\)|X|X|3 - Medium|
|35|Path Traversal: '.../...//'|X| |2- Low|
|73|External Control of File Name or Path|X| |3 - Medium|
|74|Improper Neutralization of Special Elements in Output Used by a Downstream Component \(Injection\)| |X|4 - High|
|77|Improper Neutralization of Special Elements used in a Command \(Command Injection\)|X| |5 - Very High|
|78|Improper Neutralization of Special Elements used in an OS Command \(OS Command Injection\)|X|X|5 - Very High|
|79|Improper Neutralization of Input During Web Page Generation \(Cross-site Scripting\)|X|X|3 - Medium|
|80|Improper Neutralization of Script-Related HTML Tags in a Web Page \(Basic XSS\)|X|X|3 - Medium|
|83|Improper Neutralization of Script in Attributes in a Web Page|X|X|3 - Medium|
|86|Improper Neutralization of Invalid Characters in Identifiers in Web Pages|X| |3 - Medium|
|88|Improper Neutralization of Argument Delimiters in a Command \('Argument Injection'\)|X| |3 - Medium|
|89|Improper Neutralization of Special Elements used in an SQL Command \(SQL Injection\)|X|X|4 - High|
|90|Improper Neutralization of Special Elements used in an LDAP Query \(LDAP Injection\)|X| |3 - Medium|
|91|XML Injection \(aka Blind XPath Injection\)|X|X|3 - Medium|
|93|Improper Neutralization of CRLF Sequences \(CRLF Injection\)|X| |3 - Medium|
|94|Improper Control of Generation of Code \(Code Injection\)|X| |3 - Medium|
|95|Improper Neutralization of Directives in Dynamically Evaluated Code \(Eval Injection\)|X|X|5 - Very High|
|98|Improper Control of Filename for Include/Require Statement in PHP Program \(PHP Remote File Inclusion\)|X|X|4 - High|
|99|Improper Control of Resource Identifiers \(Resource Injection\)|X| |3 - Medium|
|112|Missing XML Validation|X| |3 - Medium|
|113|Improper Neutralization of CRLF Sequences in HTTP Headers \(HTTP Response Splitting\)|X|X|3 - Medium|
|114|Process Control|X| |5 - Very High|
|117|Improper Output Neutralization for Logs|X| |3 - Medium|
|129|Improper Validation of Array Index|X| |3 - Medium|
|134|Use of Externally-Controlled Format String|X| |5 - Very High|
|159|Improper Handling of Invalid Use of Special Elements|X| |0 - Informational|
|183|Permissive List of Allowed Inputs|X| |3 - Medium|
|200|Exposure of Sensitive Information to an Unauthorized Actor|X|X|2 - Low|
|201|Insertion of Sensitive Information Into Sent Data|X| |2 - Low|
|209|Generation of Error Message Containing Sensitive Information|X|X|2 - Low|
|215|Insertion of Sensitive Information Into Debugging Code|X|X|2 - Low|
|223|Omission of Security-relevant Information|X| |2 - Low|
|256|Plaintext Storage of a Password|X| |3 - Medium|
|259|Use of Hard-coded Password|X|X|3 - Medium|
|261|Weak Encoding for Password|X| |3 - Medium|
|272|Least Privilege Violation|X| |3 - Medium|
|282|Improper Ownership Management|X| |3 - Medium|
|285|Improper Authorization|X|X|3 - Medium|
|287|Improper Authentication|X|X|4 - High|
|295|Improper Certificate Validation|X| |3 - Medium|
|296|Improper Following of a Certificate's Chain of Trust| |X|3 - Medium|
|297|Improper Validation of Certificate with Host Mismatch|X|X|3 - Medium|
|298|Improper Validation of Certificate Expiration| |X|3 - Medium|
|299|Improper Check for Certificate Revocation| |X|3 - Medium|
|311|Missing Encryption of Sensitive Data|X| |3 - Medium|
|312|Cleartext Storage of Sensitive Information|X| |3 - Medium|
|313|Cleartext Storage in a File or on Disk|X| |3 - Medium|
|316|Cleartext Storage of Sensitive Information in Memory|X| |3 - Medium|
|319|Cleartext Transmission of Sensitive Information|X| |3 - Medium|
|321|Use of Hard-coded Cryptographic Key|X|X|3 - Medium|
|326|Inadequate Encryption Strength|X|X|3 - Medium|
|327|Use of a Broken or Risky Cryptographic Algorithm|X|X|3 - Medium|
|328|Use of Weak Hash|X| |3 - Medium|
|329|Generation of Predictable IV with CBC Mode|X| |2 - Low|
|330|Use of Insufficiently Random Values|X| |3 - Medium|
|331|Insufficient Entropy|X| |3 - Medium|
|338|Use of Cryptographically Weak Pseudo-Random Number Generator \(PRNG\)|X| |3 - Medium|
|345|Insufficient Verification of Data Authenticity|X| |4 - High|
|346|Origin Validation Error|X| |3 - Medium|
|347|Improper Verification of Cryptographic Signature|X| |2 - Low|
|350|Reliance on Reverse DNS Resolution for a Security-Critical Action|X| |3 - Medium|
|352|Cross-Site Request Forgery \(CSRF\)|X|X|3 - Medium|
|354|Improper Validation of Integrity Check Value|X| |3 - Medium|
|359|Exposure of Private Personal Information to an Unauthorized Actor|X| |2 - Low|
|377|Insecure Temporary File|X| |3 - Medium|
|384|Session Fixation|X|X|3 - Medium|
|402|Transmission of Private Resources into a New Sphere \('Resource Leak'\)| |X|3 - Medium|
|421|Race Condition During Access to Alternate Channel|X| |3 - Medium|
|426|Untrusted Search Path|X| |3 - Medium|
|427|Uncontrolled Search Path Element|X| |3 - Medium|
|434|Unrestricted Upload of File with Dangerous Type| |X|4 - High|
|441|Unintended Proxy or Intermediary \('Confused Deputy'\)|X| |3 - Medium|
|470|Use of Externally-Controlled Input to Select Classes or Code \('Unsafe Reflection'\)|X| |3 - Medium|
|472|External Control of Assumed-Immutable Web Parameter|X| |3 - Medium|
|494|Download of Code Without Integrity Check|X| |5 - Very High|
|497|Exposure of Sensitive System Information to an Unauthorized Control Sphere|X| |2 - Low|
|501|Trust Boundary Violation|X| |3 - Medium|
|502|Deserialization of Untrusted Data|X| |3 - Medium|
|522|Insufficiently Protected Credentials|X|X|3 - Medium|
|526|Exposure of Sensitive Information Through Environmental Variables| |X|2 - Low|
|530|Exposure of Backup File to an Unauthorized Control Sphere| |X|2 - Low|
|532|Insertion of Sensitive Information into Log File|X| |2 - Low|
|538|Insertion of Sensitive Information into Externally-Accessible File or Directory| |X|2 - Low|
|547|Use of Hard-coded, Security-relevant Constants|X| |3 - Medium|
|548|Information Exposure Through Directory Listing| |X|2 - Low|
|564|SQL Injection: Hibernate|X| |4 - High|
|566|Authorization Bypass Through User-Controlled SQL Primary Key|X| |3 - Medium|
|601|URL Redirection to Untrusted Site \('Open Redirect'\)|X|X|3 - Medium|
|611|Improper Restriction of XML External Entity Reference \(XXE\)|X|X|3 - Medium|
|614|Sensitive Cookie in HTTPS Session Without 'Secure' Attribute|X|X|2 - Low|
|615|Inclusion of Sensitive Information in Source Code Comments|X|X|0 - Informational|
|639|Authorization Bypass Through User-Controlled Key|X| |4 - High|
|642|External Control of Critical State Data| |X|2 - Low|
|656|Reliance on Security Through Obscurity|X| |0 - Informational|
|668|Exposure of Resource to Wrong Sphere|X|X|3 - Medium|
|708|Incorrect Ownership Assignment|X| |4 - High|
|732|Incorrect Permission Assignment for Critical Resource|X| |3 - Medium|
|757|Selection of Less-Secure Algorithm During Negotiation \('Algorithm Downgrade'\)|X|X|3 - Medium|
|760|Use of a One-Way Hash with a Predictable Salt|X| |3 - Medium|
|780|Use of RSA Algorithm without OAEP|X| |3 - Medium|
|798|Use of Hard-coded Credentials|X| |3 - Medium|
|829|Inclusion of Functionality from Untrusted Control Sphere|X|X|3 - Medium|
|830|Inclusion of Web Functionality from an Untrusted Source| |X|2 - Low|
|915|Improperly Controlled Modification of Dynamically-Determined Object Attributes|X| |3 - Medium|
|916|Use of Password Hash With Insufficient Computational Effort|X| |3 - Medium|
|918|Server-Side Request Forgery \(SSRF\)|X|X|3 - Medium|
|926|Improper Export of Android Application Components|X| |3 - Medium|
|942|Permissive Cross-domain Policy with Untrusted Domains|X|X|3 - Medium|
|943|Improper Neutralization of Special Elements in Data Query Logic|X| |4 - High|
|1174|ASP.NET Misconfiguration: Improper Model Validation|X| |2 - Low|
|1236|Improper Neutralization of Formula Elements in a CSV File|X| |3 - Medium|


