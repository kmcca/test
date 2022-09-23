---
"author": ["Kevin McCarthy"]
"ft:originID": "customcleansers"
"ft:lang": "en-US"
"ft:title": "About Custom Cleansers"
"ft:prettyUrl": "customcleansers"
"media_dir": "images/"
---
You can annotate Veracode custom cleanser functions in your code to mitigate findings that the Veracode Static Analysis normally finds.

Security Leads can specify the default [mitigation state](https://docs.veracode.com/r/c_cleanser_admin) for findings with custom cleansers.

Custom cleanser functions must be designed to consume non-validated or unmitigated data and return validated or mitigated data. Ensure all data paths that can reach the finding pass through your custom cleanser or an [approved cleanser](https://docs.veracode.com/r/review_cleansers). If any unmitigated input reaches the finding, it is still reported.

Custom cleanser functions can facilitate how you manage your results by minimizing false positives and accelerating the review process. Sanitizing or cleansing user input to remove the risk of attack addresses many common security issues. Open-source and commercial cleansing functions exist, but many developers at large organizations implement their own enterprise cleansing libraries, which Veracode may not recognize.

These cleansing functions provide application security managers and their teams a safe way to avoid and fix security findings. For developers, using cleansing functions can lower noise in reports by reducing the number of findings that a development team needs to review.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> If your custom cleanser implementation uses one of the <a href="https://docs.veracode.com/r/review_cleansers">Veracode supported cleansing functions</a>, the function can assess the findings as reported and mitigated according to the custom cleanser settings. Otherwise, the Static Analysis would either not report the findings or would report them as fixed.
</p>

This table lists the supported flaw classes and CWEs:

| Flaw Class           | CWE        |
|----------------------|------------|
| CRLF Injection       | 93,113,117 |
| File Path Injection  | 73         |
| Open Redirect        | 601        |
| SQL Injection        | 89         |
| Cross-Site Scripting | 80         |

<p><span style="font-size: medium;">Source Code</span></p>

Veracode recognizes that users may want to see the source code for these files because they are including them in their own software projects. Veracode has made the custom cleanser annotations open-source available on GitHub at:

-   [https://github.com/veracode/veracode-attributes](https://github.com/veracode/veracode-attributes)
-   [https://github.com/veracode/veracode-annotations](https://github.com/veracode/veracode-annotations)
