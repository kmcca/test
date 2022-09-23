---
"ft:title" : "Hide a Proxy Password in Azure DevOps or TFS"
"ft:prettyUrl" : "t_hide_password"
---
You can add a variable in Azure DevOps or Team Foundation Server (TFS) to hide a proxy password and prevent that password from being shown in console logs of build or release pipelines.

<p font-size="13pt"><b>Steps</b></p>

1.  In your Azure DevOps or TFS project, go to the Build or Release window and select the **Variables** tab.

2.  Click **+ Add** to add a new variable.

3.  Enter the variable name in the Name field and enter the proxy password in the Value field.

4.  Click the lock icon ![](../images/lock_icon.png), so that the icon changes to locked, to hide the password.

5.  For the Veracode Flaw Importer task, in the Proxy Settings field, add the password as a variable. For example, if the variable name is `pwd`, enter `$(pwd)`.

6.  For the Veracode Upload and Scan task, in the Optional Arguments field, enter the password as a variable. For example, if the variable name is `pwd`, enter `$(pwd)`.

<p font-size="13pt"><b>Results</b></p>

The proxy password is now hidden from the console logs when you run the pipeline.