---
"ft:title" : "Custom Rules for Agent-Based Scanning"
"ft:prettyUrl" : "c_sc_policies_custom"
---

Custom rules help you take greater control of your software delivery workflow.

Rules are sets of controls to which your codebase must adhere. Veracode Software Composition Analysis (SCA) agent-based scanning includes default rules, which are hard-coded and applied to all workspaces.

The custom rules feature in agent-based scanning exposes the controls that the rules engine uses. It allows you to edit these controls per workspace and decide what actions to take when projects violate controls, ensuring that no software ships unless it meets your security requirements.

When projects violate a control, you can choose to create an issue to track a problem, break the build, or both. Set your own severity for different kinds of control violations. Veracode uses this severity for agent-based scanning issues and as the exit code when a build breaks. You cannot create custom rules for a workspace if your organization [enforces organization rules](https://docs.veracode.com/r/t_int_create_org_rules).

At scan time, the scanner identifies open-source libraries in your code and any transitive library dependencies, generates a dependency graph and a call graph, and then sends the results of the scan to the Veracode Platform.
Veracode checks the scan results against each control in the rule. If a control fails, the specified action for that control is triggered, and the highest severity of the violated controls returns as the exit code.
