---
"ft:title": "Upgrade an Old Version of the Veracode Integration for Jira"
"ft:prettyUrl": "t_jira_upgrade"
---
Use this procedure only if you are upgrading to the latest version of the Veracode Integration for Jira from a version earlier than 3.5.0.

<p font-size="13pt"><b>Before You Begin</b></p>

You must have Jira administrator permissions.

<p font-size="13pt"><b>Steps</b></p>

1. Log in to Jira as administrator and uninstall any previous versions of the Veracode Link plugin.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> Do not remove the Veracode Link custom field that the integration created during installation.</p>

2. Run this SQL query in the Jira database to confirm that there is only one record for the Veracode Link custom field:

    ```
    SELECT
        ID, CUSTOMFIELDTYPEKEY, CUSTOMFIELDSEARCHERKEY
    FROM
        customfield
    WHERE
        cfname = 'Veracode Link';
    ```

    If the SQL query returns multiple records for the Veracode Link custom field, before continuing to the next step, you must [remove the duplicate Jira issues](03_jira_remove_duplicate_issues.md).

3. Stop the Jira server.

4. Create a backup of your current Jira database, including triggers, stored procedures, functions, and events.

5. Delete these files from directory `{jira-directory}/atlassian-jira/WEB-INF/lib`:

    - Any previous versions of the Veracode Jira import plugin file `veracode-jira-flaws-synchronizer*.jar`
    - `vosp-api-wrapper-java{version}.jar`
    - `esapi.jar`
    - `ESAPI.properties`

6. Run this SQL query in the Jira database to remove any unnecessary Veracode Link custom field definitions:

    ```
    DELETE FROM customfield
    WHERE CUSTOMFIELDTYPEKEY='com.veracode.jira.plugin.synchronize.veracode-jira-flaws-synchronizer:veracode-link-field' 
    AND CUSTOMFIELDSEARCHERKEY='com.veracode.jira.plugin.synchronize.veracode-jira-flaws-synchronizer:veracode-link-searcher';
    ```

7. Run this SQL query in the Jira database to update the Veracode Link custom field definition:

    ```
    UPDATE customfield
    SET CUSTOMFIELDTYPEKEY='com.veracode.jira.plugin.synchronize.veracode-jira-flaws-synchronizer:veracode-link-field',
    CUSTOMFIELDSEARCHERKEY='com.veracode.jira.plugin.synchronize.veracode-jira-flaws-synchronizer:veracode-link-searcher'
    WHERE CUSTOMFIELDTYPEKEY='com.veracode.jira.plugin.link.VeracodeLink:veracode-link-field'
        AND CUSTOMFIELDSEARCHERKEY='com.veracode.jira.plugin.link.VeracodeLink:veracode-link-searcher';
    ```

8. Commit the changes to the Jira database.

9. Start and re-index the Jira server.

<p font-size="13pt"><b>Next Steps</b></p>

[Install the latest version of the Veracode Integration for Jira](README.md).