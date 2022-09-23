---
"ft:title" : "Configuring the Maven Plugin"
"ft:prettyUrl" : "Maven_Plugin_Configurations"
---

You can configure specific parameters in the Veracode Software Composition Analysis (SCA) agent-based scanning Maven plugin.

If you do not specify a name, Veracode assigns a name to display with your project from your repository and file system information based on the `.git` information.

**`apiToken`**

Identifies you to the Veracode Platform. Required for running the plugin if you have not set the `SRCCLR_API_TOKEN` [environment variable](https://docs.veracode.com/r/Veracode_SCA_Agent_Environment_Variables).

Default value: `null`

Example: `<apiToken>xxsdf234Sasdvcve</apiToken>`

**`upload`**

Indicates whether the plugin should upload your data to the Veracode Platform. If set to `false`, the plugin only displays results on the console.

Default value: `true`

Example: `<upload>false</upload>`

**`verbose`**

By default, the Maven plugin only specifies vulnerable components to you on the command line. If set to `true`, the plugin displays all of the components it finds.

Default value: `false`

Example: `<verbose>true</verbose>`

