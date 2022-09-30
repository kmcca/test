---
"ft:title" : "Fix Example Direct Vulnerability for Yarn"
"ft:prettyUrl" : "Fix_Example_Direct_Vulnerability_for_Yarn"
---

When your configuration file specifically references a library, Veracode SCA refers to the library as a direct dependency.

These example steps provide a fix for a [Cross-site Scripting \(XSS\) Using Non-standard Encodings](https://www.sourceclear.com/registry/vulnerabilities/1811) vulnerability in [Express, version 4.1.1](https://www.sourceclear.com/registry/libraries/635?version=4.1.1) in the [example-javascript-yarn](https://github.com/srcclr/example-javascript-yarn) project.

<p font-size="13pt"><b>Steps</b></p>

1. Run this command to edit the Yarn file in the root of the project:

    ```
    yarn upgrade express@4.5.0
    yarn install --flat
    ```

2. [Validate the fix](https://docs.veracode.com/r/Validating_Fixed_Agent_Based_Scan_Results).