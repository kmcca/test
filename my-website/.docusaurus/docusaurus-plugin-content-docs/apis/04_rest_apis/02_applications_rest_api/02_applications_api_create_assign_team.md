---
"ft:title": "Creating an Application Assigned to a Team with the REST API"
"ft:prettyUrl": "r_applications_create_assign_team"
---
Use this command to create an application:

```shell
http --auth-type=veracode_hmac POST "https://api.veracode.com/appsec/v1/applications" < input.json
```

Include a payload to define the required parameters and assign the application to a team. For example:

```json
{
   "profile":{
      "name":"Applications REST API Demo",
      "tags":"demo,restapi",
      "business_unit":{
         "guid":"08w93dm6-b5gf-4259-a895-39e7d933956k"
      },
      "teams":[
         {
            "guid":"string"
         }
      ],
      "policies":[
         {
            "guid":"1wg6dc84-76kk-5467-a5t2-c5885277jf1p"
         }
      ],
      "business_criticality":"HIGH"
   }
}
```

`team_id` is equivalent to `team_legacy_id` in the [Identity API](https://docs.veracode.com/r/c_identity_intro).
