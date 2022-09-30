---
"ft:title" : "Searching for a Specific Flaw in the Triage Flaws Page"
"ft:prettyUrl" : "improve_search"
---
The Triage Flaws view in the Veracode Platform shows detailed information on each flaw detected during Veracode analyses of your application. You can search for flaws using one or several criteria, including negative criteria and wildcards.

<p><span style="font-size: medium;">Using One or More Criteria</span></p>

In some cases, you may want to review a specific subset of the flaws in your application:

-   Flaws in a particular module or source file, or on a particular line number
-   Flaws in a particular category, for example, cross-site scripting, or CWE
-   Flaws you must fix to achieve policy compliance
-   Flaws that are very likely to be exploited
-   Very severe flaws
-   New flaws
-   Flaws involving a particular function
-   Flaws with pending, approved, or rejected mitigations
-   Flaws with a particular effort to fix
-   Any combination of the above

You can search for any of these criteria using the Search field at the top of the list of flaws. To search for a particular item:

1.  Choose the column you want to search on from the **Search** dropdown list.
2.  Enter your search criteria in the text box or select the appropriate criterion from the drop-down list.
3.  Click **Go**. The list of flaws filters by the search criterion entered, and the search criterion entered appears above the Triage Flaws toolbar.

The flaw count to the left of the list of filter criteria tells you how many flaws your search returned. The Count column shows the number of duplicate flaws that were imported from the scan results. A duplicate flaw is determined when the same type of flaw is discovered on the same line of code, in the same file, within any given module.

You can filter the list of flaws by one or more search criteria.

<p><span style="font-size: medium;">Searching by Multiple Criteria</span></p>

If you want to use multiple search criteria, for example, to find all cross-site scripting flaws in a given module, search by the first criterion, then enter the second criterion. Both search criteria appear above the Search field in the list of search criteria.

If you add more than three search criteria, click **More** to view the full list of search criteria.

<p><span style="font-size: medium;">Using Wildcards</span></p>

Wildcard characters are automatically appended to text-based searches so that you receive the best set of results.

For example, if you search for categories flagged `debug`, the Veracode Platform returns all flaws in the Leftover Debug Code category.

<p><span style="font-size: medium;">Using Negative Criteria</span></p>

You can specify a filter using a negative criterion, that is, is not equal to. You can use negative criteria to exclude a set of flaws from display, such as hiding all informational flaws \(Severity=0\).

To use a negative criterion:

1.  Choose the column by which you want to search from the **Search** dropdown list.
2.  Click the **=** button next to the list to toggle the button to the Not Equals \(!=\) state.
3.  Enter your search criterion in the text box, or select the appropriate criterion from the dropdown list.
4.  Click **Go**. The list of flaws filters by the search criterion entered, and the search criterion entered appears above the Triage Flaws toolbar.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Two or more negative criteria are joined by an AND. This means that you can exclude more than one item, such as multiple CWE IDs or severities, from the display at once by adding each one as a negative criterion.
</p>

<p><span style="font-size: medium;">Removing Search Criteria</span></p>

You can click on a search tag to remove that search criterion. The search list refilters to apply all search criteria except for the one that was removed.

If you have selected more than three search criteria, you can click **More** to show all criteria, then click on any item to remove it. Clicking **Apply** refilters the list.

<p><span style="font-size: medium;">Other Ways to Search</span></p>

You can use the [Fix First chart](https://docs.veracode.com/r/review_remediationplan) to quickly filter the list of flaws by combinations of severity of issue and ease of remediation. After you have established a filter, you can remove the search criteria as described above.

