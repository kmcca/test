---
"ft:title" : "Import an SSL Certificate"
"ft:prettyUrl" : "t_import_certificate"
---
You can import an SSL certificate into the Java certificate TrustStore to enable SSL

<p font-size="13pt"><b>Before You Begin</b></p>

You have obtained an SSL certificate from your browser:

   - [Obtain a certificate using Chrome](https://docs.veracode.com/r/t_obtain_certificate_chrome)
   - [Obtain a certificate using Internet Explorer](https://docs.veracode.com/r/t_obtain_certificate_ie)
   - [Obtain a certificate using Firefox](https://docs.veracode.com/r/t_obtain_certificate_firefox)

<p font-size="13pt"><b>Steps</b></p>

1. Open a command-line window as an administrator.
2. Navigate to the `%JAVA_HOME%` directory that your Veracode plugin is using.
3. Run this command to import the certificate:

    ```
    keytool -importcert -file C:\temp\example.cer -keystore lib\security\cacerts -alias sslinspection 
    Enter keystore password:                 
    ```

4. Enter the keystore password. The default is `changeit`.

    A confirmation message displays informing you the certificate is now in the keystore.

5. Enter `y` to trust the certificate.

    After installing your certificate, you may need to restart the IDE or CI/CD where the plugin is running for the changes to take effect.

6. Optionally, you can list the contents of the `cacerts` file to verify a successful import by entering this command from the `%JAVA_HOME%` directory. This command outputs a text file with the full contents:

    ```
    keytool.exe -list -v -keystore lib\security\cacerts > C:\temp\cacerts.txt
    ```