---
"ft:title" : "Set a Bitbucket Repository Environment Variable"
"ft:prettyUrl" : "Set_a_Bitbucket_Repository_Environment_Variable"
---

Environment variables added on the repository level can be accessed by any users with the push permission in the repository. You can set a repository environment variable to perform scans on each new build.

<p font-size="13pt"><b>Steps</b></p>

1.  In Bitbucket, go to the repository you want to scan and select **Settings** > **Pipelines** > **Environment variables**.

2.  In the Type variable field, enter `SRCCLR_API_TOKEN`.

3.  In the Type value field, paste your API token.

4.  Verify the **Secured** checkbox is selected.

5.  Click **Add**.

