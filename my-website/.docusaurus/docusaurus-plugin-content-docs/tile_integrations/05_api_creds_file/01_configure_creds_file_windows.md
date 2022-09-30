---
"ft:title": "Configure an API Credentials File on Windows"
"ft:prettyUrl": "t_configure_credentials_windows"
---
You can configure a Veracode API credentials file on Windows and, optionally, use encryption to secure the file.

<p font-size="13pt"><b>Before You Begin</b></p>

-   You have generated [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3).
-   Depending on your Veracode integration, you have added your Veracode API credentials to the `[default]` application profile. If you have an existing `[greenlight]` profile, delete it or rename it to `[default]`.

<p font-size="13pt"><b>Steps</b></p>

1.  In File Explorer, go to `C:\Users\{username}`, where `username` is the folder for your user profile.

2.  Add a new folder to your user folder named `.veracode.`, adding a final period to the name.

    The extra period at the end of the folder name specifies to File Explorer that you want to create a folder that starts with a period. The second period disappears after you create the folder.

3.  Open a text editor, such as Notepad, and add your Veracode API credentials to a new file in this format:

    ```
    [default]
    veracode_api_key_id = {your_api_key_id}
    veracode_api_key_secret = {your_api_secret_key}
    ```

    The spaces around the equals sign (=) are not required.

4.  Select **File** > **Save As** and enter `"credentials"` in the File name field. Including the quotation marks ensures that Notepad does not add a file extension. If you create the file with a file extension, right-click the file, choose **Properties**, and remove the file extension in the window.

5.  Click **Save**.

6.  Optionally, you can use the Advanced Attributes window in Windows to enable the **Encrypt contents to secure data** option on the credentials file. Enabling this option restricts user access to the file.
