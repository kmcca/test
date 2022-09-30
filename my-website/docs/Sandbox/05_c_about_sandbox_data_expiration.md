---
"ft:title" : "About Sandbox Data Expiration"
"ft:prettyUrl" : "About_Sandbox_Data_Expiration"
---

Veracode archives information about expired sandboxes and scans before deleting these sandboxes and scans.

Before Veracode deletes an expired sandbox or an expired scan, it archives all information about the sandbox scans and the most recent state of all the findings in the sandbox. You can view information about expired sandbox data in Veracode Analytics [dashboards and queries](https://docs.veracode.com/r/c_about_dashboards).

You can automatically recreate a sandbox when it expires if you are in [time-to-live mode](https://docs.veracode.com/r/About_Sandbox_Data_Retention). You can enable the `auto-recreate` setting when you [create the sandbox](https://docs.veracode.com/r/Create_a_Sandbox) using the Veracode Platform, or by using the [`createsandbox.do`](https://docs.veracode.com/r/r_createsandbox) API call. When you set `auto-recreate` to true, the Veracode Platform:

-   Renames the expired sandbox by appending `expired` to the original filename
-   Creates a new sandbox with the sandbox name

A development pipeline that uses a sandbox for scanning can continue to operate without interruption.

In general, when in the [rolling-histories mode](https://docs.veracode.com/r/About_Sandbox_Data_Retention), the sandbox data retention is more conducive to the continuous integration use case because Veracode never deletes the entire sandbox.

For information about the development sandbox expiration date and auto-recreate status, see the Sandbox page in the Veracode Platform. You can also call the [`getsandboxlist.do`](https://docs.veracode.com/r/r_getsandboxlist) API to view this sandbox expiration date and auto-recreate status.
