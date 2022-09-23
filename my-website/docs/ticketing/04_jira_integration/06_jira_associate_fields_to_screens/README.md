---
"ft:title": "Associate Veracode Fields with Project Screens in Jira"
"ft:prettyUrl": "t_jira_display_veracode_fields"
---
You configure your screen template in Jira to include two Veracode [custom fields](https://docs.veracode.com/r/request_profile). When importing findings to Jira, the Veracode Integration for Jira automatically adds the custom fields to each Jira issue of imported findings and populates the values.

<p font-size="13pt"><b>Before You Begin</b></p>

Before a custom field can display on the Issues page in Jira, the specific value intended for that custom field must already exist in the Veracode Platform.

<p font-size="13pt"><b>Overview</b></p>

You configure these Veracode custom fields:

- Veracode Link: manages the association of the Jira issue with the application findings in the scan results on the Veracode Platform. After completing this procedure, this custom field provides links back to the specific application, policy, and findings in the Veracode Platform.
- Mitigation Status and Comments: describes the current mitigation status, with optional comments, for an imported finding.

<p font-size="13pt"><b>Steps</b></p>

1.  In Jira, select **Administration** > **Issues** > **Screens**.

2.  Find the screen template that you use for importing Veracode security findings.

3.  Click **Configure** to display the Configure Screen page for the selected template.

4.  From the Field name dropdown menu, select **Veracode Link** and click **Add**.

5.  From the Field name dropdown menu, select **Mitigation Status and Comments** and click **Add**.

    The custom fields appear on the Configure Screen page.

<p font-size="13pt"><b>Next Steps</b></p>

To prevent your users from changing the Mitigation Status and Comments field, Veracode recommends that you [make the field read-only](01_jira_mitigate_readonly.md).