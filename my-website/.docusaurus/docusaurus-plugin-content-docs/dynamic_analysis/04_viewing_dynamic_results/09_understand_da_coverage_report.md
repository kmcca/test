---
"ft:title" : "Understanding the Dynamic Analysis Coverage Report"
"ft:prettyUrl" : "Understanding_the_DA_Coverage_Report"
---
You can see a simplified view of attack and non-attack traffic that Dynamic Analysis detects in the Dynamic Analysis Coverage Report. Dynamic Analysis generates the Coverage Report after a URL scan is complete and results are available.

The Coverage Reports provides this information:

**Scan Times and Duration**

Identifies the scan status, start and end times for the scan, and duration of the scan.

**Coverage Summary**

Provides a summary of the URLs found, including:

   -   Total Unique URLs Found
   -   Audited URLs
   -   Ignored URLs
   -   Blocked URLs
   -   Total Scan Activity: identifies the number of entries in the Scan Activity Log table. This number reflects the amount of work the scan engine performed, including both crawl and audit activity. Total Scan Activity compares results between scans of the same site. You can use it to identify changes to:
       -   The content of the site
       -   The quality of network connectivity

**Unique URLs Found**

Contains unique URL information. Dynamic Analysis removes any duplicate URLs from this data table, which has these columns:

   - URL: each unique URL that Dynamic Analysis crawled
   - Count: how many times Dynamic Analysis encountered that specific URL
   - Type: explains the category of content that Dynamic Analysis audited
       -   Resource: static files such as images or CSS that the scan engine ignores
       -   Websocket: bidirectional, real-time requests made over WebSocket
       -   Network: low-level exchanges sent by the scan engine, including those sent as part of security tests
       -   Browser: unique browser location that the scan engine discovered and passed through redundancy checks
       -   Event Source: unidirectional, real-time events sent to a browser over an event source channel
   -   Scope: determines if the URL is within the scope of the scan
       -   Audit: in scope of the scan
       -   Block: on the URL blocklist
       -   Ignore: outside the scope of the scan

**Scan Activity Log**

Contains all coverage information an analysis collected, consisting of the unique URL information and these additional columns:

   - Timestamp: time at which the scan engine sent a request to the URL
   - Method: HTTP request made by the scan engine to the application
   - Response: HTTP response status code that the request was successful
   - Duration: length of time the scan engine interacted with the URL

Filters are available for most of the column headers in the Coverage Report to enable you to customize the report. You can access the report from the Actions menu in the URLs List table.

You can also access the report from the URL Actions menu on the URL Configuration Scan Summary page. If a Coverage Report is not available when you select the menu option, it is because the analysis stopped without completing or it predates this feature.