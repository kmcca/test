---
"ft:title" : "Understanding Manual Penetration Testing Results"
"ft:prettyUrl" : "review_manual"
---
The Veracode Platform can generate a report that includes manual assessment results, usually from [Veracode Manual Penetration Testing (MPT)](https://docs.veracode.com/r/c_understanding_manual) or a code review. These results differ from the results of automated scans in several important ways, including objectives, attack values, and common attack patterns.

You perform a manual penetration assessment to observe the application code in a runtime environment and to simulate real-world attack scenarios. Manual testing can identify design flaws, evaluate environmental conditions, compound multiple lower-risk flaws into higher-risk vulnerabilities, and determine if identified flaws affect the confidentiality, integrity, or availability \(CIA\) of the application.

<p><span style="font-size: medium;">Objectives</span></p>

The stated objectives of a manual penetration assessment are:

-   Perform testing, using proprietary and/or public tools, to determine whether it is possible for an attacker to:
    -   Circumvent authentication and authorization mechanisms
    -   Escalate application user privileges
    -   Hijack accounts belonging to other users
    -   Violate access controls placed by the site administrator
    -   Alter data or data presentation
    -   Corrupt application and data integrity, functionality, and performance
    -   Circumvent application business logic
    -   Circumvent application session management
    -   Break or analyze use of cryptography within user-accessible components
-   Determine possible extent access or impact to the system by attempting to exploit vulnerabilities
-   Score vulnerabilities using the Common Vulnerability Scoring System \(CVSS\)
-   Provide tactical recommendations to address security issues of immediate consequence
-   Provide strategic recommendations to enhance security by leveraging industry best practices

<p><span style="font-size: medium;">Attack Values</span></p>

To achieve the stated objectives, Veracode performs these tests as part of the manual penetration assessment, when applicable to the platforms and technologies in use:

-   Cross Site Scripting \(XSS\)
-   SQL Injection
-   Command Injection
-   Cross Site Request Forgery \(CSRF\)
-   Authentication/Authorization Bypass
-   Session Management testing, including token analysis, session expiration, and logout effectiveness
-   Account Management testing, including password strength, password reset, account lockout, etc.
-   Directory Traversal
-   Response Splitting
-   Stack/Heap Overflows
-   Format String Attacks
-   Cookie Analysis
-   Server Side Includes Injection
-   Remote File Inclusion
-   LDAP Injection
-   XPATH Injection
-   Internationalization attacks
-   Denial of Service testing at the application layer only
-   AJAX Endpoint Analysis
-   Web Services Endpoint Analysis
-   HTTP Method Analysis
-   SSL Certificate and Cipher Strength Analysis
-   Forced Browsing

<p><span style="font-size: medium;">CAPEC Attack Pattern Classification</span></p>

These attack pattern classifications are used to group similar application flaws discovered during manual penetration testing. Attack patterns describe the general methods employed to access and exploit the specific weaknesses that exist within an application. CAPEC \(Common Attack Pattern Enumeration and Classification\) is an effort led by Cigital, Inc. and is sponsored by the United States Department of Homeland Security's National Cyber Security Division.

**Abuse of Functionality**

Exploitation of business logic errors or misappropriation of programmatic resources. Application functions are developed to specifications with particular intentions, and these types of attacks serve to undermine those intentions.

Examples:

- Exploiting password recovery mechanisms
- Accessing unpublished or test APIs
- Cache poisoning

**Spoofing**

Impersonation of entities or trusted resources. A successful attack will present itself to a verifying entity with an acceptable level of authenticity.

Examples:

- Man in the middle attacks
- Checksum spoofing
- Phishing attacks

**Probabilistic Techniques**

Using predictive capabilities or exhaustive search techniques in order to derive or manipulate sensitive information. Attacks capitalize on the availability of computing resources or the lack of entropy within targeted components.

Examples:

- Password brute forcing
- Cryptanalysis
- Manipulation of authentication tokens

**Exploitation of Authentication**

Circumventing authentication requirements to access protected resources. Design or implementation flaws may allow authentication checks to be ignored, delegated, or bypassed.

Examples:

- Cross-site request forgery
- Reuse of session identifiers
- Flawed authentication protocol

**Resource Depletion**

Affecting the availability of application components or resources through symmetric or asymmetric consumption. Unrestricted access to computationally expensive functions or implementation flaws that affect the stability of the application can be targeted by an attacker in order to cause denial of service conditions.

Examples:

- Flooding attacks
- Unlimited file upload size
- Memory leaks

**Exploitation of Privilege/Trust**

Undermining the application's trust model in order to gain access to protected resources or gain additional levels of access as defined by the application. Application that implicitly extend trust to resources or entities outside of their direct control are susceptible to attack.

Examples:

- Insufficient access control lists
- Circumvention of client side protections
- Manipulation of role identification information

**Injection**

Inserting unexpected inputs to manipulate control flow or alter normal business processing. Applications must contain sufficient data validation checks in order to sanitize tainted data and prevent malicious, external control over internal processing.

Examples:

- SQL Injection
- Cross-site scripting
- XML Injection

**Data Structure Attacks**

Supplying unexpected or excessive data that results in more data being written to a buffer than it is capable of holding. Successful attacks of this class can result in arbitrary command execution or denial of service conditions.

Examples:

- Buffer overflow
- Integer overflow
- Format string overflow

**Data Leakage Attacks**

Recovering information exposed by the application that may itself be confidential or may be useful to an attacker in discovering or exploiting other weaknesses. A successful attack may be conducted passive observation or active interception methods. This attack pattern often manifests itself in the form of applications that expose sensitive information within error messages.

Examples:

- Sniffing clear-text communication protocols
- Stack traces returned to end users
- Sensitive information in HTML comments

**Resource Manipulation**

Manipulating application dependencies or accessed resources in order to undermine security controls and gain unauthorized access to protected resources. Applications may use tainted data when constructing paths to local resources or when constructing processing environments.

Examples:

- Carriage Return Line Feed log file injection
- File retrieval via path manipulation
- User specification of configuration files

**Time and State Attacks**

Undermining state condition assumptions made by the application or capitalizing on time delays between security checks and performed operations. An application that does not enforce a required processing sequence or does not handle concurrency adequately will be susceptible to these attack patterns.

Examples:

- Bypassing intermediate form processing steps
- Time-of-check and time-of-use race conditions
- Deadlock triggering to cause a denial of service