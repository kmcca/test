---
"author": ["Kevin McCarthy"]
"ft:title" : "About Migrating to JIT Provisioning"
"ft:prettyUrl" : "About_Migrating_to_Just_In_Time_Provisioning"
---

In July 2022, Veracode introduced the Single Sign-on and Just-In-Time (JIT) Provisioning feature. Because of changes in the SSO settings, there are steps you must perform to migrate to the new feature. Some benefits of the new feature include:

- Wider compatibility with identity providers: Veracode built the new feature on an industry-leading identity provider capability that works out-of-the box with a wider variety of identity providers (IdPs).

- Better management of SSO and JIT settings: the updated user interface provides useful content, including highlighting the expiration date of SAML certificates, and makes it harder to misconfigure single sign-on and JIT settings, which avoids support issues.

- Wider variety of user roles supported: the new capability allows for JIT user provisioning with the Security Labs [role](https://docs.veracode.com/r/c_role_permissions), enabling a faster roll-out of your developer learning program.

These items are important to consider before migrating to the new workflow:

- [Admin XML API deprecation](https://docs.veracode.com/r/c_about_admin_API_intro): the Admin XML API is deprecated in the new workflow. Use the [Identity API](https://docs.veracode.com/r/c_identity_intro) to manage users, teams, and business units with the new workflow.

- Pending user activation deprecation: Veracode no longer supports the option for specifying that newly provisioned users are pending activation, which required an administrator to activate each user. If you wish to continue using this workflow, Veracode recommends you configure newly provisioned users into a role with minimal access, such as Reviewer, and [assign them to a team](https://docs.veracode.com/r/t_create_users) that is not associated with application profiles. The Administrator can then review the list of users associated with this team and provide any additional permissions.

- When IdP Data is preferred, you cannot update users with the Identity API or in the Veracode Platform: in the previous workflow, an administrator could attempt to change values in a user configuration that would be overridden the next time a user logged in. To prevent this confusion, when IdP data is preferred, updating user settings with the Identity API or the UI is no longer supported.

- Team Admin not supported as a JIT default: you cannot set Team Admin as a JIT default assigned to all newly provisioned users. If you had this role set in your Self-Registration default settings, Veracode removes this role from the JIT default settings when your organization migrates. This change does not affect existing users with the Team Admin role. If you set the User Data Updates to Prefer Organization Identity Provider Data option, you can still use JIT to provision a user with the Team Admin role by [passing the role and the list of teams to be managed in the SAML assertion](https://docs.veracode.com/r/about_saml_selfregister).