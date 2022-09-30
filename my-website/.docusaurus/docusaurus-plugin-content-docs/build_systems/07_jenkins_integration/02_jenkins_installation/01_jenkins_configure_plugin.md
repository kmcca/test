---
"ft:title" : "Configure the Veracode Jenkins Plugin"
"ft:prettyUrl" : "c_jenkins_config_plugin"
---
After installing the Veracode Jenkins Plugin, there are required and optional settings you can configure before using the plugin to scan your code.

<p font-size="13pt"><b>Before You Begin</b></p>

- You meet the [prerequisites](https://docs.veracode.com/r/c_using_jenkins).
- You have [installed the Jenkins plugin](https://docs.veracode.com/r/t_install_jenkins).

<p font-size="13pt"><b>Steps</b></p>

1. Open a browser window and log in to your Jenkins server.
2. Select **Manage Jenkins** > **Configure System** and scroll down to the Veracode Jenkins Plugin section.
3. In the Veracode User Credentials fields, enter your [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3). 

    If you are [using credentials binding to protect your credentials](https://docs.veracode.com/r/t_binding_creds), you can enter a placeholder, which the Credentials Binding plugin uses later. Configure this placeholder if you intend to use the binding plugin for freestyle, Domain Specific Language (DSL), or pipeline jobs that require credentials management. This placeholder must have a leading dollar sign and be unique. For example, Veracode recommends `$veracode_id` and `$veracode_key`.
 
4. Optionally, select the **Fail Job** checkbox to stop the build from completing in specific circumstances, such as the Veracode upload or scan failing. 
 
    Several conditions could cause a scan to fail, including network timeouts, incorrect credentials, or exceeding the maximum file size when uploading. The **Fail Job** option allows you to stop a build if, during an upload and scan, an SCA or Static Analysis fails a specified policy evaluation. You can [review the details](https://docs.veracode.com/r/c_jenkins_results) of a failed job in Jenkins. The **Fail Job** option can save you time and enable you to quickly troubleshoot build issues that are related to your Veracode scan.

5. Optionally, in the Copy Output Remote Files to Controller section:
    
    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
    <b>Note:</b> Veracode does not recommend this option.</p>
 
    - If you want to build and upload code to Veracode from a remote machine, ensure the **Copy Output Remote Files to Controller** checkbox is cleared. Jenkins uses the term node to refer to a remote machine. If you do not copy the files to controller, the Jenkins plugin copies the [Java wrapper](https://docs.veracode.com/r/c_about_wrappers) JAR files to the `veracode-jenkins-plugin` directory in the remote `root` directory. The Java wrapper CLI executes from the remote machine to upload and scan the output code that a build generates.

    - If you build only on a remote machine, and copy the output files from the remote machine to the controller for uploading to Veracode, select the **Copy Output Remote Files to Controller** checkbox.

6. In the Default Values field, select these Jenkins server environment-type variables to apply them to all Jenkins jobs:
       
    - `$projectname`: changes the new Veracode application name to the Jenkins server project name. You can overwrite this value within the individual Jenkins project settings page in the Veracode options section.

    - Jenkins server workspace path and IP address.

    - `$buildnumber`: changes to the Veracode default scan name.

7. Optionally, select the **Run in debug mode** checkbox to collect detailed information about Veracode scans. The plugin stores this information in the console log of each individual Jenkins project. Veracode recommends you select this option.
 
8. If you intend to connect using a proxy, select the **Connect using proxy** checkbox. Then, provide the specific host, port, username and password settings for global use in Jenkins.