---
"ft:title" : "Veracode SCA Agent Global Options"
"ft:prettyUrl" : "Veracode_SCA_Agent_Global_Options"
---

**`--help`**

Description: Displays a command summary.

Example: `$ srcclr --help`

**`--profile=`**

Description: If you activate multiple agents on one machine, Veracode prompts you to provide a profile name. This is an identifier you assign to this agent. Using the profile command you can choose which profile to use. Must be placed before the scan command.

Example: `$ srcclr --profile=Engineering scan`

**`--config=CONFIG-FILENAME`**

Description: Read in an additional configuration file that overrides the default one, described in `CONFIG-FILENAME`.

Example:`$ srcclr --config=$HOME/.srcclr/agent-test.yml scan ~/Projects/test-java-maven`

**`--insecure`**

Description: Suppress the file permission check for every configuration file provided, which includes the default one.

Example: `$ srcclr --insecure scan --url https://github.com/srcclr/test-java-maven`

**`--version`**

Description: Print the current version and exit.

Example: `$ srcclr --version`
