---
"ft:title" : "Reviewing the Estimated Completion Time for a Static Scan"
"ft:prettyUrl" : "request_time"
---
Veracode computes the estimated completion time for static scans of applications based on historical delivery times for applications of similar size and language.

<p><span style="font-size: medium;">Considerations for Large Applications</span></p>

The amount of time that it takes to deliver results for a static scan depends on many factors, including the language or platform in which the application was written, the size of the application, and whether the application is being scanned on behalf of a third party.

Large applications may take additional time to process. The actual processing time can vary by language, platform, and unique behaviors of the submitted code. For example, applications submitted with missing dependencies, or with dependencies compiled without debug symbols, can take longer.

Veracode makes every effort to deliver results as soon as possible. Therefore, if applications complete analysis sooner than the estimated delivery window, Veracode publishes the results sooner.

<p><span style="font-size: medium;">Review Estimated Completion Time</span></p>

After initial submission, the estimated completion time for a static scan is based on the time it took to deliver results for past versions of the application. You can review the estimated completion time for your application on the prescan results page.

The estimated completion time for an application is shown on the [prescan results page before the application is submitted](https://docs.veracode.com/r/Requesting_a_Static_Scan), and on the [static scan overview page](https://docs.veracode.com/r/c_using_static_overview) after submission.

On the prescan results page before submission, the estimated completion time dynamically updates as modules are selected.

You can [see the estimated delivery date](https://docs.veracode.com/r/c_using_static_overview) on the scan overview page after you have submitted the application.

<p><span style="font-size: medium;">Scans Under Investigation</span></p>

If Veracode encounters a technical issue during scanning, the Estimated Delivery field shows the Under Investigation status, indicating that Veracode is working to resolve the issue.
