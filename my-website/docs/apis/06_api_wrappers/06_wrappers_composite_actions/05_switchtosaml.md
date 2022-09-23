---
"ft:title": "switchtosaml"
"ft:prettyUrl": "r_switchtosaml"
---
The `switchtosaml` composite action calls `getuserlist.do`. It searches users on the list whose `is_saml_user` parameter is not set to true and whose `login_account_type` parameter is not `api`. The action then changes the `is_saml_user` parameter to `true` for those users. The parameter `customid` or `username` is required.
