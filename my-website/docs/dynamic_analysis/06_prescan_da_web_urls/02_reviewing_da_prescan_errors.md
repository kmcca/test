---
"ft:title" : "Reviewing Dynamic Analysis Prescan Errors"
"ft:prettyUrl" : "c_prescan_faillure"
---
You can review any prescan errors for a Dynamic Analysis in the Veracode Platform. All prescan errors relate to connection, auto-login, basic authentication, or login script issues.

The Prescan Details window provides information for fixing a specific error. To open the Prescan Details window, on Dynamic Analysis summary page, in the row of the URL scan you want to review, select **Actions** \> **View Prescan Details**.

<p><span style="font-size: medium;">Connection Errors</span></p>

For connection errors, review:

- In the Connection section, the Authentication Verification, Login Successes, and Login Failures fields for the specific reason why you have an authentication issue
- Request and Response section for any `4xxx`-`5xx` response codes
- Prescan Notes for any warning notes

If Veracode cannot connect to the target URL, verify:

-  URL is spelled correctly and uses the correct protocol.
-  URL is live and available.
-  `34.195.146.191` is on your [allowlist](https://docs.veracode.com/r/IP_addresses).
-  If there is heavy traffic causing the connection to fail.

<p><span style="font-size: medium;">Authentication Errors</span></p>

For authentication errors, review:

- The Authentication Verification, Login Successes, and Login Failures fields for the specific reason why you have an authentication issue
- The Verification Screenshots section for any authentication failure
- The Prescan Notes for any warning notes

If you have provided a login script, you can click a verification screenshot of the associated login errors.

If authentication has failed, verify:

-  You are using the correct username, password, and domain \(if applicable\). The Login Successes and Login Failures fields indicate if auto-login is working.
-  Any login script, verification URL, and verification text you provided is still valid. The Authentication Verification field indicates at which point in your script an error occurred, saving you troubleshooting time.