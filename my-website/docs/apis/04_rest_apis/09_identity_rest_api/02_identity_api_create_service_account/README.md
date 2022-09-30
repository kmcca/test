---
"ft:title": "Creating an API Service Account with the Identity API"
"ft:prettyUrl": "c_identity_create_api"
---
This use case scenario provides the Identity REST API command and payload for creating an API service account.

Use this command to create an [API service account](https://docs.veracode.com/r/c_about_veracode_accounts):

```shell
http --auth-type=veracode_hmac POST "https://api.veracode.com/api/authn/v2/users" < input.json
```

The API passes the JSON file that you populate with the necessary values as shown in this example payload:

```json
{
   "user_name":"vitunicornidentityapi",
   "first_name":"VITUnicorn",
   "last_name":"IdentityAPI",
   "email_address":"unicorn+identityapi1@gmail.com",
   "ip_restricted":false,
   "active":true,
   "roles":[
      {
         "role_name":"noteamrestrictionapi"
      },
      {
         "role_name":"apisubmitanyscan"
      },
      {
         "role_name":"uploadapi"
      },
      {
         "role_name":"resultsapi"
      }
   ],
   "permissions":[
      {
         "permission_name":"apiUser"
      }
   ],
   "teams":[
      {
         "team_id":"teamId"
      }
   ]
}
```

If you want an API service account to have access to all applications, regardless of which team the user is a member, use `noteamrestrictionapi`.

To restrict scan types for a user with the `uploadapi` role, use one or more of these additional roles:

-   `apisubmitanyscan`
-   `apisubmitstaticscan`
-   `apisubmitdynamicscan`
-   `apisubmitmanualscan`

|Role Short Name|Role Name|Additional Roles Required|
|---------------|---------|-------------------------|
|`submitterapi`|Upload API - Submit Only|Users must have the additional role that matches the type of scan they want to submit: `apisubmitstaticscan`, `apisubmitdynamicscan`, `apisubmitmanualscan`, `noteamrestrictionapi`, `apisubmitanyscan`|
|`uploadapi`|Upload and Scan API|Users must have the additional role that matches the type of scan they want to run: `apisubmitstaticscan`, `apisubmitdynamicscan`, `apisubmitmanualscan`, `noteamrestrictionapi`, `apisubmitanyscan`|
|`resultsapi`|Results API||
|`mitigationapi`|Mitigation API||
|`archerreports`|Archer Reports API||
|`greenlightapiuser`|Greenlight API User||
|`adminapi`|Admin API||
