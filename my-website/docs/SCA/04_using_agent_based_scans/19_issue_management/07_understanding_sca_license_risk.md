---
"ft:title" : "Understanding SCA License Risk"
"ft:prettyUrl" : "c_integrated_license_agent"
---

Before using third-party, open-source components, Veracode recommends you review the license and associated risk to understand the implications of using the component in your application.

Licenses consist of the software license information associated with each open-source library. Veracode Software Composition Analysis maintains license information by staying up-to-date with [several open-source library repositories](https://docs.veracode.com/r/Libraries). This information can help you avoid issues relating to [copyleft](https://en.wikipedia.org/wiki/Copyleft) licenses or keep track of the licenses in use across a set of libraries.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Review the Veracode <a href="https://docs.veracode.com/r/Veracode_SCA_Legal_Disclaimer">legal disclaimer</a> before acting upon the license information listed in the SCA results for your application.
</p>


The License List table for each workspace and project provides details of all the licenses identified in your agent-based scans, including the library in which Veracode Software Composition Analysis found the license and the license risk rating.

| License Risk Rating | Icon                                     | Risk Details                                                                                                                                                                                                                            |
|---------------------|------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Low                 | ![](../../images/low_risk.png)        | Low-risk licenses are typically permissive licenses that require you to preserve the copyright and license notices, but allow distribution under different terms without disclosing source code.                                        |
| Medium              | ![](../../images/medium_risk.png)     | Medium-risk licenses are typically weak copyleft licenses that require you to preserve the copyright and license notices, and require distributors to make the source code of the component and any modifications under the same terms. |
| High                | ![](../../images/high.png)            | High-risk licenses are typically strong copyleft licenses that require you to preserve the copyright and license notices, and require distributors to make the source code of the component and any modifications under the same terms. |
| Non-OSS             | ![](../../images/unassessed_icon.png) | Non-OSS indicates that this file could be subject to commercial license terms. If so, you should refer to your applicable license agreement with such vendor for additional information.                                                |
| Unrecognized        |                                          | Unrecognized indicates that no license was found for the component. However, this does not indicate that there is no risk associated with the license.                                                                                  |