---
"ft:title" : "Configure Your GitLab CI Environment Variable"
"ft:prettyUrl" : "t_sc_gitlab_variable"
---

Setting an environment variable in GitLab CI occurs on a per-repository basis. This example demonstrates how to create a variable for your API token.

<p font-size="13pt"><b>Steps</b></p>

1.  In your GitLab environment, select the project you want to scan.

2.  Go to **Settings** \> **CI/CD**.

3.  Click **Expand** in the Variables section.

4.  In the Key field, enter `SRCCLR_API_TOKEN`.

5.  In the Value field, enter your Veracode SCA API token.

6.  Select the **State** and **Masked** values you want for your variable.

    Veracode recommends masking the variable and, if you use protected variables, protecting it.</p>

7.  Click **Save variables**.

<p font-size="13pt"><b>Next Steps</b></p>

You can create an environment variable for your project URL to allow the [enabling of automatic pull requests](https://docs.veracode.com/r/t_configure_pr_gitlab).

