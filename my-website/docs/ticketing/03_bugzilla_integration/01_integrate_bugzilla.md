---
"ft:title": "Integrate Veracode for Bugzilla"
"ft:prettyUrl": "Integrate_Veracode_with_Bugzilla"
---
You can download a sample script to integrate Veracode with Bugzilla.

<p font-size="13pt"><b>Steps</b></p>

1.  Download this [sample integration script](https://tools.veracode.com/integrations/Bugzilla/bin/veracode_bugzilla.zip). This script automatically publishes data from the Veracode [Results API](https://docs.veracode.com/r/c_results_main) to [Bugzilla](https://www.bugzilla.org/) using the built-in XML import capability in Bugzilla.

2.  If you have customized any fields, you can edit the provided [`veracode_bugzilla.xsl`](https://docs.veracode.com/r/Map_Veracode_Fields_to_Bugzilla_Fields) to update the logic for mapping fields between Veracode and Bugzilla. The integration package includes the XSL file.