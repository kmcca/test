---
"ft:title" : "Provide a Crawl Script for Dynamic Analysis"
"ft:prettyUrl" : "t_was_crawl_script"
---
To ensure a comprehensive scan of your URL, you can provide Veracode with a crawl script that contains the necessary input for the Dynamic Analysis scan engine to be able to access all areas of the application.

<p font-size="13pt"><b>Before You Begin</b></p>

You have recorded your crawl script using Selenium and saved it as an HTML or SIDE \(JSON format\) file. The file cannot be larger than 5 MB.

<p font-size="13pt"><b>Steps</b></p>

1.  On the URL configuration page, in the Crawl Script section, select **Use a crawl script to augment the scan of this URL**.

2.  Click **Choose File** to navigate to and select your crawl script file.

3.  If you want to limit the scan to only what the crawl script dictates, select **Scan only what is specified in the crawl script**.

4.  Click **Save**.

    Dynamic Analysis runs the crawl script during prescan and returns information about any commands that may fail during the URL scan.