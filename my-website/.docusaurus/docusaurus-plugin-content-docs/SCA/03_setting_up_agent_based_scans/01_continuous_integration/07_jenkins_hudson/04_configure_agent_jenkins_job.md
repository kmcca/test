---
"ft:title" : "Configure Your Agent-Based Scanning Jenkins Job"
"ft:prettyUrl" : "Configure_Your_Veracode_SCA_Jenkins_Job"
---

<p font-size="13pt"><b>Steps</b></p>

1.  In Jenkins, select the job you want to scan.

2.  Click **Configure**.

3.  Click the **Build Environment** tab.

4.  Select **Use secret text(s) or file(s)**.

5.  Under Bindings, select **Add** > **Secret text**.

6.  In the Variable field, enter `SRCCLR_API_TOKEN`.

7.  Select **SRCCLR_API_TOKEN**.

8.  In the build section, select **Add build step** > **Execute shell**.

    You can include the shell as a pre- or post-build step.

9.  Add this command to the shell command box:

    ```
    curl -sSL https://download.sourceclear.com/ci.sh | sh
    ```

10. Save your build.

<p font-size="13pt"><b>Results</b></p>

The next time your job runs, Veracode SCA performs an agent-based scan.

