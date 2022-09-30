---
"ft:title" : "Working Collaboratively in Triage Flaws"
"ft:prettyUrl" : "review_collaboration"
---
The Triage Flaws page enables a team of developers and security reviewers to work with the flaws that Veracode reports.

The types of collaboration on the Triage Flaws page include:

-   Discussing flaws via comments from multiple reviewers
-   [Documenting mitigating controls](https://docs.veracode.com/r/improve_mitigation)
-   Documenting potential false positives

##Tracking Mitigation Comments from Multiple Reviewers

You can make a comment on a flaw that other team members can review. You can make notes about possible remediation methods, work assignments, and other shared notes as comments on the flaw. Because the Triage Flaws page does not export user comments on reports, the team can treat the comments as a private working area while they remediate flaws.

<p font-size="13pt"><b>Steps</b></p>

1.  Select the flaw on the Triage Flaws page.
2.  Select **Comment** from the Action list, if you did not already select it.
3.  Enter a comment, up to 1024 characters, in the comment text field and click **Save**.
4.  Check the flaw back in.

##Flagging a Flaw as a Potential False Positive

Veracode tries to provide a low volume of incorrectly reported flaws, but occasionally you may find a flaw that is not valid. If you think that Veracode made a mistake in identifying something as a flaw, you identify the flaw as a potential false positive. Veracode periodically reviews issues reported as false positives as part of a continuous improvement process.

If you identify a flaw as a potential false positive, it does not cause Veracode to remove a potential false positive from your published report. Your organization can remove a potential false positive from the published report by approving it. If your organization approves a flaw as a false positive, your organization is accepting the risk that this flaw might be real.

<p font-size="13pt"><b>Steps</b></p>

1.  Select the flaw on the Triage Flaws page.
2.  Select **Potential False Positive** from the Action list.
3.  Enter the reason you think that the flaw is a potential false positive, up to 1024 characters, in the comment text field and click **Save**.
4.  Check the flaw back in.

To approve a potential false positive and remove it from the report:

1.  Select the flaw on the Triage Flaws page.
2.  Select **Mitigation Accepted** from the Action list.
3.  Enter the reason for acceptance, up to 1024 characters, in the comment text field and click **Save**.
4.  Check the flaw back in. The flaw is removed from the report and shows in the list of mitigated flaws.

##Reviewing Mitigation Activities of Other Users

You can see other comments, mitigation descriptions, and potential false positive notes for each flaw. All activities are saved to the list of past actions for the flaw, along with the ID of the user making the change and the time when the action was taken.

