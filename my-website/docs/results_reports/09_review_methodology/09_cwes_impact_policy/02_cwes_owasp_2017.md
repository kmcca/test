---
"ft:title" : "CWEs That Violate the OWASP 2017 Standard"
"ft:prettyUrl" : "CWEs_That_Violate_the_OWASP_2017_Standard"
---
This table lists all the CWEs that may cause an application to not pass a policy that includes an OWASP 2017 policy rule.

|CWE ID|CWE Name|Static Support|Dynamic Support|Veracode Severity|
|------|--------|--------------|---------------|-----------------|
|5|J2EE Misconfiguration: Data Transmission Without Encryption| | | |
|9|J2EE Misconfiguration: Weak Access Permissions for EJB Methods| | | |
|13|ASP.NET Misconfiguration: Password in Configuration File| | | |
|16|Configuration| |X|0 - Informational|
|22|Improper Limitation of a Pathname to a Restricted Directory \(Path Traversal\)|X|X|3 - Medium|
|23|Relative Path Traversal| | | |
|24|Path Traversal: '../filedir'| | | |
|25|Path Traversal: '/../filedir'| | | |
|26|Path Traversal: '/dir/../filename'| | | |
|27|Path Traversal: 'dir/../../filename'| | | |
|28|Path Traversal: '..\\filedir'| | | |
|29|Path Traversal: '\\..\\filename'| | | |
|30|Path Traversal: '\\dir\\..\\filename'| | | |
|31|Path Traversal: 'dir\\..\\..\\filename'| | | |
|32|Path Traversal: '...' \(Triple Dot\)| | | |
|33|Path Traversal: '....' \(Multiple Dot\)| | | |
|34|Path Traversal: '....//'| | | |
|35|Path Traversal: '.../...//'| | | |
|36|Absolute Path Traversal| | | |
|37|Path Traversal: '/absolute/pathname/here'| | | |
|38|Path Traversal: '\\absolute\\pathname\\here'| | | |
|39|Path Traversal: 'C:dirname'| | | |
|40|Path Traversal: '\\\\UNC\\share\\name\\' \(Windows UNC Share\)| | | |
|74|Improper Neutralization of Special Elements in Output Used by a Downstream Component \(Injection\)| |X|4 - High|
|75|Failure to Sanitize Special Elements into a Different Plane \(Special Element Injection\)| | | |
|76|Improper Neutralization of Equivalent Special Elements| | | |
|77|Improper Neutralization of Special Elements used in a Command \(Command Injection\)|X| |5 - Very High|
|78|Improper Neutralization of Special Elements used in an OS Command \(OS Command Injection\)|X|X|5 - Very High|
|79|Improper Neutralization of Input During Web Page Generation \(Cross-site Scripting\)|X|X|3 - Medium|
|80|Improper Neutralization of Script-Related HTML Tags in a Web Page \(Basic XSS\)|X|X|3 - Medium|
|81|Improper Neutralization of Script in an Error Message Web Page| | | |
|82|Improper Neutralization of Script in Attributes of IMG Tags in a Web Page| | | |
|83|Improper Neutralization of Script in Attributes in a Web Page| |X|3 - Medium|
|84|Improper Neutralization of Encoded URI Schemes in a Web Page| | | |
|85|Doubled Character XSS Manipulations| | | |
|86|Improper Neutralization of Invalid Characters in Identifiers in Web Pages|X| |3 - Medium|
|87|Improper Neutralization of Alternate XSS Syntax| | | |
|88|Argument Injection or Modification|X| |3 - Medium|
|89|Improper Neutralization of Special Elements used in an SQL Command \(SQL Injection\)|X|X|4 - High|
|90|Improper Neutralization of Special Elements used in an LDAP Query \(LDAP Injection\)|X| |3 - Medium|
|91|XML Injection \(aka Blind XPath Injection\)|X| |3 - Medium|
|93|Improper Neutralization of CRLF Sequences \(CRLF Injection\)|X| |3 - Medium|
|94|Improper Control of Generation of Code \(Code Injection\)|X| |3 - Medium|
|95|Improper Neutralization of Directives in Dynamically Evaluated Code \(Eval Injection\)|X| |5 - Very High|
|96|Improper Neutralization of Directives in Statically Saved Code \(Static Code Injection\)| | | |
|97|Improper Neutralization of Server-Side Includes \(SSI\) Within a Web Page| | | |
|98|Improper Control of Filename for Include/Require Statement in PHP Program \(PHP Remote File Inclusion\)|X|X|4 - High|
|99|Improper Control of Resource Identifiers \(Resource Injection\)|X| |3 - Medium|
|102|Struts: Duplicate Validation Forms| | | |
|113|Improper Neutralization of CRLF Sequences in HTTP Headers \(HTTP Response Splitting\)|X|X|3 - Medium|
|117|Improper Output Neutralization for Logs|X| |3 - Medium|
|202|Exposure of Sensitive Data Through Data Queries| | | |
|209|Information Exposure Through an Error Message|X|X|2 - Low|
|210|Information Exposure Through Self-generated Error Message| | | |
|211|Information Exposure Through Externally-Generated Error Message| | | |
|219|Sensitive Data Under Web Root| | | |
|220|Sensitive Data Under FTP Root| | | |
|223|Omission of Security-relevant Information|X| |2 - Low|
|256|Unprotected Storage of Credentials|X| |3 - Medium|
|257|Storing Passwords in a Recoverable Format| | | |
|258|Empty Password in Configuration File| | | |
|259|Use of Hard-coded Password|X|X|3 - Medium|
|260|Password in Configuration File| | | |
|261|Weak Cryptography for Passwords|X| |3 - Medium|
|262|Not Using Password Aging| | | |
|263|Password Aging with Long Expiration| | | |
|266|Incorrect Privilege Assignment| | | |
|267|Privilege Defined With Unsafe Actions| | | |
|268|Privilege Chaining| | | |
|269|Improper Privilege Management| | | |
|270|Privilege Context Switching Error| | | |
|271|Privilege Dropping / Lowering Errors| | | |
|272|Least Privilege Violation|X| |3 - Medium|
|276|Incorrect Default Permissions| | | |
|277|Insecure Inherited Permissions| | | |
|278|Insecure Preserved Inherited Permissions| | | |
|279|Incorrect Execution-Assigned Permissions| | | |
|281|Improper Preservation of Permissions| | | |
|282|Improper Ownership Management|X| |3 - Medium|
|283|Unverified Ownership| | | |
|284|Improper Access Control|X| |3 - Medium|
|285|Improper Authorization|X|X|3 - Medium|
|286|Incorrect User Management| | | |
|287|Improper Authentication|X|X|4 - High|
|288|Authentication Bypass Using an Alternate Path or Channel| | | |
|289|Authentication Bypass by Alternate Name| | | |
|290|Authentication Bypass by Spoofing| | | |
|291|Reliance on IP Address for Authentication| | | |
|293|Using Referer Field for Authentication| | | |
|294|Authentication Bypass by Capture-replay| | | |
|295|Improper Certificate Validation|X| |3 - Medium|
|296|Improper Following of a Certificate's Chain of Trust| |X|3 - Medium|
|297|Improper Validation of Certificate with Host Mismatch|X|X|3 - Medium|
|298|Improper Validation of Certificate Expiration| |X|3 - Medium|
|299|Improper Check for Certificate Revocation| |X|3 - Medium|
|300|Channel Accessible by Non-Endpoint \(Man-in-the-Middle\)| | | |
|301|Reflection Attack in an Authentication Protocol| | | |
|302|Authentication Bypass by Assumed-Immutable Data| | | |
|303|Incorrect Implementation of Authentication Algorithm| | | |
|305|Authentication Bypass by Primary Weakness| | | |
|306|Missing Authentication for Critical Function| | | |
|307|Improper Restriction of Excessive Authentication Attempts| | | |
|308|Use of Single-factor Authentication| | | |
|309|Use of Password System for Primary Authentication| | | |
|311|Missing Encryption of Sensitive Data|X| |3 - Medium|
|312|Cleartext Storage of Sensitive Information|X| |3 - Medium|
|313|Cleartext Storage in a File or on Disk|X| |3 - Medium|
|314|Cleartext Storage in the Registry| | | |
|315|Cleartext Storage of Sensitive Information in a Cookie| | | |
|316|Cleartext Storage of Sensitive Information in Memory|X| |3 - Medium|
|317|Cleartext Storage of Sensitive Information in GUI| | | |
|318|Cleartext Storage of Sensitive Information in Executable| | | |
|319|Cleartext Transmission of Sensitive Information|X| |3 - Medium|
|320|Key Management Errors| | | |
|321|Use of Hard-coded Cryptographic Key|X|X|3 - Medium|
|322|Key Exchange without Entity Authentication| | | |
|325|Missing Required Cryptographic Step| | | |
|326|Inadequate Encryption Strength|X|X|3 - Medium|
|327|Use of a Broken or Risky Cryptographic Algorithm|X|X|3 - Medium|
|328|Reversible One-Way Hash|X| |3 - Medium|
|350|Reliance on Reverse DNS Resolution for a Security-Critical Action|X| |3 - Medium|
|359|Exposure of Private Information \(Privacy Violation\)|X| |2 - Low|
|370|Missing Check for Certificate Revocation after Initial Check| | | |
|384|Session Fixation|X|X|3 - Medium|
|419|Unprotected Primary Channel| | | |
|420|Unprotected Alternate Channel| | | |
|421|Race Condition During Access to Alternate Channel|X| |3 - Medium|
|422|Unprotected Windows Messaging Channel \(Shatter\)| | | |
|425|Direct Request \(Forced Browsing\)| | | |
|433|Unparsed Raw Web Content Delivery| | | |
|462|Duplicate Key in Associative List \(Alist\)| | | |
|477|Use of Obsolete Functions|X|X|0 - Informational|
|502|Deserialization of Untrusted Data|X| |3 - Medium|
|520|.NET Misconfiguration: Use of Impersonation| | | |
|521|Weak Password Requirements| | | |
|522|Insufficiently Protected Credentials|X|X|3 - Medium|
|523|Unprotected Transport of Credentials| | | |
|535|Information Exposure Through Shell Error Message| | | |
|536|Information Exposure Through Servlet Runtime Error Message| | | |
|537|Information Exposure Through Java Runtime Error Message| | | |
|548|Information Exposure Through Directory Listing| |X|2 - Low|
|549|Missing Password Field Masking| | | |
|550|Information Exposure Through Server Error Message| | | |
|551|Incorrect Behavior Order: Authorization Before Parsing and Canonicalization| | | |
|555|J2EE Misconfiguration: Plaintext Password in Configuration File| | | |
|556|ASP.NET Misconfiguration: Use of Identity Impersonation| | | |
|564|SQL Injection: Hibernate|X| |4 - High|
|566|Authorization Bypass Through User-Controlled SQL Primary Key|X| |3 - Medium|
|599|Missing Validation of OpenSSL Certificate| | | |
|611|Improper Restriction of XML External Entity Reference \(XXE\)|X|X|3 - Medium|
|613|Insufficient Session Expiration| | | |
|614|Sensitive Cookie in HTTPS Session Without 'Secure' Attribute|X|X|2 - Low|
|620|Unverified Password Change| | | |
|621|Variable Extraction Error| | | |
|623|Unsafe ActiveX Control Marked Safe For Scripting| | | |
|624|Executable Regular Expression Error| | | |
|627|Dynamic Variable Evaluation| | | |
|639|Authorization Bypass Through User-Controlled Key|X| |4 - High|
|640|Weak Password Recovery Mechanism for Forgotten Password| | | |
|641|Improper Restriction of Names for Files and Other Resources| | | |
|643|Improper Neutralization of Data within XPath Expressions \(XPath Injection\)| | | |
|645|Overly Restrictive Account Lockout Mechanism| | | |
|647|Use of Non-Canonical URL Paths for Authorization Decisions| | | |
|648|Incorrect Use of Privileged APIs| | | |
|652|Improper Neutralization of Data within XQuery Expressions \(XQuery Injection\)| | | |
|689|Permission Race Condition During Resource Copy| | | |
|692|Incomplete Denylist to Cross-Site Scripting| | | |
|694|Use of Multiple Resources with Duplicate Identifier| | | |
|708|Incorrect Ownership Assignment|X| |4 - High|
|732|Incorrect Permission Assignment for Critical Resource|X| |3 - Medium|
|759|Use of a One-Way Hash without a Salt| | | |
|760|Use of a One-Way Hash with a Predictable Salt|X| |3 - Medium|
|776|Improper Restriction of Recursive Entity References in DTDs \(XML Entity Expansion\)| | | |
|778|Insufficient Logging| | | |
|780|Use of RSA Algorithm without OAEP|X| |3 - Medium|
|798|Use of Hard-coded Credentials|X| |3 - Medium|
|804|Guessable CAPTCHA| | | |
|836|Use of Password Hash Instead of Password for Authentication| | | |
|842|Placement of User into Incorrect Group| | | |
|862|Missing Authorization| | | |
|863|Incorrect Authorization| | | |
|914|Improper Control of Dynamically-Identified Variables| | | |
|916|Use of Password Hash With Insufficient Computational Effort|X| |3 - Medium|
|917|Improper Neutralization of Special Elements used in an Expression Language Statement \(Expression Language Injection\)| | | |
|923|Improper Restriction of Communication Channel to Intended Endpoints| | | |
|925|Improper Verification of Intent by Broadcast Receiver| | | |
|926|Improper Export of Android Application Components| | | |
|927|Use of Implicit Intent for Sensitive Communication| | | |
|939|Improper Authorization in Handler for Custom URL Scheme| | | |
|940|Improper Verification of Source of a Communication Channel| | | |
|941|Incorrectly Specified Destination in a Communication Channel| | | |
|942|Permissive Cross-domain Policy with Untrusted Domains|X|X|3 - Medium|
|943|Improper Neutralization of Special Elements in Data Query Logic|X| |4 - High|
|1004|Sensitive Cookie Without HttpOnly Flag| | | |
|1022|Use of Web Link to Untrusted Target with window.opener Access| | | |


