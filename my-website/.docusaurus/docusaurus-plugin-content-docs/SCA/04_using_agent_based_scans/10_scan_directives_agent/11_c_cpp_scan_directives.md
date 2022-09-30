---
"ft:title" : "C/C++ Scan Directives"
"ft:prettyUrl" : "C_C_Scan_Directives"
---

**`make_build_target`**

This directive specifies the command-line arguments for the `make` command that builds the project. By default, the `make` command runs without any command-line arguments for building the project.

Example:

```
make_build_target: all
```

**`make_clean_target`**

This directive specifies which command-line argument for cleaning the project to run with the `make` command.

Default value: `clean`

Example:

```
make_clean_target: distclean
```

**`make_output_file`**

This directive specifies the path, relative to the project root, to the text file that contains the output of the `make` command. If you use this directive, the scan agent parses the text file to obtain information about dependencies instead of running the `make` command to build the project.

Example:

```
make_output_file: make_log.txt
```
