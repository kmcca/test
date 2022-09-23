---
"ft:title" : "Add a Jenkins Build Job for Static Analysis"
"ft:prettyUrl" : "t_configure_jenkins"
---
You can configure a Jenkins build job in a freestyle or pipeline project for uploading binaries to Veracode for [Static Analysis](https://docs.veracode.com/r/c_static_overview). You continue to use your same build process, but you add a post-build action for the Veracode parameters.

<p font-size="13pt"><b>Before You Begin</b></p>

- You meet the [prerequisites](https://docs.veracode.com/r/c_using_jenkins).
- You have [installed the Jenkins plugin](https://docs.veracode.com/r/t_install_jenkins).

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> The Veracode Jenkins Plugin only supports freestyle and pipeline projects.</p>

<p font-size="13pt"><b>Steps</b></p>

1. In the Jenkins left menu, click **New Item**.

2. In the Enter an Item name field, enter a name for this new scan that you want to submit to Veracode.

3. Select one of these options:

    - If you want to create a new project using the standard projects types provided by Jenkins, select one of the available project types listed.
    - If you want to create a new project based on an existing project, in the **Copy from** input box, enter the name of an existing project you want to use as the model when you create the new item.
   
4. Click **OK**.

5. Click **Advanced...** to expand the Advanced Project Options.

6. In the Post-build Actions section, from the Add post-build action dropdown menu, select **Upload and Scan with Veracode**.

7. In the Application Name field, enter the name of the application you want Veracode to scan.

    To use the Jenkins project name as the application name, enter `$projectname`.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> Do not wrap the application name in quotation marks.</p>

8. If the application does not already exist in the Veracode Platform, but is a new application you want Jenkins to create, select the **Create Application** checkbox.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
    <b>Note:</b> If you select this option, you must also provide the name of the team that is associated with the application.</p>

9. From the Business Criticality dropdown menu, select the level of criticality of this application.

10. In the Sandbox Name field, enter the name of the sandbox in which you want to run the scan as a [sandbox scan](https://docs.veracode.com/r/c_jenkins_sandbox).

11. If the sandbox does not already exist in the Veracode Platform, but is a new sandbox you want Jenkins to create, select the **Create Sandbox** checkbox.

12. In the Scan Name field, enter a name for the static scan you want to submit to the Veracode Platform for this application.

    To use the Jenkins project build number as the scan name, enter `$buildnumber`. To use the date and time of the Jenkins build job submission as the scan name, enter `$timestamp`.

13. In the Upload field, you can include and exclude filepath patterns of the files you want to upload and scan.

    Use a comma-separated list of ant-style `include` patterns relative to the job workspace project name. The project name is the one you entered in the Project name field. For a description of the ant-style pattern format, see [https://ant.apache.org/manual/dirtasks.html](https://ant.apache.org/manual/dirtasks.html).

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
    <b>Note:</b> The Upload field does not accept variable names.</p>

14. In the Scan field, you can include and exclude filename patterns of the uploaded files you want to scan as top-level modules.

    Use a comma-separated list of ant-style `include` patterns with only the filenames of the files you have uploaded, not the filepaths.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
    <b>Note:</b> The Scan field does not accept variable names.</p>

15. You can rename the files you are uploading by entering the filename pattern of the uploaded files that you want to rename and clicking **Save As**. You must also enter the replacement filename pattern that represents the groups that the filename pattern captured.

16. Select the **Wait for scan to complete** checkbox if you want the Jenkins job to wait for the Veracode scan to complete.

    Enter the maximum time in minutes that you want the Jenkins job to wait before skipping the **Upload and Scan with Veracode** action. Allow enough time for a typical scan of your application to complete. A Veracode policy scan fails, regardless of whether it completes or not, if it does not meet the requirements of the associated policy.

17. For Delete Incomplete Scan, select an option for automatically deleting an incomplete scan, based on its status, to allow the [`uploadandscan`](https://docs.veracode.com/r/r_uploadandscan) action to continue processing. Default is `0`, which specifies to not delete an incomplete scan.
18. If you provided Veracode credentials on the Manage Jenkins page and want to use them for this project, select the **Use global Veracode API ID and key** checkbox.

19. In the Veracode Credentials section, enter your Veracode API credentials.

    If you have [bound your Veracode API credentials](https://docs.veracode.com/r/t_binding_creds), you can enter the environment variables for the API ID and key.

20. Click **Apply** and **Save**.

21. Go to the Jenkins project and click **Build Now** from the left menu.

<p font-size="13pt"><b>Next Steps</b></p>

You can monitor the progress of the Veracode job by selecting the build from the Jenkins left menu and clicking **Console Output**.