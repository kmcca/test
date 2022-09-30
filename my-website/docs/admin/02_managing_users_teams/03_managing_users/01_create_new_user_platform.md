---
"ft:title" : "Create a New User in the Veracode Platform"
"ft:prettyUrl" : "t_create_users"
---

You create a new user on the Administration page in the Veracode Platform. The account type can be a user account or API service account.

<p font-size="13pt"><b>Overview</b></p>

If you want to create multiple [user accounts](https://docs.veracode.com/r/c_role_permissions) in a single bulk operation, use the `createuser.do` API, as explained in [API Wrapper Examples: Create Multiple Users](https://docs.veracode.com/r/r_createuser).

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> A red asterisk (<b>*</b>) indicates a required field.
</p>

You can also create a user account or API service account with the [Veracode Identity APIs](https://docs.veracode.com/r/c_identity_intro).

<p font-size="13pt"><b>Steps</b></p>

1.  On the **Users** tab, click **Add New User**.

2.  In the Login Settings section, enter the required information and select from these optional settings:

    - API Service Account: select the **Non-Human User** checkbox and enter a username if you want the account type to be an [API service account](https://docs.veracode.com/r/c_API_roles). Leave the checkbox cleared if you want the account type to be a user account \(default\).

    - Requires MFA: select **Yes** to require [multifactor authentication (MFA)](https://docs.veracode.com/r/using_password) during login. Default is **No**.

    - Login Enabled: select **Yes** to enable logins for the user, or **No** to disable logins. Default is **Yes**.

    - Restrict Login IP: select **Yes** and enter a comma-separated list of allowed IP addresses to [restrict the IP range](https://docs.veracode.com/r/admin_ip) for the user login. Default is **No**.

3.  In the Access Settings section, configure these options:

    - Team Memberships: click **Select Teams**, then select the name of one or more [teams](https://docs.veracode.com/r/admin_team) to which to add the user. For an [API service account](https://docs.veracode.com/r/c_API_roles), you can select whether to restrict the user to the selected teams. If you select **No Team Restrictions**, the API service account has access to every application in its organization.

    - User Roles: select the checkbox next to each [user role](https://docs.veracode.com/r/c_role_permissions) or [API role](https://docs.veracode.com/r/c_API_roles), depending on the account type, to assign to the user.

        <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Assigning the eLearning role has <a href="https://docs.veracode.com/r/c_role_permissions">special implications</a>.
</p>

    - Allowed Scan Types: this field opens depending on which checkbox you select for User Roles. You can select to allow the user to submit all [scan types](https://docs.veracode.com/r/scantype) or restrict the user to specific scan types.

4.  In the Metadata section, enter a [custom metadata](https://docs.veracode.com/r/t_create_custom_metadata) value if there is additional metadata you want to import from the application profile.

    These metadata fields are visible in the eLearning Account Report. You can use these reports to aggregate eLearning statistics by different values that may be unique to your organization.

5.  Click **Save** to create the user.

<p font-size="13pt"><b>Results</b></p>

New users receive an email from Veracode, which contains a one-time activation link to activate their account and links to videos with more information about the Veracode Platform. After clicking the activation link, Veracode takes the user to the Veracode Platform to set a password and password recovery question. The link in this email is valid for seven days.

