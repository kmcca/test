---
"ft:title" : "Understanding Tags and Branches for SCA Agent-Based Scans"
"ft:prettyUrl" : "c_sc_tags_branches"
---

Veracode Software Composition Analysis (SCA) agent-based scanning is designed to be used with Git-based systems. Within these systems, there are commits, branches, and tags. This section describes how these three items affect issues in agent-based scanning and how you can manage them.

<p><span style="font-size: medium;">How a Branch or Tag Affects Issues</span></p>

Veracode SCA has a unique list of issues for each branch or tag scanned, which means that if you have scanned multiple branches, you may see the same issue multiple times in the issues list. This feature allows you to see the state of a specific branch or tag rather than having only one set of results for everything.

<p><span style="font-size: medium;">Viewing a Specific Branch or Tag</span></p>

When viewing a project in the Veracode Platform, you can choose to see issues from a single branch or tag. To do this, click **Change** next to the selected branch. In the Switch Branch or Tag window, you can see which branches you have scanned.

<p><span style="font-size: medium;"> How Agent-Based Scanning Identifies the Branch or Tag</span></p>

Veracode SCA agent-based scanning chooses a tag, branch, or commit hash when importing results to the Veracode Platform. It uses the `git describe --all` command to determine the state of the scanned repository. The order of selection is:

1.  Tag
2.  Branch
3.  Previous tag
4.  Previous branch
5.  Commit hash

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> If you scan a tag on a branch, Veracode SCA considers it a tag.
</p>

<p><span style="font-size: medium;">Selecting a Default Branch</span></p>

See [Change Default Branch for SCA Agent-Based Scans](https://docs.veracode.com/r/t_sca_set_default_branch).

