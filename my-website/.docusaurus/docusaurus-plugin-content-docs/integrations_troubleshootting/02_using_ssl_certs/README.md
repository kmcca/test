---
"ft:title" : "Using SSL Certificates with Veracode Integrations"
"ft:prettyUrl" : "c_using_certificates"
---
SSL certificates allow secure connections from a web server to a browser, domain name, server name, or hostname. Many Veracode integrations use Java, which maintains its own TrustStore. The Java TrustStore may not have the SSL root certificate.

If a [Veracode integration](https://docs.veracode.com/r/c_veracode_integrations) is running on a machine that is behind an SSL inspection device, you must import the custom root certificate that the device issues to connect to Veracode. You can obtain a copy of the certificate from your IT staff or use your browser to obtain the certificate manually.

Complete these tasks to import a custom root certificate:

1. Obtain the certificate using your browser:
    - [Obtain a certificate using Chrome](https://docs.veracode.com/r/t_obtain_certificate_chrome)
    - [Obtain a certificate using Internet Explorer](https://docs.veracode.com/r/t_obtain_certificate_ie)
    - [Obtain a certificate using Firefox](https://docs.veracode.com/r/t_obtain_certificate_firefox)
2. [Identify the relevant TrustStore](https://docs.veracode.com/r/c_identify_trust_store)
3. [Import the certificate into the Java certificate trust](https://docs.veracode.com/r/t_import_certificate)