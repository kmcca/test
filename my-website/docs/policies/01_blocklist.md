---
"ft:title" : "Add Components to a Blocklist"
"ft:prettyUrl" : "c_blocklist"
---
You can create a list of third-party software components that are known to contain unacceptable security vulnerabilities. Components on the blocklist are third-party software code that the organization prohibits.

<p font-size="13pt"><b>Before You Begin</b></p>

You must have the Security Lead [role](https://docs.veracode.com/r/c_role_permissions).

<p font-size="13pt"><b>Overview</b></p>

When Veracode finds blocklisted components in applications during a scan, the scan results report a scan policy violation. You can label the policy violations as mitigated or replace or fix the vulnerable component.

<p font-size="13pt"><b>Steps</b></p>

1.  Go to **Scans & Analysis** \> **Software Composition Analysis**.
2.  Find the component that you want to blocklist, and in the Blocklist column, move the switch from OFF to ON.
3.  Optionally, in the Blocklisted Component window, you can enter the remediation advice you want to provide for fixing the vulnerability.
4.  Click **Save**.

<p font-size="13pt"><b>Next Steps</b></p>

You can change the remediation advice for any component at any time by clicking **Edit** at the end of the remediation advice line, and changing the text in the Blocklisted Component window.
