---
"ft:title" : "Mitigating Flaws in Sandbox Scans"
"ft:prettyUrl" : "c_mitigate_sandbox"
---

You can mitigate flaws found in sandbox scans.

You can validate the security of your application using a development sandbox scan before you submit a policy scan that counts towards your policy compliance score. Alternatively, you have the option to promote a sandbox scan to a policy scan that counts toward your policy compliance score.

To view which flaws in your sandbox scan affect your policy, select the **Fix for Policy** filter in the Triage Flaws page of your scan results.

If you choose to use the promote functionality, designate one sandbox to use for promotion purposes. Apply all mitigations to the latest scan of the complete application and only promote the sandbox designated for promotion. When you are satisfied with the security posture of the application scanned in the designated development sandbox, you can promote the most recent development sandbox to policy.

You can create other sandboxes to test newer versions of your application or individual components of an application. However, Veracode recommends that you do not promote these sandboxes.

When you promote a sandbox scan to a policy scan, you also promote any mitigations of flaws found in the sandbox scan, regardless of whether the mitigation status is proposed, rejected, or accepted. Sandbox scans inherit mitigations from previous scans of the same application. When you promote a sandbox scan, the mitigation status of each flaw in the promoted scan becomes the mitigation status of that policy scan.
