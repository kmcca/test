---
"author": ["Kevin McCarthy"]
"ft:lang": "en-US"
"ft:title" : "Using Scan Directives for Agent-Based Scanning"
"ft:prettyUrl" : "c_sc_scan_directives"
"media_dir": "images/"
---

Veracode Software Composition Analysis (SCA) agents support scans that include per-scan directives, known as scan directives. To specify these scan directives on a per-project basis, include a `srcclr.yml` file at the root of the scan.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> When you include a comma-separated list in a directive, enclose the string in quotation marks.
</p>

You can also use each scan directive as an environment variable in your CI configuration by adding `SRCCLR_` before the directive name and changing the directive name to be all uppercase. For example:

```
export SRCCLR_SCAN_COLLECTORS=pip
```
