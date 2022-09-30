---
"ft:title": "Troubleshooting HMAC"
"ft:prettyUrl": "Troubleshooting_HMAC"
---
Issues that prevent HMAC from working correctly, or make it appear that HMAC is not working at all, include:

-   Incorrect credentials. The most frequent problem encountered after setting up HMAC authentication is incorrect API ID and key. For example, you may have multiple accounts and associate the wrong set of credentials with the account you are setting up. Ensure credential sets are current and secure. If your system is not working, try [revoking the existing credentials](https://docs.veracode.com/r/t_revoke_creds), creating new credentials, and retrying.
-   Incorrect [account type](https://docs.veracode.com/r/c_about_veracode_accounts) or [roles](https://docs.veracode.com/r/c_API_roles). A role or account error can sometimes be misunderstood as a larger problem with authentication.
-   Problems connecting to the Veracode Platform. As a test, run the [getmaintenancescheduleinfo.do](../XML_APIs/r_getmaintenancescheduleinfo.md) XML API from the command line. An [API service account](https://docs.veracode.com/r/c_about_veracode_accounts) requires the Admin API [role](https://docs.veracode.com/r/c_API_roles) to use this call. A [user account](https://docs.veracode.com/r/c_about_veracode_accounts) requires the Administrator role to use this call.

    ```shell
    http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/3.0/getmaintenancescheduleinfo.do"
    ```

    You should quickly get a short response.

-   Inaccurate system time. Although infrequent, HMAC authentication fails if the system time of the client and server are substantially out-of-sync. Compare your system time with actual time at [time.is](https:///time.is) to ensure your system time is close to actual time.

For more help with HMAC authentication issues, contact Veracode Technical Support at `support@veracode.com`.