---
"ft:title" : "Regenerate Veracode SCA Agent Tokens"
"ft:prettyUrl" : "Regenerate_Veracode_SCA_Agent_Tokens"
---

To connect to your organization during scanning, Veracode SCA uses an agent authentication token, which acts as a password.

<p font-size="13pt"><b>Before You Begin</b></p>

To regenerate an organization-level agent token, you must have the Security Lead [role](https://docs.veracode.com/r/c_role_permissions).

To regenerate a workspace agent token, you must have the Security Lead, Workspace Administrator, Workspace Editor, or Submitter role.

<p font-size="13pt"><b>Overview</b></p>

If another user gets access to your token, that person can use the Veracode SCA agent as if they were you. For workspace agent tokens, they can scan into the workspace linked to that agent, which taints your data. For organization-level agent tokens, if they can identify a workspace in your organization, they can scan into that workspace. Keep your token private.

You may want to regenerate this token if you believe it was compromised. Regenerating a token will invalidate the old token. Any agents using this token will no longer be able to scan.

For information on regenerating agent tokens with the SCA Agent REST API, see [Using the Veracode SCA Agent REST API](https://docs.veracode.com/r/c_sourceclear_intro).

<p font-size="13pt"><b>Steps</b></p>

1.  In the Veracode Platform, navigate to the Agents page at either the [workspace](https://docs.veracode.com/r/View_Workspace_Agents) or [organization level](https://docs.veracode.com/r/View_Organization_Level_Agents).
2.  Select an agent.
3.  Click **Regenerate Token**.

    A new token displays. If you close the page, the token disappears and you must generate it again.

4.  Copy this token and paste it into the relevant configuration file.
5.  Update your environment variables with the new token.

