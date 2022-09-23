---
"ft:title" : "Manually Link Dynamic Analysis Results to an Application"
"ft:prettyUrl" : "t_link_apps"
---
You can link results from a Dynamic Analysis to an application profile to evaluate the results against policy. You can also see the results for all types of scans of the application aggregated in a single report.

<p font-size="13pt"><b>Before You Begin</b></p>

You must have the Security Lead, Creator, or Submitter [role](https://docs.veracode.com/r/c_role_permissions) to be able to manually link results.

You can only link the results of one URL configuration to an application. However, you can link the same target URL with various configurations to the same application, even if the configurations are in a different Dynamic Analysis.

<p font-size="13pt"><b>Overview</b></p>

You can also link Dynamic Analysis results to an application with the [Dynamic Analysis API](https://docs.veracode.com/r/t_dynamic_linkAPI).

<p font-size="13pt"><b>Steps</b></p>

1. In the Veracode Platform, go to the **Dynamic Analysis Results** tab of the analysis summary page, and select **Actions** \> **Link to Application**.

    The Link to Application window opens.

2.  Select the application you want to link to from the list. You cannot select an application that is already linked to a URL configuration.

3.  Click **Save**.

<p font-size="13pt"><b>Results</b></p>

The linked application appears in the Additional Information section on the Scan Details page.

Linked Dynamic Analysis results are now available from the application overview. Click **Completed** in the left navigation menu of the Veracode Platform to see your completed Dynamic Analysis scans.

<p font-size="13pt"><b>Next Steps</b></p>

Now that you have linked the results, you can [access the Coverage Report for the Dynamic Analysis](https://docs.veracode.com/r/Understanding_the_DA_Coverage_Report).