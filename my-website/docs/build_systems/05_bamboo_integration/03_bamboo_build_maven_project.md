---
"ft:title" : "Build a Maven Project with Bamboo"
"ft:prettyUrl" : "Build_a_Maven_Project_with_Bamboo"
---
You can use the Veracode Bamboo Integration to build and scan a Maven project with Bamboo.

<p font-size="13pt"><b>Before You Begin</b></p>

You meet the [prerequisites](https://docs.veracode.com/r/c_integration_bamboo).

<p font-size="13pt"><b>Steps</b></p>

1. Navigate to the directory `//..//Bamboo-home/xml-data/build-dir/VWD1-SIM-Job1/`.

2. Copy your Maven project into this directory and ensure the Maven build script `pom.xml` is in the `root` directory. 
 
    Bamboo derived the URI when you ran the Bamboo plan you configured for [Java](https://docs.veracode.com/r/Create_a_Plan_in_Bamboo_for_Java_Applications) or [.NET](https://docs.veracode.com/r/Create_a_Plan_in_Bamboo_for_NET_Applications) applications.

3. Run the Bamboo plan again. The `pom.xml` file runs, which builds the project.