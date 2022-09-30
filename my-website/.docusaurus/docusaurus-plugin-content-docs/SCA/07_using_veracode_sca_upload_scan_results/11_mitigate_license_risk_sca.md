---
"ft:title" : "Mitigate License Risk with Veracode SCA"
"ft:prettyUrl" : "Mitigate_License_Risk_with_Veracode_SCA"
---

You can take mitigation actions to temporarily address license risks found in Veracode Software Composition Analysis \(SCA\).

<p font-size="13pt"><b>Before You Begin</b></p>

You must have the Reviewer or Security Lead [role](https://docs.veracode.com/r/c_role_permissions).

<p font-size="13pt"><b>Steps</b></p>

1. In the Veracode Platform, go to **Scans & Analysis** \> **Software Composition Analysis**.

2. Select an application from the Applications list.

3. Click the **Licenses** tab.

4. Select the licenses on which you want to perform a mitigation action.

5. Select one of these actions from the Mitigation Actions menu:

    -   **Mitigate as Approved by Legal**: the legal team of your organization has determined this license to be acceptable.
    -   **Mitigate as Commercially Licensed**: the library has a dual license, open-source and commercial, and this application contains the commercial version.
    -   **Mitigate as Experimental**: your development team is experimenting with the functionality of the library and will not violate license terms by using it in production.
    -   **Mitigate as Internal Use**: the license terms allow using the library for internal purposes.
    -   **Comment**: communicate information about the license to your team without applying mitigations.
 
6. Click **Apply**.

7. Enter a comment with details about the mitigation.

8. Click **Continue**.

    The mitigation type and status appear in the Mitigation column of the Licenses table and in the **History** tab of the component profile.

<p font-size="13pt"><b>Next Steps</b></p>

A user with the Mitigation Approver [role](https://docs.veracode.com/r/c_role_permissions) must [approve any proposed mitigations](https://docs.veracode.com/r/Approve_or_Reject_Veracode_SCA_Mitigations) to apply them.

