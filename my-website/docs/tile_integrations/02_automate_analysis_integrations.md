---
"ft:title" : "Automating Analysis with Veracode Integrations"
"ft:prettyUrl" : "c_automate_scans"
---
If you are using the Veracode integrations to automate Veracode Static Analysis or Veracode Software Composition Analysis of your applications, you must follow certain guidelines to ensure that your automations run successfully.

Any first-party modules you [upload for static analysis](https://docs.veracode.com/r/c_request_modules_scan) or third-party components you [select for Veracode SCA upload scanning](https://docs.veracode.com/r/Selecting_Modules_for_Veracode_SCA_Upload_Scanning) must not have fatal or blocking errors. These errors prevent the analysis from starting and cause your automation to fail. Before running your automation, [perform a prescan verification](https://docs.veracode.com/r/c_request_modules_scan) to identify and resolve any errors in your modules and files.

For build and release management systems, each scan in the same automation must upload the same top-level modules. If the top-level modules change between scans, all scans in the automation pause automatically. Before you can restart the automation, you must [review the changed or added modules](https://docs.veracode.com/r/Viewing_Changes_Between_File_Uploads) to ensure that all uploads include the same top-level modules.
