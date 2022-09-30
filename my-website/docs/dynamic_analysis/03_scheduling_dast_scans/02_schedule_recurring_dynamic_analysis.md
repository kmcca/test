---
"ft:title" : "Schedule a Recurring Dynamic Analysis Scan"
"ft:prettyUrl" : "t_was_recurring"
---
You can configure a recurring schedule of your Dynamic Analysis in the Veracode Platform to run on a set day and time each week or month. You can also schedule the analysis to automatically pause and resume at specific times, such as IT downtimes or high-traffic timeframes.

<p font-size="13pt"><b>Before You Begin</b></p>

- You must have the Creator, Submitter, or Security Lead [role](https://docs.veracode.com/r/c_role_permissions) to schedule a Dynamic Analysis.
- You have created a Dynamic Analysis and clicked **Schedule** at the bottom of the page.

<p font-size="13pt"><b>Overview</b></p>

You only have to configure the pause and resume schedule once, and it recurs automatically without any further manual intervention for the duration of the analysis. You can edit the pause and resume schedule or turn it off at any time.

<p font-size="13pt"><b>Steps</b></p>

1. On the Dynamic Analysis Schedule and Prescan page, in the Frequency field, select **Recurring**.

2. For the Prescan option, select **On** to run a prescan after submitting the analysis or leave it set to **Off** (the default).

3. In the Start field, enter the date when you want the schedule to start, or click the calendar icon and select a date.

    If you set the start day for the 28th or later, the Dynamic Analysis starts on the last day of the month.

4. From the Recur dropdown menu, select **Weekly** or **Monthly**.

5. In the Every field, enter the recurrence frequency in weeks or months.

6. From the On dropdown menu, select the day on which you want the scan to recur.

7. In the End After field, enter the number of weeks or months that you want the recurrence schedule to last.

8. In the Analysis Duration field, specify the maximum number of hours or days that you want each occurrence of this analysis to last.

    Veracode recommends that you set the maximum time for any Dynamic Analysis to three days. If you want to extend this timeframe, a Dynamic Analysis can have a maximum duration of seven days for a weekly occurring analysis, and 25 days for a monthly occurring analysis.

9. From the Pause and Resume dropdown menu, select **On** to automatically pause and resume the analysis or leave it set to **Off** (the default). If you select **On**, select these options from the Do not scan dropdown menu: 

    - **On these days**: select one or more days on which to pause the analysis.
    - **During these hours**: enter the start and end time when you want to pause the analysis. An analysis cannot remain paused for more than 20 hours in a single day or for more than six days in a single week.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> If you create a new recurring analysis, you must schedule it to run during different days and times than the pause and resume schedule for this analysis.</p>
 
10. Click **Preview Schedule** to review your scheduled analysis.

11. Click **Review and Submit** to go to the next steps.
