---
"ft:title" : "Address Veracode SCA Vulnerabilities"
"ft:prettyUrl" : "Address_Veracode_SCA_Vulnerabilities"
---

You can take mitigation actions to temporarily address the vulnerabilities found in the latest Veracode Software Composition Analysis \(SCA\) scan of your application.

<p font-size="13pt"><b>Steps</b></p>

1.  Go to **Scans & Analysis** \> **Software Composition Analysis** to view which of your applications are violating your policy.

2.  After you select an application, on the **Third-party Components** tab, click a component filename to investigate the vulnerabilities found in the component.

    The Component Profile opens where you can view additional information about the component including other versions of the component, component vulnerabilities, and applications that depend on the component.

3.  After you address the vulnerability, you must specify the reason or method you took to address it. From **Application** \> **Vulnerabilities** tab, search by **CVE ID**, **Severity**, or **Component Filename**, and select one or more vulnerabilities to flag as mitigated.

4.  From the **Action** menu, select one of the following action types:

    -   **Mitigate by Environment** to state that an environmental control provided by the operating system on the server the application is running on addressed the vulnerability.

    -   **Mitigate by Design** to state that custom business logic within the body of the application, which may not be fully identifiable by an automated process, addressed the vulnerability.

    -   **Potential False Positive** to state that Veracode has incorrectly identified something as a vulnerability.

    -   **Comment** to communicate information about the vulnerability to your team without applying mitigations.

        <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> If you use <a href="https://docs.veracode.com/r/c_review_TSRV">TSRV</a> (Technique, Specifics, Remaining Risk, and Verification) format for mitigation proposals, Veracode prompts you to enter details about the mitigation.
</p>
    
    The mitigation type is displayed in the Mitigation column after you apply an action. All mitigations are displayed with a **\(proposed\)** notation after the mitigation type until the mitigation is approved by a member of your team with the Mitigation Approver role.

5.  To view mitigation history of a component, select the **Component Filename**, and go to the **History** tab on the Component Profile.

    Component mitigation information by severity is also available from **Application** \> **Software Composition Analysis** \> **Third-party Components** tab. Hover over vulnerabilities with an asterisk to view a tooltip with mitigation information.

<p font-size="13pt"><b>Next Steps</b></p>

A [Mitigation Approver](https://docs.veracode.com/r/c_role_permissions) can approve or reject your proposed mitigations.

