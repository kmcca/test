---
"ft:title" : "Scanning the Dependency Tree for Gradle"
"ft:prettyUrl" : "Scanning_the_Dependency_Tree_for_Gradle"
---

The Veracode SCA agent can scan the output of the Gradle `dependencies` task. For dependency tree scanning, the agent requires you to specify the `--stdin=gradle` input option.

You must compile the project before scanning to enable vulnerable method analysis.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Dependency tree scanning disables scanning for all other package managers.
</p>


You can scan the dependency tree for Maven using either of these methods:

-   Redirect the output of the Gradle `dependencies` task directly to the Veracode SCA agent. For example, in Linux bash:

    ```
    ./gradlew dependencies | srcclr scan --stdin=gradle
    ```

-   Redirect the output of the Gradle `dependencies` task into a file and point the Veracode SCA agent to the file using the `dependency_tree_file` [scan directive](https://docs.veracode.com/r/Java_Scan_Directives). For example, in Linux bash:

    ```
    ./gradlew dependencies > tree.txt
    SRCCLR_DEPENDENCY_TREE_FILE=tree.txt srcclr scan --stdin=gradle
    ```


For multi-project Gradle builds, you might need to prefix the `dependencies` task with a subproject name and a colon in the `gradle` or `gradlew` command. For example: `my-subproject:dependencies`.

If you want to specify the scope of dependencies included in the scan, you can use the `--configuration` option with the `dependencies` task for `gradle` or `gradlew`. The `scope` scan directive for the agent does not support dependency tree scanning for Gradle.
