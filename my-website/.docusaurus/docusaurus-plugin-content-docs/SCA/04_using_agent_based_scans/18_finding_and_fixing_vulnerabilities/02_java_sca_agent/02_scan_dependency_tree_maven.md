---
"ft:title" : "Scanning the Dependency Tree for Maven"
"ft:prettyUrl" : "Scanning_the_Dependency_Tree_for_Maven"
---

The Veracode SCA agent can scan the output of the Maven `dependency:tree` command. For dependency tree scanning, the agent requires you to specify the `--stdin=maven` input option.

You must compile the project before scanning to enable vulnerable method analysis.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Dependency tree scanning disables scanning for all other package managers.
</p>


You can scan the dependency tree for Maven using either of these methods:

-   Redirect the output of the Maven `dependency:tree` command directly to the Veracode SCA agent. For example:

    ```
    mvn dependency:tree | srcclr scan --stdin=maven
    ```

-   Redirect the output of the `dependency:tree` command into a file and point the Veracode SCA agent to the file using the `dependency_tree_file` [scan directive](https://docs.veracode.com/r/Java_Scan_Directives). For example, in Linux bash:

    ```
    mvn dependency:tree > tree.txt
    SRCCLR_DEPENDENCY_TREE_FILE=tree.txt srcclr scan --stdin=maven
    ```


If you want to specify the scope of dependencies included in the scan, Veracode recommends you set the `scope` [scan directive](https://docs.veracode.com/r/Multi_Language_Scan_Directives) in the agent instead of setting the `scope` property of the `mvn` command. The scan directive allows more precise scope selection.
