---
"ft:title" : "View the User Activity Log"
"ft:prettyUrl" : "t_activity_log"
---

As an administrator, you can view a log of user activity for the users that you manage.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> The activity log refreshes every four hours. Depending on when you generate the activity log, you may not retrieve the most recent login attempt information.
</p>

<p font-size="13pt"><b>Before You Begin</b></p>

You must have the [Administrator role](https://docs.veracode.com/r/c_role_permissions).

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> The activity log does not display any user activity information if the user has never logged in to the Veracode Platform.
</p>


<p font-size="13pt"><b>Steps</b></p>

1.  On the Administration page, click the **Users** tab to view activity information for all users that you manage.

    The All Users page shows this information:

    - User: first and last name associated with the [user account](https://docs.veracode.com/r/c_about_veracode_accounts). Click the pencil icon to edit the user information.

    - Last Login: date and time when the user last logged in to the Veracode Platform

        If the user has not logged in to the Veracode Platform, the All Users page shows one of these statuses:

        -   Active: the user clicked the activation link sent by the administrator, but has not logged in to the Veracode Platform yet.
        -   Failed: the user could not sign in to the user account.
        -   Locked: the most recent attempts by the user to log in failed and Veracode temporarily locked the user account.
        -   Never: the user has never attempted to log in.
    
    - Email: email address of the user

    - Login Enabled: checkbox that controls whether login is enabled for the user

2.  Click the name of a user in the User column.

    The Login Settings page opens for the selected user.

3.  Click **View Activity Log**.

    The Activity Log page opens.

4.  Click **Generate CSV**.

    Veracode creates a CSV file.

5.  When the CSV file is available, click **Download CSV**.

    Specify a location on your computer to save the CSV download.

<p font-size="13pt"><b>Results</b></p>

The activity log CSV file shows this information:

-   User: first and last name associated with the user account
-   Details: login activity for the user, including the IP address where the user attempted the login
-   Activity: login status of the user account
-   Date/Time: date and time in EST format

