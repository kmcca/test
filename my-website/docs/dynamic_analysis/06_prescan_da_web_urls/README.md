---
"author": ["Mike Howes"]
"ft:originID": "da_prescan_urls"
"ft:lang": "en-US"
"ft:title" : "Prescan URLs Prior to a Dynamic Analysis"
"ft:prettyUrl" : "t_was_prescan"
"media_dir": "images/"
---
You can prescan all URLs in a Dynamic Analysis to verify that Veracode can reach and, if necessary, authenticate with each target web application URL or API endpoint.

<p font-size="13pt"><b>Overview</b></p>

Prescanning saves time by alerting you to any issues that Veracode finds with the configuration before the Dynamic Analysis runs.

<p font-size="13pt"><b>Steps</b></p>

1.  Go to the Schedule page of the Dynamic Analysis workflow and select the **Prescan Only** option.

    The prescan starts immediately after submission. When the prescan completes, you receive an email notification of the results. The Dynamic Analysis still starts regardless of the results of the prescan.

2.  If the prescan fails, correct any [connection and authentication configuration settings](https://docs.veracode.com/r/c_was_configure), and run prescan again.

3.  If you need [assistance from Veracode](https://docs.veracode.com/r/start_support) with any of the issues found during prescan, click **Contact Support** in the bottom-left of the Review and Submit window.

<p font-size="13pt"><b>Results</b></p>

The prescan results are available on the Dynamic Analysis summary page. You can view the details of the prescan at any time by going to the URL row and, either clicking the URL or selecting **View Prescan Details** in the Actions column.

Additional troubleshooting information is available in the Verification Screenshots section, which provides screenshot images that the Veracode scan engine takes at predetermined points. You can use these images to gain insight into what the scan engine discovers during a Dynamic Analysis. For example, the Authentication: Logged In screenshot can verify that the page on which the scan engine lands after executing the login script matches expectations. The Connection: Target URL screenshot can determine that a login script failed because a page redirects to different content for requests that originate from outside the corporate intranet.


<p><span style="font-size: medium;">Verification Screenshots</span></p>

| Screenshot Type                           | Description                                                                                                                                                                                                                                                                                                     |
|-------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Connection: Target URL                    | The web page state seen by the Veracode scan engine at the end of connection verification, at the start of a scan or prescan.                                                                                                                                                                                   |
| Authentication: Consecutive Login Failure | Shown after the Veracode scan engine is unable to log in to a target application after 50 consecutive attempts.                                                                                                                                                                                                         |
| Authentication: Logged In                 | Shown after the Veracode scan engine executes a user-provided Selenium login script. If the best practice of including a verification command in the Selenium script is not followed, the screenshot may show an early snapshot of the page, which may not show what the site really looks like when logged in. |
| Authentication: Logged Out                | Shown after the Veracode scan engine executes a user-provided Selenium logout script. Logout scripts are optional, and this screenshot is omitted if one is not specified.                                                                                                                                      |
| Authentication Failure                    | Shown if the Veracode scan engine encounters an error while verifying authentication using a user-specified login or logout script.                                                                                                                                                                             |

<p><span style="font-size: medium;">Prescan Notes</span></p>

Displays one or more scan notes based on these severities:

- `Information`: non-actionable issues encountered by the scan engine.
- `Warning`: issues that could impact coverage of the scan. For example, a login script that does not contain commands to verify its successful execution could possibly fail in future scans.
- `Error`: exceptions that have resulted in early scan termination, such as the repeated inability to execute Selenium scripts due to a site changing during a scheduled scan.
