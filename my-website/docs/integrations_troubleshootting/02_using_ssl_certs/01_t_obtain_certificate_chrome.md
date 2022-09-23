---
"ft:title" : "Obtain a Certificate Using Chrome"
"ft:prettyUrl" : "t_obtain_certificate_chrome"
---
You can use Google Chrome to obtain an SSL certificate for accessing Veracode.

<p font-size="13pt"><b>Before You Begin</b></p>

   - You have a [Veracode account](https://docs.veracode.com/r/c_about_veracode_accounts) for logging in to Veracode.
   - If you are using an SSL inspection device, you have added the Veracode URLs, such as `analysiscenter.veracode.com` or `api.veracode.com`, to your [allowlist](https://docs.veracode.com/r/IP_addresses).

<p font-size="13pt"><b>Overview</b></p>

If you have obtained the certificate from your IT team, you can proceed to [import the certificate](https://docs.veracode.com/r/t_import_certificate). This procedure uses an example GoDaddy certificate, but you may see different certificates depending on your environment.

<p font-size="13pt"><b>Steps</b></p>

1. Log in to the Veracode Platform at [https://analysiscenter.veracode.com](https://analysiscenter.veracode.com).
2. In the browser address bar, click the lock icon. Then, click **Certificate**.
3. In the Certificate window, click the **Certification Path** tab.
4. Select the certificate at the top of the list. Then, click **View Certificate** to open the root certificate in a separate window.
5. Click the **Details** tab in the Certificate window. Then, click **Copy to File**.

    The Certificate Export Wizard opens.

6. Click **Next**, then select **DER encoded binary X.509 (.CER)**.
7. Click **Next**, then enter a name for the root certificate.
8. Click **Next**.

    The Certificate Export Wizard shows the result of the certificate exported to your hard drive.

9. Click **Finish**.

<p font-size="13pt"><b>Next Steps</b></p>

   - [Identify the relevant TrustStore](https://docs.veracode.com/r/c_identify_trust_store) for your Veracode integration. 
   - [Import the certificate into the Java certificate trust](https://docs.veracode.com/r/t_import_certificate).