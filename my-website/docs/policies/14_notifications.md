---
"ft:title" : "Understanding Policy Notifications"
"ft:prettyUrl" : "policy_notifications"
---
The Veracode Platform can send notifications automatically when specific policy-related events occur. Whether you receive policy notifications depends on [your notification settings](https://docs.veracode.com/r/t_configure_emails).

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> The Veracode Platform does not send notifications that contain sensitive information about your application, including the policy status, Veracode Level, or any other information about the application that could identify a weakness in your application or your organization.</p>

The Veracode Platform automatically sends policy-related notifications to the team assigned to the application, to any users with the Security Lead role, and to the Business Owner email address identified on the application profile.

The Veracode Platform sends notifications for three events: policy changes, upcoming scans required, and grace period expirations.

<p><span style="font-size: medium;">Policy Change</span></p>

The Veracode Platform sends this notification when the policy for an application changes, either a new policy assignment or an update to an existing policy assignment. The Veracode Platform sends the notifications immediately when the new policy assignment or update occurs.

<p><span style="font-size: medium;">Upcoming Scan Required</span></p>

The Veracode Platform sends this notification when a required scan is due in approximately 30 days, based on the schedule defined in the policy for the application. The Veracode Platform checks once a day during the night to send any Upcoming Scan Required notifications.

<p><span style="font-size: medium;">Grace Period Expiring Soon</span></p>

The Veracode Platform sends this notification when a finding approaches the expiration date of the grace period set in the policy. The Veracode Platform sends the notification a specific number of days ahead of the actual expiration date, on a sliding scale ranging from a day ahead to 30 days ahead based on the length of the grace period.
