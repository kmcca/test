---
"ft:title" : "Reviewing Veracode SCA License Data"
"ft:prettyUrl" : "c_sca_license_info"
---

Before using third-party, open-source components, Veracode recommends you review the license and associated risk to understand the implications of using the component in your application.

Veracode Software Composition Analysis discovers license data during the scan of third-party components in your application and provides information that includes the license name and data so you can investigate the license obligations further. Veracode provides risk ratings to a selection of third-party component licenses.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Review the Veracode <a href="https://docs.veracode.com/r/Veracode_SCA_Legal_Disclaimer">legal disclaimer</a> before acting upon the license information listed in the SCA results for your application.
</p>

Click the link in the License column of a third-party component to go to the [Open Source Initiative](https://opensource.org/) website for details about the license. You can also filter your third-party component data by risk rating.

Veracode displays all licenses found for a component. If there are more than three licenses of a component, you can click the **Show More** link to view the additional licenses. In addition to the results that Veracode provides, you should also perform your own investigation, because the contents in a file could be subject to different or additional licenses.

You can add a [license rule](https://docs.veracode.com/r/t_sca_policy) to your policy to automatically prevent an application from passing policy when a scan detects any license with the specified risk rating.


| License Risk Rating | Icon                                  | Risk Details                                                                                                                                                                                                                            |
|---------------------|---------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Low                 | ![](../images/low_risk.png)        | Low-risk licenses are typically permissive licenses that require you to preserve the copyright and license notices, but allow distribution under different terms without disclosing source code.                                        |
| Medium              | ![](../images/medium_risk.png)     | Medium-risk licenses are typically weak copyleft licenses that require you to preserve the copyright and license notices, and require distributors to make the source code of the component and any modifications under the same terms. |
| High                | ![](../images/high.png)            | High-risk licenses are typically strong copyleft licenses that require you to preserve the copyright and license notices, and require distributors to make the source code of the component and any modifications under the same terms. |
| Non-OSS             | ![](../images/unassessed_icon.png) | Non-OSS indicates that this file could be subject to commercial license terms. If so, you should refer to your applicable license agreement with such vendor for additional information.                                                |
| Unrecognized        |                                       | Unrecognized indicates that no license was found for the component. However, this does not indicate that there is no risk associated with the license.                                                                                  |


