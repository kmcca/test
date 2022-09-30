---
"ft:title" : "Fix Example Vulnerable Method for Python"
"ft:prettyUrl" : "Fix_Example_Vulnerable_Method_for_Python"
---

These example steps provide a fix for a [BERserk attack](https://www.sourceclear.com/registry/vulnerabilities/1963) vulnerable method in [rsa](https://www.sourceclear.com/registry/libraries/167149?version=3.0), which is included in the [example-python](https://github.com/srcclr/example-python) repository.

<p font-size="13pt"><b>Steps</b></p>

1. In the Veracode Platform, select **Scans & Analysis** > **Software Composition Analysis**.
2. Click the **Agent-Based Scan** tab.
3. Select your workspace.
4. Click **Projects**.
5. Click the **srcclr/example-python** project.
6. Click **BERserk Attack Vulnerability in the rsa library** in the Vulnerabilities table.
   
    The Vulnerable Methods section shows that the `verify` method is the vulnerable part of the library. 

7. To address the identified vulnerable method, do one of these tasks:

    - Change your code to perform in the same manner without relying on this particular method.
    - Follow the provided instructions to update the library to a safe version. 

8. [Validate the fix](https://docs.veracode.com/r/Validating_Fixed_Agent_Based_Scan_Results).