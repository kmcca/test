---
"ft:title" : "Troubleshooting Prescan Errors for a Dynamic Analysis"
"ft:prettyUrl" : "Troubleshooting_Prescan_Errors"
---
Prescan errors comprise two types: connection errors and authentication errors.

These tables provide corrective actions for prescan connection and authentication errors. After troubleshooting the problem you are experiencing, verify the Dynamic Analysis configuration and run prescan again. If a failure persists, contact Veracode Technical Support.

<p><span style="font-size: medium;">Connection Errors</span></p>

| Error Message                     | Definition and Corrective Action                                                                                                                                                                                             |
|-----------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Unresolvable hostname`           | Veracode was not able to resolve the hostname. Verify the hostname and try again.                                                                                                                                            |
| `Unreachable port`                | Veracode was not able to reach the destination port. Verify the port and try again.                                                                                                                                          |
| `Connection error`                | Veracode was not able to connect to the target URL. Verify the URL and its connectivity, and try again.                                                                                                                      |
| `Server error`                    | There is an error on the target server. Verify the server is connected and available, and try again.                                                                                                                         |
| `No target found`                 | Veracode did not find the target URL at the site. Verify you have entered the correct URL and try again.                                                                                                                     |
| `Empty response received`         | Veracode received an empty response from the target URL. Verify the web server is correctly configured and try again.                                                                                                        |
| `Blocklisted URL`                 | This URL is on the blocklist and will not be analyzed. Enter a new URL.                                                                                                                                                      |
| `No response from server`         | Veracode received no response from the host server of the target URL. Verify the URL and its connectivity, and try again.                                                                                                    |
| `Non-allowlisted URL`             | This URL is not on the allowlist and will not be analyzed. Enter a new URL.                                                                                                                                                  |
| `Excessive redirect`              | This URL has an infinite or excessively long redirection loop and will not be analyzed. Enter a new URL.                                                                                                                     |
| `Timeout error`                   | This URL returned an HTTP protocol-level timeout error indicating there is a problem with network congestion or connection throttling by a proxy server. Verify your network infrastructure and connectivity, and try again. |
| `Malformed URL`                   | This URL does not adhere to the URI syntax. Re-enter the URL with the correct syntax.                                                                                                                                        |
| `Non-allowlisted URL redirection` | The request to the target URL results in a redirection. Verify the URL and try again.                                                                                                                                        |
| `Blocklisted URL redirection`     | The request to the target URL redirects to a URL that is on the blocklist and will not be analyzed. Enter a new URL.                                                                                                         |

<p><span style="font-size: medium;">Authentication Errors</span></p>

| Error Message               | Definition and Corrective Action                                                                                                                                                |
|-----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Missing credentials`       | You have not provided any browser-based credentials. Enter the credentials and try again.                                                                                       |
| `Invalid credentials`       | The browser-based credentials you provided are invalid. Verify the credentials and try again.                                                                                   |
| `Selenium script failure`   | The Selenium login script you provided has failed. Record a new script and try again.                                                                                           |
| `Browser failure`           | The browser was unresponsive while executing the login script. Record a new script and try again.                                                                               |
| `Verification text failure` | The verification text failed. Verify that the verification text is present on the page after login.                                                                             |
| `Auto-login failure`        | Auto-login failed. Verify your credentials and try again.                                                                                                                       |
| `Verification text failure` | The verification text failed. Edit the login script to provide the verification text that is only present after successful login.                                               |
| `Authentication alert`      | No browser authentication was encountered. Verify the type of authentication necessary for the website and try again.                                                           |
| `Logout pattern failure`    | No logout patterns were detected. Verify the logout pattern, ensure that at least one resource that requires authentication is accessible from the target URL. Then, try again. |
| `Logout pattern failure`    | Too many logout patterns were detected. Verify the logout pattern and the authentication credentials, and try again.                                                            |
| `Logout pattern failure`    | Veracode could not detect any logout patterns. Contact Veracode Technical Support if this error persists.                                                                       |
| `Logout pattern failure`    | Veracode detected numerous logout patterns. Verify the logout pattern and authentication credentials, and try again.                                                            |
| `Blocklisted URL`           | The login verification is blocklisted. Change the URL or remove it from the blocklist.                                                                                          |
| `URL error`                 | Requests to the login verification URL resulted in a network error. Correct the URL and ensure your web server is online.                                                       |
| `Non-allowlisted URL`       | The login verification URL is not an allowed host. Change the URL and ensure it is not on the blocklist.                                                                        |
| `Redirection error`         | Requests to the login verification URL resulted in numerous HTTP redirects. Correct the URL or change the redirects.                                                            |
| `Unsuccessful response`     | Requests to the login verification URL resulted in an unsuccessful HTTP response. Correct the URL and ensure your web server is online.                                         |
| `Malformed URL`             | The login verification URL does not adhere to URL syntax. Correct the URL and try again.                                                                                        |
| `Non-allowlisted URL`       | The login verification URL redirects to a URL that is not an allowed host. Correct the URL and try again.                                                                       |
| `Blocklisted URL`           | The login verification URL redirects to a URL that is on the blocklist. Correct the URL or change the redirects, and try again.                                                 |


