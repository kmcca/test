---
"ft:title": "Reference the Veracode Java API Wrapper from Eclipse"
"ft:prettyUrl": "t_Eclipse_library"
---
You can reference the [Java API wrapper](https://docs.veracode.com/r/c_about_wrappers) as a library from Eclipse. Adding the wrapper as a library enables you to call API functions without having to set up web requests and look up the required URL or query string parameters.

<p font-size="13pt"><b>Steps</b></p>

1.  In Eclipse, select **Window** \> **Show View** \> **Package Explorer**.

2.  Right-click your project folder and select **Build Path** \> **Configure Build Path**.

3.  Select the **Libraries** tab.

4.  Select **Add External JARs...**.

5.  Locate and select the `vosp-api-wrapper-java{version}.jar` file.

6.  Click **Open**.

7.  Import the `com.veracode.apiwrapper.wrappers` package.

8.  Optionally, complete the following steps to display the API wrapper documentation in the Eclipse interface.

    a.  In the Configure Build Path window, select the **Libraries** tab.

    b.  Expand the **vosp-api-wrapper-java{version}.jar** node and select **Javadoc Location: (None\)**.

    c.  Click **Edit...**.

    d.  Browse to the folder containing the documentation and click **OK**.