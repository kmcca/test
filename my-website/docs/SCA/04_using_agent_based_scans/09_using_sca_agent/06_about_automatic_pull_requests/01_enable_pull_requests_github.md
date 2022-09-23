---
"ft:title" : "Enable Pull Requests for GitHub"
"ft:prettyUrl" : "t_configure_pr_github"
---

To use automatic pull requests for Veracode Software Composition Analysis agent-based scanning, you need permission to create pull requests in GitHub.

<p font-size="13pt"><b>Steps</b></p>

1.  Go to [https://github.com/settings/tokens](https://github.com/settings/tokens).

2.  If prompted, enter your GitHub credentials and log in.

3.  On the New personal access token page, click **Generate new token**.

4.  Enter a token description. For example: Allow Veracode Agent-Based Scan to generate pull requests

5.  Select the **repo** checkbox.

6.  Click **Generate token**.

7.  After the token generates, click the clipboard icon ![copy token](../../../images/copy_token.png) to copy the token and save it to a safe location.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
    <b>Note:</b> After you leave the page, you cannot access this token again.
    </p> 

8.  Add your token using one of these methods:

    -   Add this code to the `agent.yml` [file](https://docs.veracode.com/r/c_sc_agent_usage) installed in your `~/.srcclr` folder:

        ```
        scmType: GITHUB
        scmToken: <token copied in earlier step>
        ```

    -   Set the token as an environment variable in a command script. For example, add this code in Linux bash:

        ```
        export SRCCLR_SCM_TYPE="GITHUB"
        export SRCCLR_SCM_TOKEN="<token copied in earlier step>"
        ```

9.  If you are using an installation of GitHub other than GitHub.com, add your project URL using one of these methods:

    -   Add the project URL to the `agent.yml` file installed in your `~/.srcclr` folder. For example:

        ```
        scmUrl: https://github.acme.io
        ```

    -   Set the project URL as an environment variable in a command script. For example, add this code in Linux bash:

        ```
        export SRCCLR_SCM_URL="https://github.acme.io"
        ```
    