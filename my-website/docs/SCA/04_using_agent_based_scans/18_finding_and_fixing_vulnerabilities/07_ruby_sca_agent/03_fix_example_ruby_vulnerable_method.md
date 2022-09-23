---
"ft:title" : "Fix Example Vulnerable Method for Ruby"
"ft:prettyUrl" : "Fix_Example_Vulnerable_Method_for_Ruby"
---

These example steps provide a fix for a [Reflected Cross-site Scripting \(XSS\) through Unvalidated Input in Error Messages](https://www.sourceclear.com/registry/vulnerabilities/736) vulnerable method in [rack-ssl](https://www.sourceclear.com/registry/libraries/551?version=1.0.0), which is included in the [example-ruby](https://github.com/srcclr/example-ruby) repository.

<p font-size="13pt"><b>Steps</b></p>

1. In the Veracode Platform, select **Scans & Analysis** > **Software Composition Analysis**.
2. Click the **Agent-Based Scan** tab.
3. Select your workspace.
4. Click **Projects**.
5. Click the **srcclr/example-ruby** project.
6. Click **Reflected Cross-site Scripting \(XSS\) through Unvalidated Input in Error Messages** in the Vulnerabilities table.
   
    The Vulnerable Methods section shows that the `redirect_to_https` method is the vulnerable part of the library. 

7. To address the identified vulnerable method, do one of these tasks:

    - Change your code to perform in the same manner without relying on this particular method.
    - Follow the provided instructions to update the library to a safe version. 

8. [Validate the fix](https://docs.veracode.com/r/Validating_Fixed_Agent_Based_Scan_Results).