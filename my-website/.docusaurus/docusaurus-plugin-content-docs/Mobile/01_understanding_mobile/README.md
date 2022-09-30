---
"author": ["Scott Jordan"]
"ft:originID": "understanding_mobile"
"ft:lang": "en-US"
"ft:title": "Understanding Mobile Behavioral Analysis"
"ft:prettyUrl": "c_understanding_mobile"
---

Veracode Mobile Behavioral Analysis provides security related findings for mobile applications. Veracode examines the permissions that the submitted mobile application requests, which can provide valuable insights into the behavior of the application.

A common security risk with mobile applications is called over-permissioning. Over-permissioning occurs when mobile applications request permissions that are unnecessary for the application to function. These permissions might be requested accidentally by the developers, or requested by a third-party component included with the application.

A consolidated list of all of the permissions that the application is requesting can help both developers and end users understand what the application is capable of doing, and the risk the permission may present.

Developers and security leads should review the list of permissions that the application requests, and validate that these permissions meet their expectations.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> Mobile Behavioral Analysis is available when analyzing native Android applications built as APK files, and iOS applications packaged as BCA files. Mobile Behavioral Analysis is not available for mobile applications built using Titanium, PhoneGap, Cordova, or Xamarin.</p>

When the scan is complete, a list of permissions requested by the application will be available by viewing the <b>Mobile Behavioral Analysis</b> link in the Veracode Platform.

You can review the permissions listed in the table and determine if the permission settings are appropriate for your application. Mobile Behavioral Analysis findings do not impact your policy score.

You can also click **Download** to download the findings in XML or CSV format.
