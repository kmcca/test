---
"ft:title" : "Understanding Veracode Levels"
"ft:prettyUrl" : "policy_veracodelevel"
---
Veracode determines the Veracode Level \(VL\) of an application by the type of testing it performs on the application and the severity and types of flaws it detects. A minimum security score is required for each level.

There are five standard Veracode Levels denoted as VL1, VL2, VL3, VL4, and VL5. VL1 is the lowest level and is achieved by demonstrating that security testing, automated static or dynamic, is utilized during the software delivery lifecycle. VL5 is the highest level and is achieved by performing automated and manual testing and removing all significant flaws. The Veracode Levels VL2, VL3, and VL4 form a continuum of increasing software business criticality between VL1 and VL5.

There are three Veracode Levels that contain the same requirements as the Veracode Levels, plus Veracode Software Composition Analysis. The levels are denoted as VL5 + SCA, VL4 + SCA, and VL3 + SCA.

For IT staff operating applications, you can use Veracode Levels to set application security policies. You should use different VLs for deployment scenarios of varying business criticality. For example, the policy for applications that manage credit card transactions, and, therefore, have PCI compliance requirements, should be VL5. A medium business-critical, internal application could have a policy requiring VL3.

Software developers can decide which VL they want to achieve, based on the requirements they are given. Developers of software that is mission-critical want to achieve VL5. Developers of general-purpose software may target VL3 or VL4. Veracode Level can be communicated to the clients through a Veracode report.

<p><span style="font-size: medium;">Criteria for Achieving Veracode Levels</span></p>

The following table defines the requirements for achieving each Veracode Level.

|Veracode Level|Flaw Severities Not Allowed|Testing Required[¹](#testing)|Minimum Score|
|--------------|---------------------------|------------------------------|-------------|
|VL5 + SCA|V.High, High, Medium|Static, Manual, and Software Composition Analysis|90|
|VL5|V.High, High, Medium|Static and Manual|90|
|VL4 + SCA|V.High, High, Medium|Static and Software Composition Analysis|80|
|VL4|V.High, High, Medium|Static|80|
|VL3 + SCA|V.High, High|Static and Software Composition Analysis|70|
|VL3|V.High, High|Static|70|
|VL2|V.High|Static, Dynamic, or Manual|60|
|VL1| |Static, Dynamic, or Manual| |

When multiple scan techniques are used, it is likely that not all testing are performed on the exact same scan. If that is the case, the latest scan results from a particular technique are used to calculate the current Veracode Level. After six months, test results are deemed out of date and no longer used to calculate the current Veracode Level.

SCA findings do not override higher Veracode Level achievements. For example, if an application contains zero Medium Static Analysis findings, but does contain Medium SCA findings, the application still achieves VL4.

<p><span style="font-size: medium;">Applying Veracode Levels to a Sample Application</span></p>

A web application that is tested with static analysis and is found to not have any Very High or High severity flaws and has a score of at least 70 achieves VL3. For this application to achieve VL4, you must remediate all Very High, High, and Medium flaws. To achieve VL5, you must perform manual testing and remediate all Very High, High, and Medium flaws.

**Related information**  

[Understanding Business Criticality](https://docs.veracode.com/r/review_assurancelevels)

<a name ="testing"></a>
¹ Dynamic is only an option for web applications.
