---
"ft:title" : "Include SCA Findings in Policy"
"ft:prettyUrl" : "t_sca_policy"
---

You can restrict an application from using vulnerable third-party components by adding  requirements to your policy. You can also enforce that the application must not exceed maximum CVSS scores or license risk and must meet grace period requirements to pass policy.

<p font-size="13pt"><b>Before You Begin</b></p>

-   You must have the Policy Administrator [role](https://docs.veracode.com/r/c_role_permissions) to edit policies.
-   To include agent-based scan findings in your policy, you must [link your project to an application](https://docs.veracode.com/r/Link_SCA_Projects_to_Applications).

<p font-size="13pt"><b>Steps</b></p>

1.  To add SCA findings in your policy, [create a new policy](https://docs.veracode.com/r/t_create_policy) or [edit an existing policy](https://docs.veracode.com/r/t_edit_policy).

2.  In the Rules section, add one or more of these rules that apply to SCA:

    - Component Blocklist Enforcement: automatically prevent an application from passing policy if a scan detects blocklisted components. Click **View Blocklist** to see which components are blocklisted. 
    - Component Licenses: automatically prevent an application from passing policy if a scan detects any license that does meet the [defined requirements](https://docs.veracode.com/r/c_policy_rules). 
    - Vulnerability CVSS Score: automatically prevent an application from passing policy if a scan detects any vulnerability with the specified CVSS score or higher.
    
3.  Set the [grace periods](https://docs.veracode.com/r/c_policy_grace_period) you want to apply to the SCA rules.

4.  Finish creating or editing the policy.


If you add an SCA policy rule to a policy already assigned to applications, Veracode recalculates the policy compliance status of the applications. This change can cause applications that Veracode did not rescan to change from a passing status to a failing status.

