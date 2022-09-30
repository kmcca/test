---
"ft:title" : "Editing Security Labs Lessons"
"ft:prettyUrl" : "Editing_Security_Labs_Lessons"
---
You can choose from **Overview**, **Setup**, and **Content** on the Edit lesson page in Security Labs. These tables define the features in each tab:

<p><span style="font-size: medium;">Overview</span></p>

| Feature | Description|
| --- | --- |
| Stack | The language of your lesson. |
| Slug | The last subdirectory of the URL for your lesson. For example, adding `node-sqli` means the URL of your lesson is `http://securitylabs.veracode.com/lesson/node-sqli`. |
| Display type | [More information](https://docs.veracode.com/r/Choosing_Display_Types_in_Security_Labs_Lessons). |
| Allow others to view this lesson? | Publish or unpublish a lesson. Any team members can still access an unpublished lesson if they have a direct link to the lab URL, but you cannot assign the lesson to users until you publish. |
| Prevent future edits? | Toggle a lesson to `Locked` to prevent further changes. |
| Topic | Enter a value to appear in place of the words `this topic` for the modal shown at the beginning and end of the lesson which asks users to `Rate your familiarity with this topic.` |
| Points | Optionally, assign points for the difficulty of the lab. `10` points is most common for lessons with average difficulty. For more difficult lessons, increase the points a user can earn to `20` or `30`. |

<p><span style="font-size: medium;">Setup</span></p>

| Feature | Description|
| --- | --- |
| Is this a lesson or a challenge? | Choose **Challenge** or **Lesson**. Challenge labs are meant to be more difficult practice that does not provide step-by-step guidance to users. They list as `{Title} Challenge` and provide a warning to your users that they should be familiar with the topic. |
| Servers | A Docker image based on the applications identified by a language and a security topic. |
| Additional server setup commands | Optionally include additional setup code. This code runs in Bash shell as the root user after a user selects the lab. |
| Expand Paths | Automatically expand any folders in the GUI editor. |
| Editor Hints | Place a red dot next to the name of any file or folder specified in the GUI editor. |

<p><span style="font-size: medium;">Content</span></p>

You can write all content in Markdown.

Use the escape sequence `{$VIRTUAL_HOST}` in any lesson text to display the current lab URL of the user. For example,  `{$VIRTUAL_HOST}/api` displays as `https://xxxxxx.vsl.dev/api`.

| Feature | Description|
| --- | --- |
| Conclusion | Shows as a final step of instruction text in place of the phrase "You have completed this lab!". |
| Steps | Click to add steps. |
| Summary | Summarize the steps the user needs to take. |
| Hint |  Displays if the user has been on a step for a long time, or tries to click **Next** before completing a step. |
| Solution | Provide a solution for the step that is visible only to administrators. |
| Checks | Choose to run checks every few seconds on a step to determine if the user can progress to the next step. The check itself is Bash code run as the root user on the container, and the result is the exact terminal output expected from running the check. |
