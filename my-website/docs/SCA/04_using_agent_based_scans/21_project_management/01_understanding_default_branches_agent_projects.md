---
"ft:title" : "Understanding Default Branches for Agent-Based Scan Projects"
"ft:prettyUrl" : "c_sc_default_branch"
---

The default branch for your Veracode Software Composition Analysis agent-based scan projects determines which data to display in the Veracode Platform. It also specifies the branch in which Veracode automatically creates issues for newly released vulnerabilities.

The Veracode Platform only displays issues, vulnerabilities, libraries, and licenses from the default branch. All list views only show the items from the default branch and all of the counts across your organization only include findings from the default branch, unless [you view another branch](https://docs.veracode.com/r/c_sc_tags_branches).

When Veracode releases or updates a vulnerability that impacts any of your projects, it automatically creates a new issue or updates an existing issue in the default branch.

For new projects, Veracode automatically sets the default branch to **Use Last Scanned**, which means the default branch always updates to the most recently scanned branch or tag. In your Veracode SCA project settings, you can [set the default branch](https://docs.veracode.com/r/t_sca_set_default_branch) that works with your Git workflow.

