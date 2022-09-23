---
"author": ["Tim Jarrett"]
"ft:originID": "api_best_practices"
"ft:title": "About Veracode API Best Practices"
"ft:prettyUrl": "About_Veracode_API_Best_Practices"
"media_dir": "images/"
---
The [Veracode APIs](https://docs.veracode.com/r/c_gettingstarted) allow you to perform and automate security testing tasks you perform in the Veracode Platform and with [Veracode integrations](https://docs.veracode.com/r/c_veracode_integrations). The best practices in this section help you avoid performance issues for your automations.

# Using an API Service Account for Automations

Veracode strongly recommends that you use an [API service account](https://docs.veracode.com/r/c_about_veracode_accounts), which is also called an API user, when configuring automations, such as scripts in `cron`.

For example, if you use a user account and the user assigned to that account leaves your organization, after your Veracode administrator deactivates the account, the user credentials are no longer valid and your automation can no longer authenticate with Veracode. Running automations using an API service account avoids this scenario and also allows a team to get notifications from the Veracode Platform if these events occur. You can create an API service account in the [Veracode Platform](https://docs.veracode.com/r/admin_api) or with the [Identity API](https://docs.veracode.com/r/c_identity_create_api).

# Ensuring API Requests Succeed Before Adding Them to a Production Pipeline

Before adding Veracode APIs to your production pipelines or other build jobs, send a few API requests from a test pipeline to ensure the requests succeed. If the requests fail, ensure your pipeline successfully fails the build.

For example, if your pipeline sends a request to start a Static Analysis and the request fails, your team might not see the error and the same request continues to fail during subsequent pipeline runs. If the same job also creates a sandbox with every scan, you could be creating a large number of sandboxes with incomplete scans.

By default, the [Veracode Java API Wrapper](https://docs.veracode.com/r/c_about_wrappers) automatically fails a pipeline if a Veracode scan errors. If you write your own scan logic with the Veracode APIs, or if your pipeline automation sends a different API call, you must check for errors and configure your script to return an error code of any value other than `0`.

# Safely Storing and Managing Your Veracode Credentials

Never store your [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3) in public locations, such as GitHub repositories, in a shell script, or other code, for example. Exposing your credentials to the public invites anyone to access data about the flaws in your software.

After configuring Veracode API credentials, Veracode strongly recommends you use one or more of these options to protect them:

* Pipeline secrets. See the documentation for your pipeline vendor.
* Pipeline environment variables. See the documentation for your pipeline vendor.
* [Veracode API credentials file](https://docs.veracode.com/r/c_configure_api_cred_file) that you store separately from your code and appropriately secure on your host computer.

If your credentials become compromised, you can use the [Identity API](https://docs.veracode.com/r/c_identity_revoke_creds) to quickly revoke them.

# Ensuring Veracode Credentials Are Valid

You must not let your [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3) expire. By default, API credentials expire 1 year (365 days) after you generate or renew them. If you do not renew credentials before they expire, any automations that use them will fail.

You can generate API credentials in the [Veracode Platform](https://docs.veracode.com/r/t_create_api_creds) or with the [Identity API](https://docs.veracode.com/r/c_identity_gen_creds).

After generating your API credentials:

- Make a note of the expiration date and set a reminder to renew the credentials.
- Check the expiration date in your automation scripts and print a warning to notify your team when the credentials are scheduled to expire.
- Monitor your email inbox for reminder emails from Veracode. Veracode sends these emails seven days and one day before the credentials expire.

## Example Code for Printing Credentials Expiration Warning
This Python code example checks for the expiration date for your API credentials and prints a warning to the console if the credentials are close to expiring:

```python
def creds_expire_days_warning():
    # the get_creds() method calls 
    # https://api.veracode.com/api/authn/v2/api_credentials
    creds = api.VeracodeAPI().get_creds()
    exp = datetime.datetime.strptime(creds['expiration_ts'], "%Y-%m-%dT%H:%M:%S.%f%z")
    delta = exp - datetime.datetime.now().astimezone() #we get a datetime with timezone...
    if (delta.days < 7):
        print('These API credentials expire ', creds['expiration_ts'])
```

# Checking the Status of Veracode Services

If you need to check the status of various Veracode services, such as the current state of the Veracode Platform or an in-progress scan, Veracode recommends that you use the Veracode Status page or lightweight API calls. Ensure you design these API calls to perform a status check rather than repeatedly calling API endpoints that return more information than you might need. For example:

- To check when scan results are ready, rather than using `detailedreport.do`, call `getbuildinfo.do`.
- To check the status of the Veracode Platform, use the [Veracode Status page](https://status.veracode.com/) or the lightweight [Healthcheck API](https://docs.veracode.com/r/c_healthcheck_intro).

# Allowing Sufficient Time Between Polling Calls

You might need to make one API call to initiate a long-running action, then make a second call to check whether that action has completed. For example:

- Submitting a static scan, then checking scan status
- Requesting a flaw report, then attempting to download it

If your automation checks for updates on these actions every ten seconds, for example, this excessive polling can degrade performance for your account and Veracode might begin to [throttle your API calls](https://docs.veracode.com/r/About_API_Rate_Limiting).

Veracode recommends that you wait at least two minutes between API calls that check for the status of a scan or report. For static scans, consider using [Pipeline Scan](https://docs.veracode.com/r/Pipeline_Scan), which typically executes faster than an equivalent static policy scan or sandbox scan.

# Retrying Failed Actions to Resolve Transient Network Issues

When using Veracode APIs in your pipeline, if network problems or other issues cause your pipeline to fail, your application build could be in a bad state. These issues might be unrelated to a network communication failure, particularly when checking for status, between Veracode APIs and Veracode services.

To ensure your API integration is more resilient to transient network failures, Veracode recommends that you retry the failed actions no more than five times.

# Using the Veracode API Wrappers for Static Uploads

Veracode integrations are built on the [Veracode API Wrappers](https://docs.veracode.com/r/c_about_wrappers). These wrappers simplify accessing and using the XML APIs from the command line or functions. You can use them for common workflows, such as uploading application code to a new or existing application profile. For static upload scenarios, the [`uploadandscan`](https://docs.veracode.com/r/r_uploadandscan) action can replace three or more separate API calls for creating an application profile, creating a sandbox, uploading files and starting a prescan and scan. The `uploadandscan` action also includes guidance mentioned in this section, such as automatic retries on network errors and waiting between status calls.

# Fetching Application Events for Reports

You might need to import Veracode data, such as events for the applications you are scanning, to an external vulnerability management system, dashboard, or business intelligence (BI) tool. If you have custom integrations that routinely fetch data for several, or all, of your  applications, these requests can degrade the performance of your Veracode account.

To simplify the process of identifying which applications have changed since you last retrieved data, you can use the `last_policy_compliance_check_date` property of the [Applications API](https://docs.veracode.com/r/Listing_Applications_by_Last_Policy_Evaluation_Date_with_the_Applications_API).

Each time Veracode evaluates the policy for an application, it updates the value for this property based on these events:

* Publishing a new policy scan
* Approving a mitigation
* Assigning a different policy to the application

To get only the applications that have had a policy check since the last time you retrieved data, you can use the `policy_compliance_checked_after` query filter with the Applications API. This allows you to process only changed applications, which significantly decreases total processing time and reduces the number of required API calls.