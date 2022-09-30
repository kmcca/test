---
"ft:title" : "Fix Example Transitive Vulnerability for Bower"
"ft:prettyUrl" : "Fix_Example_Transitive_Vulnerability_for_Bower"
---

To fix a transitive library for Bower, override the transitive dependency by specifying how to resolve the dependency.

These steps provide a fix for a [Cross-site Scripting \(XSS\) Vulnerability in the jquery library](https://sca.analysiscenter.veracode.com/vulnerability-database/security/cross-site-scripting-xss-/javascript/sid-2250) vulnerability in [jQuery](https://sca.analysiscenter.veracode.com/vulnerability-database/libraries/jquery/JS/BOWER/lid-601246) version 1.10.2 in the [example-javascript-bower](https://github.com/srcclr/example-javascript-bower) repository.

<p font-size="13pt"><b>Steps</b></p>

1. Add the appropriate version of jQuery to the `bower.json` file with a defined [`resolutions`](https://jaketrent.com/post/bower-resolutions/) section:

      ```
      "dependencies": {
           ...
          "jquery": "1.12.0",
           ...
      },
      "resolutions": {
           ...
          "jquery": "1.12.0",
           ...
      }
      ```

2. Run this command to download the updated jQuery library:

    ```
    bower update jquery
    ```


3. [Validate the fix](https://docs.veracode.com/r/Validating_Fixed_Agent_Based_Scan_Results).

<p font-size="13pt"><b>Next Steps</b></p>

After completing these steps, build, test, and rescan your project to ensure the fix succeeded.