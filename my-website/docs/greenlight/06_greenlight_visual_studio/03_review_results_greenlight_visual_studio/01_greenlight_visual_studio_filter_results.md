---
"ft:title" : "Filter Findings in Greenlight for Visual Studio Results"
"ft:prettyUrl" : "t_filter_greenlight_vs"
---
You can filter results so that you can focus on the findings that are the most relevant and important.

<p font-size="13pt"><b>Before You Begin</b></p>

- You meet the [Greenlight prerequisites](https://docs.veracode.com/r/Meet_Veracode_Greenlight_Prerequisites).
- You have run a [Greenlight scan in Visual Studio](https://veracode-test3.fluidtopics.net/r/t_scan_visualstudio).

<p font-size="13pt"><b>Overview</b></p>

The filter action is local to you to be able to filter out findings in the Veracode Greenlight results based on severity or CWE type. You can clear a filter at any time, and all filters are cleared upon reboot or restart of the IDE.

<p font-size="13pt"><b>Steps</b></p>

1.  On the **Veracode Greenlight Findings** tab, click a severity on which to filter the findings.

    The list of findings now only shows the findings of the selected severities.

2.  Click the filter icon ![](../../images/filter_icon.png) in the header of the CWE ID, Location, Language, and Scan Level columns to select more detailed filters, such as a specific CWE ID.

    The list of findings is reduced to only those matching the selected filters.

<p font-size="13pt"><b>Results</b></p>

To remove the filters, click the severities at the top of the tab again. If you have filtered on any of the other columns, click the filter icon ![](../../images/filter_icon.png) and click **(Select All)** in the dropdown menus of the other information types.