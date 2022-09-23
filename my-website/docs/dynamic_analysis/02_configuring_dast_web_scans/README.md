---
"author": ["Mike Howes"]
"ft:originID": "configuring_dast_web_scans"
"ft:lang": "en-US"
"ft:title": "Configuring Dynamic Analysis Web Application Scans"
"ft:prettyUrl": "c_was_configure"
"media_dir": "images/"
---
A Veracode Dynamic Analysis scans your web applications or API specifications for vulnerabilities.

For more detailed information about configuring API Scanning, see [Configure an API Specification Scan](https://docs.veracode.com/r/Configure_and_Run_an_API_Specification_Scan)

After you have created the Dynamic Analysis and entered the URLs or API specifications to scan, you can provide more configuration information for each URL or endpoint. If you specify several URLs, you can use the search box to find the one you want to configure.

You must have the Creator, Submitter, or Security Lead [role](https://docs.veracode.com/r/c_role_permissions) to configure or edit a Dynamic Analysis.

<p><span style="font-size: medium;">Analysis Blocklist</span></p>

If you want to ensure that Veracode does not scan specific URLs, you can add them to the analysis blocklist by selecting the option **Exclude the following URLs**. Enter the filepath or directory path of the URLs you want to exclude from this analysis. If you enter a directory path, everything in that directory and its subdirectories are excluded. You must include the slash at the end of the URL for the analysis to consider it a directory instead of a file.

For example, if you add a blocklist entry of `http://example.com/help/`, the configuration blocklists the `/help` directory and anything under it, including:

- `/help/page1.html`
- `/help/page2.html`
- `/help/more/page3.html`
- `/help/more/page4.html`

However, if you add a blocklist entry of `http://example.com/help`, the configuration blocklists this single page and nothing else.

The URL-level blocklist takes precedence over this analysis-level blocklist, therefore, any additional URLs you enter on the URL-level blocklist during this configuration step are also excluded.

<p><span style="font-size: medium;">User Agent</span></p>

The user agent is a string of browser-specific text in the header that the scan engine uses when scanning your analysis. The agent string defines which browsers and devices you want to include in the scope of the analysis. If available, select the required browser. If the browser you want is not available, select **Custom** and enter the custom string. In the User Agent String field, use browser-specific formatting to add any additional custom text to the prepopulated string to identify the browser source.

When you have completed the Dynamic Analysis configuration, you can:

-   Click the pencil icon ![](../images/pencil_icon.png) in a row [to configure the URL](https://docs.veracode.com/r/c_was_conf_url3).
-   Click **Basic Information** to change the general details for the Dynamic Analysis.
-   Click **Schedule and Prescan** to schedule or run a prescan.
-   Click **Review and Submit** to review the Dynamic Analysis before submitting it.

<p><span style="font-size: medium;">Editing a Dynamic Analysis</span></p>

You can edit the entire Dynamic Analysis at any time when the Dynamic Analysis has a status of:

- `Scheduled`
- `Stopped`
- `Published - Results Available`
- `Saved for Later`

Go to the All Dynamic Analysis Scans page and select the Dynamic Analysis you want to edit. Then, on the Dynamic Analysis summary page, click **Configure Analysis** in the Analysis Actions menu.

The data in the analysis summary table automatically refreshes so you do not need to manually refresh the page to see updated information.

Edit the configuration details that you want to change and click **Save**.
