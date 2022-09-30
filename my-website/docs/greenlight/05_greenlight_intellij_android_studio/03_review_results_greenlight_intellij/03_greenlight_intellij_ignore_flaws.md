---
"ft:title" : "Ignore Findings in Results from Greenlight for IntelliJ"
"ft:prettyUrl" : "t_ignoreflaws_greenlight_intellij"
---
If there are known findings in your code that continually appear in your Greenlight results, you can ignore them to temporarily remove them from future results.

<p font-size="13pt"><b>Before You Begin</b></p>

- You meet the [Greenlight prerequisites](https://docs.veracode.com/r/Meet_Veracode_Greenlight_Prerequisites).
- You have [run a Greenlight scan in IntelliJ or Android Studio](https://docs.veracode.com/r/Scan_with_Veracode_Greenlight_for_IntelliJ).

<p font-size="13pt"><b>Overview</b></p>

The ignore finding feature removes a finding from the list of all findings. You can show the finding again at any time. Veracode Greenlight ignores any repeated occurrences of an ignored finding in future scans and between IDE sessions. Ignored findings are only local to the developer and do not affect scans by other developers or any part of the application scan.

<p font-size="13pt"><b>Steps</b></p>

1. In your IDE, select the **Veracode Greenlight** tab.

2. Select the row for a finding you want hide. 
3. In the Actions column, click **Ignore**.

4. In the Ignore Flaw window, review the details of the finding and click **Ignore**.

    The finding now appears in the **Ignored** subtab of the **Veracode Greenlight** tab of the IDE.

5. To undo the Ignore action, go to the **Ignored** subtab, select the finding and, in the Actions column, click **Show**.