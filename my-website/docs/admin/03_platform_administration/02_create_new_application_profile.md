---
"ft:title" : "Create a New Application Profile"
"ft:prettyUrl" : "t_add_application"
---

You must create an application profile before you can submit a scan to Veracode.

<p font-size="13pt"><b>Before You Begin</b></p>

You must have the Creator or Security Lead [role](https://docs.veracode.com/r/c_role_permissions).

<p font-size="13pt"><b>Overview</b></p>

You can also create an application profile with the [Applications API](https://docs.veracode.com/r/r_applications_create).

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> If a third party submits the scans for your organization, see <a href="https://docs.veracode.com/r/request_profile_cots">Requesting a Third-Party Application Scan</a> for instructions on creating an application.
</p>

<p font-size="13pt"><b>Steps</b></p>

1. In the Veracode Platform, select **My Portfolio** \> **Applications**.

2. Click **Add New Application**.

3. Enter the application name.

4. Optionally, enter a description.

5. Select the business criticality of this application to your organization.

    The business criticality determines the default [policy](https://docs.veracode.com/r/policy_understand) for the application. You can change the business criticality later, if necessary, by [editing the profile](https://docs.veracode.com/r/t_edit_application_profile).

6. Select a policy from the dropdown menu if you do not want to use the default policy.

7. Select the business unit that manages this application.

    If the business unit does not yet exist on the menu, an [Administrator must add it](https://docs.veracode.com/r/t_add_business_unit).

8. If you belong to any teams, click **Edit** below the list of teams to [specify which teams can access the application](https://docs.veracode.com/r/Assign_an_Application_to_Teams).

9. Enter the name and email address of the business owner.

    The business owner is the person responsible for managing the application and who receives all email [notifications](https://docs.veracode.com/r/c_email_notifications) about the application.

10. Select your application settings. The available settings vary depending on your [role](https://docs.veracode.com/r/c_role_permissions), account settings, and Veracode subscription.

     -   For Static Scan Dependencies, select whether you can select dependent modules as top-level modules when [configuring a static scan](https://docs.veracode.com/r/c_request_modules_scan).
     -   For Software Composition Analysis, select whether to enable Veracode Software Composition Analysis scans of this application.
     -   For Next-Day Consultations, select whether you can schedule [next-day consultation calls](https://docs.veracode.com/r/t_next_day_consultation) with Veracode for this application.

11. If you want to use tags to organize the application profile, enter comma-separated values in the Tags field.

12. If you want to set a custom name for the application in the [Archer data feed](https://docs.veracode.com/r/c_about_archer), enter an Archer application name.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> This field is only available to Security Leads.
</p>

12. Enter values for up to 25 custom fields to add any other metadata on which you want to track or analyze this application.

13. Click **Submit**.

