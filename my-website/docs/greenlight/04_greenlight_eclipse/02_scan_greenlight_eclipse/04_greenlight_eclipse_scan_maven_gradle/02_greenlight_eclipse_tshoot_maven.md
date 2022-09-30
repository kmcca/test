---
"ft:title" : "Troubleshooting Eclipse Project Scans Built with Maven"
"ft:prettyUrl" : "Troubleshooting_Eclipse_Project_Scans_Built_with_Maven"
---
If you compiled your files using Maven and then imported these files, ensure the `.project` file contains the Java and Maven natures. 

You can manually add them to the `.project` file with this command:

```xml
<buildSpec>
    <buildCommand>
        <name>org.eclipse.jdt.core.javabuilder</name>
        <arguments></arguments>
    </buildCommand>
    <buildCommand>
        <name>org.eclipse.m2e.core.maven2Builder</name>
        <arguments></arguments>
    </buildCommand>
</buildSpec>
<natures>
    <nature>org.eclipse.jdt.core.javanature</nature>
    <nature>org.eclipse.m2e.core.maven2Nature</nature>
</natures>
```