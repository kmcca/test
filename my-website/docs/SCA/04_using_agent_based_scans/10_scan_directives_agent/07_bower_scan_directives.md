---
"ft:title" : "Bower Scan Directives"
"ft:prettyUrl" : "Bower_Scan_Directives"
---

**`allow_root`**

By default, Bower does not permit root users to perform installation tasks. While this restriction is for security reasons, many Docker configurations use the root user. Setting this directive to true instructs Bower to use the `--allow-root` flag.

Default value: `false`

Example:

```
allow_root: true
```

