---
"author": ["Kevin McCarthy"]
"ft:lang": "en-US"
"ft:title" : "Veracode SCA Agent Management"
"ft:prettyUrl" : "c_sc_agent_management"
"media_dir": "images/"
---

The Veracode Software Composition Analysis (SCA) agent, also referred to as the scanner, is the program that builds and scans your code to find third-party libraries and the vulnerabilities contained in those libraries.

Workspace agents let you scan projects and put their results in a specific workspace. When you create a new workspace, you can set up at least one agent for that workspace to scan projects into that workspace.

For organizations that want to minimize setup for new workspaces, Veracode offers agents at the organization level. One organization agent can scan into any workspace. You simply identify which workspace at scan time using a flag, called a workplace slug, or an environment variable.

<p><span style="font-size: medium;">Workspace Agent Permissions</span></p>

If you have the Security Lead [role](https://docs.veracode.com/r/c_role_permissions), you can manage any workspace agent.

If you have the Workspace Administrator, Workspace Editor, or Submitter role, you can manage agents for a specific workspace.

<p><span style="font-size: medium;">Organization-Level Agent Permissions</span></p>

If you have the Security Lead [role](https://docs.veracode.com/r/c_role_permissions), you can create, view, update, and delete organization-level agents.

<p><span style="font-size: medium;">Scanning with an Organization-Level Agent for Desktop Operating Systems</span></p>

When scanning with an organization-level agent, append the workspace flag and slug after the scan command:

```
srcclr scan --ws=<workspace slug>
```

To find the workspace slug, select the desired workspace from the menu and copy the slug from the field below.

The workspace slug can also be found in the URL of the workspace when you are on any workspace page.

<p><span style="font-size: medium;">Scanning with an Organization-Level Agent for Desktop Operating Systems Using CI</span></p>

For organization-level agents, follow the [workspace agent instructions](https://docs.veracode.com/r/Integrating_Veracode_SCA_with_Atlassian_Bamboo), but also add the environment variable `SRCCLR_WORKSPACE_SLUG` to the appropriate configuration file. The value of this variable is the same as above.


