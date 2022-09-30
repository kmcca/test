---
"ft:title": "Mapping Veracode Severities to Jira Priorities"
"ft:prettyUrl": "c_jira_map_sevs"
---
The Veracode Integration for Jira can map Veracode flaw severities in the Veracode Platform to your custom priorities in Jira.

The Veracode Platform [severity scale](https://docs.veracode.com/r/review_severity_exploitability) uses six flaw severities: Very High, High, Medium, Low, Very Low, and Informational. In Jira, you can create any number of priorities using any names you want, but you are limited to mapping the six severities to a maximum of six priorities. The severity mapping applies to all new flaws during the next import to Jira. You configure severity mapping on the Veracode Severity Mappings page, which you can access in the Jira interface from: **Administration** > **Add-ons** > **Severity Mappings**.

<p><span style="font-size: medium;">Default Severity Mappings</span></p>

After you install the integration, it checks for an existing mapping between Veracode severities and your Jira priorities. If a mapping exists, the integration leaves the mapping configuration intact and applies it to the next flaw import. If no mapping exists, the integration creates a default mapping based on the number of priorities in the Jira system. You can change the default mapping at any time.

The five default priorities available in Jira are: Highest, High, Medium, Low, and Lowest.

For a Jira system with exactly six priorities, the integration creates this default mapping:

-   The Very High severity maps to the Highest priority.
-   The High severity maps to the High priority.
-   The Medium severity maps to the Medium priority, and so on.

If the Jira system has more than six priorities, the integration maps the Veracode severities to the six highest priorities. The remaining lower priorities are not mapped. If necessary, you can map a severity to a lower priority. For a Jira system with less than six priorities, the integration maps the highest severities to the highest priorities. The remaining severities all map to the same lowest priority.

<p><span style="font-size: medium;">Severity Mapping Limitations</span></p>

A severity mapping has these limitations:

-   You can only create a single mapping. When you change and save the mapping, which must be valid, it replaces the previous configuration. If you add, edit, or delete priorities, you must manually update and save the mapping to reflect the new priorities or the mapping might be invalid.
-   The mapping only applies to new flaws you import to Jira. It does not apply to flaws (issues) already imported to Jira.
-   You cannot disable severity mapping.

<p><span style="font-size: medium;">Invalid Severity Mappings</span></p>

If there are issues with the mapped priorities in Jira, the severity mapping could be invalid. You must manually correct any issues with your priorities and, then, update your mapping to be in sync with the mapped priorities.

A mapping can be invalid for these reasons:

-   The mapped priorities no longer exist in the Jira system, but the configured mapping still contains the previous priorities. Someone might have deleted or renamed one or more priorities after you saved the mapping or while you were creating the mapping, but had not yet saved it. The invalid mapping causes these issues:
    -   After importing flaws from the Veracode Platform to Jira, the Priority field in all issues mapped to the missing priority is blank. The integration records this warning message in the Jira logs: `Invalid priority set in Severity Mappings page with priority: <PriorityName>`
    -   After configuring the mapping, when you click **Save**, the mapping fails to save and you see this error message: `One or more of the priorities selected are not valid Jira priorities. Please try again.`
-   Flaws in the Veracode Platform have a severity that is outside the severity scale. After importing the flaws into Jira, the Priority field in all issues mapped to that severity is blank. The integration records this warning message in the Jira logs: `Invalid severity received from Veracode Platform, setting priority to null. Severity received: <SeverityName>`

