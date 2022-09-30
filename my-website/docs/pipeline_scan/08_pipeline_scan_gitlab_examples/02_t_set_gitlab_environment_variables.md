---
"ft:title" : "Set GitLab Base Directories for a Pipeline Scan"
"ft:prettyUrl" : "Set_Environment_Variables_for_GitLab_Base_Directories"
---
You can set environment variables for GitLab base directories to enable a Pipeline Scan to generate GitLab issues of discovered flaws when scanning Java applications.

You must complete this task before you can use the <code>[--gl_issue_generation](04_r_pipeline_scan_commands.md)</code> parameter when scanning Java applications.

<p font-size="13pt"><b>Steps</b></p>

1.  Select **Settings** > **CI/CD** > **Variables**.

2.  Set these environment variables:

    -   `SRC_ROOT`: the filepath typically is `/src/main/java/`.
    -   `JSP_ROOT`: the filepath typically is `/src/main/webapp/`.
