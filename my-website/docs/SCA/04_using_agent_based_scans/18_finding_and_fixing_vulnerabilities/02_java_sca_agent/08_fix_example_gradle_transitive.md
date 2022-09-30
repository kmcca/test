---
"ft:title" : "Fix Example Transitive Vulnerability for Gradle"
"ft:prettyUrl" : "Fix_Example_Transitive_Vulnerability_for_Gradle"
---

To fix a transitive library for Gradle, override the transitive dependency by adding the appropriately versioned dependency as a direct library.

These steps provide a fix for a [Timing Attack Via Comparison Function](https://www.sourceclear.com/registry/vulnerabilities/2345) vulnerability in [OrientDB Core, version 2.1.9](https://www.sourceclear.com/registry/libraries/1288?version=2.1.9) in the [example-java-gradle](https://github.com/srcclr/example-java-gradle) repository.

<p font-size="13pt"><b>Before You Begin</b></p>

You must have already run a Veracode SCA agent-based scan or run the `npm install` command to install dependencies. These actions result in a `node_modules` folder and a `package-lock.json` appearing in your project.

<p font-size="13pt"><b>Steps</b></p>

1. Edit the `build.gradle` file in the root of the project, and add this text in the `dependencies` scope:

    ```
    compile ('com.orientechnologies:orientdb-core:2.1.11') {
      force = true
    }
    ```

2. [Validate the fix](https://docs.veracode.com/r/Validating_Fixed_Agent_Based_Scan_Results).
