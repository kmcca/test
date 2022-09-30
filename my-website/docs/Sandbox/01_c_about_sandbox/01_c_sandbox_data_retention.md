---
"ft:title" : "About Sandbox Data Retention"
"ft:prettyUrl" : "About_Sandbox_Data_Retention"
---

Veracode retires data in sandboxes based on the data retention setting that you apply at the account level.

You can choose one of these data retention modes for sandboxes:

**Time-to-Live Mode**: in this mode, Veracode automatically sets an expiration date for development sandboxes when you create them. By default, Veracode sets the expiration date to 90 days after the sandbox creation date. After the sandbox expires, you cannot initiate any subsequent scans in the sandbox. However, you can still approve mitigations or promote scans from the sandbox for up to seven calendar days after the sandbox expires. After the seven-day period elapses, Veracode deletes the sandbox and its scans.

**Rolling-Histories Mode**: this mode preserves the last 15 scans you have prepared, on a rolling basis. The first scan in the sequence is the first scan to retire from your results after 15 scans have run. The sandbox itself never expires.

The rolling-histories mode is the default mode that Veracode sets at the account level for all new accounts since October 2020. If you want to switch modes, contact Veracode Technical Support.
