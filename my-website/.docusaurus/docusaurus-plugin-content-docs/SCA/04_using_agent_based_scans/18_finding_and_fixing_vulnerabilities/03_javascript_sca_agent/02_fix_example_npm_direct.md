---
"ft:title" : "Fix Example Direct Vulnerability for NPM"
"ft:prettyUrl" : "Fix_Example_Direct_Vulnerability_for_NPM"
---

When your configuration file specifically references a library, Veracode SCA refers to the library as a direct dependency.

These example steps provide a fix for a [Cross-site Scripting \(XSS\) Using Non-standard Encodings](https://www.sourceclear.com/registry/vulnerabilities/1811) vulnerability in [Express, version 4.1.1](https://www.sourceclear.com/registry/libraries/635?version=4.1.1) in the [example-javascript](https://github.com/srcclr/example-javascript) repository.

<p font-size="13pt"><b>Steps</b></p>

1. Run this command to edit the `package.json` file in the root of the project:

    ```
    npm install express@4.5.0 --save
    ```

2. [Validate the fix](https://docs.veracode.com/r/Validating_Fixed_Agent_Based_Scan_Results).