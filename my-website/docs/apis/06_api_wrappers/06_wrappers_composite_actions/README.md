---
"ft:title": "Using Composite Actions in the API Wrappers"
"ft:prettyUrl": "c_wrapper_composite_actions"
---
A composite action corresponds to calls to multiple [Veracode XML APIs](https://docs.veracode.com/r/c_api_main) to accomplish a specific workflow.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> The Veracode XML APIs and the wrappers use a different syntax. For the wrappers, the parameter names omit the underscores, the parameter values omit spaces, and some parameters use different names. For example, the parameter <code>app_id</code> in the API is <code>appid</code> in the wrapper and the parameter value <code>Very High</code> in the API is <code>VeryHigh</code> in the wrapper. The parameter <code>business_criticality</code> in the API is <code>criticality</code> in the wrapper. The syntax is not interchangeable and using the wrong syntax causes your command to fail. To ensure you are using the correct syntax, see the documentation provided in the Help directory for each wrapper.</p>

The Veracode API wrappers can perform these composite actions:

-   [uploadandscan](01_uploadandscan.md#)
-   [alldetailedreports](03_alldetailedreports.md#)
-   [passfail](04_passfail.md#)
-   [switchtosaml](05_switchtosaml.md#)