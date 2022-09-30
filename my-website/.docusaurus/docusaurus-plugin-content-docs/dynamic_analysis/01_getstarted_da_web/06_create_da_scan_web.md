---
"ft:title" : "Create a Dynamic Analysis"
"ft:prettyUrl" : "t_create_was"
---
You can create a Dynamic Analysis in the Veracode Platform for scanning a web application or API specification.

<p font-size="13pt"><b>Before You Begin</b></p>

You must have the Creator, Submitter, or Security Lead [role](https://docs.veracode.com/r/c_role_permissions) to create and submit a Dynamic Analysis.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> Veracode does not support running Dynamic Analysis scans through a VPN.</p>

<p font-size="13pt"><b>Overview</b></p>

For more details about Veracode API Scanning, see [create a Dynamic Analysis for scanning an API specification](https://docs.veracode.com/r/About_Veracode_API_Scanning).

<p font-size="13pt"><b>Steps</b></p>

1.  In the Veracode Platform, select **Scans & Analysis** \> **Dynamic Analysis**.

    The All Dynamic Analyses page opens.

2.  Click **Scan Web Applications** or **Scan API Specification**.

3.  Enter a name for the Dynamic Analysis. Use a name that uniquely identifies the analysis within your organization. For example, use the scan name, the team, or business unit responsible for this web application or API specification as the name of the Dynamic Analysis.

4.  Enter the URLs using one of these methods:

    -   Upload a CSV file that contains a list of multiple URLs \(250 maximum\).

        Download the CSV template, enter all URLs and their respective credentials, save the file, and upload the saved file.

    -   Enter the URLs manually \(250 maximum\).

    As you enter the URLs, they appear in the URLs to Scan list.

5.  From the Actions menu at the end of each URL row, you can link to an application or delete the URL from the Dynamic Analysis.

6.  In the Visibility Settings section, select who can see the results of the Dynamic Analysis. Visibility settings apply to all the URL scans in the analysis.

7.  Optionally, in the Organization Information section, select the business unit associated with the applications you are scanning and the name and email address of the person responsible for the applications.

8.  In the Scanning Certification section, you must select the checkbox to confirm that your organization has the right to scan the URLs you have provided.

<p font-size="13pt"><b>Next Steps</b></p>

- Click [**Configure**](https://docs.veracode.com/r/c_was_configure) to optionally modify the default configuration of the Dynamic Analysis and the individual URL configurations.
- Click [**Schedule**](https://docs.veracode.com/r/Scheduling_Dynamic_Analysis_Scans) to optionally indicate when you want the Dynamic Analysis to start and how long you want it to run.
- Click **Review and Submit** if you do not want to provide any other information.