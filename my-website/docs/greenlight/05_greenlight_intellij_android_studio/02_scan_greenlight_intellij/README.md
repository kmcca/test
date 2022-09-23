---
"ft:title" : "Scan with Veracode Greenlight for IntelliJ"
"ft:prettyUrl" : "Scan_with_Veracode_Greenlight_for_IntelliJ"
---
You can scan your Java or JavaScript code, including a package file containing code, directly within your IDE.

<p font-size="13pt"><b>Before You Begin</b></p>

- You meet the [Greenlight prerequisites](https://docs.veracode.com/r/Meet_Veracode_Greenlight_Prerequisites).
- Greenlight requires compilable Java files that successfully build into Java class files. To ensure your Greenlight scan succeeds, verify that you have a Java class built for the Java file you want to scan. Greenlight can scan non-minified JavaScript files. Non-minified code has not had unnecessary characters such as white space, new lines, comments, and block delimiters removed.
- You can only use Veracode Greenlight for IntelliJ to scan binaries. Third-party build tools, such as Gradle or Maven, add non-binary files that can cause issues during scanning. If you use a third-party build tool, ensure that:
    -   The project builds successfully outside IntelliJ or Android Studio. If you have problems such as classpath or buildpath errors, for example, the IDE cannot build the files needed to submit a scan to Veracode Greenlight.
    -   You have imported your files into IntelliJ or Android Studio using the specific plugin for your third-party build tool.
    -   Your project includes a build.gradle file, for Gradle, or a .pom file, for Maven. When opening but not importing projects, the IDE generates the project configurations.
    -   For Gradle, consider [synchronizing your project with your IDE](https://docs.veracode.com/r/c_intellij_thirdparty) before scanning. If you notice errors during scanning, synchronizing your projects might resolve these errors.
- Veracode recommends that you select the option in your IDE for building automatically and that you resolve any blocking build errors.

<p font-size="13pt"><b>Steps</b></p>

1.  In your IDE, open the project and select the Java or JavaScript file you want to scan.

2.  Select **Tools** > **Veracode Greenlight** > **Scan with Greenlight**. Alternatively, you can click the green V icon ![](../../images/v-icon.png) in the menu bar or use the shortkey, Ctrl+Shift+G.

    You can also right-click a package file and select **Veracode Greenlight** \> **Scan with Greenlight** to scan all files contained in the package.

3.  After the scan is complete, review the security findings on the **Veracode Greenlight** tab.

    The Veracode Greenlight results are summarized in the **Findings** subtab. In the **Best Practices** subtab, Veracode indicates the CWEs protected against in the code. The scan level indicates whether Veracode scanned at the package level or file level.

4.  Double-click a finding to locate the issue in the specific line of code in the scanned file.

5.  Alternatively, right-click a finding to see the actions you can choose: open the finding in the scanned file, show the finding details in a separate Details pane, or [filter by severity or CWE](https://docs.veracode.com/r/t_filter_greenlight).