---
"ft:title": "Enabling HMAC for Veracode APIs"
"ft:prettyUrl": "c_enabling_hmac"
---
Veracode APIs use a Hash-based Message Authentication Code (HMAC) with your [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3) to add an HMAC signature to the HTTP authorization header of each API request. This security measure provides maximum protection against [man-in-the-middle](https://www.veracode.com/security/man-middle-attack) and session replay attacks.

HMAC signing provides these added security benefits:

- Credentials, which consist of an API ID and key, are not sent in the clear as plain text. The API key is never transmitted, but encrypts the HMAC from the sender-side and decrypts it from the server-side.
- The HMAC signature validates that the message was not tampered with or altered in transit. Any change to the message invalidates the HMAC.
- The HMAC signature includes a nonce (one-time code) that prevents replay attacks.

To respond to an accidental credentials leak, you can use the [Veracode Platform](https://docs.veracode.com/r/c_api_credentials3) or the [REST APIs](https://docs.veracode.com/r/c_identity_gen_creds) to quickly revoke and regenerate them.

<p><span style="font-size: medium;">Prerequisites</span></p>

You must have [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3). Veracode highly recommends that you add your API credentials to a [Veracode API credentials file](https://docs.veracode.com/r/c_configure_api_cred_file).

<p><span style="font-size: medium;">Enable HMAC for the API Wrappers</span></p>

The [API wrappers](https://docs.veracode.com/r/c_about_wrappers) are preconfigured with HMAC signing already enabled. After you generate and store your Veracode API credentials, you can use the Java or C# wrappers from the command line or in your code. The API wrappers are also the best way to troubleshoot your Veracode environment.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Veracode recommends that you always run the latest version of an API wrapper.</p>

<p><span style="font-size: medium;">Enable HMAC for Using the REST APIs with Java</span></p>

You can use any of these methods:

- Perform the external signing step on the command line using either the Java or Python tool or the Veracode API wrappers.
- Use one of the community-provided HMAC implementations: [https://github.com/veracode/Veracode-Community-Projects#hmac-signing-libraries](https://github.com/veracode/Veracode-Community-Projects#hmac-signing-libraries).
- Enable HMAC signing within your application.

<p><span style="font-size: medium;">Enable HMAC for Using the XML APIs from the Command Line</span></p>

The cURL command-line tool does not support HMAC authentication, therefore Veracode provides support for the HTTPie command-line tool. To use HTTPie and HMAC authentication with the XML APIs:

- Download and install the Python programming language. Veracode recommends Python 3.7 or later. If you have a recommended version, you can omit this step. Otherwise, refer to the [Python Wiki](https://wiki.python.org/moin/BeginnersGuide/Download) for advice on choosing a Python download.
- [Install the Python Authentication Library](https://docs.veracode.com/r/t_install_api_authen).
- Download and install the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

<p><span style="font-size: medium;">Enable HMAC for Python Programs</span></p>

Complete these tasks:

1. [Install the Python Authentication Library](https://docs.veracode.com/r/t_install_api_authen).
2. Review the [HMAC Signing Example in Python](https://docs.veracode.com/r/c_hmac_signing_example_python).

<p><span style="font-size: medium;">Enable HMAC for Java Programs</span></p>

Complete these tasks:

1. [Install the Java Authentication Library](https://docs.veracode.com/r/t_configure_java_library).
2. Review the [HMAC Signing Example in Java](https://docs.veracode.com/r/c_hmac_signing_example).

<p><span style="font-size: medium;">Enable HMAC for C# Programs</span></p>

Review the [HMAC Signing Example in C#](https://docs.veracode.com/r/c_hmac_signing_example_c_sharp).