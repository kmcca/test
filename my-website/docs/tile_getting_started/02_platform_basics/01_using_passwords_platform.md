---
"ft:title": "Using Passwords in the Veracode Platform"
"ft:prettyUrl": "using_password"
---
The Veracode Platform protects your data in numerous ways. One of the most important ways is by securing your login so that it is not vulnerable to password guessing or brute force attack. Veracode does this by:

-   Enforcing minimum password complexity rules
-   Password expiration
-   Enforcing a [user account](https://docs.veracode.com/r/c_about_veracode_accounts) lockout after five failed login attempts
-   Offering optional multifactor authentication

<p><span style="font-size: medium;">Password Complexity</span></p>

Your Veracode Platform password must meet these criteria:

-   Contains at least eight characters
-   Contains at most 72 characters
-   Includes at least one lowercase letter, uppercase letter, number, and symbol
-   Does not include your first or last name
-   Does not repeat any of your last five passwords

If you forget your password, click **Need help signing in?** \> **Forgot password?** and follow the instructions for [resetting a forgotten password](https://docs.veracode.com/r/c_reset_password).

<p><span style="font-size: medium;">Password Expiration</span></p>

You must change your password once every 90 days. If your password is expired, Veracode prompts you to change the password on the log in page.

<p><span style="font-size: medium;">Security Question Answers</span></p>

You must set up a security question and answer pair when you activate your account. Answers are not case-sensitive.

<p><span style="font-size: medium;">User Lockout After Five Failed Login Attempts</span></p>

You can reset your password at any time. Veracode automatically locks your account for 30 minutes after five failed attempts to enter a correct password. This lockout protects your account from brute-force attacks.

If your account becomes locked out, Veracode notifies you in an email.

<p><span style="font-size: medium;">Optional Multifactor Authentication</span></p>

Your account may require multifactor authentication \(MFA\) for enhanced security. The Veracode Platform supports two standards for MFA:

* TOTP: to use Time-Based One-Time Password Algorithm \(TOTP\) authentication, you must open a TOTP application, such as Google Authenticator, on your mobile device to generate a six-digit code.
* FIDO2/WebAuthn: to use FIDO2 / WebAuthn authentication, you must have a FIDO2-compliant hardware security key, such as a YubiKey or Titan Security Key or a biometric authenticator such as Windows Hello or Touch ID.

<p><span style="font-size: medium;">Inactivity logout</span></p>

The Veracode Platform automatically ends your session and logs you out after a period of 15 minutes with no activity.