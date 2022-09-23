---
"ft:title" : "Fix Example Direct Vulnerability for Ruby"
"ft:prettyUrl" : "Fix_Example_Direct_Vulnerability_for_Ruby"
---

These example steps provide a fix for a [Cross-site Request Forgery \(CSRF\)](https://www.sourceclear.com/registry/vulnerabilities/2281) vulnerability in [administrate, version 0.1.4](https://www.sourceclear.com/registry/libraries/245138?version=0.1.4) in the [example-ruby](https://github.com/srcclr/example-ruby) repository.

<p font-size="13pt"><b>Steps</b></p>

1. Edit the `Gemfile` file in the root of the project to match the following:

    ```
    gem 'administrate', '0.1.5'
    ```

2. Run this command from your terminal within the project:

    ```
    bundle update administrate  
    ```

3. [Validate the fix](https://docs.veracode.com/r/Validating_Fixed_Agent_Based_Scan_Results).