---
"ft:title": "Remove Duplicate Jira Issues"
"ft:prettyUrl": "t_jira_remove_dups"
---
If you are upgrading from a version of the Veracode Integration for Jira that is earlier than 3.5.0 and notice duplicate Jira issues during the upgrade, use this procedure to remove duplicate issues.

<p font-size="13pt"><b>Steps</b></p>

1.  Run the appropriate SQL query to obtain a comma-separated list of IDs of the duplicate issues.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> If you have non-terminal values, other than Open and To Do, in the Status field defined in your Jira workflow, you must update the SQL query to include those additional Status field values.</p>

    - For a MySQL database:

        ```
        SELECT GROUP_CONCAT(ID) FROM jiraissue WHERE ID IN (SELECT ISSUE
        FROM customfieldvalue
        WHERE
            customfieldvalue.CUSTOMFIELD = (SELECT
                 ID
            FROM
                 customfield
            WHERE
                 CUSTOMFIELDTYPEKEY = 'com.veracode.jira.plugin.synchronize.veracode-jira-flaws-synchronizer:veracode-link-field'
                 AND CUSTOMFIELDSEARCHERKEY = 'com.veracode.jira.plugin.synchronize.veracode-jira-flaws-synchronizer:veracode-link-searcher')
                 AND customfieldvalue.STRINGVALUE IN (SELECT STRINGVALUE FROM customfieldvalue WHERE
                 CUSTOMFIELD = (SELECT ID
            FROM
                customfield
            WHERE
                CUSTOMFIELDTYPEKEY = 'com.veracode.jira.plugin.link.VeracodeLink:veracode-link-field'
                AND CUSTOMFIELDSEARCHERKEY = 'com.veracode.jira.plugin.link.VeracodeLink:veracode-link-searcher')))
                AND (issuestatus IN (SELECT ID FROM issuestatus WHERE pname = 'Open' OR pname = 'To Do')) LIMIT 0,500)
                AS jiraissue_temp_2  ON jiraissue_temp_1.ID = jiraissue_temp_2.jiraissue_id;
        ```

    - For an Oracle database:

        ```
        SELECT LISTAGG(ID, ', ') WITHIN GROUP (ORDER BY ID) jiraissue_ids FROM jiraissue jiraissue_temp_1 INNER JOIN (SELECT jiraissue_id FROM (SELECT ID AS jiraissue_id, ROW_NUMBER() OVER( order by ID asc ) rn  FROM jiraissue WHERE ID IN (SELECT ISSUE FROM customfieldvalue
        WHERE
           customfieldvalue.CUSTOMFIELD = (SELECT
               ID
           FROM
               customfield
           WHERE
               CUSTOMFIELDTYPEKEY = 'com.veracode.jira.plugin.synchronize.veracode-jira-flaws-synchronizer:veracode-link-field'
               AND CUSTOMFIELDSEARCHERKEY = 'com.veracode.jira.plugin.synchronize.veracode-jira-flaws-synchronizer:veracode-link-searcher')
        AND customfieldvalue.STRINGVALUE IN (SELECT STRINGVALUE FROM customfieldvalue WHERE
        CUSTOMFIELD = (SELECT
               ID
           FROM
               customfield
           WHERE
               CUSTOMFIELDTYPEKEY = 'com.veracode.jira.plugin.link.VeracodeLink:veracode-link-field'
               AND CUSTOMFIELDSEARCHERKEY = 'com.veracode.jira.plugin.link.VeracodeLink:veracode-link-searcher')))
               AND (issuestatus IN (SELECT ID FROM issuestatus WHERE pname = 'Open' OR pname = 'To Do'))) where rn BETWEEN 1 AND 500)
               jiraissue_temp_2  ON jiraissue_temp_1.ID = jiraissue_temp_2.jiraissue_id;
        ```

    - For a PostgreSQL database:

        ```
        SELECT ARRAY_AGG(ID) FROM jiraissue AS jiraissue_temp_1 INNER JOIN (SELECT ID AS jiraissue_id  FROM jiraissue WHERE ID IN (SELECT ISSUE
        FROM customfieldvalue
        WHERE
            customfieldvalue.CUSTOMFIELD = (SELECT
                ID
            FROM
                customfield
            WHERE
                CUSTOMFIELDTYPEKEY = 'com.veracode.jira.plugin.synchronize.veracode-jira-flaws-synchronizer:veracode-link-field'
                AND CUSTOMFIELDSEARCHERKEY = 'com.veracode.jira.plugin.synchronize.veracode-jira-flaws-synchronizer:veracode-link-searcher')
        AND customfieldvalue.STRINGVALUE IN (SELECT STRINGVALUE FROM customfieldvalue WHERE
        CUSTOMFIELD = (SELECT
                ID
            FROM
                customfield
            WHERE
                CUSTOMFIELDTYPEKEY = 'com.veracode.jira.plugin.link.VeracodeLink:veracode-link-field'
                AND CUSTOMFIELDSEARCHERKEY = 'com.veracode.jira.plugin.link.VeracodeLink:veracode-link-searcher')))
                AND (issuestatus IN (SELECT ID FROM issuestatus WHERE pname = 'Open' OR pname = 'To Do')) LIMIT 500)
                AS jiraissue_temp_2  ON jiraissue_temp_1.ID = jiraissue_temp_2.jiraissue_id;
        ```

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> If you are using a database other than MySQL, Oracle, or PostgreSQL, contact Veracode Technical Support for assistance.</p>

2.  In Jira, select **Issues** > **Search for issues**.

3.  Switch to advanced search and enter this JQL search query, replacing `{duplicate_ticket_ids}` with the output of the SQL query you ran in step 1:

    ```
    issuekey in ({duplicate_ticket_ids})
    ```

    For example, if the SQL query output is `10400,10401,10402,10403,10404,10405,10406,10408`, then your search query in Jira would be: `issuekey in (10400,10401,10402,10403,10404,10405,10406,10408)`

    A text area opens, into which you can enter JQL queries.

4.  Run the Issue search to view the list of Jira issues that match the IDs you specified.

5.  Select **Tools** > **Bulk Change** to start the bulk change for all issues that the advanced search returned.

6.  In the Choose Issues step, select the **Select All** checkbox and click **Next**.

7.  In the Choose Operation step, select **Delete Issues** and click **Next**.

8.  When prompted, click **Confirm**.

9.  Repeat steps 1-8 until the SQL query output on the Choose Issues step no longer returns any results, which means that there are no more duplicate issues to delete.

<p font-size="13pt"><b>Next Steps</b></p>

If you suspended your upgrade procedure to remove these duplicate issues, you can now [go back to that procedure and continue from step 3](https://docs.veracode.com/r/t_jira_upgrade).
