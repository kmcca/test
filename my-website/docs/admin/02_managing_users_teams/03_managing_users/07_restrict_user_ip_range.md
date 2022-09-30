---
"ft:title" : "Restrict a User to an IP Range"
"ft:prettyUrl" : "admin_ip"
---

You can restrict a user so that they can only log in from a machine within a predefined IP address range.

Restricting user access allows you to prevent a user from using the credentials of another user outside of a corporate environment. You can also restrict user access to a specific machine. IP range restrictions are optional for [user accounts](https://docs.veracode.com/r/c_role_permissions) and [API service accounts](https://docs.veracode.com/r/c_API_roles).

<p font-size="13pt"><b>Before you Begin</b></p>

Ensure that you know the IP range for the user. If you set the IP range incorrectly, the user cannot log in.

<p font-size="13pt"><b>Steps</b></p>

1.  From the Administration page, select the user you want to manage. To find the user, you can:
    -   Find the user in the table using the Page controls.
    -   Filter the list of users by one of the filter options provided \(Role, Team, SAML type, Login Enabled, User Type\).
    -   Search for the user name \(first or last name\) using the Search field.
    -   Select the user from the Load User Details dropdown menu. You can type the user last name to go to that user and, then, press **Enter** to select the user.
2.  Click the username or **Edit** to edit the user.
3.  If the user is a Human Login, set the Restrict Login IP to Yes.
4.  Enter the valid IP ranges in the Allowed IP Addresses text field. You can enter more than one address or address range, separated by commas. You can specify an address range using a wildcard \(e.g. `74.0.0.*`) or a range (e.g. `74.0.0.[0-99]`). Note that wildcards are only valid in the last octet of the address; i.e., `74.0.*.*` is not a valid range. Please provide an externally valid IP address, not a private IP address like `10.0.0.x`.
5.  Click **Save** to apply the valid IP address ranges to the user.

