---
"ft:title" : "Applying Scan Requirements to a Policy"
"ft:prettyUrl" : "c_policy_scan_reqs"
---
When [creating a policy](https://docs.veracode.com/r/t_create_policy), you can set a single scan frequency requirement for all scan types or set the requirement for specific scan types.

Scan requirements define how frequently you must scan an application for it to pass policy. On the Scan Requirements page, you can define one or more required scan types and set the scan frequency for each type. You can select Any Scan Type, or specify one or more of the following scan types: Static Analysis, Dynamic Analysis, or Manual Penetration Testing.

You can select the following scan frequencies: once, weekly, monthly \(30 days\), quarterly \(90 days\), semi-annually \(180 days\), annually, every 18 months, every two years, or every three years.

When an application approaches the date defined in the scan requirement, Veracode sends a notification to members of the teams associated with the application. If you do not scan the application as frequently as the requirement dictates, the application does not pass policy until it meets the requirement.
