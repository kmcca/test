---
"ft:title" : "Fix Example Transitive Vulnerability for Maven"
"ft:prettyUrl" : "Fix_Example_Transitive_Vulnerability_for_Maven"
---

To fix a transitive library for Maven, override the transitive dependency by adding the appropriately versioned dependency as a direct library.

These steps provide a fix for a [Timing Attack Via Comparison Function](https://www.sourceclear.com/registry/vulnerabilities/2345) vulnerability in [OrientDB Core, version 2.1.9](https://www.sourceclear.com/registry/libraries/1288?version=2.1.9) in the [example-java-maven](https://github.com/srcclr/example-java-maven) repository.

<p font-size="13pt"><b>Before You Begin</b></p>

You must have already run a Veracode SCA agent-based scan or run the `npm install` command to install dependencies. These actions result in a `node_modules` folder and a `package-lock.json` appearing in your project. 

<p font-size="13pt"><b>Steps</b></p>

1. Add this text to the `pom.xml` file in the root of the project:

    ```
    <dependency>
    <groupId>com.orientechnologies</groupId>
    <artifactId>orientdb-core</artifactId>
    <version>2.1.11</version>
    </dependency>
    ```

2. [Validate the fix](https://docs.veracode.com/r/Validating_Fixed_Agent_Based_Scan_Results).
