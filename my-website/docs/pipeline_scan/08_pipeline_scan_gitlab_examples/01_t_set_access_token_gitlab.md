---
"ft:title" : "Create a GitLab Access Token for a Pipeline Scan"
"ft:prettyUrl" : "Set_a_GitLab_Access_Token"
---
You can create a GitLab access token and set it as an environment variable to enable a Pipeline Scan to generate GitLab issues from discovered flaws.

You must complete this task before you can use the <code>[--gl_issue_generation](04_r_pipeline_scan_commands.md)</code> parameter.

<p font-size="13pt"><b>Steps</b></p>

1. Select **Edit Profile** > **Access Tokens** > **Create personal access token**.

2. Ensure that the token has a scope of `api`. See the [GitLab documentation](https://docs.gitlab.com/).

3. Select **Settings** > **CI/CD** > **Variables** and store the token you created as an environment variable named `PRIVATE_TOKEN`.
