---
"ft:title" : "Best Practice Findings"
"ft:prettyUrl" : "review_bestpractices"
---
Veracode static scans can detect and report certain uses of security best practices, including correct use of security features and correct defensive measures against injection attacks. Information about best practice use appears in the Best Practice Findings section of the Veracode on-screen and Detailed Report PDF.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Currently Veracode only checks for Best Practice findings in Java and .NET applications.
</p>

<p><span style="font-size: medium;">Security Features</span></p>

Veracode looks for correct application-wide use of certain security features, including secure randomness algorithms and correct use of strong cryptography. Veracode reports correct use of security features if the application has positive best practice findings \(that is, use of a security function such as a secure randomness function\) and no findings of a corresponding security weakness.

<p><span style="font-size: medium;">Cross-Check Findings</span></p>

Veracode examines all possible opportunities in an application for injection flaws and looks for the use of a [recognized cleansing function](https://docs.veracode.com/r/review_cleansers) that would prevent an attacker from exploiting the flaw. If a potentially vulnerable location is protected on all possible code paths by an affirmative and recognized security defense, Veracode reports a best practice finding for that flaw category. Successful defense of all such locations in the application earns the application a green light for that category. If there are a mix of best practice uses and flaws for a particular category, that category is displayed with a yellow light to indicate that more work is needed in that area.

Best Practices findings appear on the **Findings & Recommendations** tab.

