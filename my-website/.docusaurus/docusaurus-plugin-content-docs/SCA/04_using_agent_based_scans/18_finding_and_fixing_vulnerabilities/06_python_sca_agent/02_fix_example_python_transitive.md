---
"ft:title" : "Fix Example Transitive Vulnerability for Python"
"ft:prettyUrl" : "Fix_Example_Transitive_Vulnerability_for_Python"
---

To fix a transitive library for Python, override the transitive dependency by adding the appropriately versioned dependency as a direct library to your configuration file, which can be a `requirements.txt` or `setup.py` file.

These steps provide a fix for a [Cross-Site Scripting \(XSS\)](https://www.sourceclear.com/registry/vulnerabilities/4286) vulnerability in [html5lib, version .9999999](https://www.sourceclear.com/registry/libraries/238977?version=0.9999999) in the `transitive_vulns` branch of the [example-python](https://github.com/srcclr/example-python) repository.

<p font-size="13pt"><b>Steps</b></p>

1.  Edit the `requirements.txt` file in the root of the project and add the recommended version of the library:

    ```
    html5lib== 0.99999999
    ```
    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Updating some transitive libraries will fail because a specific version is required for usage. In cases such as these, you will need to update the directly specified library to a version which allows for the safe version to be used.
</p>

2. [Validate the fix](https://docs.veracode.com/r/Validating_Fixed_Agent_Based_Scan_Results).