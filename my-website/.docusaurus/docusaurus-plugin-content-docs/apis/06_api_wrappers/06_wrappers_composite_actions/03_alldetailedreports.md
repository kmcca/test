---
"ft:title": "alldetailedreports"
"ft:prettyUrl": "r_alldetailedreports"
---
The `alldetailedreports` composite action downloads the detailed report for the latest build of each application for the specified user account.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> The Veracode XML APIs and the wrappers use a different syntax. For the wrappers, the parameter names omit the underscores, the parameter values omit spaces, and some parameters use different names. For example, the parameter <code>app_id</code> in the API is <code>appid</code> in the wrapper and the parameter value <code>Very High</code> in the API is <code>VeryHigh</code> in the wrapper. The parameter <code>business_criticality</code> in the API is <code>criticality</code> in the wrapper. The syntax is not interchangeable and using the wrong syntax causes your command to fail. To ensure you are using the correct syntax, see the documentation provided in the Help directory for each wrapper.</p>

<p><span style="font-size: medium;">Parameters</span></p>

| Name                               | Type    | Description                                                                                                                          |
|:-----------------------------------|:--------|:-------------------------------------------------------------------------------------------------------------------------------------|
| `outputfolderpath`<br>**Required** | String  | Directs the report to the specified folder.                                                                                          |
| `onlylatest`                       | Boolean | When false, includes build data for previous builds with published scan reports.                                                     |
| `reportchangedsince`               | Boolean | Includes build data only for builds with scan reports that are published or scan reports that have changed since the specified date. |