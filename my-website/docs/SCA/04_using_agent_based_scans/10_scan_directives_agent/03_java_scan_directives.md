---
"ft:title" : "Java Scan Directives"
"ft:prettyUrl" : "Java_Scan_Directives"
---

**`compile_first`**

Boolean value that forces the Veracode SCA agent to perform a compilation prior to scanning. Only applicable for Maven.

Default value: `true`

Example:

```
compile_first: false
```

**`install_first`**

Boolean value that forces the Veracode SCA agent to perform a compilation and installation prior to scanning. Only applicable for Maven.

Default value: `true`

Example:

```
install_first: false
```

**`custom_maven_command`**

String attribute with which the Veracode SCA agent utilizes the supplied Maven options instead of `compile` and `install`, which are the defaults. This command must take the form of a single string object.

Default value: `compile install`

Example:

```
custom_maven_command: clean compile
```

**`custom_maven_exec`**

String attribute that specifies the full path to a custom Maven executable. Defaults to using the Maven executable on the `PATH` of the environment in which the agent performs the scan.

Example:

```
custom_maven_exec: /usr/local/bin/mvn
```

**`custom_gradle_exec`**

String attribute that specifies the full path to a custom Gradle executable. Defaults to using the Gradle executable on the `PATH` of the environment in which the agent performs the scan or a `gradlew` file in the directory being scanned, if it exists.

Example:

```
custom_gradle_exec: /usr/local/bin/gradle
```

**`custom_ant_exec`**

String attribute that specifies the full path to a custom Ant executable. Defaults to using the Ant executable on the `PATH` of the environment in which the agent performs the scan.

Example:

```
custom_ant_exec: /usr/local/bin/ant
```

**`ant_build_steps`**

String attribute with custom Ant build steps to run before scanning.

Example:

```
ant_build_steps: clean compile
```

**`ivy_settings_filename`**

By default, Veracode SCA uses the `ivysettings.xml` file found in the root folder. You can use this directive to specify another Ivy settings file. Specify the file using its absolute path or its path relative to the root folder.

Absolute path example:

```
ivy_settings_filename: /path/to/ivysettings.xml
```

Relative path example:

```
ivy_settings_filename: ivysettings-release.xml
```

**`ant_lib_dir`**

This directive defines where your Ant third-party dependencies are located if you do not provide Ant build steps in the `ant_build_steps` directive. The directive value defaults to the directory in which you perform scans. Specify the location as comma-separated directory paths that are either absolute or relative to the scan project root.

Example:

```
ant_lib_dir: lib/, main/jarfiles/
```

**`gradle_location`**

This directive supports configurations in which the `gradlew` file does not exist at the root of a Gradle project. This value must be a relative path and include the `gradlew` filename at the end.

Example:

```
gradle_location: api/gradlew
```

**`gradle_tasks`**

By default, the agent uses the `classes` task when performing Gradle scans. This task allows for complete dependency resolution and generation of class files, while not going far enough in the build to execute unit and integrations tests. To run custom tasks during Gradle scans instead of the `classes` task, use this directive with a space-separated list of tasks to execute.

Default value: `classes`

Example:

```
gradle_tasks: clean compile
```

**`gradle_filter_task`**

This directive allows you to dynamically pin scans to only specific submodules, based on whether that submodule contains the specified task. In the example below, the scan is limited to submodules containing the `classes` task.

Example:

```
gradle_filter_task: classes
```

**`dependency_tree_file`**

This directive allows you to specify the path to a file containing the output of the Maven `dependency:tree` command or the Gradle `dependencies` task in dependency tree scanning mode. The path is relative to the root folder.

Example:

```
dependency_tree_file: tree.txt
```
