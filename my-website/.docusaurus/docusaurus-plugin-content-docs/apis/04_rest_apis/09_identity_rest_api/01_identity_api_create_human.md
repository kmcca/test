---
"ft:title": "Creating User and SAML User Accounts with the Identity API"
"ft:prettyUrl": "c_identity_create_human"
---
These use case scenarios provide the Identity REST API commands and payloads for creating a [user account](https://docs.veracode.com/r/c_about_veracode_accounts) or a [SAML user account](https://docs.veracode.com/r/about_saml).

Use this command to create a user account:

```shell
http --auth-type=veracode_hmac POST "https://api.veracode.com/api/authn/v2/users" < input.json
```

The API passes the JSON file that you populate with the necessary values as shown in this example payload:

```json
{
   "email_address":"example@example.com",
   "first_name":"Example",
   "last_name":"User",
   "ip_restricted":false,
   "pin_required": true,
   "active":true,
   "roles":[
      {
         "role_name":"extseclead"
      },
      {
         "role_name":"extsubmitanyscan"
      }
   ],
   "title":"Sample",
   "user_name":"example@example.com",
   "userType":"VOSP",
   "teams":[
      {
         "team_id":"teamId"
      }
   ]
}
```

Use this command to create a user account with SAML sign-on:

```shell
http --auth-type=veracode_hmac POST "https://api.veracode.com/api/authn/v2/users" < input.json
```

The API passes the JSON file that you populate with the necessary values as shown in this example payload:

```json
{
   "email_address":"example@example.com",
   "first_name":"Example",
   "last_name":"User",
   "ip_restricted":false,
   "active":true,
   "roles":[
      {
         "role_name":"extseclead"
      },
      {
         "role_name":"extsubmitanyscan"
      }
   ],
   "title":"Sample",
   "saml_user":true,
   "saml_subject":"example@example.com",
   "user_type":"VOSP"
 }
```

For some [roles](https://docs.veracode.com/r/c_API_roles_details), you must include one or more of these scan types that the user can submit:

- `extsubmitanyscan`: any scan type
- `extsubmitstaticscan`: Static Analysis
- `extsubmitdynamicscan`: Dynamic Analysis
- `extsubmitmanualscan`: Manual Penetration Testing

When Veracode creates the user account and configures the authentication, it can take up to one minute.

| Role Short Name         | Role Name               | Additional Roles Required                                                                                                                                                                                                                                                                     |
|-------------------------|-------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|`deletescans`| Delete Scans |`extseclead` or `extcreator`|
| `sandboxadmin`          | Sandbox Administrator   |                                                                                                                                                                                                                                                                                               |
| `sandboxuser`           | Sandbox User            |                                                                                                                                                                                                                                                                                               |
| `workSpaceAdmin`        | Workspace Administrator |                                                                                                                                                                                                                                                                                               |
| `workSpaceEditor`       | Workspace Editor        |                                                                                                                                                                                                                                                                                               |
| `extseclead`            | Security Lead           | Users must have at lease one of these additional roles: `extsubmitmanualscan`, `extsubmitstaticscan`, `extsubmitdynamicscan`, `extsubmitdynamicanalysis`, `extsubmitdynamicmpscan`, `extsubmitanyscan`, `extsubmitdiscoveryscan`                                           |
| `extcreator`            | Creator                 | Users must have the additional role that matches the type of scan they want to create and submit: `extsubmitmanualscan`, `extsubmitstaticscan`, `extsubmitdynamicscan`, `extsubmitdynamicanalysis`, `extsubmitanyscan`, `extsubmitdynamicmpscan`, `extsubmitdiscoveryscan` |
| `extsubmitter`          | Submitter               | Users must have the additional role that matches the type of scan they want to submit: `extsubmitmanualscan`, `extsubmitstaticscan`, `extsubmitdynamicscan`, `extsubmitdynamicanalysis`, `extsubmitanyscan`, `extsubmitdynamicmpscan`, `extsubmitdiscoveryscan`            |
| `extreviewer`           | Reviewer                |                                                                                                                                                                                                                                                                                               |
| `extmitigationapprover` | Mitigation Approver     |                                                                                                                                                                                                                                                                                               |
| `extexecutive`          | Executive               |                                                                                                                                                                                                                                                                                               |
| `securityinsightsonly`  | Security Insights       |                                                                                                                                                                                                                                                                                               |
| `securityLabsUser`      | Security Labs User      |                                                                                                                                                                                                                                                                                               |
| `extadmin`              | Administrator           | Contact Veracode Technical Support to assign this role to a user.                                                                                                                                                                                                                             |
| `extpolicyadmin`        | Policy Administrator    |                                                                                                                                                                                                                                                                                               |
| `extelearn`             | eLearning               |                                                                                                                                                                                                                                                                                               |
| `teamAdmin`             | Team Admin              |                                                                                                                                                                                                                                                                                               |
| `greenlightideuser`     | Greenlight IDE User     |                                                                                                                                                                                                                                                                                               |
