---
"ft:title": "Using an API Credentials File with the API Wrappers"
"ft:prettyUrl": "c_wrappers_using_api_creds_file"
---
You can use a [Veracode API credentials file](https://docs.veracode.com/r/c_configure_api_cred_file) to provide your [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3) to the Veracode API wrappers.

By default, the Veracode API wrappers expect a Veracode API credentials file. After you configure a credentials file, when you run a command, the API wrappers use the API credentials in the file. You do not need to specify your credentials at the command line.

If your Veracode API credentials file contains more than one API ID/key pair, the API wrappers use the API credentials with the profile name `[default]`:

```
[default]
veracode_api_key_id = Your API ID
veracode_api_key_secret = Your API key  
```

If the credentials file does not contain a `[default]` profile, or the credentials file is empty, you see an error when you run a command.

To specify a profile name at the command line, you can use the [`-credprofile`](https://docs.veracode.com/r/r_wrapper_parameters) parameter. For example:

```java
java -jar vosp-api-wrappers-java-<version #>.jar -credprofile [MyProfile1] -action createapp -appname <application name> -criticality veryhigh
```

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Your command must not include both the <code>credprofile</code> parameter and the <code>vid</code>/<code>vkey</code> parameters or you see an error.</p>