---
"ft:title" : "Install the Veracode SCA CLI Agent"
"ft:prettyUrl" : "t_sc_cli_agent"
---



By default, the agent you create is not visible to team members. To allow visibility, [invite teams to your workspace](https://docs.veracode.com/r/Add_Teams_to_Your_Veracode_SCA_Workspace).

<p font-size="13pt"><b>Steps</b></p>

1.  In the Veracode Platform, select **Scans & Analysis** > **Software Composition Analysis**.

2.  Click the **Agent-Based Scan** tab.

3.  Select a workspace.

4.  Click **Agents** > **Actions** > **Create**.

5.  On the Set Up Scanner page, select the operating system for your agent.

6.  Open a terminal window from your desktop and copy one of the commands from the Choose install option section, depending on your preferred method of installation:

    -   cURL:

        ```
        curl -sSL https://download.sourceclear.com/install | sh
        ```

    -   apt-get:

        ```
        curl -sSL 'https://keyserver.ubuntu.com/pks/lookup?op=get&search=0xdf7dd7a50b746dd4' | sudo gpg --dearmor -o /usr/share/keyrings/veracode-sca-archive.gpg
        echo 'deb [signed-by=/usr/share/keyrings/veracode-sca-archive.gpg] https://download.sourceclear.com/ubuntu stable/' | sudo tee /etc/apt/sources.list.d/veracode-sca.list
        sudo apt-get update
        sudo apt-get install srcclr                    
        ```

    -   Add the agent-based scanning repository to your list of YUM repositories by creating a file `/etc/yum.repos.d/SRCCLR.repo` with this content:

        ```
         [SourceClear] name=SourceClear baseurl=https://download.sourceclear.com/redhat/x86_64/ 
         enabled=1 gpgcheck=1 gpgkey=https://download.sourceclear.com/redhat/SRCCLR-GPG-KEY
        ```

        Update and install:

        ```
        sudo yum update sudo yum install srcclr 
        ```

        <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> When you run this command for the first time, you are prompted to accept the GPG key.
</p> 

    -   APK (Alpine):

        ```
        sudo sh -c 'echo https://download.sourceclear.com/alpine/main >> /etc/apk/repositories'
        sudo wget -P /etc/apk/keys https://download.sourceclear.com/alpine/public-keys/production@srcclr.com-5e266d90.rsa.pub
        sudo apk add srcclr
        ```

    -   Homebrew:

        ```
        brew tap srcclr/srcclr
        brew install srcclr
        ```

    -   Chocolatey:

        ```
        choco install srcclr
        ```

7.  From the Command Line Interface page in the Veracode Platform, copy the activation token under the `srcclr activate` command.

8.  Run this command from the agent server:

    ```
    srcclr activate
    ```

9.  Paste the token you copied into your terminal and press Enter.

    After entering your activation token, your `agent.yml` configuration file installs to the `~/.srcclr` folder. If that file already exists, you are prompted to enter a profile name. This profile name allows you to choose which token you use when scanning. Veracode recommends that you use the name of the workspace associated with the token.

10. Verify your installation by running one of these commands to check if you can scan that package manager:

    - Ant: `srcclr test --ant`
    - Bower: `srcclr test --bower`
    - Cocoapods: `srcclr test --cocoapods`
    - Composer: `srcclr test --composer`
    - Glide: `srcclr test --glide`
    - Go Get: `srcclr test --go`
    - Godep: `srcclr test --godep`
    - Govendor: `srcclr test --govendor`
    - Gradle: `srcclr test --gradle`
    - Ivy: `srcclr test --ivy`
    - Maven: `srcclr test --maven`
    - NPM: `srcclr test --npm`
    - Python: `srcclr test --pip`
    - Ruby Gems: `srcclr test --gem`
    - SBT: `srcclr test --sbt`
    - Trash: `srcclr test --trash`
    - Yarn: `srcclr test --yarn`
    - Nuget: `srcclr test --nuget`
    
<p font-size="13pt"><b>Results</b></p>

If the CLI installs successfully, you can view all the tests with a result of `PASSED`.

