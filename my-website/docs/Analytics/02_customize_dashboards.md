---
"ft:title" : "Customize Dashboard Filters"
"ft:prettyUrl" : "Customize_Dashboard_Filters"
---

You can modify existing filters to view different points of data to change what information is displayed.

<p font-size="13pt"><b>Steps</b></p>

1.  Go to **Analytics** \> **Veracode Dashboards**.

2.  Select a dashboard.

    For example, Policy Compliance Overview.

3.  Expand the Filters section to view all the filters currently used in the dashboard.

4.  Use the dropdown menus to change the dashboard query.

    For example, if you want to change the time period in the dashboard from the past year to the past 90 days, you can use the **Application Published Date** filter to change the time period from **is in the past 12 months** to **is in the past 90 days**.

    Absolute date filters allow you to use specific date values to generate query results. For example, assume the current date is September 10, 2021. You want to query the publication dates of policy scans before the current date. Use the filters **is before** **absolute** **2021-09-10**. The results include all previous data up to September 9, 2021.

    Relative date filters allow you to filter using rolling date values relative to the current date. If you use a relative filter, the results reflect the data before the beginning of the specified period. For example, assume the current date is September 10, 2021. You want to query the publication dates of policy scans in the past two years. Use the filters **is before** **relative** **2** **years ago**. The results include all data in 2019 and 2020 and exclude all data beginning on January 1, 2021.

5.  Click **Run** to run the query with your modifications.

6.  If you want to download this information to view later, go to the gear icon \(![](images/analytics_gear.png)\) in the top-right corner, and select **Download as PDF** or **Download as CSV**.

<p><span style="font-size: medium;">Examples of Date Filters and the Results</span></p>

For these examples, assume the current date is Friday, September 10, 2021.

|Filter|Meaning|Example|
|------|-------|-------|
|Past 1 week|Includes all days starting with today, and going to the Sunday of the current week.|5 Sep 2021 – 10 Sep 2021|
|Past 1 complete week|Includes all days in the previous complete week.|29 Aug 2021 – 04 Sep 2021|
|Past 7 days|Includes all days starting with today, and going 7 days back.|03 Sep 2021 – 10 Sep 2021|
|Past 365 days|Include all days in the past year through today.|10 Sep 2020 – 10 Sep 2021|
|Past 1 month|Include all days starting with the first day of the current month through today.|01 Sep 2021 – 10 Sep 2021|
|Past 1 complete month|Include all days in the previous complete month.|01 Aug 2021 – 31 Aug 2021|
|Past 1 year \(relative\)|Include all days in the year before January 1 of the current year.|01 Jan 2020 – 31 Dec 2020|
