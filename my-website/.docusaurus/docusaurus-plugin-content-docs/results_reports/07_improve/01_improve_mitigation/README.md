---
"author": ["Kevin McCarthy"]
"ft:originID": "improve_mitigation"
"ft:lang": "en-US"
"ft:title" : "About Mitigating Flaws"
"ft:prettyUrl" : "improve_mitigation"
"media_dir": "images/"
---
After Veracode completes a scan of your code, you can apply mitigation actions on any discovered vulnerabilities.

After a scan is complete, the next step in the workflow is to review all the discovered vulnerabilities in detail. Veracode enables you to sort the flaws and decide if you want to take any mitigation actions to temporarily address the flaw. You can mitigate flaws by making changes to the operating system features, network implementation, or application design. After you flag a flaw as mitigated, users in your organization with the Mitigation Approver [role](https://docs.veracode.com/r/c_role_permissions) can accept or reject the mitigations. Accepting the mitigated flaws removes them from the application score calculation and from being considered in the determination of the application's policy status. The mitigating factors are included in the application report.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Mitigations do not provide long-term fixes for application security flaws. For example, changes to your environment or new attack techniques can make many mitigating factors, including network and operating system mitigations, ineffective. Veracode recommends that you use mitigations as part of a long-term plan to remediate flaws in your code.
</p>

The mitigation workflow involves:

1.  [Reviewing the flaws with your team](https://docs.veracode.com/r/Reviewing_Flaws_as_a_Team)
2.  [Proposing mitigating factors](https://docs.veracode.com/r/Propose_Mitigating_Factors_for_a_Flaw)
3.  [Accepting or rejecting mitigations](https://docs.veracode.com/r/Accepting_and_Rejecting_Mitigations)
4.  [Viewing mitigated flaws in the report](https://docs.veracode.com/r/View_Mitigated_Flaws_in_Reports)

You can do all the steps in the mitigation workflow from the Triage Flaws view, which you can access from either the Results section of the left navigation menu or from the application overview. You can perform mitigation actions on one flaw at a time or perform a [mass action](https://docs.veracode.com/r/Managing_Mitigations_for_Several_Flaws_at_the_Same_Time) on multiple flaws at one time. You can accept or reject proposed mitigations from the Mitigated Flaws page.

Veracode automatically applies mitigation actions, including comments, proposals, acceptances, and rejections, to all [matched flaws](https://docs.veracode.com/r/c_review_matchflaws) within the application. Veracode also applies these mitigation actions to copies of the flaw that might exist in other sandboxes and the latest policy scan.

You can also manage the mitigation workflow with the [Annotations REST API](https://docs.veracode.com/r/c_rest_annotations_intro).