---
"ft:title" : "Manually Create a Security Labs Campaign"
"ft:prettyUrl" : "t_create_camp"
---
You can manually create a campaign that contains one or more lab assignments. You can assign a campaign to one or more roles.

<p font-size="13pt"><b>Before You Begin</b></p>

You must be a Security Labs administrator or manager to create campaigns.

<p font-size="13pt"><b>Steps</b></p>

1.  Click your username in the top-right corner of the Security Labs page to open the menu.

2.  Select **Assign Content**.

3.  On the Assign content through campaigns page, click **Create new campaign**.

    The Create New Campaign window opens.

4.  Enter a name for the new campaign and select the roles to which to assign the campaign.

5.  Select **Manually** > **Create**.

    The campaign displays in the list of current campaigns with the Paused status.

6.  Click the campaign name or scroll down to view campaign details.

7.  In the Select language field, click the icons to select the languages you want in the assignment. The icons in yellow represent the languages you selected.

8.  In the Continuous Schedule field, set the switch to **Continuous Schedule On** if you want the campaign to automatically forward a user from a completed assignment to the first lab in the next assignment.

9.  In the Competition mode field, set the switch to **Competition mode** if you want to make this campaign a timed campaign, based on the end date of the last assignment in the campaign. For more information, see [Using Teams and Leaderboards in Security Labs](../07_using_teams_and_leaderboards_in_seclabs/README.md).

10. In the campaign deadlines field, set the switch to **Allow late access** if you do not want to enforce a time limit for completing the campaign.

11. In the prior completion field, set the switch to **Accept Prior Completion** if you want to count lessons completed before the campaign start date.

12. Click **Add an assignment**.

13. In the assignment title field, enter the name for the assignment and click **Update assigned content**.

    The Assign content window opens, listing all the available labs for the languages you selected.

14. In the list of labs, select **Assign lab** to indicate the labs you want in the assignment. Select **Make optional** if the labs are not mandatory.

15. Click **Add content**.

16. Enter the date and time you want the assignment time frame to begin.

17. In the Due date \(UTC\) field, select **None**, **Fixed**, or **Relative**. If you select Relative, enter the number of days, weeks, or months from the date when you assigned the labs to the users.

18. Select the checkbox if you want Veracode to [notify your users by email when the assignment time frame begins](../09_t_email_progress_notifications.md).

19. Click **Add a notification** and enter the information you want in the additional reminder, including the time and date you want to send the reminder.

20. Click **Save**.

21. To create additional assignments for the campaign, scroll up and click **Add an assignment**. Repeat steps 10-19.

<p font-size="13pt"><b>Next Steps</b></p>

When you finish creating assignments, scroll up and click **Launch campaign**.
