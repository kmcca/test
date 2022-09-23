---
"ft:title" : "Unmatched Libraries"
"ft:prettyUrl" : "Unmatched_Libraries"
---

You can filter your library list to view the libraries found in your project that the Veracode Software Composition Analysis agent-based scanning scan engine does not recognize.

When scanning a project, Veracode SCA identifies each library that it recognizes. This identification allows the agent-based scan to determine and display the licenses, vulnerabilities, and custom rules associated with the library. Veracode SCA may not recognize libraries if they are internal, modified, or not available from the sources agent-based scanning tracks.

To view your unmatched libraries from the Library List of your workspace or project, click the **Library List** dropdown menu and select **Unmatched Libraries**.

Unmatched libraries do not include licenses, vulnerabilities, or custom rules.

Veracode SCA pulls data for its matched libraries from these sources:

-   Java, Gradle, Ant, and Scala: [Maven Central](http://search.maven.org/)
-   Ruby: [RubyGems](https://rubygems.org/)
-   JavaScript: [Bower](https://bower.io/search/) and [npm](https://www.npmjs.com/)
-   Python: [PyPI](https://pypi.org/)
-   Go: [GitHub](https://github.com/)
-   Objective-C and Swift: [CocoaPods](https://cocoapods.org/)
-   PHP: [Packagist](https://packagist.org/)
-   .NET: [NuGet](https://www.nuget.org/)

