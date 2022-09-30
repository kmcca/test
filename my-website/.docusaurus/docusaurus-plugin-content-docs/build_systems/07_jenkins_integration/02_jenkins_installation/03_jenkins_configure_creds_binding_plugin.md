---
"ft:title" : "Binding Veracode Credentials in Jenkins Pipeline Builds"
"ft:prettyUrl" : "t_binding_creds"
---
You can use the Jenkins Credentials Binding plugin to bind your [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3) to environment variables in a Jenkins pipeline. You generate a script containing the bound environment variables, then add this script to your Jenkins pipeline script.

<p font-size="13pt"><b>Before You Begin</b></p>

- You have [installed and configured the Jenkins plugin](https://docs.veracode.com/r/t_install_jenkins).
- You have [installed the latest Credentials Binding plugin](https://docs.veracode.com/r/t_jenkins_install_credbinding) from the [Jenkins Plugin Index](https://plugins.jenkins.io).

<p font-size="13pt"><b>Overview</b></p>

After binding your Veracode API credentials to the environment variables, Jenkins secretly uses the credentials saved in its credentials store. Only the bound environment variables appear in the Jenkins interface and logs instead of your Veracode API credentials.

<p font-size="13pt"><b>Steps</b></p>

1. In Jenkins, go to your pipeline project.

2. Click **Pipeline Syntax** to open the Snippet Generator.

3. From the Sample Step dropdown menu, select **withCredentials: Bind credentials to variables**.

4. In the Bindings section, select **Add** > **Username and password (separated)**.

    The Username and password (separated) section opens.

5. In the Username Variable and Password Variable fields, enter username and password variables. Your Veracode API credentials bind to these variables at runtime.

6. Do one of the following:

    - If the Veracode API credentials to which you want to bind the specified username and password variables are in the Jenkins credentials store, select them from the Credentials dropdown menu. Then, continue to Step 7.
    - If the Veracode API credentials to which you want to bind the specified username and password variables are not in the Jenkins credentials store, you must add the credentials:
     
        a.  To the right of the Credentials dropdown menu, select **Add** > **Jenkins** to open the Jenkins Credentials Provider window.
     
        b.  In the Username field, enter your API ID. In the Password field, enter your API key.
     
        c.  Optionally, enter values for the ID and Description fields.
     
        d.  Click **Add** to add the credentials to the Jenkins credentials store.
     
        e.  From the Credentials dropdown menu, select the credentials you added.
  
7. Click **Generate Pipeline Script**.

    In the generated script, which is Apache Groovy code, the `withCredentials` step contains the username variable, password variable, and, if specified, the credentials ID.

<p font-size="13pt"><b>Next Steps</b></p>

Copy the entire `withCredentials` step and add it to your [Jenkins pipeline script for Veracode scans](https://docs.veracode.com/r/t_jenkins_pipe).