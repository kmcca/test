---
"ft:title" : "Configuring the Gradle Plugin"
"ft:prettyUrl" : "Gradle_Plugin_Configurations"
---

You can configure specific parameters in the Veracode Software Composition Analysis (SCA) agent-based scanning Gradle plugin.

You can add these configurations into the `srcclr` block in your `build.gradle` file.

**`apiToken`**

Enables uploading all scanned repositories to the Veracode Platform as new projects. Required for running the plugin if you have not set the `SRCCLR_API_TOKEN` [environment variable](https://docs.veracode.com/r/Veracode_SCA_Agent_Environment_Variables).

Default value: `null`

Example: `apiToken = "xdfsdfinerknwekrn13Ddfsa"`

**`shouldUpload`**

If set to `true`, scan results persist in the Veracode Platform in the workspace associated with your `apiToken`.

Default value: `true`

Example: `shouldUpload = false`

**`scope`**

Defines the scope on which components should match. Possible values include `compile`, `runtime`, and `test`. Veracode recommends you use `runtime` if you specify libraries using the `api` or `implementation` keywords.

Default value: `compile`

Example: `scope = "compile"`

