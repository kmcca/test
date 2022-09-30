---
"ft:title" : "About Dynamic Analysis Single Sign-On Authentication Recommendations"
"ft:prettyUrl" : "About_Dynamic_Analysis_Single_Sign-On_Authentication_Recommendations"
---
Veracode Dynamic Analysis supports single sign-on \(SSO\) systems using HTTP basic access authentication and HTML forms-based authentication.

Dynamic Analysis can support any SSO system, such as SAML and OAuth, that uses a browser-viewable, forms-based, or HTTP basic login method.

**Single Sign-On Using HTTP Basic Access Login**

Dynamic Analysis supports HTTP basic access authentication if Veracode can load the authentication URI without additional navigation, such as a popup window in a browser tab.

Veracode recommends these modifications to your default configurations:

  - Ensure that your target URL uses the URL for the SSO server, for example, `sso.authserver.com`, instead of the domain of the target application, for example, `domain.com`. This setting requests Veracode to test `sso.authserver.com` for any application layer software vulnerabilities.
  - [Enter credentials](https://docs.veracode.com/r/t_was_login_creds) in the Dynamic Analysis **Basic Authentication** tab.
  - Provide a crawl script that loads the domain of the target application, for example, `domain.com`.
  - Add the domain of the target application as an allowed host.

**Single Sign-On Using Forms-Based Login**

SSO systems generally prompt users using an HTML forms-based method, which is suitable for login scripting. Typically, the SSO system resides on a different domain than the target web application. For example, the SSO system resides on `sso.company.com`, and the target web application resides on `domain.com`.

Veracode recommends these modifications to your default configurations:

  - Use the domain of the target application as the target URL, for example, `domain.com`.
  - Add the SSO domain, for example, `sso.company.com`, under Allowed Hosts only if you also plan to include that domain in the scope for auditing.
  - Configure a login script to direct Veracode Dynamic Analysis from the target URL to the input login credentials on the SSO domain.
  - Add valid credentials.
  - Add a verification URL and verification text. Veracode recommends using the HTML text found on the verification URL as the verification text.
  - If using Single-Page App \(SPA\) mode, configure a logout script that instructs Veracode Dynamic Analysis to log out of the customer web application.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> Veracode does not recommend including any third-party authentication websites, such as Facebook Connect, Yahoo! ID, Twitter, and LinkedIn, in your Allowed Hosts.</p>