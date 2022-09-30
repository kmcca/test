---
"ft:title" : "About ISM Gateway Retention"
"ft:prettyUrl" : "c_ism_gateway_retention"
---

Veracode automatically deletes an Internal Scanning Management gateway and its associated endpoints if it has no scan activity for four months.

When Veracode deletes a gateway, the Veracode Platform displays the name of the deleted gateway on the Internal Scanning Management page.

To prevent Veracode from deleting a gateway, [schedule a recurring Dynamic Analysis scan](https://docs.veracode.com/r/t_was_recurring) that uses the gateway for internal scanning.

To scan internal applications after Veracode deletes your gateway, you must [create a new gateway and endpoint](https://docs.veracode.com/r/t_configure_gateway).

