---
"author": ["Scott Jordan"]
"ft:originID": "about_sandbox"
"ft:lang": "en-US"
"ft:title": "Using the Development Sandbox"
"ft:prettyUrl": "c_about_sandbox"
"media_dir": "images/"
---
Development sandboxes allow individual contributors and teams to scan applications and measure the results against the policy rules. These scans do not affect the policy compliance of the entire application.

As a developer, you can create sandboxes within existing application profiles and submit the code for analysis while still in development. At the same time, you can still run a static policy scan of the same application code. After completing a sandbox scan, you can promote that sandbox scan to a policy scan that counts toward your policy compliance score.

Using sandbox scans can reduce application security risk by allowing you to obtain feedback about your in-development applications. Sandbox scans do not degrade the policy status and flaw metrics for the production versions of those applications. You can analyze multiple versions of the same application at the same time as part of a branch or trunk-based development strategy.

Veracode matches flaws found in sandbox scans with those in policy scans to ensure any mitigations you have previously entered persist across all scans of the same application. Therefore, the code that Veracode scans within a sandbox is similar to the code the policy scan assesses.

For applications that comprise several microservices, Veracode recommends that you do not scan these in isolation within separate sandboxes. This method inhibits the ability of your team to promote the sandbox scan to a policy scan, which impacts the effectiveness of progress reporting. Instead, if you must scan microservices in isolation, Veracode recommends you create a separate application profile and use the sandbox and policy scan capabilities. This strategy facilitates the branching of the microservices as development progresses and enables you to perform mitigations as you create new versions of a microservice.

You can use metadata to tag application profiles by [using custom fields in the metadata page](https://docs.veracode.com/r/t_add_application) or using the Veracode Applications API so that you can group applications as one microservice. You can, then, view the collective results in Veracode Analytics to track the security posture of a set of microservices.

The development sandbox is a temporary store of your security analysis. Veracode retires this data based on the [data retention setting](https://docs.veracode.com/r/About_Sandbox_Data_Retention) that you apply. The policy scan is the true, audit-compliant record of analysis results.
