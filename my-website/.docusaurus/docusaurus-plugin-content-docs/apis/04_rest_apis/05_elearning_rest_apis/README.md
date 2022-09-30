---
"ft:title": "eLearning REST APIs"
"ft:prettyUrl": "c_about_eLearning_API"
---
The Veracode eLearning APIs enable you to view the courses, users, and user progress associated with the Veracode eLearning accounts in your organization.

<p><span style="font-size: medium;">Permissions and Authentication</span></p>

To use any eLearning APIs, you must have a [user account](https://docs.veracode.com/r/c_about_veracode_accounts) with one of these roles:

- [Executive role](https://docs.veracode.com/r/c_role_permissions) to view information about courses and learners for all learners in your organization.
- [eLearning Manager role](https://docs.veracode.com/r/elearning_manager) to view information only for the learners that you manage.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Because of the interactive nature of eLearning, Veracode does not allow API service accounts to use eLearning APIs.</p>

This API uses API ID/key credentials and HMAC authentication to provide improved security. Before you can send requests, you must complete these configurations:

- [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3)
- [HMAC authentication](https://docs.veracode.com/r/c_enabling_hmac)

Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).