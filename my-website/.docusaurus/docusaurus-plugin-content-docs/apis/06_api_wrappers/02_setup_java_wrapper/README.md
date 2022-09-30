---
"ft:title": "Install the Java API Wrapper from Maven Central"
"ft:prettyUrl": "t_working_with_java_wrapper"
---
You can download the Java API wrapper from [Maven Central](https://search.maven.org/search?q=a:vosp-api-wrappers-java) or obtain it as a container image from [Docker Hub](https://hub.docker.com/u/veracode).

<p font-size="13pt"><b>Before You Begin</b></p>

Before you can use the Java API wrapper, you must meet the software requirements listed on the [Veracode-Authored Integrations page](https://community.veracode.com/s/article/Support-Matrix).

<p font-size="13pt"><b>Overview</b></p>

You can add the Java API wrapper as a dependency in the build scripts of your projects. For example, you can add it to a Gradle or Maven project. You can also [reference the wrapper from your Eclipse project](../07_use_wrappers_library/02_reference_java_wrapper_eclipse.md#).

The Docker container image of the Java API wrapper enables you to use the Veracode XML APIs for performing application security analysis within your build pipelines.

<p font-size="13pt"><b>Steps</b></p>

1. Go to [https://search.maven.org/search?q=a:vosp-api-wrappers-java](https://search.maven.org/search?q=a:vosp-api-wrappers-java)

    The most recent build of the wrapper displays in the Search Results table.

2. Click **dist.zip** in the Download column to download `vosp-api-wrapper-java-{version}-dist.zip`.

    If you want to download an older version of the wrapper, click **all** in the Latest Version column, then click **dist.zip** for the appropriate version.

3. Extract the ZIP file. To access the Javadoc files, open `Help/help-doc.html`.

6. In a command prompt window, enter `java -jar vosp-api-wrapper-java{version}.jar`.

Each artifact is associated with the MD5 and SHA1 checksums. You can use these checksum files to verify the integrity of the associated artifacts. You can access the console help from the Help window in the console window.