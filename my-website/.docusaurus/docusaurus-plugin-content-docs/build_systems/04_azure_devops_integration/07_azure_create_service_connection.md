---
"ft:title" : "Create a Service Connection in Azure DevOps"
"ft:prettyUrl" : "Create_a_Service_Connection_in_Azure_DevOps"
---
You can create a service connection in Azure DevOps or Team Foundation Server (TFS) for the Veracode Azure DevOps Extension to access Veracode.

<p font-size="13pt"><b>Before You Begin</b></p>

- Generated [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3).
- [Installed the Veracode Azure DevOps Extension](https://docs.veracode.com/r/c_VS_team_servs). If your credentials contain variables, you must start each variable with a `$` and wrap the variable value in parentheses. For example, you enter the `id` variable as `$(Id)`.

<p font-size="13pt"><b>Steps</b></p>

1.  In your Azure DevOps or TFS project, go to the Project Settings page.

2.  Select **Service connections** > **Create service connection**.

3.  In the New service connection window, select **Veracode Analysis Center** > **Next**.

4.  In the New Veracode Analysis Center service connection window, enter your Veracode API credentials and a name for the service connection.

5.  Click **Save** to save the service connection.