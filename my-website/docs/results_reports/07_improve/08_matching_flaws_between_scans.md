---
"ft:title" : "Matching Flaws Between Scans of the Same Application"
"ft:prettyUrl" : "c_review_matchflaws"
---
Carrying mitigations and comments forward from one scan to the next requires that the flaws match from one scan to the next of the same application.

Flaw matching is a process that occurs when you perform two scans of the same application. Veracode compares the results of the second scan to the first scan to identify any flaws that may be identical between the two scans. If a match is found for any given flaw, any comments or mitigation information you supplied for the original flaw are brought forward to the new flaw, and the flaws are matched in the database.

<p><span style="font-size: medium;">Static Analysis Flaw Matching</span></p>

When publishing new static analysis scan results, Veracode searches these locations within the application to determine if a potentially matching flaw exists:

-   All Static Analysis policy scans
-   All Static Analysis sandbox scans

Veracode uses a complete model of the application program logic and data flow to identify the location of a flaw. Small changes in code location, including changes in line numbers, do not affect how Veracode identifies flaws. You can still change the code containing a flaw so that it no longer matches to a flaw that Veracode found previously.

For a flaw to match across scans, it must meet these criteria:

-   The source file name has not changed.

-   The name of the module in which the flaw is located cannot change between scans. However, Veracode can match flaws if the end of the module name contains a varying numeric sequence. For example, `foo-123.jar` matches with `foo-125.jar`.


This table lists some problems that often occur with Static Analysis flaw matching. If a flaw is tagged as mitigated in a given scan, but the same flaw appears in a later scan with a different ID and not mitigated, it most likely failed for one or more of these reasons:

| Cause of Problem       | Explanation                                                                                                                                                                                                                                                      |
|------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Different module names | If module names differ between scans of an application, Veracode sometimes fails to match issues pertaining to those module names. However, Veracode can match flaws if the end of the module name contains a varying numeric sequence.                          |
| High flaw density      | Veracode sometimes cannot determine which flaws in the new scan map to flaws in the old scan. For example, one scan of an application has five flaws of a specific type in a function, and the next scan has four flaws of that same type in that same function. |
| Moved source files     | Veracode tries to detect source files that have moved within the source tree. For example, `com/veracode/Foo.java` moved to `com/veracode/bar/Foo.java`. Veracode does not explicitly detect source filename changes.                                                |

<p><span style="font-size: medium;">Dynamic Analysis Flaw Matching</span></p>

Dynamic Analysis flaw matching requires you to [link the scan results to an application profile](https://docs.veracode.com/r/t_link_apps). Each scan identifies flaws in the latest version of the application and Veracode determines their statuses based on whether they were found in the previous scan.

