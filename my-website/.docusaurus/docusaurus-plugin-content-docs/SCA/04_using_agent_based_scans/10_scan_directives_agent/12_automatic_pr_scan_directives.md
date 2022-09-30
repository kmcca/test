---
"ft:title" : "Automatic Pull Request Scan Directives"
"ft:prettyUrl" : "Automatic_Pull_Request_Scan_Directives"
---

You can use these scan directives to configure when Veracode SCA [automatically generates a pull request](https://docs.veracode.com/r/t_configure_auto_pr).

**`pr_on`**

Determines the risk level of vulnerability in your results that triggers a pull request. The values are:

- `Never`: never generate a pull request.
- `Methods`: generate a pull request when libraries contain calls to vulnerable methods.
- `Low`: generate a pull request when libraries contain calls to vulnerable methods or vulnerabilities with a risk level of low or higher. Default value.
- `Medium`: generate a pull request when libraries contain calls to vulnerable methods call chains or vulnerabilities with a risk level of medium or higher.
- `High`: generate a pull request when libraries contain calls to vulnerable methods or vulnerabilities with a risk level of high.

**`no_breaking_updates`**

Controls whether automatic pull requests include upgrades that the [update advisor](https://docs.veracode.com/r/t_update_advisor) considers potentially build-breaking. If you set this directive to true, the breaking column in the pull request contains only non-breaking updates. The values are:

- `True`: do not include potentially build-breaking upgrades in a pull request.
- `False`: include upgrades in a pull request even if they could break the build. Default value.

**`ignore_closed_prs`**

Controls whether the agent creates pull requests when a closed pull request contains the exact same changes.

By default, the agent does not create pull requests that contain the exact same changes as any existing PR, either open or closed. The values are:

- `True`: generate a pull request if there are no open pull requests with the exact same changes.
- `False`: generate a pull request if there are no pull requests of any status with the exact same changes. Default value.

Example:

```
pr_on: medium
no_breaking_updates: true
ignore_closed_prs: false
```
