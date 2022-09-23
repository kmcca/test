---
"ft:title" : "Configure a TeamCity Project for Veracode Scans"
"ft:prettyUrl" : "c_config_teamcity_scan"
---
You can configure TeamCity jobs to upload binaries to Veracode for scanning. When you perform a Veracode scan, you use your same TeamCity build process, but add a build step for the Veracode parameters.

<p font-size="13pt"><b>Before You Begin</b></p>

- You meet the [prerequisites](https://docs.veracode.com/r/c_about_teamcity).
- You have [installed the TeamCity plugin](https://docs.veracode.com/r/Install_the_Veracode_TeamCity_Plugin).
- You are logged in to TeamCity as administrator.

<p font-size="13pt"><b>Steps</b></p>

1. Open the TeamCity project to which you want to apply the Veracode settings.

2. Click **Edit Configuration Settings** in the top-right corner.

3. In Build Steps, click **Add build step**.

4. From the dropdown menu, select **Upload and Scan with Veracode.**

5. In the Application Name field, enter the name of the application you want Veracode to scan.

6. Optionally, if the specified Veracode application does not already exist, select **Create New**.

7. If applicable, enter the name of the team associated with the scan. To enter more than one team, use a comma-separated list.

8. From the Business Criticality menu, select the level of criticality of this application.

9. In the development sandbox Name field, enter the name of the sandbox in which you want to run the scan as a sandbox scan.

10. Select the **Create Sandbox** checkbox if the sandbox does not already exist, but is a new sandbox you want TeamCity to create.

11. In the Scan Name field, enter a name for the static scan you want to submit to Veracode for this application.

12. In the Upload field, you can include and exclude filepath patterns of the files you want to upload and scan. Use a comma-separated list of Ant-style include patterns relative to the job workspace project name that you entered in the Project Name field.

13. In the Scan field, you can include and exclude filename patterns of the uploaded files you want to scan as top-level modules. Use a comma-separated list of Ant-style include patterns with only the filenames of the files you have uploaded, not the filepaths.

14. Optionally, use the Save As fields to automatically remove characters from the filenames you are uploading, such as version numbers in this example: `teamcity-plugin-1.2.0.jar`. In the Filename Pattern field, enter the filename and replace the text you want to always remove with two asterisks, such as in this example: `teamcity-plugin**.jar`. In the Replacement Pattern field, enter the filename to which you want to rename your files, as in this example: `teamcity-plugin.jar`.

15. Select the **Wait for scan to complete** checkbox if you want the TeamCity build to wait for the Veracode scan to complete. Enter the timeout period (in minutes) that you want TeamCity to wait. A Veracode policy scan fails, regardless of whether it completes or not, if it does not meet the requirements of the associated policy.

16. For Delete Incomplete Scan, select an option for automatically deleting an incomplete scan, based on its status, to allow the [`uploadandscan`](https://docs.veracode.com/r/r_uploadandscan) action to continue processing. Default is `0`, which specifies to not delete an incomplete scan.

17. For Veracode Credentials, enter your [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3). If you entered these credentials on the Veracode administration page, you can select the **Use global Veracode user credentials** checkbox. The credentials you enter here override the global credentials.

18. Click **Save**.

19. Review all the build steps and click **Run**.

    You can click the blue **?** icons in the field names to see more information.