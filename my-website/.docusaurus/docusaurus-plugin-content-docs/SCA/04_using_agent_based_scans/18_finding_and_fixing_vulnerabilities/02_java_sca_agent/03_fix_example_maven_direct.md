---
"ft:title" : "Fix Example Direct Vulnerability for Maven"
"ft:prettyUrl" : "Fix_Example_Direct_Vulnerability_for_Maven"
---

When your `pom.xml` configuration file specifically references a library, or you add the library to your project as a JAR file, Veracode SCA refers to the library as a direct dependency.

These example steps provide a fix for an [Unauthorized Modification of Nodes](https://www.sourceclear.com/registry/security/unauthorised-modification-of-nodes/java/sid-4029) vulnerability in [Apache Kafka, version 0.9.0.1](https://www.sourceclear.com/registry/libraries/9470?version=0.9.0.1) in the [example-java-maven](https://github.com/srcclr/example-java-maven) repository.

<p font-size="13pt"><b>Steps</b></p>

1. Edit the `pom.xml` file in the root of the project to match this example:

    ```
    <dependency>
    <groupId>org.apache.kafka</groupId>
    <artifactId>kafka_2.11</artifactId>
    <version>0.10.2.1</version>
    </dependency>
    ```

2. [Validate the fix](https://docs.veracode.com/r/Validating_Fixed_Agent_Based_Scan_Results).