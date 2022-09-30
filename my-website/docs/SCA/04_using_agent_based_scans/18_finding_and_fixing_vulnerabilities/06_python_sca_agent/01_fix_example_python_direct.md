---
"ft:title" : "Fix Example Direct Vulnerability for Python"
"ft:prettyUrl" : "Fix_Example_Direct_Vulnerability_for_Python"
---

When a library is specifically referenced in your `setup.py`, `requirements.txt`, `requirements-dev.txt`, or `dev-requirements.txt`, Veracode SCA refers to the library as a direct dependency.

These example steps provide a fix for a [Denial of Service \(DoS\) Memory Consumption](https://www.sourceclear.com/registry/vulnerabilities/2136) vulnerability in [feedparser, version 5.1.1](https://www.sourceclear.com/registry/libraries/167547?version=5.1.1) in the [example-python](https://github.com/srcclr/example-python) repository.

<p font-size="13pt"><b>Steps</b></p>

1. Edit the `requirements.txt` file in the root of the project to match the following:

    ```
    feedparser== 5.1.2
    ```

2. [Validate the fix](https://docs.veracode.com/r/Validating_Fixed_Agent_Based_Scan_Results).