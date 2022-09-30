---
"ft:title" : "Veracode Jenkins Plugin"
"ft:prettyUrl" : "c_about_jenkins"
---
The Veracode Jenkins Plugin integrates with your Jenkins development pipelines to seamlessly automate the operations for building, uploading, and scanning your application code. 

Starting with version 20.6.10.0 of the Veracode Jenkins Plugin, Veracode distributes the plugin as open source under an MIT license. You can download the plugin source code from [GitHub](https://github.com/jenkinsci). On the [Jenkins Marketplace](https://plugins.jenkins.io/) and in the Jenkins Plugin Manager, the plugin name is Veracode Scans.

The Veracode Jenkins Plugin supports the [Jenkins pipeline functionality](https://docs.veracode.com/r/t_jenkins_pipe) and [the ability to bind](https://docs.veracode.com/r/t_binding_creds) your [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3) to build environment variables.

The Veracode Jenkins Plugin contains the [Java API wrapper](https://docs.veracode.com/r/c_about_wrappers) and uses the [uploadandscan](https://docs.veracode.com/r/r_uploadandscan) composite action from the wrapper to upload your code to Veracode for scanning. By default, the `uploadandscan` composite action is set to `autoscan`, which starts the scan automatically after the prescan. However, the prescan must meet the Veracode Static Analysis scanning requirements. Before running your automation, [perform a prescan verification](https://docs.veracode.com/r/c_request_modules_scan). Since the `uploadandscan` composite action runs through the Java API wrapper, the wrapper returns a non-zero integer exit code when a command fails. These are the exit codes:

-   `1` = Invalid input
-   `2` = API internal error
-   `3` = Incorrect file format of the CSV file referred to in the `-inputfilepath` parameter
-   `4` = The scan did not pass policy compliance. This code only applies to an `uploadandscan` composite action that specifies the `scantimeout` parameter.

The Veracode API wrappers return errors for missing required parameters and unrecognized parameters. They do not return errors on defined API parameters that are not valid for use with the specified action. For example, if an API wrapper takes `sandboxid` as an optional parameter and you supply `sandboxname` in error, the wrapper ignores `sandboxname` and executes. You can verify the list of valid [parameters](https://docs.veracode.com/r/r_wrapper_parameters) in the console.

