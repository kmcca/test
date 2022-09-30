---
"ft:title": "Mitigate Flaws from Within Visual Studio (Legacy)"
"ft:prettyUrl": "c_mitigate_VS"
---
You can mitigate flaws, including approving and rejecting existing mitigations, from within your IDE.

<p font-size="13pt"><b>Before You Begin</b></p>

- You meet the [prerequisites for Veracode Static for Visual Studio](https://docs.veracode.com/r/Permissioning_Veracode_Static_for_Visual_Studio).
- Your account has the [Mitigation API role](https://docs.veracode.com/r/c_API_roles).
- You have [imported the scan results](https://docs.veracode.com/r/t_vs_import_results).

<p font-size="13pt"><b>Overview</b></p>

From within your IDE, you can comment on a flaw and set the mitigation status as:

-   Potential false positive
-   Design
-   OS environment
-   Network environment
-   Mitigate by design

You can also accept or reject a flaw already flagged as mitigated.

<p font-size="13pt"><b>Steps</b></p>

1.  In your IDE, select **Extensions** > **Veracode** \> **View Results**.

2.  From the Results window, in the Flaw ID column, select the checkbox next to one or more flaws that you want to mitigate.

3.  From the Actions dropdown menu, select a mitigation action. Then, click **Mitigate**.

4.  In the Flaw Mitigation Request window, enter your comments.

5.  Click **Continue**.

6.  If you see an access denied error message, check for these issues, resolve them, and try to mitigate again:

    -   There is a policy or sandbox scan in progress for the application.
    -   You are not working with the most recent scan results.
    -   You do not have the Mitigation API role.
    -   Another user has locked the flaw in the Veracode Platform.
