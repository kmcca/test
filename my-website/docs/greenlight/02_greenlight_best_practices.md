---
"ft:title" : "Veracode Greenlight Best Practices"
"ft:prettyUrl" : "c_best_practices"
---
Veracode Greenlight detects coding best practices in which the code has protected the application against specific Common Weakness Enumerations (CWEs).

In the Greenlight Findings window, the **Best Practices** tab lists the coding best practices detected during the Greenlight scan and the CWEs your code avoided. You can click **Details** to learn more about the specific CWE. The details popup shows you the CWE from which your application is protected based on the detected coding best practice.

Greenlight can detect when a coding best practice is present against these CWEs:

-   Taint-based CWEs
    -   CWE-80: Improper Neutralization of Script-Related HTML Tags in a Web Page (Basic XSS)
    -   CWE-93: Improper Neutralization of CRLF Sequences (CRLF Injection)
    -   CWE-113: Improper Neutralization of CRLF Sequences in HTTP Headers (HTTP Response Splitting)
    -   CWE-117: Improper Output Neutralization for Logs
    -   CWE-201: Information Exposure Through Sent Data
    -   CWE-611: Improper Restriction of XML External Entity Reference (XXE)
-   Non-taint based CWEs
    -   CWE-326: Inadequate Encryption Strength
    -   CWE-327: Use of a Broken or Risky Cryptographic Algorithm
    -   CWE-329: Not Using a Random IV with CBC Mode
    -   CWE-331: Insufficient Entropy
    -   CWE-338: Use of Cryptographically Weak Pseudo-Random Number Generator (PRNG)
    -   CWE-780: Use of RSA Algorithm without OAEP