---
"ft:title" : "Obtain a Certificate Using Internet Explorer"
"ft:prettyUrl" : "t_obtain_certificate_ie"
---
You can use Microsoft Internet Explorer to obtain an SSL certificate for accessing Veracode.

<p font-size="13pt"><b>Before You Begin</b></p>

   - You have a [Veracode account](https://docs.veracode.com/r/c_about_veracode_accounts) for logging in to Veracode.
   - If you are using an SSL inspection device, you have added the Veracode URLs, such as `analysiscenter.veracode.com` or `api.veracode.com`, to your [allowlist](https://docs.veracode.com/r/IP_addresses).

<p font-size="13pt"><b>Overview</b></p>

If you have obtained the certificate from your IT team, you can proceed to [import the certificate](https://docs.veracode.com/r/t_import_certificate). This procedure uses an example GoDaddy certificate, but you may see different certificates depending on your environment.

<p font-size="13pt"><b>Steps</b></p>

1. Open an Internet Explorer browser window as an administrator.
2. Go to [https://analysiscenter.veracode.com](https://analysiscenter.veracode.com) and log in.
3. In the browser address bar, click the lock icon and, then, click **View certificates**.

    The Certificate Information window opens.

4. Select the **Certification Path** tab.
5. Select the certificate at the top of the list. 
6. Click **View Certificate** to open the root certificate in its own window.
7. Click the **Details** tab in the Certificate window. Then, click **Copy to File**.

    The Certificate Export Wizard opens.

8. Click **Next**, then select **DER encoded binary X.509 (.CER)**.
9. Click **Next**, then enter a name for the root certificate.
10. Click **Next**.

     The Certificate Export Wizard shows the result of the certificate exported to your hard drive.

9. Click **Finish**.

<p font-size="13pt"><b>Next Steps</b></p>

   - [Identify the relevant TrustStore](https://docs.veracode.com/r/c_identify_trust_store) for your Veracode integration.
   - [Import the certificate into the Java certificate trust](https://docs.veracode.com/r/t_import_certificate).