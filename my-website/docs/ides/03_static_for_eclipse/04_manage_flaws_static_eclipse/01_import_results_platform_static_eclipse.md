---
"ft:title" : "Import Veracode Results from the Veracode Platform into Eclipse"
"ft:prettyUrl" : "Download_Veracode_Results_for_Eclipse_Using_the_Veracode_Platform"
---
You can download scan results from the Veracode Platform and import them into your IDE. You can also [download and import results with the Results API](https://docs.veracode.com/r/c_download_results_Eclipse).

<p font-size="13pt"><b>Steps</b></p>

1.  In the Veracode Platform, from the left navigation menu, click **Results**.

2.  Click **Download Report** and select **Detailed XML Export (XML)** from the dropdown menu.

3.  Click **Download**. The report downloads as a ZIP file with the XML document and the associated XSD schema.

4.  In your IDE, select **Veracode** \> **View Results**.

5.  Click **Browse**. Then, select the XML results file to open.

6.  Click **Open**.

    The scan results open in the Results window. In the Results window you can perform these tasks to review the results while working in your development project:

    -   Filter or search for discovered flaws.
    -   Double-click a flaw to open the source file, if the solution is open, and place your cursor on the line that contains the flaw.
    -   Right-click a flaw and select to view the related call stacks, mitigations, and other details.

