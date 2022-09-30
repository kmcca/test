---
"ft:title" : "Create an Eclipse Project with References to Source Files"
"ft:prettyUrl" : "Create_an_Eclipse_Project_with_References_to_Source_Files"
---
You can create an Eclipse project and add references to the directory containing the source files.

<p font-size="13pt"><b>Steps</b></p>

1.  Select **Window** \> **Show View** \> **Other** \> **Java** \> **Package Explorer**.

2.  Right-click inside the Package Explorer view and select **New** \> **Project**.

3.  Enter a name for the new project and click **Finish**.

4.  In the Package Explorer view, right-click the new project and select **Import**.

5.  Expand the **General** folder node, select **File System**. Then, click **Next**.

6.  Click **Browse**.

7.  Locate and select the parent directory that contains the path shown in the Folder Path column in the Results view. Then, click **OK**. For example, if the Folder Path column shows a path of `org/apache/http/impl/io`, select the parent directory that contains the `org` folder.

8.  Select the checkbox next to the name of the selected directory.

9.  Under Options, click **Advanced**.

10. Select the **Create links in workspace** checkbox.

11. Select the **Create link locations relative to: PROJECT_LOC** checkbox.

12. Click **Finish**.

13. Confirm that the path to the files within the Project in Package Explorer matches the path in the Results view.