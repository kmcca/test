---
"ft:title" : "Customizing Severities for a Policy"
"ft:prettyUrl" : "c_policy_custom_severities"
---
When [creating a policy](https://docs.veracode.com/r/t_create_policy), you can customize the severity levels by giving them a higher or lower severity than the Veracode standard. Custom severities apply immediately, changing the results of the latest scan for all applications assigned to this policy.

When you click **Add New Custom Severity** on the Rules page, the CWEs table lists the standard Veracode severity for each supported CWE ID. From the Custom Severity dropdown menu, select the new severity for the CWE ID you want to customize.

After you click **Save**, the custom severities appear in the Rules section of the Add New Policy page.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> Existing applications assigned to this policy automatically have custom severity additions applied to the latest static and dynamic scan results. This change may impact policy compliance status for these affected applications.</p>
