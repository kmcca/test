---
"ft:title" : "Automatically Link Dynamic Analysis Results to an Application"
"ft:prettyUrl" : "t_autolink_apps"
---
The Dynamic Analysis auto-linking feature automatically links URL scans from Dynamic Analyses to applications that already exist in the Veracode Platform. The matching process searches for URLs previously associated with the existing application that match the target URL in the Dynamic Analysis.

<p font-size="13pt"><b>Before You Begin</b></p>

You must have the Administrator or Security Lead [role](https://docs.veracode.com/r/c_role_permissions) to enable the auto-linking feature for your organization. After enabling auto-linking, any users in your organization who have the appropriate permissions can view linked results.

<p font-size="13pt"><b>Overview</b></p>

Linking scan results to applications enables you to:

- Review the application policy evaluation.
- [Access the Links Report for the Dynamic Analysis](https://docs.veracode.com/r/t_view_DA_linksreport)
- Download a PDF of the results.

Auto-publishing results of concurrent scans improves Dynamic Analysis scans. When Veracode links Dynamic Analysis scans to an application profile, Veracode matches flaw results that do not require any additional verification on a subsequent scan. This practice reduces the publishing time of results while maintaining a low false-positive rate.

<p font-size="13pt"><b>Steps</b></p>

1.  Click the gear icon ![](../images/gear_icon_platform.png) in the top-right of the Veracode Platform and select **Dynamic Analysis Auto-Linking**.

    The Dynamic Analysis Auto-Linking Options page opens.

2.  Select an auto-linking option:

    - **Do not auto-link**: do not auto-link any URL scan results or create any new applications.
    - **Auto-link but do not create applications**: search existing applications for previously associated URLs that match the target URL and auto-link future URL scan results to the application.
    - **Auto-link and create applications**: search existing applications for previously associated URLs that match the target URL and auto-link future scan results to the application. For each target URL that does not match any URLs in an existing application, create a new application based on the information you enter in the New Application Name, Business Criticality, Policy, and Visibility Settings fields.

    The selected option applies to all future analyses and results that are not yet published.

    You can only link one target URL to an application at a time. If you have multiple Dynamic Analysis scans that have the same target URL, you can link them to the same application. If you have previously linked a target URL to multiple applications, the auto-linking feature selects the most recently published scan to link to in the future. You can also  [manually unlink results](https://docs.veracode.com/r/Unlink_Dynamic_Analysis_Results_from_an_Application).

3.  Click **Save**.

<p font-size="13pt"><b>Next Steps</b></p>

You can see the results on the application overview of the linked application.