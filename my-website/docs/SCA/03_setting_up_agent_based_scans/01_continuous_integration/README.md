---
"ft:title" : "Integrate Veracode SCA Agent-Based Scanning with Your CI Projects"
"ft:prettyUrl" : "Integrate_Veracode_SCA_Agent_Based_Scanning_with_Your_CI_Projects"
---


You can integrate Veracode Software Composition Analysis agent-based scanning into most continuous integration \(CI\) systems. The integration requires you to create an agent, then add the agent token and scan command to your CI project.

<p font-size="13pt"><b>Before You Begin</b></p>

You have the Security Lead, Submitter, Workspace Administrator, or Workspace Editor [role](https://docs.veracode.com/r/c_role_permissions).

<p font-size="13pt"><b>Overview</b></p>

These instructions can apply to most CI systems. Specific instructions are available for [Bamboo](https://docs.veracode.com/r/Integrating_Veracode_SCA_with_Atlassian_Bamboo), [Bitbucket](https://docs.veracode.com/r/t_sc_bitbucket_token), [CircleCI](https://docs.veracode.com/r/t_sc_ci_token), [Codeship](https://docs.veracode.com/r/t_sc_codeship_token), [GitLab](https://docs.veracode.com/r/Create_Your_Agent_Based_Scanning_Authentication_Token_for_GitLab_CI), [Jenkins](https://docs.veracode.com/r/c_sc_jenkins_prereq), and [Travis CI](https://docs.veracode.com/r/t_sc_travis_token).

By default, the agent you create is only visible to members of the workspace in which you created the agent. To allow visibility, [invite teams to your workspace](https://docs.veracode.com/r/Add_Teams_to_Your_Veracode_SCA_Workspace).

<p font-size="13pt"><b>Steps</b></p>

1.  In the Veracode Platform, select **Scans & Analysis** > **Software Composition Analysis**.

2.  Click the **Agent-Based Scan** tab.

3.  Select a workspace.

4.  Click **Agents** > **Actions** > **Create**.

5.  Select any option from the Integration Options section.

    The option you select does not affect the agent or your scan results.

6.  Click **Create Agent & Generate Token**.

7.  In your CI project, store your agent token as a secret environment variable called `SRCCLR_API_TOKEN`.

    See the documentation for your CI system for instructions on setting secret environment variables.

8.  Add this command to your CI project to download the agent and start scanning:

    ```
    curl -sSL https://download.sourceclear.com/ci.sh | sh
    ```

    For example, in GitLab, add the command after the `after_script` step in the `.gitlab-ci.yml` file.

    You can [customize this command](https://docs.veracode.com/r/c_sc_ci_script) to enable additional features of agent-based scanning.

