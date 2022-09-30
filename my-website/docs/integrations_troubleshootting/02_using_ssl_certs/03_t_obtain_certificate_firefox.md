---
"ft:title" : "Obtain a Certificate Using Firefox"
"ft:prettyUrl" : "t_obtain_certificate_firefox"
---
You can use Mozilla Firefox to obtain an SSL certificate for accessing Veracode.

<p font-size="13pt"><b>Before You Begin</b></p>

   - You have a [Veracode account](https://docs.veracode.com/r/c_about_veracode_accounts) for logging in to Veracode.
   - If you are using an SSL inspection device, you have added the Veracode URLs, such as `analysiscenter.veracode.com` or `api.veracode.com`, to your [allowlist](https://docs.veracode.com/r/IP_addresses).

<p font-size="13pt"><b>Overview</b></p>

If you have obtained the certificate from your IT team, you can proceed to [import the certificate](https://docs.veracode.com/r/t_import_certificate). This procedure uses an example GoDaddy certificate, but you may see different certificates depending on your environment.

<p font-size="13pt"><b>Steps</b></p>

1.  Go to [https://analysiscenter.veracode.com](https://analysiscenter.veracode.com) and log in.
2.  In the browser address bar, click the lock icon.
3.  In the site information window, click the arrow in the Connection section.
4.  In the Site Security window, click **More Information**.
5.  Click **View Certificate**.
6.  In the Certificate window, click the **Details** tab.
7.  Select a certificate from the list. Then, click **PEM (cert)** to download the certificate file.
8.  Save the certificate file locally.

<p font-size="13pt"><b>Next Steps</b></p>

   - [Identify the relevant TrustStore](https://docs.veracode.com/r/c_identify_trust_store) for your Veracode integration.
   - [Import the certificate into the Java certificate trust](https://docs.veracode.com/r/t_import_certificate).