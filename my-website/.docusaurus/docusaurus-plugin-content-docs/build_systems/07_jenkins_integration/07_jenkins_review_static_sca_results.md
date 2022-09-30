---
"ft:title" : "Review Static Analysis and SCA Results in Jenkins"
"ft:prettyUrl" : "c_jenkins_results"
---
You can choose to display the results of a Veracode Static Analysis and SCA scan in Jenkins for freestyle or pipeline jobs.

<p font-size="13pt"><b>Before You Begin</b></p>

- You meet the [prerequisites](https://docs.veracode.com/r/c_using_jenkins).
- You have [installed the Jenkins plugin](https://docs.veracode.com/r/t_install_jenkins).
- You have [configured a Jenkins job](https://docs.veracode.com/r/t_configure_jenkins) with the **Wait for scan to complete** checkbox selected and run a Veracode scan. If you configure the Jenkins job to scan with Veracode and wait for the results, the results display on the build summary page and indicate the policy compliance status of the scan.
- In controller/agent Jenkins environments, the controller returns the Veracode scan results, so you must ensure your controller can access Veracode. If there is no access to Veracode, the Jenkins build status is not affected.
- For [Software Composition Analysis (SCA)](https://docs.veracode.com/r/c_about_SCA) results, you have configured the organization associated with the Veracode Platform account to provide SCA results to Jenkins.

<p font-size="13pt"><b>Overview</b></p>

If scans do not complete due to errors, the Jenkins build summary states that results are unavailable. The console output lists more information, including the cause of the error.

<p font-size="13pt"><b>Steps</b></p>

1. Log in to your Jenkins freestyle or pipeline project.
2. Click the **Veracode** link at the left or in the main summary to see the results:

      Static Analysis results:
     
      - Overall policy compliance status
      - Policy name
      - Policy rules: 
         - Veracode Level
         - Static Scan Requirement
         - Static Score
      - Link to the Executive Summary page in the Veracode Platform
      - Flaw count table: derived from the Veracode Detailed Report
      - Flaw trend chart: only against successful Jenkins builds

      SCA results:

      -  Number of blocklisted SCA components
      -  Highest found Common Vulnerability Scoring System (CVSS) score
      -  SCA vulnerability count table
      -  List of components added since the previous build