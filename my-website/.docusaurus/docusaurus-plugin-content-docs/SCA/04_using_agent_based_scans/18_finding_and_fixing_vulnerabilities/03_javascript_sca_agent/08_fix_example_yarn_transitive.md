---
"ft:title" : "Fix Example Transitive Vulnerability for Yarn 1.0 or Later"
"ft:prettyUrl" : "Fix_Example_Transitive_Vulnerability_for_Yarn_1_or_Later"
---

Because Yarn projects allow for multiple versions of the same library, you cannot override a vulnerable library by adding the appropriate version directly to the configuration file.

These steps provide a fix for a [Timing Attack Via Signature Validation](https://www.sourceclear.com/registry/vulnerabilities/2678) vulnerability in [cookie-signature, version 1.0.3](https://www.sourceclear.com/registry/libraries/610?version=1.0.3) in the [example-javascript-yarn](https://github.com/srcclr/example-javascript-yarn) repository.

<p font-size="13pt"><b>Steps</b></p>

1. Add this `resolutions` section to your `package.json` file:

    ```
    "resolutions": {
      "cookie-signature": "1.0.4"
    }
    ```

    If a `resolutions` section already exists, add `"cookie-signature": "1.0.4"` to it.

2. Run the `yarn install` command.

<p font-size="13pt"><b>Next Steps</b></p>

After completing these steps, build, test, and rescan your project to ensure the fix succeeded.