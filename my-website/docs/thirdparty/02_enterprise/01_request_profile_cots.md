---
"ft:title" : "Requesting a Third-Party Application Scan"
"ft:prettyUrl" : "request_profile_cots"
---

To request vendors or third-party providers to upload their code to Veracode for scanning, you must perform these steps:

-   Create a third-party application
-   Request a third-party scan


##Create a Third-Party Application
You must create an application profile for a new application that has not been scanned before. The application profile describes your application and who can submit a scan request for it. In addition, the application profile provides metadata that is used to compute score of the application and report results across all applications.

<p font-size="13pt"><b>Steps</b></p>

1. Log in to the Veracode Platform.
2. Click **Add Application** on the Applications page to begin creating the application.
3. Enter the name of the third-party application and, optionally, a description and tags separated by commas. If the tag name includes a comma, surround the tag with quotation marks. If you have used tags before for other applications, these are available for you to select.
4. Enter the [business criticality](https://docs.veracode.com/r/review_assurancelevels) of this application to your organization. The business criticality determines the default [policy](https://docs.veracode.com/r/policy_understand) for the application. You can change the business criticality later, if necessary, by [editing the profile](https://docs.veracode.com/r/request_profile).
5. Select a policy from the dropdown menu if you do not want to use the default policy.
6. Select the business unit that manages this application. If the business unit does not yet exist in the menu, click **Add a Business Unit** and create it.
7. Enter the name and email address of the business owner who is responsible for this application.
8. Select who has visibility of the application scanning results. You can give visibility to teams of users and change these selections at any time by editing the profile.
9. In the Submission of Scan Data section, select a vendor account that you want to be able to submit scan requests. If you want the vendor to be able to rescan applications without informing you or publishing data to you first, select **Enable Vendor Rescanning**. After you select this option, [vendors can click **Rescan**](02_c_COTS_actions.md) without creating a new scan request.
10. Select a vendor from the dropdown menu, or request a new vendor.
11. Click **Save and Continue**.
12. Optionally, provide this metadata or [edit the profile later](https://docs.veracode.com/r/request_profile) to add more details: 
    - Origin: identify where the application originated, such as from a third-party library or internal development.
    - Industry: select the industry of your company.
    - Application Purpose: identify how you use the application, such as for security or software development.
    - Deployment Method: identify how the application usually deploys, such as web-based or third-party vendor.
    - Archer Application Name: this field, available only for users with the Security Lead role, enables you to set a custom name for the application in the [Archer data feed](https://docs.veracode.com/r/c_about_archer).
    - Custom Metadata: use the custom fields to add any other metadata with which you want to track or analyze this application.
13. Click **Save & Continue** to save the profile information.

<p font-size="13pt"><b>Results</b></p>

Veracode contacts the vendor to begin the provisioning process. Once the vendor has been provisioned or associated with your account, the scan request is sent to the vendor you selected for fulfillment. You can [check the status of the scan](https://docs.veracode.com/r/Checking_the_Scan_Status) as it progresses.

##Request a New Vendor

If the vendor is not already on the Veracode Platform, or has not been associated with your account, you can request them as a new vendor.

<p font-size="13pt"><b>Steps</b></p>

1.  Click the **Request New Vendor** link.
2.  Fill out all required fields for the vendor.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> You must provide a primary point of contact for the vendor.
</p>

3.  Click **OK**.

##Request a Third-Party Scan
After creating a third-party application, you can then request a scan of that application. From the Application Overview, click **Scans and Analysis** and select the scan type you want to perform. If you do not see the scan type you want, it is possible that a scan of that type is already in progress or that scan type is not authorized.

After you request the scan, the status in the application overview is Request In Progress.

