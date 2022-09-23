---
"ft:title": "Map Veracode Fields to Bugzilla Fields"
"ft:prettyUrl": "Map_Veracode_Fields_to_Bugzilla_Fields"
---
You can customize Bugzilla import business logic with information from your local Bugzilla implementation.

<p font-size="13pt"><b>Overview</b></p>

The `veracode_bugzilla.xslt` file contains business logic to map [custom fields](https://docs.veracode.com/r/request_profile) in the Veracode Platform to Bugzilla fields. The file contains three parameters at the top that you must customize with information from your local Bugzilla implementation: `urlbase`, `maintainer`, and `exporter`. The XSLT file suppresses importing fixed findings, but populates new, open, and reopened findings. If you use the XSLT file on multiple builds of the same application, you can also suppress open findings.

<p font-size="13pt"><b>Steps</b></p>

1.  Open `veracode_bugzilla.xslt` in a text editor or XML editor.

2.  Find the line that begins `<xsl:param name="urlbase"` and change the value in quotation marks to the `urlbase` of your Bugzilla instance. Ensure the value matches the `urlbase` that appears on the **Administration** > **Settings** page in Bugzilla.

3.  Find the line that begins `<xsl:param name="maintainer"` and change the value in quotation marks to the email address of the person responsible for maintaining the Bugzilla account.

4.  Find the line that begins `<xsl:param name="exporter"` and change the value in quotation marks to the email address of a valid Bugzilla user in your local implementation. Ensure the value matches the user that appears on the **Administration** > **Settings** page in Bugzilla.

5.  If you have changed the default values for the Severity and Priority fields, search the XSLT file for `@severity` and update any references to that field with your values. Veracode assigns these values based on the severity of the finding.

6.  To suppress open findings, you can edit the two `<xsl:choose>` sections in the file.