---
"ft:title": "Configuring an API Credentials File"
"ft:prettyUrl": "c_configure_api_cred_file"
---
Some Veracode products require that you provide your [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3) using a Veracode API credentials file.

You can create the Veracode API credentials file on Windows, macOS, Linux, or UNIX. You add the file to a specific directory on the system on which you run APIs or integrations. The integration, API wrapper, or command-line tool reads the file from this directory to access your credentials.

For macOS, Linux, and UNIX, you can alternately [store your credentials as environment variables](https://docs.veracode.com/r/t_store_creds_linux_env). You can use either the Veracode API credentials file or environment variables, but not both.