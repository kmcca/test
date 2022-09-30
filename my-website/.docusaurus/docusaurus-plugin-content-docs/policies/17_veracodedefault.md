---
"ft:title" : "Reviewing the Veracode Default Policies"
"ft:prettyUrl" : "policy_veracodedefault"
---
Veracode provides default policies to make it easier for organizations to begin measuring their applications against policies. There are these two sets of default policies:

-   Veracode Transitional Policies: the default policies for all organizations and which are designed to set a minimum level for those initially adopting Veracode for application security programs.

-   Veracode Recommended Policies: the best practice recommendation based on Veracode Levels.

<p><span style="font-size: medium;">Veracode Transitional Policies</span></p>

Veracode Transitional Policies are assigned to all of your applications by default and are the default policies for newly created applications. The policies emphasize performing an initial scan to establish the baseline quality of an application, and use the Veracode score \(numeric score 1-100\) as a progressive quality gate.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> The transitional policies do not take advantage of the remediation grace period feature. With no grace period, the transitional policy functions like the existing Veracode rating system, where the score is effective as soon as the application is published.</p>

|Policy Name|Target VL|Minimum Score|Scan Requirement|Grace Period|
|-----------|---------|-------------|----------------|------------|
|Veracode Transitional Very High|VL1|90|Any \(Once\)|0|
|Veracode Transitional High|VL1|80|Any \(Once\)|0|
|Veracode Transitional Medium|VL1|70|Any \(Once\)|0|
|Veracode Transitional Low|VL1|60|Any \(Once\)|0|
|Veracode Transitional Very Low|VL1|50|Any \(Once\)|0|

<p><span style="font-size: medium;">Veracode Recommended Policies</span></p>

Veracode Recommended Policies are based on the Veracode Level definitions. They are an option when you are ready to move beyond the initial requirements set by the Veracode Transitional Policies.

|Policy Name|Target VL|Flaw Severities|Minimum Score|Scan Requirement|Grace Period|
|-----------|---------|---------------|-------------|----------------|------------|
|Veracode Recommended Very High|VL5|No Medium or above|90|Static \(quarterly\) <br>Manual \(annually\)|0|
|Veracode Recommended High|VL4|No Medium or above|80|Static \(quarterly\)|0|
|Veracode Recommended Medium|VL3|No High or above|70|Static \(quarterly\)|0|
|Veracode Recommended Low|VL2|No Very High or above|60|Any \(semi-annually\)|0|
|Veracode Recommended Very Low|VL1| | |Any \(once\)|0|
|Veracode Recommended Mobile Policy| | | |Static \(quarterly\)|0|
