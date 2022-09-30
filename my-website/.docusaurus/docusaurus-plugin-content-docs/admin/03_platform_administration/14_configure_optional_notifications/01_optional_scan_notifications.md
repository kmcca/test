---
"ft:title" : "Optional Scan Notifications"
"ft:prettyUrl" : "c_optional_scan_emails"
---

You can [unsubscribe from notifications](https://docs.veracode.com/r/t_configure_emails) for specific scan types to stop receiving the emails listed in these tables.

<p><span style="font-size: medium;">Static Policy Scans</span></p>

| Event                          | Email Subject                                                   | Sample Email Text                                                                                                                                                                                                                | Recipients                                                  |
|--------------------------------|-----------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| Scan completed                 | POLICY: Policy Scan Completed: {application_name} - {scan_name} | Thank you for using Veracode. The static policy scan of {application_name} - {scan_name} is complete.                                                                                                                            | Security Leads, members of the team that submitted the scan |
| Prescan submitted              | PRESCAN: {application_name} - {scan_name} for Static Analysis   | PRESCAN: The application {application_name}, {scan_name} has been submitted for Static Analysis.                                                                                                                                 | Security Leads, members of the team that submitted the scan |
| Prescan completed              | Policy Scan Started: {application_name} - {scan name}           | Thank you for using Veracode. Please refer to the following information about your policy static scan of {application_name}. <ul><li>Scan name: {scan_name}</li><li>Prescan: complete</li><li>The scan is in progress.</li></ul> | Submitter                                                   |
| Scan results delayed           | Scan Results Delayed                                            | Veracode encountered a technical issue with the following scan. It is under investigation and Veracode is working to resolve the issue.                                                                                          | Members of the team that submitted the scan                 |
| Partial scan results available | Partial Scan Results Available                                  | Some results of the static scan, {scan_name}, are available.                                                                                                                                                                     | Submitter                                                   |

<p><span style="font-size: medium;">Static Sandbox Scans</span></p>

| Event             | Email Subject                                                     | Sample Email Text                                                                                                                                                                                                                 | Recipients                                                  |
|-------------------|-------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| Scan completed    | SANDBOX: Sandbox Scan Completed: {application_name} - {scan_name} | Thank you for using Veracode. The static sandbox scan of {application_name} - {scan_name} in {sandbox_name} Sandbox is complete.                                                                                                  | Security Leads, members of the team that submitted the scan |
| Prescan completed | Sandbox Scan Started: {application_name} - {scan name}            | Thank you for using Veracode. Please refer to the following information about your sandbox static scan of {application_name}. <ul><li>Scan name: {scan_name}</li><li>Prescan: complete</li><li>The scan is in progress.</li></ul> | Submitter                                                   |

