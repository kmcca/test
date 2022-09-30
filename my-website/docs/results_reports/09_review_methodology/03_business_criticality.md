---
"ft:title" : "Business Criticality"
"ft:prettyUrl" : "review_assurancelevels"
---
The foundation of the Veracode rating system is the concept that more critical applications require higher security quality scores to be acceptable risks. Less business critical applications can tolerate lower security quality. The business criticality is dictated by the typical deployed environment and the value of data used by the application. Factors that determine business criticality are: reputation damage, financial loss, operational risk, sensitive information disclosure, personal safety, and legal violations.

|Business Criticality|Description|
|--------------------|-----------|
|Very High|Mission critical for business/safety of life and limb on the line|
|High|Exploitation causes serious brand damage and financial loss with long-term business impact|
|Medium|Applications connected to the internet that process financial or other private information|
|Low|Typically internal applications with non-critical business impact|
|Very Low|Applications with no material business impact|

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> US. Govt. OMB Memorandum M-04-04; NIST FIPS Pub. 199
</p>

<p><span style="font-size: medium;">Business Criticality Definitions</span></p>

**Very High**

This is typically an application where the safety of life or limb is dependent on the system; it is mission critical that the application maintain 100% availability for the long-term viability of the project or business. Examples are control software for industrial, transportation or medical equipment, or critical business systems such as financial trading systems.

**High**

This is typically an important multi-user business application reachable from the internet and is critical that the application maintain high availability to accomplish its mission. Exploitation of high-criticality applications cause serious brand damage and business/financial loss and could lead to long term business impact.

**Medium**

This is typically a multi-user application connected to the internet or any system that processes financial or other private information. Exploitation of medium-criticality applications typically results in material business impact resulting in some financial loss, brand damage or business liability. An example is a financial services company's internal 401K management system.

**Low**

This is typically an internal only application that requires low levels of application security such as authentication to protect access to non-critical business information and prevent IT disruptions. Exploitation of low-criticality applications may lead to minor levels of inconvenience, distress, or IT disruption. An example internal system is a conference room reservation or business card order system.

**Very Low**

Applications that have no material business impact should its confidentiality, data integrity, and availability be affected. Code security analysis is not required for this business criticality level, and you can direct security spending to other higher-criticality applications.

  

<p font-size="13pt"><b>Related Concepts</b></p>

[Understanding Veracode Levels](https://docs.veracode.com/r/policy_veracodelevel)

