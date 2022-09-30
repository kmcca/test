---
"ft:title": "uploadandscanbyappid"
"ft:prettyUrl": "uploadandscanbyappid"
---
The `uploadandscanbyappid` composite action enables you to upload files to Veracode for scanning.

The [auto-scan option](https://docs.veracode.com/r/Request_the_Static_Scan_and_Configure_Scan_Options) is always set to on with the `uploadandscanbyappid` call.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> The Veracode XML APIs and the wrappers use a different syntax. For the wrappers, the parameter names omit the underscores, the parameter values omit spaces, and some parameters use different names. For example, the parameter <code>app_id</code> in the API is <code>appid</code> in the wrapper and the parameter value <code>Very High</code> in the API is <code>VeryHigh</code> in the wrapper. The parameter <code>business_criticality</code> in the API is <code>criticality</code> in the wrapper. The syntax is not interchangeable and using the wrong syntax causes your command to fail. To ensure you are using the correct syntax, see the documentation provided in the Help directory for each wrapper.</p>

<p><span style="font-size: medium;">Parameters</span></p>

| Name                       | Type    | Description                                                                                                                                                                                                                                                                                                                         |
|:---------------------------|:--------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `appid`<br>**Required**    | Integer | Application ID.                                                                                                                                                                                                                                                                                                                     |
| `filepath`<br>**Required** | String  | Filepath or folderpath of the files you want to upload to Veracode for scanning. By default, the integration uploads all the subdirectories and files of this filepath. Ensure you have prepared the files according to the [Packaging GuidanceVeracode Packaging Requirements](https://docs.veracode.com/r/compilation_packaging). |
| `version`<br>**Required**  | String  | Name or version of the build that you want to scan.                                                                                                                                                                                                                                                                                 |
| `createsandbox`            | Boolean | For development sandbox scans, create a sandbox for the specified Veracode application. Set to `true` to create a sandbox. Set to `false` to not create a sandbox.                                                                                                                                                                  |
| `exclude`                  | String  | Case-sensitive, comma-separated list of module name patterns that represent the names of modules to not scan as top-level modules. The `*` wildcard matches 0 or more characters. The `?` wildcard matches exactly one character.                                                                                                   |
| `include`                  | String  | Case-sensitive, comma-separated list of module name patterns that represent the names of modules to scan as top-level modules. The `*` wildcard matches 0 or more characters. The `?` wildcard matches exactly one character.                                                                                                       |
| `pattern`                  | String  | Case-sensitive filename pattern that represents the names of uploaded files to save with a different name. The \* wildcard matches 0 or more characters. The ? wildcard matches exactly one character. Each wildcard corresponds to a numbered group that you can reference in the replacement pattern.                             |
| `replacement`              | String  | Replacement pattern that references groups captured by the filename pattern. For example, if the filename pattern is `--SNAPSHOT.war` and the replacement pattern is `$1-master-SNAPSHOT.war`, an uploaded file named `app-branch-SNAPSHOT.war` is saved as `app-master-SNAPSHOT.war`.                                              |
| `sandboxid`                | Integer | ID of the sandbox in which to run the scan.                                                                                                                                                                                                                                                                                         |
| `sandboxname`              | String  | Name of the sandbox in which to run the scan.                                                                                                                                                                                                                                                                                       |
| `scantimeout`              | Integer | Number of minutes to wait for the scan to complete and pass policy. If the scan does not complete or fails policy, the build fails. Default is `60` minutes.                                                                                                                                                                        |

<p><span style="font-size: medium;">Example Commands</span></p>

This example command uses the `uploadandscanbyappid` action in a specific scenario:

Veracode recommends that you use an external [Veracode API credentials file](https://docs.veracode.com/r/c_configure_api_cred_file) to [provide your credentials to the Veracode API wrapper](https://docs.veracode.com/r/c_wrappers_using_api_creds_file). When you use a Veracode API credentials file, you can omit the `-vid` and `-vkey` parameters for specifying your Veracode API credentials.

Start an application scan:

```
java -jar vosp-api-wrapper-java{version}.jar -action uploadandscanbyappid -vid <Veracode API ID> -vkey <Veracode API key> -appid myid -sandboxname mysandbox -createsandbox true -version <unique version> -filepath /workspace/myapp.jar
```

```
VeracodeC#API -action uploadandscanbyappid -vid <Veracode API ID> -vkey <Veracode API key> -appid myid -sandboxname mysandbox -createsandbox true -version <unique version> -filepath /workspace/myapp.jar
```
