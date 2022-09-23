---
"ft:title" : "Fix Example Vulnerable Method for NPM"
"ft:prettyUrl" : "Fix_Example_Vulnerable_Method_for_NPM"
---
Veracode SCA supports vulnerable method analysis for NPM packages using the NPM and Yarn package managers. It does not support vulnerable method analysis with Bower.

<p font-size="13pt"><b>Overview</b></p>

These example steps provide a fix for a [Regular Expression Denial Of Service \(ReDoS\)](https://sca.analysiscenter.veracode.com/vulnerability-database/security/regular-expression-denial-of-service-redos-/javascript/sid-13630) vulnerable method in the [marked](https://sca.analysiscenter.veracode.com/vulnerability-database/libraries/marked/javascript/bower/lid-601122) library in the [example-javascript-vulnerable-methods](https://github.com/srcclr/example-javascript-vulnerable-methods) repository.

<p font-size="13pt"><b>Steps</b></p>

1. In the Veracode Platform, select **Scans & Analysis** > **Software Composition Analysis**.
2. Click the **Agent-Based Scan** tab.
3. Select your workspace.
4. Click **Projects**.
5. Click the **srcclr/example-javascript-vulnerable-methods** project.
6. Click **Regular Expression Denial Of Service \(ReDoS\)** in the Vulnerabilities table.

    The Vulnerable Methods section shows that the `marked.InlineLexer` method is the vulnerable part of the library.

7. To address the identified vulnerable method, do one of these tasks:

    - Change your code to perform in the same manner without relying on this particular method.
    - Follow the provided instructions to update the library to a safe version.

8. [Validate the fix](https://docs.veracode.com/r/Validating_Fixed_Agent_Based_Scan_Results).