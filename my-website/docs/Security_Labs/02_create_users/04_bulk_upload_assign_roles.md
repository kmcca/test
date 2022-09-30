---
"ft:title" : "Bulk Upload and Assign the Same User Roles to All New Users"
"ft:prettyUrl" : "Bulk_Upload_and_Assign_the_Same_User_Roles_to_All_New_Users"
---
You can assign all your Security Labs users the same user roles when you bulk upload new users in a CSV file. You can bulk upload a maximum of 100 users per upload.

<p font-size="13pt"><b>Before You Begin</b></p>

You must be a Security Labs administrator to bulk upload new users.

<p font-size="13pt"><b>Steps</b></p>

1.  Click your username in the top-right corner of the Security Labs page to open the menu.

2.  Select **All users**.

    The list of users for your organization opens.

3.  Scroll down to the add new users section, and click **Bulk upload via CSV...**.

    The Bulk Invite New Users window opens.

4. Select **Select the roles to apply to all your users**.
    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> You may see a **(_default_)** role selected in the roles section. The Veracode Platform always applies this role to all your users whether you include it in your CSV file or not.</p>

5. Click the checkbox next to one or more roles you want to assign to all your new users.

6. Format a CSV with one user per row, and these user details:
    - Email
    - Name
    - Either `true` or `false` to enable or disable admin permissions

    Refer to this example CSV format:

    user1@example.com, name, true

    user2@example.com, name, false

7. In the Veracode Platform, click **Upload...**.

8. Upload your CSV file.
