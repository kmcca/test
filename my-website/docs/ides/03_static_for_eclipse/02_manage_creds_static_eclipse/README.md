---
"ft:title" : "Store Veracode API Credentials in a Keychain"
"ft:prettyUrl" : "Store_Veracode_API_Credentials_in_a_Keychain"
---
You can store your [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3) securely in a [Veracode API credentials file](https://docs.veracode.com/r/c_configure_api_cred_file) or Eclipse.

<p font-size="13pt"><b>Overview</b></p>

Veracode recommends that you use a Veracode API credentials file. The plugin uses these credentials to access Veracode.

<p font-size="13pt"><b>Steps</b></p>

1.  Select **Veracode** \> **Options** \> **Credentials**.

2.  Select an option for storing your Veracode API credentials:

    - **Store credentials in external file**: use the credentials in your Veracode API credentials file. By default, if your credentials are not currently stored in Eclipse, this option is selected. Click **Test Credentials** to verify that your credentials are valid.
    - **Store credentials in Eclipse**: click **Add Credentials** to enter and store your credentials in Eclipse. By default, if your credentials are currently stored in Eclipse, this option is selected.
  
3.  Click **OK**.

4.  If you selected to store your credentials, the Veracode Keychain window opens.

    Create a passphrase that Veracode can use as a security key to encrypt your Veracode credentials before saving them. Veracode uses the passphrase to create a digest that it stores securely. This digest expires every 12 hours, after which the plugin prompts you to enter the passphrase for creating a new digest.

5.  Enter your passphrase and confirm it.

6.  Click **Submit**.