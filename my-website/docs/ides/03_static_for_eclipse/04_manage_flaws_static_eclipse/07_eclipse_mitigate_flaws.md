---
"ft:title" : "Mitigate Flaws from Within Eclipse"
"ft:prettyUrl" : "Mitigate_Flaws_from_Within_Eclipse"
---
You can mitigate flaws, including approving and rejecting existing mitigations, from within Eclipse.

<p font-size="13pt"><b>Before You Begin</b></p>

- You must have the [Mitigation API role](https://docs.veracode.com/r/c_API_roles).
- You have [imported the Veracode scan results](https://docs.veracode.com/r/c_download_results_Eclipse), which appear in the Results view in Eclipse.

<p font-size="13pt"><b>Overview</b></p>

From within your IDE, you can comment on a flaw and set the mitigation status as:

-   Potential false positive
-   Design
-   OS environment
-   Network environment
-   Mitigate by design

You can also accept or reject a flaw already flagged as mitigated.

<p font-size="13pt"><b>Steps</b></p>

1.  In your IDE, select **Veracode** \> **View Results**.

2.  From the Results window, in the Flaw ID column, select the checkbox next to one or more flaws that you want to mitigate.

3.  From the Actions dropdown menu, select a mitigation action and click **Mitigate**.

4.  In the Flaw Mitigation Request window, enter your comments.

5.  Click **Continue**.

6.  If you see an access denied error message, check for these issues, resolve them, and try to mitigate again:

    -   There is a policy or sandbox scan in progress for the application.
    -   You are not working with the most recent scan results.
    -   You do not have the Mitigation API role.
    -   Another user has locked the flaw in the Veracode Platform.

