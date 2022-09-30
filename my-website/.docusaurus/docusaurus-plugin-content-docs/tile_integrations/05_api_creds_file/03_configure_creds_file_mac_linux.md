---
"ft:title": "Configure an API Credentials File on macOS or Linux"
"ft:prettyUrl": "t_configure_credentials_mac"
---
You can configure a Veracode API credentials file on macOS or Linux and, optionally, run a command to restrict access to the file.

<p font-size="13pt"><b>Before You Begin</b></p>

-   You have generated [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3).
-   Depending on your Veracode integration, you have added your Veracode API credentials to the `[default]` application profile. If you have an existing `[greenlight]` profile, delete it or rename it to `[default]`.

<p font-size="13pt"><b>Steps</b></p>

1. On the command line, navigate to the folder for your username. For example, `$HOME`.

2. Run this command to create the `.veracode` folder: `$ mkdir .veracode`

3. Navigate to the `.veracode` folder. For example: `$ cd .veracode`

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
    <b>Note:</b> macOS immediately hides the <code>.veracode</code> folder because the folder name begins with a period.</p>

5. Run this touch command to create the `credentials` file: `$ touch credentials`

6. Open the Finder to `.veracode`.

7. Double-click the `credentials` file to open it in a text editor.

8. Copy this text and paste it into the `credentials` file:

    ```
    [default]
    veracode_api_key_id = Your API ID
    veracode_api_key_secret = Your API key               
                    
    ```

    The spaces around the equals sign (=) are not required.

9. Replace the values with your Veracode API credentials.

10. Save the `credentials` file.

11. Optionally, you can run the following command to restrict access to the `credentials` file: `chmod 600 ~/.veracode/credentials`
