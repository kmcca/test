---
"ft:title" : "Verifying Your Fixes"
"ft:prettyUrl" : "review_verify"
---
After fixing flaws in your application that Veracode identified, you should scan your application again. A subsequent scan is necessary to verify that the fixes were effective and that additional security flaws were not introduced by the fixes. The first step in verifying your fixes is to submit a new scan of your application. Once the scan is complete, a number of features are provided in the Veracode Platform and in the application report.

<p><span style="font-size: medium;">Score Trend Information</span></p>

The score trend chart, visible in the PDF report, shows the trend of the application score over time and provides quick, at-a-glance feedback to indicate whether the changes made have improved the security of the application.

<p><span style="font-size: medium;">Identification of New Flaws</span></p>

Flaws that were not present in the prior scan of the application are flagged with a NEW badge in the PDF report.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Currently, only static flaws are flagged as new.
</p>

<p><span style="font-size: medium;">Identification of Fixed Flaws</span></p>

The appendix of the PDF report lists flaws that were present in prior scans that were not found in the scan currently being verified.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> The list of flaws not found may include flaws that were not fixed in some circumstances, for example, when a module of the application is not re-uploaded for scanning. For best results, the same modules should be uploaded during the verification scan that were uploaded for the initial scan.
</p>
