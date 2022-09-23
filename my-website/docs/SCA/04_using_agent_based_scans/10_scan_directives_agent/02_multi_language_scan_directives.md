---
"ft:title" : "Multi-Language Scan Directives"
"ft:prettyUrl" : "Multi_Language_Scan_Directives"
---

**`scope`**

You can use the `scope` directive with Ruby, Java, NPM, Yarn, Bower, and PHP projects. It limits the dependency resolution, including the discovered dependencies, to the dependencies within the specified scope. It also includes any scope from which the specified scope inherits, as long as the build system supports the inherited scope. This directive applies the same scope to any package manager used in the project.

For Maven, you can set the `scope` directive to one of these values:

-   `compile` to restrict the scan to `system`, `provided`, and `compile` dependencies.

-   `runtime` to restrict the scan to `compile` and `runtime` dependencies.

-   `compile+runtime` to restrict the scan to `system`, `provided`, `compile`, and `runtime` dependencies.

-   `runtime+system` to restrict the scan to `system`, `compile`, and `runtime` dependencies.

-   `test` to restrict the scan to `system`, `provided`, `compile`, `runtime`, and `test` dependencies.

For Ant projects that use the Ivy dependency manager, you can use the `scope` directive to specify a comma-separated list of configurations where the dependencies belong. The list can include configuration names, an asterisk \(`*`\) to specify all configurations, and `!conf` to exclude the `conf` configuration.

For NPM, you can set the `scope` directive to one of these values:

-   `production` or `prod` to restrict the scan to production dependencies, including the optional dependencies you can install.
-   `development` or `dev` to restrict the scan to development dependencies.

For Yarn, you can set the `scope` directive to one of these values:

-   `production` or `prod` to restrict the scan to production, peer, and optional dependencies.
-   `development` or `dev` to restrict the scan to development dependencies.

For PHP, you can set the `scope` directive to `--no-dev`, which only installs production packages.

Default values by package manager:

-   Maven: `compile`
-   Ant, with Ivy: Any one of `default`, `runtime`, `compile`, or `*`, resolved in that order.
-   Gradle 3.0 and earlier: `compile`
-   Gradle 3.1–3.3: `runtime`
-   Gradle 3.4 and later: `default`
-   Bundler: The scope defined in your Gemfile
-   NPM: All scopes defined in your `package.json` file

Example:

```
# Java example
scope: testCompile

# Prevent scanning 'devDependencies' for an NPM project
scope: production
```

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> This example indicates that you only want to include dependencies that are in the <code>testCompile</code> scope, or a scope from which <code>testCompile</code> inherits.
</p>

