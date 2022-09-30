---
"ft:title" : "Create a Plan in Bamboo for Java Applications"
"ft:prettyUrl" : "Create_a_Plan_in_Bamboo_for_Java_Applications"
---
You can create a plan for Java applications using the Veracode Bamboo Integration.

<p font-size="13pt"><b>Before You Begin</b></p>

You meet the [prerequisites](https://docs.veracode.com/r/c_integration_bamboo).

<p font-size="13pt"><b>Steps</b></p>

1.  Start Bamboo.

2.  In Bamboo, create and configure a new plan.

3.  Click **Configure tasks**.

4.  Click **Add task**.

5.  From the Task types dropdown menu, select **Maven 2.x**.

6.  On the Maven 2.x Configuration page, enter values in these fields:

    -   Task Description
    -   Executable: you may have to create a new label for your Maven executable.
    -   Goal: for example, `Set up clean test package`.
    -   Build JDK
7.  Click **Save**.

8.  Select **Yes** to enable the plan.

9.  Click **Create**.

10. Ensure your plan is enabled and click **Run plan** to complete the configuration. You see an error until you have a Maven project to run.