---
"ft:title" : "Using Third-Party Components Data with Veracode SCA"
"ft:prettyUrl" : "c_SCA_comps"
---

The **Third-Party Components** tab lists all the third-party components in your applications, and provides version, usage, license risk, and known vulnerability information.

The list of components shows the filename and an at-a-glance view of the severity of each vulnerability that Veracode found in each component. The Count column shows you how many times a component is used across all of your applications. The [License](https://docs.veracode.com/r/c_sca_license_info) column details the first license Veracode found for the component, and a risk rating Veracode assigned for the license.

Use the filter to find components by CVE ID, number of affected applications, blocklist presence, component name, severity, or any combination of these filters. If you sort by number of known vulnerabilities by severity, the components in the grid are sorted by total severity. If you switch tabs after filtering data, the filter sorts the content in the new tab unless you clear the filter. The **Blocklist** switch is only visible to users with the Security Lead [role](https://docs.veracode.com/r/c_role_permissions).

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> If you scanned a JavaScript application that uses both Bower and NPM package managers, and a component exists in both the <code>bower_components</code> and <code>node_modules</code> folders, Veracode SCA displays both of the components individually.
</p>

<p><span style="font-size: medium;">Component Details</span></p>

Click a component filename to view detailed information for that component. The details in the popup include:

-   **Other Versions**: A list of all known versions of this component, an indication of whether that component is currently in your application portfolio, and the known vulnerabilities in that component.
-   **Vulnerabilities**: The list of vulnerabilities in this component as well as its severity, CVE ID, CWE ID, and description.
-   **Dependent Applications**: This tab lists any applications that contain this component, the policy associated with that application, and a color-coded shield icon that indicates if the application is in compliance with its policy.

Additional component details, such as vulnerable methods and dependency graphs, are available through [agent-based scanning](https://docs.veracode.com/r/c_sc_what_is).

Use the filter function on the **Third-Party Components** tab to list applications by CVE ID, component, application name, or any combination of these filters.

