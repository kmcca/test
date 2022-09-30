---
"ft:title" : "Fix Example Transitive Vulnerability for Ruby"
"ft:prettyUrl" : "Fix_Example_Transitive_Vulnerability_for_Ruby"
---

To fix a transitive library for Ruby, override the transitive dependency by adding the appropriately versioned dependency as a direct library to your `Gemfile`. 

These steps provide a fix for an [Session Fixation](https://www.sourceclear.com/registry/vulnerabilities/1550) vulnerability in [rest-client, version 1.7.3](https://www.sourceclear.com/registry/libraries/68?version=1.7.3) in the [test-ruby-gem](https://github.com/srcclr/test-ruby-gem) repository.

<p font-size="13pt"><b>Steps</b></p>

1.  Edit the `Gemfile` file in the root of the project and add the recommended version of the gem:

    ```
    gem 'rest-client', '1.8.0.rc1'
    ```

2.  Run this command from your terminal within the project:

    ```
    bundle update rest-client  
    ```

3. [Validate the fix](https://docs.veracode.com/r/Validating_Fixed_Agent_Based_Scan_Results).