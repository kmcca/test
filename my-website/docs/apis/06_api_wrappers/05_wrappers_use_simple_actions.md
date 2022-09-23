---
"ft:title": "Using Simple Actions in the API Wrappers"
"ft:prettyUrl": "c_wrapper_simple_actions"
---
A simple action is a single call to one of the Veracode XML APIs.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> The Veracode XML APIs and the wrappers use a different syntax. For the wrappers, the parameter names omit the underscores, the parameter values omit spaces, and some parameters use different names. For example, the parameter <code>app_id</code> in the API is <code>appid</code> in the wrapper and the parameter value <code>Very High</code> in the API is <code>VeryHigh</code> in the wrapper. The parameter <code>business_criticality</code> in the API is <code>criticality</code> in the wrapper. The syntax is not interchangeable and using the wrong syntax causes your command to fail. To ensure you are using the correct syntax, see the documentation provided in the Help directory for each wrapper.</p>

You can use the Veracode API wrappers to perform these simple actions:

## Upload Actions

-   [createapp](https://docs.veracode.com/r/r_createapp)
-   [updateapp](https://docs.veracode.com/r/r_updateapp)
-   [deleteapp](https://docs.veracode.com/r/r_deleteapp)
-   [getappinfo](https://docs.veracode.com/r/r_getappinfo)
-   [getapplist](https://docs.veracode.com/r/r_getapplist)
-   [createbuild](https://docs.veracode.com/r/r_createbuild)
-   [updatebuild](https://docs.veracode.com/r/r_updatebuild)
-   [deletebuild](https://docs.veracode.com/r/r_deletebuild)
-   [getbuildinfo](https://docs.veracode.com/r/r_getbuildinfo)
-   [getbuildlist](https://docs.veracode.com/r/r_getbuildlist)
-   [uploadfile](https://docs.veracode.com/r/r_uploadfile)
-   [removefile](https://docs.veracode.com/r/r_removefile)
-   [getfilelist](https://docs.veracode.com/r/r_getfilelist)
-   [beginprescan](https://docs.veracode.com/r/r_beginprescan)
-   [getprescanresults](https://docs.veracode.com/r/r_getprescanresults)
-   [beginscan](https://docs.veracode.com/r/r_beginscan)
-   [getpolicylist](https://docs.veracode.com/r/r_getpolicylist)
-   [getvendorlist](https://docs.veracode.com/r/r_getvendorlist)

## Results Actions

-   [detailedreport](https://docs.veracode.com/r/r_detailedreport)
-   [summaryreport](https://docs.veracode.com/r/r_summaryreport)
-   [getappbuilds](https://docs.veracode.com/r/r_getappbuilds)
-   [getcallstacks](https://docs.veracode.com/r/r_getcallstacks)
-   [detailedreportpdf](https://docs.veracode.com/r/r_detailedreportpdf)
-   [summaryreportpdf](https://docs.veracode.com/r/r_summaryreportpdf)
-   [thirdpartyreportpdf](https://docs.veracode.com/r/r_thirdpartyreportpdf)

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> To access the <code>detailedreportpdf</code>, <code>summaryreportpdf</code>, or <code>thirdpartyreportpdf</code> endpoints through the wrapper, you must call <code>detailedreport.do</code>, <code>summaryreport.do</code> or <code>thirdpartyreport.do</code>, using the <code>-format pdf</code> parameter.</p>

## Admin Actions

-   [createteam](https://docs.veracode.com/r/r_createteam)
-   [updateteam](https://docs.veracode.com/r/r_updateteam)
-   [deleteteam](https://docs.veracode.com/r/r_deleteteam)
-   [getteamlist](https://docs.veracode.com/r/r_getteamlist)
-   [createuser](https://docs.veracode.com/r/r_createuser)
-   [updateuser](https://docs.veracode.com/r/r_updateuser)
-   [deleteuser](https://docs.veracode.com/r/r_deleteuser)
-   [getuserinfo](https://docs.veracode.com/r/r_getuserinfo)
-   [getuserlist](https://docs.veracode.com/r/r_getuserlist)
-   [getcurriculumlist](https://docs.veracode.com/r/r_getcurriculumlist)
-   [gettracklist](https://docs.veracode.com/r/r_gettracklist)

## Sandbox Actions

-   [createsandbox](https://docs.veracode.com/r/r_createsandbox)
-   [getsandboxlist](https://docs.veracode.com/r/r_getsandboxlist)
-   [updatesandbox](https://docs.veracode.com/r/r_updatesandbox)
-   [promotesandbox](https://docs.veracode.com/r/r_promotesandbox)
-   [deletesandbox](https://docs.veracode.com/r/r_deletesandbox)

## VAST Actions

-   [getsharedreportinfo](https://docs.veracode.com/r/r_getsharedreportinfo)
-   [getsharedreportlist](https://docs.veracode.com/r/r_getsharedreportlist)
-   [sharedreport](https://docs.veracode.com/r/r_sharedreport)
-   [sharedreportpdf](https://docs.veracode.com/r/r_sharedreportpdf)

## Mitigation Actions

-   [getmitigationinfo](https://docs.veracode.com/r/r_getmitigationinfo)
-   [updatemitigationinfo](https://docs.veracode.com/r/r_updatemitigationinfo)

## Archer Actions

-   [generatearcherreport](https://docs.veracode.com/r/r_generatearcher)
-   [downloadarcherreport](https://docs.veracode.com/r/r_downloadarcher)
-   [archer](https://docs.veracode.com/r/r_archer_deprec)

## Flaw Report Actions

-   [generateflawreport](https://docs.veracode.com/r/r_generateflawreport)
-   [downloadflawreport](https://docs.veracode.com/r/r_downloadflawreport)
