---
"author": ["Scott Jordan"]
"ft:originID": "sec_labs_add_user"
"ft:lang": "en-US"
"ft:title": "Add New Security Labs Users to a Standalone Account"
"ft:prettyUrl": "t_seclabs_add_user"
"media_dir": "images/"
---

You can use the SSO SAML gateway of your organization to create Security Labs users automatically. Any users who make an authenticated SSO login request from an email address with a matching domain automatically register and join your account.

<p font-size="13pt"><b>Before You Begin</b></p>

-   You must be a Security Labs administrator to add new users to standalone accounts.
-   Set one or more matching domains on your Account Settings page.
-   [Configuring your SAML gateway](https://docs.veracode.com/r/t_seclabs_getstarted).

<p font-size="13pt"><b>Overview</b></p>

By default, Veracode associates Security Labs accounts with the Veracode Platform. If your organization accesses Security Labs in the Veracode Platform, follow the instructions in [Create Security Labs Users from the Veracode Platform](https://docs.veracode.com/r/t_seclabs_add_user_platform).

<p font-size="13pt"><b>Steps</b></p>

1.  Click your username in the top-right of the Security Labs page to open the menu.

2.  Select **All users**.

    The list of users for your organization opens.

3.  Scroll down to the add new users section.

    -   Click **Bulk upload via CSV...** to upload a CSV file containing all the users you want to create. You can either [Bulk Upload and Assign the Same User Roles to All Users](https://docs.veracode.com/r/Bulk_Upload_and_Assign_the_Same_User_Roles_to_All_New_Users), or [Bulk Upload and Assign Differing Roles to Individual Users](https://docs.veracode.com/r/Bulk_Upload_and_Assign_Differing_Roles_to_Individual_New_Users).
    -   Click **Add user manually** to add users one at a time. Enter the user details including name, email address, and role, and select the **Admin** checkbox if you want the user to have administrator permissions. Click the green checkmark to add the user.

4.  If you want to send an email notification to the new user, select the **Send invitation emails** checkbox. Optionally, customize the text of the invitation email in the text box.

5.  If you want your custom text to always appear in the text field when anyone with the Administrator role creates users for this team, select the **Save this message** checkbox.

6.  Click **Add users**.

    Veracode sends the email notifications to the new users and the new users appear in the list of all users.
