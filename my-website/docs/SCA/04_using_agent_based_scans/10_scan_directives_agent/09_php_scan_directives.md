---
"ft:title" : "PHP Scan Directives"
"ft:prettyUrl" : "PHP_Scan_Directives"
---

**`skip_composer_install`**

Boolean value that can prevent Veracode SCA from re-installing composer packages. If you use this directive, the `composer.lock` file must be present in the repository already.

Default value: `false`

Example:

```
`skip_composer_install: false`
```
