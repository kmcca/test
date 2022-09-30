---
"ft:title" : "Fix Example Direct Vulnerability for Ant"
"ft:prettyUrl" : "Fix_Example_Direct_Vulnerability_for_Ant"
---

When your configuration file specifically references a library, or you add the library to your project as a JAR file, Veracode SCA refers to the library as a direct dependency.

These example steps provide a fix for an [Unauthorized Modification of Nodes](https://www.sourceclear.com/registry/security/unauthorised-modification-of-nodes/java/sid-4029) vulnerability in [Apache Kafka, version 0.9.0.1](https://www.sourceclear.com/registry/libraries/9470?version=0.9.0.1) in the [example-java-ant](https://github.com/srcclr/example-java-ant) repository.

<p font-size="13pt"><b>Steps</b></p>

1. Delete the `kafka_2.11-0.9.0.1.jar`file in the `libsrc/` directory.

    The `libsrc/` directory is the location where you store the JAR files for your project. 

2. From the [issue details page](https://docs.veracode.com/r/View_SCA_Issue_Details), click the link to the appropriate version of the Apache Kafka library in [Maven Central](https://mvnrepository.com/artifact/org.apache.kafka/kafka_2.11/0.10.2.1).
3. Within that page, select the download link for the Apache Kafka JAR file.
4. Download the JAR file to the `libsrc/` directory.
5. [Validate the fix](https://docs.veracode.com/r/Validating_Fixed_Agent_Based_Scan_Results).