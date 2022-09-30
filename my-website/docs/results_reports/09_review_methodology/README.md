---
"author": ["Kevin McCarthy"]
"ft:originID": "review_methodology"
"ft:lang": "en-US"
"ft:title" : "Understanding Veracode Scoring and Methodology"
"ft:prettyUrl" : "review_methodology"
"media_dir": "images/"
---
Veracode provides a unique methodology with its Static Analysis and Dynamic Analysis products to identify security flaws in applications.

<p><span style="font-size: medium;">Terms of Use</span></p>

Use and distribution of this report are governed by the agreement between Veracode and its customer. In particular, this report and the results in the report cannot be used publicly in connection with Veracode without written permission.
 
<p><span style="font-size: medium;">About the Veracode Methodology</span></p>

The Veracode Platform uses Static Analysis and Dynamic Analysis to inspect executables and identify security flaws in your applications. Using both Static Analysis and Dynamic Analysis helps reduce false negatives and detect a broader range of security flaws. The static binary analysis engine models the binary executable into an intermediate representation, which is then verified for security flaws using a set of automated security scans. Dynamic Analysis uses an automated penetration testing technique to detect security flaws at runtime. After the automated process is complete, a security technician verifies the output to ensure the lowest false positive rates in the industry. The end result is an accurate list of security flaws for the classes of automated scans applied to the application.

<p><span style="font-size: medium;">Veracode Rating System Using Multiple Analysis Techniques</span></p>

Higher business criticality applications require more comprehensive analysis to accurately score their security quality. Analysis techniques include automated static, automated dynamic, manual penetration testing, and manual review. Because each analysis technique has differing false negative \(FN\) rates for different types of security flaws, any single analysis technique or even a combination of techniques is more likely to produce a certain level of false negatives. Some false negatives are acceptable for lower business critical applications, therefore, a less expensive analysis using only one or two analysis techniques is acceptable. At higher business criticality the FN rate should be close to zero. Therefore, Veracode recommends multiple analysis techniques.

