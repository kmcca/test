---
"ft:title" : "Fix Example Transitive Vulnerability for Yarn Earlier than 1.0"
"ft:prettyUrl" : "Fix_Example_Transitive_Vulnerability_for_Yarn_Earlier_than_1"
---

Because Yarn projects allow for multiple versions of the same library, you cannot override a vulnerable library by adding the appropriate version directly to the configuration file.

These steps provide a fix for a [Timing Attack Via Signature Validation](https://www.sourceclear.com/registry/vulnerabilities/2678) vulnerability in [cookie-signature, version 1.0.3](https://www.sourceclear.com/registry/libraries/610?version=1.0.3) in the [example-javascript-yarn](https://github.com/srcclr/example-javascript-yarn) repository.

<p font-size="13pt"><b>Steps</b></p>

1.  Run this command to install `cookie-signature` library 1.0.4:

    ```
    yarn add cookie-signature@1.0.4
    ```

2.  Run this command and, when prompted, choose the latest version:

    ```
    yarn install --flat
    ```

<p font-size="13pt"><b>Next Steps</b></p>

After completing these steps, build, test, and rescan your project to ensure the fix succeeded.