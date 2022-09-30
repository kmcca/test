---
"ft:title" : "Preparing for a Dynamic Analysis"
"ft:prettyUrl" : "c_was_prepare"
---
Before starting a Veracode Dynamic Analysis, you must meet these prerequisites:

- Provide access to the Veracode IP address: to enable Veracode to perform scans, your application must be accessible from the Veracode IP address `34.195.146.191`. This access may require creating a staging or test environment to host your application, making configuration changes to your firewall rules, and performing other IT activities. When running a Dynamic Analysis, you see traffic coming from this IP address, therefore, you must add it to your allowlist.
- Verify connectivity: ensure the target URLs you want to scan are externally accessible and, if your site requires authentication, the login and password for access to the websites are accurate before you start a Dynamic Analysis. After you submit the scan, Veracode performs a connection and login verification if a login is configured.
- Verify user roles: you must have the Creator, Submitter, or Security Lead [role](https://docs.veracode.com/r/c_role_permissions) to be able to create, configure, or submit a Dynamic Analysis. Any member of the team associated with the Dynamic Analysis is able to view the analysis and its results.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> Contact <a href="https://docs.veracode.com/r/start_support">Veracode Technical Support</a> or your Veracode account manager to address specific details of your environment as you may have to resolve any issues on a case-by-case basis.</p>