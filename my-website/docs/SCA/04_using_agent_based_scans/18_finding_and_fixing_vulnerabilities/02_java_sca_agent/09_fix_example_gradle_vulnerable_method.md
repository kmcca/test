---
"ft:title" : "Fix Example Vulnerable Method for Gradle"
"ft:prettyUrl" : "Fix_Example_Vulnerable_Method_for_Gradle"
---
Veracode SCA supports vulnerable method analysis for the Gradle, Maven, and Ant package managers.

<p font-size="13pt"><b>Overview</b></p>

These example steps provide a fix for a [Information Disclosure](https://www.sourceclear.com/registry/vulnerabilities/1527) vulnerable method in the [jBCrypt](https://www.sourceclear.com/registry/libraries/4015?version=0.3m) library in the [example-java-gradle](https://github.com/srcclr/example-java-gradle) repository.

<p font-size="13pt"><b>Steps</b></p>

1. In the Veracode Platform, select **Scans & Analysis** > **Software Composition Analysis**.
2. Click the **Agent-Based Scan** tab.
3. Select your workspace.
4. Click **Projects**.
5. Click the **srcclr/example-java-gradle** project.
6. Click **Information Disclosure Of Password Hashes Through Crypt_raw** in the Vulnerabilities table.

    The Vulnerable Methods section shows that the `crypt_raw` method is the vulnerable part of the library.

7. To address the identified vulnerable method, do one of these tasks:

    - Change your code to perform in the same manner without relying on this particular method.
    - Follow the provided instructions to update the library to a safe version.

8. [Validate the fix](https://docs.veracode.com/r/Validating_Fixed_Agent_Based_Scan_Results).