---
"author": ["Kevin McCarthy"]
"ft:originID": "review_static_flaw_viewer"
"ft:lang": "en-US"
"ft:title" : "Reviewing Static Flaws"
"ft:prettyUrl" : "review_static_flaw_viewer"
"media_dir": "images/"
---
The triage flaws task allows you to review static flaws in the context of their local copy of the source code for the application. This section describes static flaws and explains how to:

-   [Access static flaw information](#access)
-   [Use the Source Code view](https://docs.veracode.com/r/Use_the_Source_Code_View)
-   [Work with static flaws found in non-debug code](https://docs.veracode.com/r/View_Flaws_Found_in_Non_Debug_Code)

<p><span style="font-size: medium;">About Static Flaws</span></p>

Flaws found by static analysis represent potentially dangerous code paths in an application. Generally speaking, these fall into two categories: vulnerabilities and potential vulnerabilities. Vulnerabilities are exploitable weaknesses in the application, with a code path that can be found and exploited by an attacker to impair the confidentiality of the application, integrity, or availability. Potential vulnerabilities represent weaknesses in the application code that may not be exploitable by an attacker at the present time, either because the code path is unreachable or because some mitigating factor is in place in the code base. However, potential vulnerabilities may become true vulnerabilities in the future if the code architecture or deployment method of the application changes, or if the flawed code is called in another program.

<a name ="access"></a>Veracode Static Analysis uses debug information to report the source file and line number on which the flaw exists, aiding in remediation. Java and .NET applications can be analyzed in non-debug form, but the resulting flaws from a non-debug analysis do not have source file and line number information. Instead, information about location of the flaw is given relative to the module, class path, function name, and approximate location within the function body. See the [compilation instructions](https://docs.veracode.com/r/r_supported_table) for information on how to build your application with debug information.
