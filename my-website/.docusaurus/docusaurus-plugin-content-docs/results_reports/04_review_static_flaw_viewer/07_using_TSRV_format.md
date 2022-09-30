---
"ft:title" : "Using the TSRV Format in Mitigation Proposals"
"ft:prettyUrl" : "c_review_TSRV"
---
TSRV \(Technique, Specifics, Remaining Risk, and Verification\) is a recommended standard format for mitigation proposals that makes it easy for security teams to understand and accept mitigation proposals from development teams.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> If you have a Mitigation Proposal Review (MPR) subscription, you must use the TSRV format for mitigation proposals.
</p>
The TSRV format comprises:

**Technique \(T\): Type of mitigation in effect**

Select the technique that most appropriately explains the compensating control you use to reduce or eliminate the risk that this flaw poses. Refer to your risk proposal guidelines documentation or [MITRE](http://cwe.mitre.org/top25/mitigations.html). The mitigation type is one of these industry standards:
 
 - M1: Establish and maintain control over all of your inputs
 - M2: Establish and maintain control over all of our outputs
 - M3: Lock down your environment
 - M4: Assume that external components can be subverted, and your code can be read by anyone
 - M5: Use industry-accepted security features instead of inventing your own
 - GP1: Use libraries and frameworks that make it easier to avoid introducing weaknesses
 - GP2: Integrate security into the entire software development lifecycle
 - GP3: Use a broad mix of methods to comprehensively find and prevent weaknesses
 - GP4: Allow locked-down clients to interact with your software

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> If you select <b>Accept the Risk</b>, Veracode does not show the <b>Technique</b> option.
</p> 

**Specifics \(S\): Specific compensating control in effect**

Describe the implementation details by which the technique is realized. For example, you can implement Technique M1: Establish and maintain control over all your inputs as an allowlist or a blocklist, and each of these may be either a list of literal values, an `enum` data type, or a regular expression. The clearer the explanation, the more quickly and easily it is for your [Mitigation Approver](https://docs.veracode.com/r/c_role_permissions) to review your proposal and make a decision. If additional details are available elsewhere, reference that location for the benefit of the Mitigation Approver.

**Remaining Risk \(R\): Risk that mitigation does not address**

Explain any known situations or limitations that your compensating control does not address. Your Mitigation Approver may know that the remaining risks are addressed by some other means, or may determine the risk to be acceptable. Remember that compensating controls are intended to manage risk reduction rather than eliminate the risk. Therefore, some remaining risk is to be expected in many cases.

**Verification \(V\): How was mitigation effectiveness verified?**

Provide an explanation of how the compensating control you are documenting has been tested and confirmed to be effective. If specific automated tests or procedures confirm the effectiveness of the compensating control, identify those specific tests. The Mitigation Approver can choose to refer to the results of this verification before deciding about the acceptability of the proposal you are making. In the future, you may need to revalidate the compensating control if the risk exposure of your application changes. This revalidation ensures the recommended completeness and repeatability of Verification.

An example of the TSRV is: Flaw: CWE-80 \(XSS\) is mitigated by design, with this TSRV:

-   T: M2 \(output validation\).
-   S: data is passed through `sanitize()` which applies `StringEscapeUtil.htmlEncode` to the data.
-   R: if data is output to JavaScript context or HTML attribute context, single-quote characters are not escaped correctly. Application does not output JavaScript or HTML attribute contexts.
-   V: UAT performed on representative data sets loaded with special characters produced no apparent injection.

When proposing mitigations, select a mitigation type from the Technique \(T\) dropdown menu, and then provide details for the Specifics \(S\), Remaining Risk \(R\), and Verification \(V\).

Veracode reviews the mitigation proposal against the risk tolerance guidelines that you established. Veracode evaluates the mitigation proposal and labels it as either `Conforms to Guidelines` or `Deviates from Guidelines`. If the mitigation proposal deviates from the guidelines, this mitigation proposal either does not provide enough information or does not adhere to the guidelines listed in the risk tolerance guidelines document. You must provide additional information for the mitigation proposal, review the risk tolerance guidelines document, or schedule a consultation call to clarify how to create and document an effective mitigating control for the flaw.

