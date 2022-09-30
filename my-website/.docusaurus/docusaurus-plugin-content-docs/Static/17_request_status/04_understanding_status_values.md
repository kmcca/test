---
"ft:title" : "Understanding the Scan Status Messages"
"ft:prettyUrl" : "c_understanding_status_values"
---
You can review the Veracode Static Analysis messages to determine the status of scans.

Scan status values appear in these locations:

-   The Recent Applications list on the Applications page
-   In the In Progress section of the left navigation menu
-   In the individual application overview page

If an application has no status, then you have not requested a [scan](https://docs.veracode.com/r/request_main).

**Module Selection Required**

The prescan completed. The Select Modules page shows the modules. After you make the appropriate entry-point selections, submit the scan for analysis. For future scan requests, you can enable **Auto Scan** to skip this step.

If the Select Modules page shows an error message or no modules exist, an error occurred during prescan. Try one of these actions:

-   Click **Retry Verification** on the Select Modules page.
-   Adjust the submission to include only components supported for analysis and [packaged as recommended by Veracode](https://docs.veracode.com/r/c_comp_quickref).
-   Contact Veracode Technical Support for further assistance.

**Request Incomplete**

Your request does not include some information. You must complete one or more steps in the scan request process before you can submit the request. These steps might involve uploading files, selecting modules, or obtaining vendor acceptance of a third-party scan request.

1.  Go to the Application Overview to review and edit your static analysis request.
2.  Run your scan again.

**Results Ready or Complete**

The scan completed successfully and the results are now available. On the Applications page, click **View** in the Results column, or click **Results** in the left navigation menu.

**Scan in Progress**

You can monitor the scan progress in the Application Overview or wait for an email notification after the scan completes.

**Validating Upload**

Veracode is currently validating the scan submission and preparing it for analysis. Wait until you receive an email notifying you that the prescan results are available. To check the prescan progress, go to the In Progress section of the left navigation menu and click the scan name.

**Vendor Confirmation**

The vendor must confirm the scan request before Veracode can start scanning.

**Vendor Reviewing**

The vendor is performing a requested scan and reviewing results.
