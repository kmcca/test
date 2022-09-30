---
"ft:title": "Associate Veracode Fields with Project Screens in Jira Cloud"
"ft:prettyUrl": "t_jira_cloud_config_custom_fields"
---
You configure your screen template in Jira Cloud to include two Veracode custom fields. When importing findings to Jira, the Veracode Integration for Jira Cloud automatically adds the custom fields to each Jira issue of imported findings and populates the values.

After installing the Veracode Integration for Jira Cloud, the integration creates the following custom fields in Jira Cloud.

-   Veracode Link: manages the association of the Jira issue with the application findings in the scan results on the Veracode Platform. After completing this procedure, this custom field provides links back to the specific application, policy, and findings in the Veracode Platform.
-   Mitigation Status and Comments: describes the current mitigation status, with optional comments, for an imported finding.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> When using the Veracode Integration for Jira Cloud, the Veracode Link custom fields do not appear as individual fields in Jira issues, but are listed in the Issue Description field.</p>

You must associate these custom fields, including the standard Environment field, to Jira screens for the fields to display in Jira issues.

<p font-size="13pt"><b>Steps</b></p>

1.  Log in to Jira Cloud as an administrator.

2.  Select **Jira settings** \> **Issues**.

3.  Under FIELDS, select **Custom fields** to display the Custom fields page.

4.  Locate the Veracode Link field.

5.  Click the menu icon ![](../images/dot-menu.png) for the Veracode Link field and select **Screens**.

6.  Select the checkbox for each screen in your Jira project to which you want to associate the Veracode Link field.

7.  Click **Update**.

8.  Under FIELDS, select **Custom fields** to go back to the Custom fields page.

9.  Repeat steps 5 through 8 for the Mitigation Status and Comments field and the Environment field.

10. Under SCREENS, select **Screens** to display the View Screens page.

11. On the View Screens page, click **Configure** on the row of a screen in your Jira project.

12. On the Configure Screen page, scroll down to the Select Field dropdown menu.

13. From the Select Field dropdown menu, select **Veracode Link**.

    The Veracode Link custom field is now associated with the selected screen.

14. From the Select Field dropdown menu, select **Mitigation Status and Comments** and, then, select **Environment**.

    All three custom fields are now associated with the selected screen.

15. Repeat steps 11 through 14 until you have associated all three custom fields to all selected screens.