---
"ft:title": "Install and Use the C# API Wrapper"
"ft:prettyUrl": "t_about_Csharp_wrapper"
---
You download the C# wrapper as a ZIP archive from Veracode, extract the installer from the archive and, then, run the installer from the command line.

<p font-size="13pt"><b>Before You Begin</b></p>

-   You have generated [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3).
-   You have installed the required software listed on the [Veracode-Authored Integrations page](https://community.veracode.com/s/article/Support-Matrix).

<p font-size="13pt"><b>Overview</b></p>

You configure the API wrapper parameters to specify your Veracode API credentials, the actions to perform, and to add new parameters.

You can also [reference the C# API wrapper from Visual Studio](07_use_wrappers_library/01_reference_csharp_wrapper_visual_studio.md).

<p font-size="13pt"><b>Steps</b></p>

1.  Download and extract the [C# ZIP file](https://tools.veracode.com/integrations/API-Wrappers/C%23/bin/VeracodeC%23API.zip).

    In the ZIP file, the documentation is located in `Help\index.html`.

2.  In a command prompt window, navigate to the directory where the EXE file is located and enter `VeracodeC#API`.

3.  Enter this command:

    ```shell
    VeracodeC#API -vid <Veracode API ID> -vkey <Veracode API key> -action <action>
    ```

    where `<action>` is any of the `-action` values listed under Usage in the Help window of the console.

    Veracode recommends that you use an external [Veracode API credentials file](https://docs.veracode.com/r/c_configure_api_cred_file) to [provide your credentials to the Veracode API wrapper](https://docs.veracode.com/r/c_wrappers_using_api_creds_file). When you use a Veracode API credentials file, you can omit the `-vid` and `-vkey` parameters for specifying your Veracode API credentials.

4.  Review the parsing errors to identify missing parameters or parameters with invalid arguments.

5.  To enter missing parameters, run this command:

    ```shell
    VeracodeC#API -vid <Veracode API ID> -vkey <Veracode API key> -action <action> -<param1> <arg1> -<param2> <arg2>…
    ```

    where `<param#>` is a missing parameter and `<arg#>` is the corresponding argument.

    You can use the optional parameter `-inputfilepath` if you want to provide the filepath of a CSV file from which to read additional command-line arguments. The correct format of the CSV file is to enter the parameter names in the first row and the corresponding values of those parameters in the subsequent rows.

    You can use `inputfilepath` to make multiple calls to the API specified by the action. In the CSV file, use one row to specify the parameters for each call. For an example, see [createuser.do](https://docs.veracode.com/r/r_createuser).


The wrapper returns a zero (integer\) exit code when a command succeeds.

The wrapper returns a non-zero (integer\) exit code when a command fails, as follows:

-   `1` = Invalid input
-   `2` = API internal error
-   `3` = Incorrect file format of the CSV file referred to in the `-inputfilepath` parameter
-   `4` = The scan did not pass [policy compliance](../Policy/c_appsec_policies.md). This code only applies to an `uploadandscan` composite action that specifies the `scantimeout` parameter.

The Veracode API wrappers return errors for missing required parameters and unrecognized parameters. The API wrappers do not return errors on defined API parameters that are not valid for use with the specified action. For example, if a Veracode API wrapper takes `sandboxid` as an optional parameter and you supply `sandboxname` in error, the API wrapper ignores `sandboxname` and executes. You can verify the list of valid parameters in the console or the XML API documentation.

