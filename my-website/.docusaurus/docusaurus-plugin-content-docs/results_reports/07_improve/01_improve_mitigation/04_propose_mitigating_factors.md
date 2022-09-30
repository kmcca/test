---
"ft:title" : "Propose Mitigating Factors for a Flaw"
"ft:prettyUrl" : "Propose_Mitigating_Factors_for_a_Flaw"
---

<p font-size="13pt"><b>Before You Begin</b></p>
You must have the Reviewer or Security Lead role to assign mitigating factors to a flaw in the Triage Flaws page.

<p font-size="13pt"><b>Steps</b></p>

1. In the Triage Flaws page, select the checkbox in the ID column to check out the flaw. The green lock icon appears in the column.
2. Click the arrow next to the checkbox to expand the details for the flaw.
3. From the **Action** dropdown menu, select one of these mitigations:
    -   **Mitigate by Design** to state that custom business logic within the body of the application, which may not be fully identifiable by an automated process, addressed the vulnerability.
    -   **Mitigate by Network Environment** to state that an environmental control provided by the network the application is running on addressed the vulnerability.
    -   **Mitigate by OS Environment** to state that an environmental control provided by the operating system on the machine the application is running on addressed the vulnerability.
    -   **Potential False Positive** to state that Veracode has incorrectly identified something as a vulnerability.

        <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
   <b>Note:</b> If you identify a flaw as a potential false positive, it does not cause Veracode to remove a potential false positive from your published report. Your organization can remove a potential false positive from the published report by approving it. If your organization approves a flaw as a false positive, your organization is accepting the risk that this flaw might be valid.
    </p>

    -   **Reported to Library Maintainer** to state that the current team does not maintain the library containing the flaw. You referred the vulnerability to the library maintainer.
    -   **Accept the Risk** to state that your business is willing to accept the risk associated with a finding. Your organization evaluated the potential risk and effort required to address the finding.

4. In the Comments field next to the Action menu, enter your reasoning for your proposed mitigation. You cannot save your mitigation without entering comments.
5. Click **Save**. Saving your action also checks the flaw back in.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> A user with the Mitigation Approver role who has access to your application can also check back in a flaw that you have checked out.
</p>
