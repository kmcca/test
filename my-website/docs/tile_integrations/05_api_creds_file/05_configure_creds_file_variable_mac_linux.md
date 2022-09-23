---
"ft:title": "Configure the API Credentials as Environment Variables on macOS and Linux"
"ft:prettyUrl": "t_store_creds_linux_env"
---
You can store your [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3) as environment variables on macOS, Linux, or UNIX. You can use either an [API credentials file](https://docs.veracode.com/r/c_configure_api_cred_file) or environment variables, but not both.

<p font-size="13pt"><b>Before You Begin</b></p>

- You have generated Veracode API credentials.
- Depending on your Veracode integration, you have added your API credentials to the `[default]` application profile. If you have an existing `[greenlight]` profile, delete it or rename it to `[default]`.

<p font-size="13pt"><b>Steps</b></p>

On the command line, run these commands, replacing the values with your API ID and key:

```
$ export VERACODE_API_KEY_ID={your_api_key_id}
```

```
$ export VERACODE_API_KEY_SECRET={your_api_secret_key}
```
