---
"ft:title" : "Submit an Application to Veracode from Bamboo"
"ft:prettyUrl" : "t_bamboo_app_submission"
---
The Veracode Bamboo Integration enables you to submit applications from your Bamboo environment to Veracode using the Veracode Java API wrapper.

<p font-size="13pt"><b>Before You Begin</b></p>

You meet the [prerequisites](https://docs.veracode.com/r/c_integration_bamboo).

<p font-size="13pt"><b>Overview</b></p>

This procedure demonstrates using the [Veracode Java API wrapper](https://docs.veracode.com/r/t_working_with_java_wrapper) to submit an application. After you successfully create and run your plan in Bamboo, you can submit your application to Veracode for scanning.

<p font-size="13pt"><b>Steps</b></p>

1.  Open Bamboo and navigate to the plan you created for your application.

2.  From the plan configuration, select a job and click the **Tasks** tab.

3.  From the Tasks page, click **Add task**.

4.  In the Task description field, explain that this command uploads the application to Veracode.

5.  From the Executable dropdown menu, select **Java**.

6.  In the Argument field, enter an argument with these parameters:

    - `vid`: Veracode API ID.
    - `vkey`: Veracode API key.
    - `action`: Name of the action to perform. Enter `uploadandscan`.
    - `appname`: Name of the application.
    - `createprofile`: Specify the API to create an application profile if one does not exist for the indicated application name.
    - `createsandbox`: Optional. Create a sandbox for this application.
    - `sandboxname`: Optional. Name of the sandbox in which you want the scan to build.
    - `filepath`: Filepath of the files you want to upload to the Veracode Platform for scanning. By default, Veracode uploads all the subdirectories and files of this filepath.
    - `version`: Name or version of the build you want to scan.
    
    Example command with parameters added to the Argument field:

    ```
    -jar C:\{JavaWrapper_HomeFolder}\vosp-api-wrapper-java{version}.jar -vid ${bamboo.vid} -vkey ${bamboo.vkey} -action uploadandscan
    -appname {Your_Application_Name} -createprofile true -createsandbox true -sandboxname ${bamboo.shortPlanName} -filepath
    ${bamboo.build.working.directory}/*.{FileExtensionForCompiledApplication} -version ${bamboo.buildNumber}
    ```

7.  Review the configuration, then click **Save**.


