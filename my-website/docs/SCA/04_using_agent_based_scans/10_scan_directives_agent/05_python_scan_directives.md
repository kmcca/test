---
"ft:title" : "Python Scan Directives"
"ft:prettyUrl" : "Python_Scan_Directives"
---

**`system_site_packages`**

This directive maps to a boolean that indicates whether the Python `virtualenv` image with which the Veracode SCA agent scans for pip dependency information includes the system site packages.

Default value: `false`

Example:

```
system_site_packages: true
```

**`pip_requirements_file`**

The attribute value associated with this directive is a file that indicates an alternative location to find the pip requirements file for a particular project. If you do not specify this directive, the Veracode SCA agent looks for `requirements.txt`, `dev-requirements.txt`, or `requirements-dev.txt` in the root of the project.

Example:

```
pip_requirements_file: libs/requirements.txt
```

**`pip_extra_flags`**

This directive allows you to specify extra flags for the `pip install` command that the Veracode SCA agent executes.

Example:

```
pip_extra_flags: --extra-index-url http://example.com/pypi/simple --trusted-host example.com
```

