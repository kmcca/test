---
"ft:title" : "Ignore an Issue in SCA"
"ft:prettyUrl" : "Ignored_Issues"
---

Veracode Software Composition Analysis (SCA) agent-based scanning provides users with accurate, up-to-date vulnerability information, but not all issues apply to your code. For this reason, Veracode SCA allows you to suppress issues if you want to prevent them from causing your build
pipeline to fail.

<p font-size="13pt"><b>Overview</b></p>

Ignoring issues only impacts your pipeline if you configure your SCA rules to
generate an error instead of a warning, and you need to make exceptions that allow you
to bypass the error. Ignoring an issue is not the same as closing an issue.

If you ignore an issue, the issue remains ignored in future scans of the project, even if
the issue severity changes or a subsequent scan finds a vulnerable method.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> For <a href="https://docs.veracode.com/r/Link_SCA_Projects_to_Applications">projects linked to application profiles</a>, ignoring an issue
            has no impact on the status of any <a
                href="https://docs.veracode.com/r/improve_mitigation">mitigation actions</a> for the application. A reviewer still needs to review
            proposed mitigations in the Veracode Platform or with the Veracode APIs.
</p>

<p font-size="13pt"><b>Steps</b></p>

1.  In the Veracode Platform, select **Scans & Analysis** > **Software Composition Analysis**.
2.  Click the **Agent-Based Scan** tab.
3.  Select a workspace.
4.  If you want to view issues for an individual project, click **Projects** and select a project.
5.  Select the checkbox next to the issues you want to ignore.
6.  Click **Actions** > **Ignore**.
7.  Click **Confirm ignore issue**.
8.  Enter a comment explaining why you are ignoring the issues.
9.  Click **Finish**.

 <p font-size="13pt"><b>Results</b></p>   

Anyone who has access to the workspace can view the comment.








