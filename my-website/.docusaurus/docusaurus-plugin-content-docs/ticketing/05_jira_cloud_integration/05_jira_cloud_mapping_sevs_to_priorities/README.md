---
"ft:title": "Mapping Veracode Severities to Jira Cloud Priorities"
"ft:prettyUrl": "c_jira_cloud_mapping_severities"
---
The Veracode Integration for Jira Cloud can map Veracode flaw severities in the Veracode Platform to your custom priorities in Jira Cloud.

The Veracode Platform [severity scale](https://docs.veracode.com/r/review_severity_exploitability) uses six flaw severities: Very High, High, Medium, Low, Very Low, and Informational. In Jira Cloud, you can create any number of priorities using any names you want, but you are limited to mapping the six severities to a maximum of six priorities. The severity mapping applies to all new flaws during the next import to Jira Cloud. You configure severity mapping on the Veracode Severity Mappings page, which you can access in the Jira Cloud interface from: **Administration** \> **Add-ons** \> **Severity Mappings**.

<p><span style="font-size: medium;">Default Severity Mappings</span></p>

After you install the integration, it checks for an existing mapping between Veracode severities and your Jira priorities. If a mapping exists, the integration leaves the mapping configuration intact and applies it to the next flaw import. If no mapping exists, the integration creates a default mapping based on the number of priorities in Jira Cloud. You can change the default mapping at any time.

For a Jira Cloud system with exactly six priorities, the integration creates this default mapping:

-   The Very High severity maps to **Highest**, which is the highest priority.
-   The High severity maps to **High**, which is the second-highest priority.
-   The Medium severity maps to **Medium**, which is the third-highest priority, and so on.

If the Jira Cloud system has more than six priorities, the integration maps the Veracode severities to the six-highest priorities. The remaining lower priorities are not mapped. If necessary, you can map a severity to a lower priority. For a Jira Cloud system with less than six priorities, the integration maps the highest severities to the highest priorities. The remaining severities all map to the same lowest priority.

<p><span style="font-size: medium;">Severity Mapping Limitations</span></p>

A severity mapping has these limitations:

-   You can only create a single mapping. When you change and save the mapping, which must be valid, it replaces the previous configuration. If you add, edit, or delete priorities, you must manually update and save the mapping to reflect the new priorities or the mapping might be invalid.
-   The mapping only applies to new flaws you import to Jira Cloud. It does not apply to flaws (issues) already imported to Jira Cloud.
-   You cannot disable severity mapping.

<p><span style="font-size: medium;">Invalid Severity Mappings</span></p>

If there are issues with the mapped priorities in Jira Cloud, the severity mapping could be invalid. You must manually correct any issues with your priorities and, then, update your mapping to be in sync with the mapped priorities.

A mapping can be invalid for the these reasons:

-   The mapped priorities no longer exist in the Jira Cloud system, but the configured mapping still contains the previous priorities. Someone might have deleted or renamed one or more priorities after you saved the mapping or while you were creating the mapping, but had not yet saved it. The invalid mapping causes these issues:
    -   After importing flaws from the Veracode Platform to Jira Cloud, the Priority field in all issues mapped to the missing priority is blank. The integration records this warning message in the Jira Cloud logs: `Invalid priority set in Severity Mappings page with priority: <PriorityName>`
    -   After configuring the mapping, when you click **Save**, the mapping fails to save and you see this error message: `One or more of the priorities selected are not valid Jira priorities. Please try again.`
-   Flaws in the Veracode Platform have a severity that is outside the severity scale. After importing the flaws into Jira Cloud, the Priority field in all issues mapped to that severity is blank. The integration records this warning message in the Jira Cloud logs: `Invalid severity received from Veracode Platform, setting priority to null. Severity received: <SeverityName>`