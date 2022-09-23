---
"ft:title" : "Authentication Methods for Dynamic Analysis of Web Applications"
"ft:prettyUrl" : "c_was_login_settings"
---
Veracode can use several authentication methods to access your web application for Dynamic Analysis scanning. You can configure an authentication method in the Veracode Platform.

For authentication methods supported with API Scanning, see [Configure an API Specification Scan](https://docs.veracode.com/r/Configure_and_Run_an_API_Specification_Scan)

**Auto-Login**

This method is selected by default as it is the common method for most applications, including simple login forms that have a username, password, and login button. Auto-login also works for browser-generated logins, such as basic authentication and NTLMv2. For NTLMv2, you can include the NetBIOS domain separated from the username with a backslash, for example, `DOMAIN\username`. You can combine auto-login authentication with basic authentication.

**Login Script**

If your application uses a customized or complex form for its login, you can add login script authentication to auto-login authentication.

Record and upload a login sequence that Veracode uses to automatically log in to your application. Use this method for multi-step login sequences that contain one or more authentication methods, such as username, password, and PIN. You can also combine login script authentication with basic authentication.

If you use login script authentication and have uploaded a login script, you can download it at any time to verify its information. Go to the Dynamic Analysis Summary page and click on the URL that has the login script. In the URL Configuration section, click the link in the Login Script field to download the file.

**Client Certificate**

If you want to scan an application that requires a certificate, you upload the certificate and associated password to enable Veracode to access that application. The certificate file must be in the PFX or P12 format.

**Basic Authentication \(Browser-generated\)**

The basic authentication method provides information for a site that uses basic or browser-generated authentication where the browser prompts you for credentials in its own popup window. Enter the username and password you want Veracode to use. Optionally, you can enter the domain name. You can use this method alone or in combination with the auto-login or login script methods.

**Custom HTTP Header**

HTTP headers enable the client to pass additional information with each HTTP request to the server. An HTTP header consists of its case-insensitive name followed by a colon \(:\) and by its value. The server ignores any whitespace before the value.

If your scan requires a specific HTTP header key-value pair to authenticate or correctly view the pages of your website, you can specify custom headers. Each custom header must contain a header name and a header value. You can specify any header name except header names that are forbidden to be specified programmatically, such as the cookie or host header.

Forbidden header names are:

  - `Accept-Charset`
  - `Accept-Encoding`
  - `Access-Control-Request-Headers`
  - `Access-Control-Request-Method`
  - `Connection`
  - `Content-Length`
  - `Cookie`
  - `Cookie2`
  - `Date`
  - `DNT`
  - `Expect`
  - `Feature-Policy`
  - `Host`
  - `Keep-Alive`
  - `Origin`
  - `Proxy-`
  - `Sec-`
  - `Referer`
  - `TE`
  - `Trailer`
  - `Transfer-Encoding`
  - `Upgrade`
  - `Via`

If you specify a URL for matching purposes, Veracode only sends the header to URLs and their subdirectories that match this specified URL. If you do not specify a URL, Veracode sends the header to the target URL listed in the Dynamic Analysis and any of its subdirectories.

You can use wildcards in the URL. For example:

  - `https://www.veracode.com` matches `https://www.veracode.com/home`, but not `http://www.veracode.com` or `https://veracode.com`
  - `https://*.veracode.com` matches both `https://api.veracode.com` and `https://veracode.com`