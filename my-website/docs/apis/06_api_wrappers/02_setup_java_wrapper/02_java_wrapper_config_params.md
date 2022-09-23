---
"ft:title": "Configure Java API Wrapper Parameters"
"ft:prettyUrl": "t_configuring_java_parameters"
---
You can configure the API wrapper parameters to specify your [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3), the actions to perform, and to add parameters.

<p font-size="13pt"><b>Before You Begin</b></p>

-   You have [installed the Veracode Java API wrapper](README.md).
-   You have generated Veracode API credentials.
-   You have installed the required software listed on the [Veracode-Authored Integrations page](https://community.veracode.com/s/article/Support-Matrix).

<p font-size="13pt"><b>Steps</b></p>

1.  Enter this command:

    ```
    java -jar vosp-api-wrapper-java{version}.jar -vid {Veracode API ID} -vkey {Veracode API key} -action {action}
    ```

    Veracode recommends that you use an external [API credentials file](https://docs.veracode.com/r/c_configure_api_cred_file) to [provide your credentials to the API wrapper](https://docs.veracode.com/r/c_wrappers_using_api_creds_file). When you use an API credentials file, you can omit the `-vid` and `-vkey` parameters for specifying your API credentials.

    For a list of valid actions, run this command with the `-help` parameter:

    ```
    java -jar vosp-api-wrapper-java{version}.jar -help
    ```

2.  Review the parsing errors window to identify missing parameters or invalid arguments.

3.  To add missing parameters, run this command:

    ```
    java -jar vosp-api-wrapper-java{version}.jar -vid {Veracode API ID} -vkey {Veracode API key} -action {action} -{param1} {arg1} -{param2} {arg2}…
    ```

    where, `{param}` is a missing parameter and `{arg}` is the corresponding argument.

<p font-size="13pt"><b>Next Steps</b></p>

Use the optional parameter `-inputfilepath` to provide the filepath of a CSV file from which to read additional command-line arguments. The correct format of the CSV file is to enter the parameter names in the first row and the corresponding values of those parameters in the subsequent rows.

You can use `inputfilepath` to make multiple calls to the API specified by the action. In the CSV file, use one row to specify the parameters for each call. For an example, see [createuser.do](https://docs.veracode.com/r/r_createuser).

The wrapper returns a zero (integer) exit code when a command succeeds.

The wrapper returns a non-zero (integer) exit code when a command fails:

-  `1` = Invalid input.
-  `2` = API internal error.
-  `3` = Incorrect file format of the CSV file referred to in the `-inputfilepath` parameter.
-  `4` = The scan did not pass [policy compliance](https://docs.veracode.com/r/c_appsec_policies). This code only applies to an `uploadandscan` composite action that specifies the `scantimeout` parameter.

The Veracode API wrappers return errors for missing required parameters and unrecognized parameters. The API wrappers do not return errors on defined API parameters that are not valid for use with the specified action. For example, if an API wrapper takes `sandboxid` as an optional parameter and you supply `sandboxname` in error, the API wrapper executes, but ignores `sandboxname`. You can verify the list of valid parameters in the console or [XML APIs](https://docs.veracode.com/r/c_api_main).

You can also [reference the Java API wrapper from Eclipse or Visual Studio](https://docs.veracode.com/r/c_using_wrappers_AS).
