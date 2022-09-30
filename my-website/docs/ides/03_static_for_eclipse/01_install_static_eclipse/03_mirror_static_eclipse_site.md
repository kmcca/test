---
"ft:title" : "Mirror the Eclipse Plugin Update Site"
"ft:prettyUrl" : "c_Eclipse_mirror"
---
You can create a local instance of the Veracode Eclipse update site that allows you to use and update Veracode Static for Eclipse without internet access.

<p font-size="13pt"><b>Overview</b></p>

To get the latest version of Veracode Static for Eclipse, you can mirror the Veracode Eclipse update site, which provides the files required for your local Eclipse installation.

<p font-size="13pt"><b>Steps</b></p>

1.  Create a local directory to store the mirrored site files.

2.  The update site contains metadata, such as the XML information needed to describe the content and dependencies of the plugin. To mirror the metadata, run this command from the command line:

    ```
    eclipse -nosplash –verbose 
                -application org.eclipse.equinox.p2.metadata.repository.mirrorApplication
                -source https://tools.veracode.com/integrations/Eclipse/update
                -destination [LocalDirectory]
    ```

    Completing this command adds the `content.jar` file to your local directory.

3.  The artifact contains the plugin and the files it needs to run. To mirror the artifact, run this command from the command line:

    ```
    eclipse -nosplash –verbose 
              -application org.eclipse.equinox.p2.artifact.repository.mirrorApplication
              -source https://tools.veracode.com/integrations/Eclipse/update
              -destination [LocalDirectory]
    ```

    Completing this command adds the `artifacts.jar` file and the features and plugins folders to your local directory.

4.  Package all the files into a ZIP file after adding them to the directory.