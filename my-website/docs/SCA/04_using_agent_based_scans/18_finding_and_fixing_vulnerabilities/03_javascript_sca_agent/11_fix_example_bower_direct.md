---
"ft:title" : "Fix Example Direct Vulnerability for Bower"
"ft:prettyUrl" : "Fix_Example_Direct_Vulnerability_for_Bower"
---

When your configuration file specifically references a library, Veracode SCA refers to the library as a direct dependency.

These example steps provide a fix for a  [Cross-site Scripting \(XSS\) Through link-to Title Attribute](https://www.sourceclear.com/registry/vulnerabilities/1935) vulnerability in [Ember, version 1.2.0](https://www.sourceclear.com/registry/libraries/603747?version=1.2.0) in [example-javascript-bower](https://github.com/srcclr/example-javascript-bower) repository.

<p font-size="13pt"><b>Steps</b></p>

1. Add this line to the `bower.json` file in the root of the project:

    ```
    "ember": "1.2.2"
    ```

2. Run this command to install Ember version 1.2.2:
 
    ```
    bower update ember
    ```

3. [Validate the fix](https://docs.veracode.com/r/Validating_Fixed_Agent_Based_Scan_Results).