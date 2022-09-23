---
"ft:title" : "Reviewing Flaw Sources"
"ft:prettyUrl" : "c__review_flawsources"
---

The flaw sources report quickly identifies main sources of untrusted data in an application and locates all the flaws that share a flaw source.

Being able to identify multiple flaws that you can fix with a single code change significantly reduces the time developers spend on finding and fixing or mitigating vulnerabilities in software code. If a source is secured by design, developers can report all the flaws stemming from the safe source with a single mitigation action.

To access the flaw sources report in the Veracode Platform after a static scan has completed, in the left navigation pane of the application page, click **Results** > **Flaw Sources**.

The flaw sources reports provide this information:

-   The function that contains the flaw
-   The location in the source file of that function
-   The severities of the downstream flaws
-   The CWE with which each flaw is associated
