---
"ft:title" : "Install the Veracode SCA Agent with PowerShell"
"ft:prettyUrl" : "Install_the_Veracode_SCA_Agent_with_PowerShell"
---

If you are running a scan in a Windows environment and do not want to use Chocolatey to install the agent, you can use PowerShell.

<p font-size="13pt"><b>Steps</b></p>

1.  In the Veracode Platform, select **Scans & Analysis** \> **Software Composition Analysis**.

2.  Click the **Agent-Based Scan** tab.

3.  Select a workspace.

4.  Click **Agents** \> **Actions** \> **Create** \> **Windows**.

5.  Click the **PowerShell** tab.

6.  Click **Create Agent & Generate Token**.

7.  Set the `$Env:SRCCLR_API_TOKEN` environment variable to the authentication token you just generated.

8.  In your PowerShell terminal, set execution policy to `AllSigned`. You may need to run this command to set the execution policy because PowerShell does not permit scripts to run by default:

    ```
    Set-ExecutionPolicy AllSigned -Scope Process -Force
    ```

9.  Run this command to download the script:

    ```
    $ProgressPreference = "silentlyContinue"; iex ((New-Object System.Net.WebClient).DownloadString('https://download.sourceclear.com/ci.ps1'))
    ```

10. Scan repositories with one of these commands.

    -   To start scanning public repositories:

        ```
        srcclr scan --url https://github.com/srcclr/example-ruby
        ```

    -   To clone and scan local repositories:

        ```
        srcclr scan FILE_PATH
        ```


