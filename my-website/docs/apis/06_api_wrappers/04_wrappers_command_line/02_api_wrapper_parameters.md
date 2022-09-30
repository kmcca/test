---
"ft:title": "API Wrapper Parameters"
"ft:prettyUrl": "r_wrapper_parameters"
---
Most actions in the Veracode Java and C# API wrappers expose required or optional parameters. Some parameters apply to every action that the wrapper supports.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> The Veracode XML APIs and the wrappers use a different syntax. For the wrappers, the parameter names omit the underscores, the parameter values omit spaces, and some parameters use different names. For example, the parameter <code>app_id</code> in the API is <code>appid</code> in the wrapper and the parameter value <code>Very High</code> in the API is <code>VeryHigh</code> in the wrapper. The parameter <code>business_criticality</code> in the API is <code>criticality</code> in the wrapper. The syntax is not interchangeable and using the wrong syntax causes your command to fail. To ensure you are using the correct syntax, see the documentation provided in the Help directory for each wrapper.</p>

This table lists the parameters that apply to all actions.

|Parameter|Type|Description|
|:--------|:---|:----------|
|`action`<br>**Required**|String|Name of the action.|
|`vid`|String|Veracode API ID.|
|`vkey`|String|Veracode API key.|
|`credprofile`|String|Name of the profile in the [Veracode API credentials file](https://docs.veracode.com/r/c_configure_api_cred_file) to use for authentication.<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> Your command must not include both the `credprofile` parameter and the `vid`/`vkey` parameters or you see an error.</p>|
|`debug`|String|Include to show detailed diagnostic information, which you can use for debugging, in the output. Exclude to not show the diagnostic information.|
|`inputfilepath`|String|Path to a CSV file that contains the parameters to use for the command.You can use `inputfilepath` to make multiple calls to the API specified by the action. In the CSV file, use one row to specify the parameters for each call. For an example, see [createuser.do](https://docs.veracode.com/r/r_createuser).|
|`logfilepath`|String| Filepath of the log file where commands save informational and error messages.                                                                                                                                                                                                                                   |
|`maxretrycount`|Integer| Number of times to retry the last request during certain error conditions or when a request times out. Value range is `1` to `5`.                                                                                                                                                                                |
|`phost`|String| Proxy host. <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> Do not include the web protocol, such as HTTP or HTTPS, in the proxy host. Including the protocol can cause an error.</p>                                                                           |
|`ppassword`|String| Proxy password.                                                                                                                                                                                                                                                                                                  |
|`pport`|String| Proxy port.                                                                                                                                                                                                                                                                                                      |
|`puser`|String| Proxy user.                                                                                                                                                                                                                                                                                                      |

<p><span style="font-size: medium;">Examples</span></p>

For example, run `getapplist` with these parameters to return a list of applications in the application portfolio of an account:

Using the Java wrapper:

```
java -jar vosp-api-wrapper-java{version}.jar -action getapplist -vid <Veracode API ID> -vkey <Veracode API key> -phost proxyhost.com -pport 8080 -puser <proxy username> -ppassword <proxy password>
```

Using the C# wrapper:

```
VeracodeC#API.exe -action getapplist -vid <Veracode API ID> -vkey <Veracode API key> -phost proxyhost.com -pport 8080 -puser <proxy username> -ppassword <proxy password>
```

Veracode recommends that you use an external [Veracode API credentials file](https://docs.veracode.com/r/c_configure_api_cred_file) to [provide your credentials to the Veracode API wrapper](https://docs.veracode.com/r/c_wrappers_using_api_creds_file). When you use a Veracode API credentials file, you can omit the `-vid` and `-vkey` parameters for specifying your Veracode API credentials.

To see the required and optional parameters for an action, you can run `-action` and review the returned text. After reading the returned text, you know which parameters to include in your command.

For example, to return a list of required and optional parameters for [createapp.do](https://docs.veracode.com/r/r_createapp), run `-action createapp`.

Veracode recommends that you use an external [Veracode API credentials file](https://docs.veracode.com/r/c_configure_api_cred_file) to [provide your credentials to the Veracode API wrapper](https://docs.veracode.com/r/c_wrappers_using_api_creds_file). When you use a Veracode API credentials file, you can omit the `-vid` and `-vkey` parameters for specifying your Veracode API credentials.

You replace the parameter values with your Veracode API ID, Veracode API key, application name, and the level of business criticality of the application. See the [createapp.do](https://docs.veracode.com/r/r_createapp) call for more information on the parameters.

<p><span style="font-size: medium;">Arguments</span></p>

All parameters require an argument or value. For example, the `-criticality` parameter requires an argument of `VeryHigh`, `High`, `Medium`, `Low`, or `VeryLow`. When you run `-action`, to see the parameters for an action, you also see the list of arguments under Usage.
