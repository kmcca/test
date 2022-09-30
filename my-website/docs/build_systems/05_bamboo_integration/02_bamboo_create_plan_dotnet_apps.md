---
"ft:title" : "Create a Plan in Bamboo for .NET Applications"
"ft:prettyUrl" : "Create_a_Plan_in_Bamboo_for_NET_Applications"
---
You can create a plan for .NET applications using the Veracode Bamboo Integration.

<p font-size="13pt"><b>Before You Begin</b></p>

You meet the [prerequisites](https://docs.veracode.com/r/c_integration_bamboo).

<p font-size="13pt"><b>Steps</b></p>

1.  Start Bamboo.

2.  In Bamboo, create and configure a new plan.

3.  Click **Configure tasks**.

4.  On the **Tasks** tab, click **Add task**.

5.  In the Task types window, select **MSBuild**.

6.  On the MSBuild configuration page, enter values in these fields:

    -   In the Task description field, describe the build task.
    -   From the Executable dropdown menu, select the latest version of MSBuild.
    -   In the Project File field, enter the project solution filename.

7.  Click **Save**.

8.  On the **Tasks** tab, click **Add task**.

9.  In the Task types window, select **Command**.

10. On the Command configuration page, enter the following information:

    -   In the Task description field, describe the precompilation task.
    -   From the Executable dropdown menu, select **ASPNetCompiler**.
    -   In the Argument field, enter these arguments, replacing the example text with names specific to your application:

        ```
        a {WebgoatNet.zip} ${bamboo.build.working.directory}\PrecompiledWeb\WebGoat.NET\bin\
        ```

11. Click **Save**.

12. On the **Tasks** tab, click **Add task**.

13. In the Task types window, select **Command**.

14. On the Command configuration page, enter this information:

    -   In the Task description, describe the task of zipping files for upload to Veracode.
    -   From the Executable dropdown menu, select **7ZIP**.
    -   In the Argument field, enter this argument:

        ```
        -p "WebGoat" -v "WebGoat.NET/" -fixednames -f -c -d "PrecompiledWeb/WebGoat.NET"
        ```

15. Click **Save**.

16. Select **Yes** to enable the plan.

17. Click **Create**.

18. Ensure your plan is enabled and click **Run plan** to complete the configuration.