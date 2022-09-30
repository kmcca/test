---
"ft:title" : "Bulk Upload and Assign Differing Roles to Individual New Users"
"ft:prettyUrl" : "Bulk_Upload_and_Assign_Differing_Roles_to_Individual_New_Users"
---
You can assign differing user roles to individual Security Labs users when you bulk upload new users in a CSV file. You can bulk upload a maximum of 100 users per upload.

<p font-size="13pt"><b>Before You Begin</b></p>

You must be a Security Labs administrator to bulk upload new users.

<p font-size="13pt"><b>Steps</b></p>

1.  Click your username in the top-right corner of the Security Labs page to open the menu.

2.  Select **All users**.

    The list of users for your organization opens.

3.  Scroll down to the add new users section, and click **Bulk upload via CSV...**.

    The Bulk Invite New Users window opens.

4. Select **Assign roles in your CSV to individual users**.
    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> You may see a **(_default_)** role selected in the greyed out roles section. The Veracode Platform always applies this role to all your users whether you include it in your CSV file or not.</p>

5. Format a CSV with one user per row, and these user details:
    - Email
    - Name
    - Either `true` or `false` to enable or disable admin permissions
    - The exact role names in lowercase you want to assign to the users

    Refer to this example CSV format:

    user1@example.com, name, true, role-1, role-2

    user2@example.com, name, false, role-3

6. In the Veracode Platform, click **Upload...**.

7. Upload your CSV file.
