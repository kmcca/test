---
"ft:title" : "Agent Scan Directives"
"ft:prettyUrl" : "Agent_Scan_Directives"
---

**`scan_collectors`**

By default, Veracode SCA agents find all supported build tools and package managers in the directory specified by the scan command, or the current directory for CI scans. You can use `scan_collectors` to specify which build tools and package managers to use. The possible values for `scan_collectors` are:

| Language    | Collector                                                                                                                        |
|-------------|----------------------------------------------------------------------------------------------------------------------------------|
| Java        | <ul><li>`maven`</li><li>`gradle`</li><li>`ant`</li><li>`jar`</li></ul>                                                           |
| Scala       | <ul><li>`sbt`</li><li>`"sbt coursier"`</li></ul>                                                                                 |
| Go          | <ul><li>`glide`</li><li>`"go get"`</li><li>`"go mod"`</li><li>`godep`</li><li>`dep`</li><li>`govendor`</li><li>`trash`</li></ul> |
| Python      | <ul><li>`pip`</li><li>`pipenv`</li></ul>                                                                                         |
| JavaScript  | <ul><li>`bower`</li><li>`yarn`</li><li>`npm`</li></ul>                                                                           |
| Objective-C | `cocoapods`                                                                                                                      |
| Ruby        | `gem`                                                                                                                            |
| PHP         | `composer`                                                                                                                       |
| C/C++       | <ul><li>`makefile`</li><li>`sofile`</li></ul>                                                                                    |
| C#          | <ul><li>`dll`</li><li>`msbuilddotnet`</li></ul>                                                                                  |

When you run the SCA agent with the `--quick` option, the possible values for `scan_collectors` are:

| Language    | Collector                                                                                                                                                                            |
|-------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Java        | `"jar quickscan"`                                                                                                                                                                    |
| Scala       | `"jar quickscan"`                                                                                                                                                                    |
| Go          | <ul><li>`"glide quickscan"`</li><li>`"godeps quickscan"`</li><li>`"dep quickscan"`</li><li>`"go mod quickscan"`</li><li>`"govendor quickscan"`</li><li>`"trash quickscan"`</li></ul> |
| Python      | `"pipfile.lock quickscan"`                                                                                                                                                           |
| JavaScript  | <ul><li>`"bower quickscan"`</li><li>`"yarn quickscan"`</li><li>`"npm quickscan"`</li><li>`"node_modules quickscan"`</li></ul>                                                        |
| Objective-C | `"podfile.lock quickscan"`                                                                                                                                                           |
| Ruby        | `"gemfile.lock quickscan"`                                                                                                                                                           |
| PHP         | `"composer quickscan"`                                                                                                                                                               |
| C/C++       | `"sofile quickscan"`                                                                                                                                                                 |
| C#          | `"dll quickscan"`                                                                                                                                                                    |

Example:

```
scan_collectors: "gem, maven"
```


**`skip_collectors`**

By default, Veracode SCA agents find all supported build tools and package managers in the directory specified by the scan command, or the current directory for CI scans. You can use `skip_collectors` to specify which build tools and package managers to ignore when running a scan. The possible values for `skip_collectors` are:

| Language    | Collector                                                                                                                      |
|-------------|--------------------------------------------------------------------------------------------------------------------------------|
| Java        | <ul><li>`maven`</li><li>`gradle`</li><li>`ant`</li><li>`jar`</li></ul>                                                         |
| Scala       | <ul><li>`sbt`</li><li>`"sbt coursier"`</li></ul>                                                                               |
| Go          | <ul><li>glide</li><li>`"go get"`</li><li>`"go mod"`</li><li>`godep`</li><li>`dep`</li><li>`govendor`</li><li>`trash`</li></ul> |
| Python      | <ul><li>`pip`</li><li>`pipenv`</li></ul>                                                                                       |
| JavaScript  | <ul><li>`bower`</li><li>`yarn`</li><li>`npm`</li></ul>                                                                         |
| Objective-C | `cocoapods`                                                                                                                    |
| Ruby        | `gem`                                                                                                                          |
| PHP         | `composer`                                                                                                                     |
| C/C++       | <ul><li>`makefile`</li><li>`sofile`</li></ul>                                                                                  |
| C#          | <ul><li>`dll`</li><li>`msbuilddotnet`</li></ul>                                                                                |

When you run the SCA agent with the `--quick` option, the possible values for `skip_collectors` are:

| Language    | Collector                                                                                                                                                                            |
|-------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Java        | `"jar quickscan"`                                                                                                                                                                    |
| Scala       | `"jar quickscan"`                                                                                                                                                                    |
| Go          | <ul><li>`"glide quickscan"`</li><li>`"godeps quickscan"`</li><li>`"dep quickscan"`</li><li>`"go mod quickscan"`</li><li>`"govendor quickscan"`</li><li>`"trash quickscan"`</li></ul> |
| Python      | `"pipfile.lock quickscan"`                                                                                                                                                           |
| JavaScript  | <ul><li>`"bower quickscan"`</li><li>`"yarn quickscan"`</li><li>`"npm quickscan"`</li><li>`"node_modules quickscan"`</li></ul>                                                        |
| Objective-C | `"podfile.lock quickscan"`                                                                                                                                                           |
| Ruby        | `"gemfile.lock quickscan"`                                                                                                                                                           |
| PHP         | `"composer quickscan"`                                                                                                                                                               |
| C/C++       | `"sofile quickscan"`                                                                                                                                                                 |
| C#          | `"dll quickscan"`                                                                                                                                                                    |


Example:

```
skip_collectors: "godep,govendor,go get"
```

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> If you include a comma-separated list with the <code>skip_collectors</code> command using PowerShell, you must enclose the string in quotation marks to avoid errors.
</p>

**`scan_analyzers`**

In container scans, Veracode SCA agents find all supported build tools and package managers in the directory specified by the scan command or the current directory for CI scans, by default. You can use `scan_analyzers` to specify which build tools and package managers to use. The possible values for `scan_analyzers` are:

| Analyzer | Package Manager | Language/Distribution |
|----------|-----------------|-----------------------|
| `yum`    | yum             | CentOS, RHEL          |
| `gem`    | gem             | Ruby                  |
| `pip2`   | pip2            | Python 2              |
| `pip3`   | pip3            | Python 3              |
| `npm`    | NPM             | JavaScript            |
| `apk`    | apk             | Alpine                |
| `apt`    | apt             | Debian, Ubuntu        |

Example:

```
scan_analyzers: "apk, yum"
```

**`skip_analyzers`**

In container scans, Veracode SCA agents find all supported build tools and package managers in the directory specified by the scan command or the current directory for CI scans, by default. You can use `skip_analyzers` to specify which build tools and package managers to ignore when running a scan. The possible values for `skip_analyzers` are:

| Analyzer | Package Manager | Language/Distribution |
|----------|-----------------|-----------------------|
| `yum`    | yum             | CentOS, RHEL          |
| `gem`    | gem             | Ruby                  |
| `pip2`   | pip2            | Python 2              |
| `pip3`   | pip3            | Python 3              |
| `npm`    | NPM             | JavaScript            |
| `apk`    | apk             | Alpine                |
| `apt`    | apt             | Debian, Ubuntu        |

Example:

```
skip_analyzers: "apk, yum"
```

**`vuln_methods_ignored_directories`**

A comma-separated list of directories that you want Veracode to ignore during a vulnerable method analysis. This directive overrides the default directories.

Example:

```
vuln_methods_ignored_directories: doc
```

**`vuln_methods_extra_ignored_directories`**

A comma-separated list of directories that adds to the default per-language set that the agent ignores during a vulnerable method analysis.

```
vuln_methods_extra_ignored_directories: "doc, test"
```

Default values:

-   Ruby: `test`
-   Java: `test`
-   Python: `test`, `tests`, `doc`, `docs`, `bin`, `.virtualenv`, `env`, `venv`

**`ssl_cert_dir`**

A filepath that specifies the directories that contain X.509 certificates that the Veracode SCA agent should trust in addition to the certificates present in the Java Runtime Environment (JRE) or stored in your operating system. If you enter multiple directories, separate the filepaths with the correct path separator for your operating system. For example, use a colon (`:`) for Linux and macOS.

Default value: the certificate location directory specified in the Java Virtual Machine (JVM).

Example:

```
ssl_cert_dir: C:\path\to\certificate\directory
```

**`ssl_cert_file`**

A filepath that specifies the X.509 certificates that the Veracode SCA agent should trust in addition to the certificates present in the JRE or stored in your operating system. If you enter multiple files, separate the filepaths with the correct path separator for your operating system. For example, use a colon (`:`) for Linux and macOS. If specified, this value overrides the `ssl_cert_dir` directive.

Default value: the certificate location specified in the JVM.

Example:

```
ssl_cert_file: C:\path\to\certificate\example_cert.cer
```