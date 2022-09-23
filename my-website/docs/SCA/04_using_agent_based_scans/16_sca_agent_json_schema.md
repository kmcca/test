---
"ft:title" : "Veracode SCA Agent JSON Schema"
"ft:prettyUrl" : "c_sc_agent_json"
---

## Version 0.9.0 (beta)

This document describes the JSON output and related commands for the Veracode Software Composition Analysis agent-based scanning CLI agent.

## Single Library Lookup

Look up the release and vulnerability information found in the Veracode Vulnerability Database for a single library with the agent:

```
srcclr lookup --type=maven --coord1=org.springframework --coord2=spring-core \
                --version=4.1.0.RELEASE --json

```

Returns the following JSON response:

```
{
  "metadata" : {
    "requestDate" : "2016-07-13T04:58:09.985+0000"
  },
  "records" : [ {
    "metadata" : {
      "recordType" : "LOOKUP"
    },
    "graphs" : [ ],
    "libraries" : [ {
      "name" : "Spring Core",
      "description" : "Spring Core",
      "author" : null,
      "authorUrl" : "https://github.com/spring-projects/spring-framework",
      "language" : "JAVA",
      "coordinateType" : null,
      "coordinate1" : "org.springframework",
      "coordinate2" : "spring-core",
      "bugTrackerUrl" : "https://jira.springsource.org/browse/SPR",
      "codeRepoType" : null,
      "codeRepoUrl" : "https://github.com/spring-projects/spring-framework",
      "latestRelease" : "4.3.1.RELEASE",
      "latestReleaseDate" : null,
      "versions" : [ {
        "version" : "4.1.0.RELEASE",
        "releaseDate" : "2014-09-04T12:02:08.000+0000",
        "sha1" : "cd3ba08b0fe1b2cb9dc50e9762c4ba4fae5d8401",
        "sha2" : "f69f92f70093f1501ea54241c477ad8bdff89d51e198e676dda5c262cc194cc3",
        "bytecodeHash" : "3645c06be512e374540c1ce25b13c613b4d7afd2c6ab40a0bbb46f27ac62e146",
        "platform" : "",
        "licenses" : [ {
          "name" : "APACHE20",
          "license" : "Apache License 2.0 (Apache-2.0)",
          "fromParentPom" : false
        } ],
        "_links" : {
          "html" : "https://www.sourceclear.com/registry/libraries/562?version=4.1.0.RELEASE"
        }
      } ],
      "_links" : {
        "html" : "https://www.sourceclear.com/registry/libraries/562"
      }
    } ],
    "vulnerabilities" : [ {
      "disclosureDate" : "2015-04-29T16:00:00.000+0000",
      "cve" : "null-null",
      "title" : "Denial of Service (DoS) Infinite Loop",
      "overview" : "There is an infinite loop in org.springframework.util.PatternMatchUtil by using a command such as PatternMatchUtils.simpleMatch(\"**a\", \"*\").",
      "language" : "JAVA",
      "vulnerabilityTypes" : [ "Denial of Service" ],
      "cvssScore" : 2.3,
      "libraries" : [ {
        "details" : [ {
          "updateToVersion" : "4.1.7.RELEASE",
          "versionRange" : "4.1.0.RELEASE",
          "fixText" : "",
          "patch" : "https://github.com/spring-projects/url_snipped_75c534e7c0424d1f4d9f60"
        } ],
        "_links" : {
          "ref" : "/records/0/libraries/0/versions/0"
        }
      } ],
      "_links" : {
        "html" : "https://www.sourceclear.com/registry/vulnerabilities/1841"
      },
      "hasExploits" : false
    } ]
  } ]
}

```

## Scan Exports

Export the results of a single scan:

```
srcclr scan --json --url https://github.com/srcclr/test-java-maven
```

The `scan` command returns this JSON response:

```
{
  "metadata" : {
    "requestDate" : "2016-07-19T16:30:59.148+0000"
  },
  "records" : [ {
    "metadata" : {
      "recordType" : "SCAN",
      "report": "https://yourorg.sourceclear.io/teams/Abcdef1/scans/1234567?login=saml"
    },
    "graphs" : [ {
      "coords" : {
        "coordinateType" : "MAVEN",
        "coordinate1" : "srcclr",
        "coordinate2" : "srcclr-scan",
        "version" : "1.0-SNAPSHOT",
        "scope" : null,
        "platform" : null
      },
      "directs" : [ {
        "coords" : {
          "coordinateType" : "MAVEN",
          "coordinate1" : "org.richfaces",
          "coordinate2" : "richfaces-core",
          "version" : "4.5.3.Final",
          "scope" : "compile",
          "platform" : null
        },
        "directs" : [ {
          "coords" : {
            "coordinateType" : "MAVEN",
            "coordinate1" : "net.sourceforge.cssparser",
            "coordinate2" : "cssparser",
            "version" : "0.9.14",
            "scope" : "compile",
            "platform" : null
          },
          "directs" : [ {
            "coords" : {
              "coordinateType" : "MAVEN",
              "coordinate1" : "org.w3c.css",
              "coordinate2" : "sac",
              "version" : "1.3",
              "scope" : "compile",
              "platform" : null
            },
            "directs" : [ ],
            "filename" : "pom.xml",
            "lineNumber" : null,
            "moduleName" : null,
            "sha1" : null,
            "sha2" : null,
            "bytecodeHash" : null
          } ],
          "filename" : "pom.xml",
          "lineNumber" : null,
          "moduleName" : null,
          "sha1" : null,
          "sha2" : null,
          "bytecodeHash" : null
        }, {
        "coords" : {
          "coordinateType" : "MAVEN",
          "coordinate1" : "javax.faces",
          "coordinate2" : "jsf-api",
          "version" : "2.1",
          "scope" : "provided",
          "platform" : null
        },
        "directs" : [ ],
        "filename" : "pom.xml",
        "lineNumber" : null,
        "moduleName" : null,
        "sha1" : null,
        "sha2" : null,
        "bytecodeHash" : null
      }, {
        "coords" : {
          "coordinateType" : "MAVEN",
          "coordinate1" : "org.mindrot",
          "coordinate2" : "jbcrypt",
          "version" : "0.3m",
          "scope" : "compile",
          "platform" : null
        },
        "directs" : [ ],
        "filename" : "pom.xml",
        "lineNumber" : null,
        "moduleName" : null,
        "sha1" : null,
        "sha2" : null,
        "bytecodeHash" : null
      }, {
          "coords" : {
            "coordinateType" : "MAVEN",
            "coordinate1" : "javax.validation",
            "coordinate2" : "validation-api",
            "version" : "1.1.0.Final",
            "scope" : "compile",
            "platform" : null
          },
          "directs" : [ ],
          "filename" : "pom.xml",
          "lineNumber" : null,
          "moduleName" : null,
          "sha1" : null,
          "sha2" : null,
          "bytecodeHash" : null
        }, {
          "coords" : {
            "coordinateType" : "MAVEN",
            "coordinate1" : "com.fasterxml",
            "coordinate2" : "classmate",
            "version" : "1.0.0",
            "scope" : "compile",
            "platform" : null
          },
          "directs" : [ ],
          "filename" : "pom.xml",
          "lineNumber" : null,
          "moduleName" : null,
          "sha1" : null,
          "sha2" : null,
          "bytecodeHash" : null
        } ],
        "filename" : "pom.xml",
        "lineNumber" : null,
        "moduleName" : null,
        "sha1" : null,
        "sha2" : null,
        "bytecodeHash" : null
      },  {
        "coords" : {
          "coordinateType" : "MAVEN",
          "coordinate1" : "org.apache.httpcomponents",
          "coordinate2" : "httpclient",
          "version" : "4.3.2",
          "scope" : "compile",
          "platform" : null
        },
        "directs" : [ {
          "coords" : {
            "coordinateType" : "MAVEN",
            "coordinate1" : "commons-logging",
            "coordinate2" : "commons-logging",
            "version" : "1.1.3",
            "scope" : "compile",
            "platform" : null
          },
          "directs" : [ ],
          "filename" : "pom.xml",
          "lineNumber" : null,
          "moduleName" : null,
          "sha1" : null,
          "sha2" : null,
          "bytecodeHash" : null
        }, {
          "coords" : {
            "coordinateType" : "MAVEN",
            "coordinate1" : "org.apache.httpcomponents",
            "coordinate2" : "httpcore",
            "version" : "4.3.1",
            "scope" : "compile",
            "platform" : null
          },
          "directs" : [ ],
          "filename" : "pom.xml",
          "lineNumber" : null,
          "moduleName" : null,
          "sha1" : null,
          "sha2" : null,
          "bytecodeHash" : null
        }, {
          "coords" : {
            "coordinateType" : "MAVEN",
            "coordinate1" : "commons-codec",
            "coordinate2" : "commons-codec",
            "version" : "1.6",
            "scope" : "compile",
            "platform" : null
          },
          "directs" : [ ],
          "filename" : "pom.xml",
          "lineNumber" : null,
          "moduleName" : null,
          "sha1" : null,
          "sha2" : null,
          "bytecodeHash" : null
        } ],
        "filename" : "pom.xml",
        "lineNumber" : null,
        "moduleName" : null,
        "sha1" : null,
        "sha2" : null,
        "bytecodeHash" : null
      }, {
        "coords" : {
          "coordinateType" : "MAVEN",
          "coordinate1" : "org.springframework",
          "coordinate2" : "spring-web",
          "version" : "3.1.1.RELEASE",
          "scope" : "compile",
          "platform" : null
        },
        "directs" : [ {
          "coords" : {
            "coordinateType" : "MAVEN",
            "coordinate1" : "org.springframework",
            "coordinate2" : "spring-context",
            "version" : "3.1.1.RELEASE",
            "scope" : "compile",
            "platform" : null
          },
          "directs" : [ {
            "coords" : {
              "coordinateType" : "MAVEN",
              "coordinate1" : "org.springframework",
              "coordinate2" : "spring-expression",
              "version" : "3.1.1.RELEASE",
              "scope" : "compile",
              "platform" : null
            },
            "directs" : [ ],
            "filename" : "pom.xml",
            "lineNumber" : null,
            "moduleName" : null,
            "sha1" : null,
            "sha2" : null,
            "bytecodeHash" : null
          }, {
            "coords" : {
              "coordinateType" : "MAVEN",
              "coordinate1" : "org.springframework",
              "coordinate2" : "spring-aop",
              "version" : "3.1.1.RELEASE",
              "scope" : "compile",
              "platform" : null
            },
            "directs" : [ ],
            "filename" : "pom.xml",
            "lineNumber" : null,
            "moduleName" : null,
            "sha1" : null,
            "sha2" : null,
            "bytecodeHash" : null
          }, {
            "coords" : {
              "coordinateType" : "MAVEN",
              "coordinate1" : "org.springframework",
              "coordinate2" : "spring-asm",
              "version" : "3.1.1.RELEASE",
              "scope" : "compile",
              "platform" : null
            },
            "directs" : [ ],
            "filename" : "pom.xml",
            "lineNumber" : null,
            "moduleName" : null,
            "sha1" : null,
            "sha2" : null,
            "bytecodeHash" : null
          } ],
          "filename" : "pom.xml",
          "lineNumber" : null,
          "moduleName" : null,
          "sha1" : null,
          "sha2" : null,
          "bytecodeHash" : null
        }, {
          "coords" : {
            "coordinateType" : "MAVEN",
            "coordinate1" : "aopalliance",
            "coordinate2" : "aopalliance",
            "version" : "1.0",
            "scope" : "compile",
            "platform" : null
          },
          "directs" : [ ],
          "filename" : "pom.xml",
          "lineNumber" : null,
          "moduleName" : null,
          "sha1" : null,
          "sha2" : null,
          "bytecodeHash" : null
        }, {
          "coords" : {
            "coordinateType" : "MAVEN",
            "coordinate1" : "org.springframework",
            "coordinate2" : "spring-core",
            "version" : "3.1.1.RELEASE",
            "scope" : "compile",
            "platform" : null
          },
          "directs" : [ ],
          "filename" : "pom.xml",
          "lineNumber" : null,
          "moduleName" : null,
          "sha1" : null,
          "sha2" : null,
          "bytecodeHash" : null
        }, {
          "coords" : {
            "coordinateType" : "MAVEN",
            "coordinate1" : "org.springframework",
            "coordinate2" : "spring-beans",
            "version" : "3.1.1.RELEASE",
            "scope" : "compile",
            "platform" : null
          },
          "directs" : [ ],
          "filename" : "pom.xml",
          "lineNumber" : null,
          "moduleName" : null,
          "sha1" : null,
          "sha2" : null,
          "bytecodeHash" : null
        } ],
        "filename" : "pom.xml",
        "lineNumber" : null,
        "moduleName" : null,
        "sha1" : null,
        "sha2" : null,
        "bytecodeHash" : null
      }, {
        "coords" : {
          "coordinateType" : "MAVEN",
          "coordinate1" : "org.apache.commons",
          "coordinate2" : "commons-compress",
          "version" : "1.0",
          "scope" : "compile",
          "platform" : null
        },
        "directs" : [ ],
        "filename" : "pom.xml",
        "lineNumber" : null,
        "moduleName" : null,
        "sha1" : null,
        "sha2" : null,
        "bytecodeHash" : null
      } ],
      "filename" : "pom.xml",
      "lineNumber" : null,
      "moduleName" : null,
      "sha1" : null,
      "sha2" : null,
      "bytecodeHash" : null
    } ],
    "libraries" : [ {
      "name" : "AOP alliance",
      "description" : "AOP Alliance",
      "author" : null,
      "authorUrl" : "http://aopalliance.sourceforge.net",
      "language" : "JAVA",
      "coordinateType" : null,
      "coordinate1" : "aopalliance",
      "coordinate2" : "aopalliance",
      "bugTrackerUrl" : null,
      "codeRepoType" : null,
      "codeRepoUrl" : null,
      "latestRelease" : "1.0",
      "latestReleaseDate" : null,
      "versions" : [ {
        "version" : "1.0",
        "releaseDate" : "2007-02-26T22:43:40.000+0000",
        "sha1" : "0235ba8b489512805ac13a8f9ea77a1ca5ebe3e8",
        "sha2" : "0addec670fedcd3f113c5c8091d783280d23f75e3acb841b61a9cdb079376a08",
        "bytecodeHash" : "1c79fd0f7ad61af0d322a1a94492fe8a93d5a3649e775931af0df60d2dd4e652",
        "platform" : "",
        "licenses" : [ {
          "name" : "PDC",
          "license" : "Public Domain Per Creative Commons",
          "fromParentPom" : false
        } ],
        "_links" : {
          "html" : "https://www.sourceclear.com/registry/libraries/436?version=1.0"
        }
      } ],
      "_links" : {
        "html" : "https://www.sourceclear.com/registry/libraries/436"
      }
    }, {
      "name" : "Apache Commons Codec",
      "description" : "The Apache Commons Codec package contains simple encoder and decoders for various formats such as Base64 and Hexadecimal. In addition to these widely used encoders and decoders, the codec package also",
      "author" : null,
      "authorUrl" : "http://commons.apache.org/proper/commons-codec/",
      "language" : "JAVA",
      "coordinateType" : null,
      "coordinate1" : "commons-codec",
      "coordinate2" : "commons-codec",
      "bugTrackerUrl" : "http://issues.apache.org/jira/browse/CODEC",
      "codeRepoType" : null,
      "codeRepoUrl" : "http://svn.apache.org/viewvc/commons/proper/codec/trunk",
      "latestRelease" : "1.10",
      "latestReleaseDate" : null,
      "versions" : [ {
        "version" : "1.6",
        "releaseDate" : "2011-12-03T02:38:26.000+0000",
        "sha1" : "b7f0fc8f61ecadeb3695f0b9464755eee44374d4",
        "sha2" : "54b34e941b8e1414bd3e40d736efd3481772dc26db3296f6aa45cec9f6203d86",
        "bytecodeHash" : "0f1910e8a7c5cfc786d2401529658dfba2479d5c7306759f59bc15e87d3c6f57",
        "platform" : "",
        "licenses" : [ {
          "name" : "APACHE20",
          "license" : "Apache License 2.0 (Apache-2.0)",
          "fromParentPom" : true
        } ],
        "_links" : {
          "html" : "https://www.sourceclear.com/registry/libraries/147?version=1.6"
        }
      } ],
      "_links" : {
        "html" : "https://www.sourceclear.com/registry/libraries/147"
      }
    }, {
      "name" : "Apache Commons Compress",
      "description" : "Apache Commons Compress software defines an API for working with compression and archive formats. These include: bzip2, gzip, pack200, lzma, xz, Snappy, traditional Unix Compress, DEFLATE and ar, cpio",
      "author" : null,
      "authorUrl" : "http://commons.apache.org/proper/commons-compress/",
      "language" : "JAVA",
      "coordinateType" : null,
      "coordinate1" : "org.apache.commons",
      "coordinate2" : "commons-compress",
      "bugTrackerUrl" : "http://issues.apache.org/jira/browse/COMPRESS",
      "codeRepoType" : null,
      "codeRepoUrl" : "https://git-wip-us.apache.org/repos/asf?p=commons-compress.git",
      "latestRelease" : "1.12",
      "latestReleaseDate" : null,
      "versions" : [ {
        "version" : "1.0",
        "releaseDate" : "2009-05-21T16:42:38.000+0000",
        "sha1" : "995ae384a0b1e2c66269e6bc5198db8561fb45a2",
        "sha2" : "09e84e79778ca1ba15b7336597a321457fc225bd5d41f7b46935d27922fc2a74",
        "bytecodeHash" : "62e311de52debd1e948ec48480826cda7e7880136384c80a5cfb7fa6f0450465",
        "platform" : "",
        "licenses" : [ {
          "name" : "APACHE20",
          "license" : "Apache License 2.0 (Apache-2.0)",
          "fromParentPom" : true
        } ],
        "_links" : {
          "html" : "https://www.sourceclear.com/registry/libraries/259?version=1.0"
        }
      } ],
      "_links" : {
        "html" : "https://www.sourceclear.com/registry/libraries/259"
      }
    }, {
      "name" : "Apache Commons Logging",
      "description" : "Apache Commons Logging is a thin adapter allowing configurable bridging to other, well known logging systems.",
      "author" : null,
      "authorUrl" : "http://commons.apache.org/proper/commons-logging/",
      "language" : "JAVA",
      "coordinateType" : null,
      "coordinate1" : "commons-logging",
      "coordinate2" : "commons-logging",
      "bugTrackerUrl" : "http://issues.apache.org/jira/browse/LOGGING",
      "codeRepoType" : null,
      "codeRepoUrl" : "http://svn.apache.org/repos/asf/commons/proper/logging/trunk",
      "latestRelease" : "1.2",
      "latestReleaseDate" : null,
      "versions" : [ {
        "version" : "1.1.3",
        "releaseDate" : "2013-05-16T20:05:23.000+0000",
        "sha1" : "f6f66e966c70a83ffbdb6f17a0919eaf7c8aca7f",
        "sha2" : "70903f6fc82e9908c8da9f20443f61d90f0870a312642991fe8462a0b9391784",
        "bytecodeHash" : "7e934a146a904b79b62a9f549b4413bbf483a8f6d3ab0302f0f412defe421991",
        "platform" : "",
        "licenses" : [ {
          "name" : "APACHE20",
          "license" : "Apache License 2.0 (Apache-2.0)",
          "fromParentPom" : true
        } ],
        "_links" : {
          "html" : "https://www.sourceclear.com/registry/libraries/102?version=1.1.3"
        }
      } ],
      "_links" : {
        "html" : "https://www.sourceclear.com/registry/libraries/102"
      }
    }, {
      "name" : "Apache HttpClient",
      "description" : "Apache HttpComponents Client",
      "author" : "",
      "authorUrl" : "http://hc.apache.org/httpcomponents-client",
      "language" : "JAVA",
      "coordinateType" : null,
      "coordinate1" : "org.apache.httpcomponents",
      "coordinate2" : "httpclient",
      "bugTrackerUrl" : "http://issues.apache.org/jira/browse/HTTPCLIENT",
      "codeRepoType" : null,
      "codeRepoUrl" : "https://svn.apache.org/repos/asf/httpcomponents/httpclient/tags/4.5.2",
      "latestRelease" : "4.5.2",
      "latestReleaseDate" : null,
      "versions" : [ {
        "version" : "4.3.2",
        "releaseDate" : "2014-01-15T18:43:59.000+0000",
        "sha1" : "10a45d03873baa34436ae54548d9f1140d4bb68a",
        "sha2" : "83af2d05f0d3448b8a4e007ee8ca847e86acd05edc79422c1637847ab270fe00",
        "bytecodeHash" : "9f3621f0c8e452f989b641b43d658937f229c016fb36bb801509e6181f254a45",
        "platform" : "",
        "licenses" : [ {
          "name" : "APACHE20",
          "license" : "Apache License 2.0 (Apache-2.0)",
          "fromParentPom" : false
        } ],
        "_links" : {
          "html" : "https://www.sourceclear.com/registry/libraries/133?version=4.3.2"
        }
      } ],
      "_links" : {
        "html" : "https://www.sourceclear.com/registry/libraries/133"
      }
    }, {
      "name" : "Apache HttpCore",
      "description" : "Apache HttpComponents Core (blocking I/O)",
      "author" : "",
      "authorUrl" : "http://hc.apache.org/httpcomponents-core-ga",
      "language" : "JAVA",
      "coordinateType" : null,
      "coordinate1" : "org.apache.httpcomponents",
      "coordinate2" : "httpcore",
      "bugTrackerUrl" : "http://issues.apache.org/jira/browse/HTTPCORE",
      "codeRepoType" : null,
      "codeRepoUrl" : "https://svn.apache.org/repos/asf/httpcomponents/httpcore/tags/4.4.5",
      "latestRelease" : "4.4.5",
      "latestReleaseDate" : null,
      "versions" : [ {
        "version" : "4.3.1",
        "releaseDate" : "2013-12-18T14:06:52.000+0000",
        "sha1" : "98e2eefcf524f757188f172642ecf5e2c7421947",
        "sha2" : "5a172c9536eff1115eff2eae1ac3b7aa616a8b532994d12d1a06ad5fd7366d65",
        "bytecodeHash" : "5a4ca01a348a75c90d85f685a5501d146bc4f0afe3afe8a7d1c24f1f62a38f5e",
        "platform" : "",
        "licenses" : [ {
          "name" : "APACHE20",
          "license" : "Apache License 2.0 (Apache-2.0)",
          "fromParentPom" : false
        } ],
        "_links" : {
          "html" : "https://www.sourceclear.com/registry/libraries/186?version=4.3.1"
        }
      } ],
      "_links" : {
        "html" : "https://www.sourceclear.com/registry/libraries/186"
      }
    }, {
      "name" : "Bean Validation API",
      "description" : "Bean Validation API",
      "author" : "JBoss, by Red Hat",
      "authorUrl" : "http://beanvalidation.org",
      "language" : "JAVA",
      "coordinateType" : null,
      "coordinate1" : "javax.validation",
      "coordinate2" : "validation-api",
      "bugTrackerUrl" : "http://opensource.atlassian.com/projects/hibernate/browse/BVAL",
      "codeRepoType" : null,
      "codeRepoUrl" : "https://github.com/beanvalidation/beanvalidation-api",
      "latestRelease" : "1.1.0.Final",
      "latestReleaseDate" : null,
      "versions" : [ {
        "version" : "1.1.0.Final",
        "releaseDate" : "2013-04-10T13:03:03.000+0000",
        "sha1" : "8613ae82954779d518631e05daa73a6a954817d5",
        "sha2" : "f39d7ba7253e35f5ac48081ec1bc28c5df9b32ac4b7db20853e5a8e76bf7b0ed",
        "bytecodeHash" : "9cf0103283d2a05e71fac339d17931585dbfaa37cccf94499a4fefec36c221d2",
        "platform" : "",
        "licenses" : [ {
          "name" : "APACHE20",
          "license" : "Apache License 2.0 (Apache-2.0)",
          "fromParentPom" : false
        } ],
        "_links" : {
          "html" : "https://www.sourceclear.com/registry/libraries/935?version=1.1.0.Final"
        }
      } ],
      "_links" : {
        "html" : "https://www.sourceclear.com/registry/libraries/935"
      }
    }, {
      "name" : "ClassMate",
      "description" : "Library for introspecting types with full generic information including resolving of field and method types.",
      "author" : null,
      "authorUrl" : "http://github.com/cowtowncoder/java-classmate",
      "language" : "JAVA",
      "coordinateType" : null,
      "coordinate1" : "com.fasterxml",
      "coordinate2" : "classmate",
      "bugTrackerUrl" : null,
      "codeRepoType" : null,
      "codeRepoUrl" : "http://github.com/cowtowncoder/java-classmate",
      "latestRelease" : "1.3.1",
      "latestReleaseDate" : null,
      "versions" : [ {
        "version" : "1.0.0",
        "releaseDate" : "2013-10-16T02:08:51.000+0000",
        "sha1" : "434efef28c81162b17c540e634cffa3bd9b09b4c",
        "sha2" : "1a381660e2f27912e2c421a70bf816a1739e0475190a8efefbcdd00d89216887",
        "bytecodeHash" : "b71c4f427fb1b9813a4731ded31aa1cfb8d7f817631c7ee62eaebf060989d952",
        "platform" : "",
        "licenses" : [ {
          "name" : "APACHE20",
          "license" : "Apache License 2.0 (Apache-2.0)",
          "fromParentPom" : false
        } ],
        "_links" : {
          "html" : "https://www.sourceclear.com/registry/libraries/1354?version=1.0.0"
        }
      } ],
      "_links" : {
        "html" : "https://www.sourceclear.com/registry/libraries/1354"
      }
    }, {
      "name" : "CSS Parser",
      "description" : "A CSS parser which implements SAC (the Simple API for CSS).",
      "author" : null,
      "authorUrl" : "http://cssparser.sourceforge.net/",
      "language" : "JAVA",
      "coordinateType" : null,
      "coordinate1" : "net.sourceforge.cssparser",
      "coordinate2" : "cssparser",
      "bugTrackerUrl" : "http://sourceforge.net/p/cssparser/bugs/",
      "codeRepoType" : null,
      "codeRepoUrl" : "http://svn.code.sf.net/p/cssparser/code/trunk/cssparser",
      "latestRelease" : "0.9.19",
      "latestReleaseDate" : null,
      "versions" : [ {
        "version" : "0.9.14",
        "releaseDate" : "2014-05-08T18:47:56.000+0000",
        "sha1" : "25f3d437b3cd4d4e6fab904d18967c64e4ab671d",
        "sha2" : "b0c1184ba7a13aed2a049f1792555fad82113081dc7edda4f39f2d7a6bb74d1a",
        "bytecodeHash" : "e8beb101b4526219e60411490a6541041df8318c0a4819334e153d2412713d57",
        "platform" : "",
        "licenses" : [ {
          "name" : "LGPL30",
          "license" : "GNU Library or \"Lesser\" General Public License version 3.0 (LGPL-3.0)",
          "fromParentPom" : false
        } ],
        "_links" : {
          "html" : "https://www.sourceclear.com/registry/libraries/2041?version=0.9.14"
        }
      } ],
      "_links" : {
        "html" : "https://www.sourceclear.com/registry/libraries/2041"
      }
    },  {
      "name" : "jbcrypt",
      "description" : "jBCrypt is a Java implementation of OpenBSD's Blowfish password hashing code, as described in A Future-Adaptable Password Scheme by Niels Provos and David Mazières, by Damien Miller.",
      "author" : "mindrot",
      "authorUrl" : "http://www.mindrot.org/",
      "language" : "JAVA",
      "coordinateType" : null,
      "coordinate1" : "org.mindrot",
      "coordinate2" : "jbcrypt",
      "bugTrackerUrl" : null,
      "codeRepoType" : null,
      "codeRepoUrl" : "scm:svn:https://jbcrypt.googlecode.com/svn/tags/jbcrypt-0.3m",
      "latestRelease" : "0.3m",
      "latestReleaseDate" : null,
      "versions" : [ {
        "version" : "0.3m",
        "releaseDate" : "2010-05-17T02:46:39.000+0000",
        "sha1" : "fe2d9c5f23767d681a7e38fc8986b812400ec583",
        "sha2" : "c0717079f4fe18f72f36ad1ab15a2afa63c6544fee4b9ac2128851330b5e1031",
        "bytecodeHash" : "4efc810e5ae6f94fa5584f6fb077d8a2c4d42eb900dc846b3943c00972e6376e",
        "platform" : "",
        "licenses" : [ {
          "name" : "BSD3",
          "license" : "BSD 3-Clause \"New\" or \"Revised\" License (BSD-3-Clause)",
          "fromParentPom" : false
        }, {
          "name" : "ISC",
          "license" : "ISC License (ISC)",
          "fromParentPom" : false
        } ],
        "_links" : {
          "html" : "https://www.sourceclear.com/registry/libraries/4015?version=0.3m"
        }
      } ],
      "_links" : {
        "html" : "https://www.sourceclear.com/registry/libraries/4015"
      }
    }, {
      "name" : "JBoss Logging 3",
      "description" : "The JBoss Logging Framework",
      "author" : "JBoss.org",
      "authorUrl" : "http://www.jboss.org",
      "language" : "JAVA",
      "coordinateType" : null,
      "coordinate1" : "org.jboss.logging",
      "coordinate2" : "jboss-logging",
      "bugTrackerUrl" : "https://issues.jboss.org/",
      "codeRepoType" : null,
      "codeRepoUrl" : "https://github.com/jboss-logging/jboss-logging",
      "latestRelease" : "3.3.0.Final",
      "latestReleaseDate" : null,
      "versions" : [ {
        "version" : "3.1.3.GA",
        "releaseDate" : "2013-03-06T04:01:19.000+0000",
        "sha1" : "64499e907f19e5e1b3fdc02f81440c1832fe3545",
        "sha2" : "6813931fe607469989f76a73a22515d2489dcd8b6be9fc147093a9cec995f822",
        "bytecodeHash" : "d3993fadfeb02647cffd7a32d58422a2b97998ffc4a9265c965906af4f34a619",
        "platform" : "",
        "licenses" : [ {
          "name" : "APACHE20",
          "license" : "Apache License 2.0 (Apache-2.0)",
          "fromParentPom" : false
        } ],
        "_links" : {
          "html" : "https://www.sourceclear.com/registry/libraries/892?version=3.1.3.GA"
        }
      } ],
      "_links" : {
        "html" : "https://www.sourceclear.com/registry/libraries/892"
      }
    }, {
      "name" : "Oracle's implementation of the JSF 1.2 specification API.",
      "description" : "This is the master POM file for Sun's Implementation of the JSF 1.2 Specification.",
      "author" : "Sun Microsystems, Inc.",
      "authorUrl" : "http://java.sun.com/javaee/javaserverfaces/",
      "language" : "JAVA",
      "coordinateType" : null,
      "coordinate1" : "javax.faces",
      "coordinate2" : "jsf-api",
      "bugTrackerUrl" : "https://javaserverfaces-spec-public.dev.java.net/servlets/ProjectIssues",
      "codeRepoType" : null,
      "codeRepoUrl" : "http://java.net/projects/mojarra/sources",
      "latestRelease" : "2.1",
      "latestReleaseDate" : null,
      "versions" : [ {
        "version" : "2.1",
        "releaseDate" : "2011-08-02T15:43:20.000+0000",
        "sha1" : "a149b1805842467e0d7a5269a8fec6a2a03d11ac",
        "sha2" : "e51edbaf72e0766b4c62287cf2caf3a79be2e38275dc12727752316db041ca22",
        "bytecodeHash" : "da1c1ea3e155bed0719778e509e652ba36e5e50ca12785fdfc72e85a8b20e9ec",
        "platform" : "",
        "licenses" : [ {
          "name" : "CDDL10",
          "license" : "Common Development and Distribution License 1.0 (CDDL-1.0)",
          "fromParentPom" : false
        }, {
          "name" : "GPL30",
          "license" : "GNU General Public License version 3.0 (GPL-3.0)",
          "fromParentPom" : false
        } ],
        "_links" : {
          "html" : "https://www.sourceclear.com/registry/libraries/6287?version=2.1"
        }
      } ],
      "_links" : {
        "html" : "https://www.sourceclear.com/registry/libraries/6287"
      }
    }, {
      "name" : "RichFaces a4j components",
      "description" : "This is the parent for all RichFaces artifacts, and contains project metadata, shared/stable configuration, and other common settings that change very rarely.",
      "author" : null,
      "authorUrl" : null,
      "language" : "JAVA",
      "coordinateType" : null,
      "coordinate1" : "org.richfaces",
      "coordinate2" : "richfaces-a4j",
      "bugTrackerUrl" : "https://jira.jboss.org/jira/browse/RF",
      "codeRepoType" : null,
      "codeRepoUrl" : "https://github.com/richfaces/richfaces",
      "latestRelease" : "4.5.17.Final",
      "latestReleaseDate" : null,
      "versions" : [ {
        "version" : "4.5.3.Final",
        "releaseDate" : "2015-03-03T16:49:06.000+0000",
        "sha1" : "3fa4725cd0af1dfaf847697a6135e5ee8c0a39db",
        "sha2" : "9fb6f3b6ceadd85b0b625c266854c65f88d4aa6098d958343f2f305ba68f2c76",
        "bytecodeHash" : "60e57e5ba43a545c10c5de9c9563b069b6c940113627245178bd4253ae973a97",
        "platform" : "",
        "licenses" : [ {
          "name" : "LGPL21",
          "license" : "GNU Library or \"Lesser\" General Public License version 2.1 (LGPL-2.1)",
          "fromParentPom" : false
        } ],
        "_links" : {
          "html" : "https://www.sourceclear.com/registry/libraries/12676?version=4.5.3.Final"
        }
      } ],
      "_links" : {
        "html" : "https://www.sourceclear.com/registry/libraries/12676"
      }
    }, {
      "name" : "RichFaces Core",
      "description" : "The RichFaces core framework.",
      "author" : null,
      "authorUrl" : null,
      "language" : "JAVA",
      "coordinateType" : null,
      "coordinate1" : "org.richfaces",
      "coordinate2" : "richfaces-core",
      "bugTrackerUrl" : "https://jira.jboss.org/jira/browse/RF",
      "codeRepoType" : null,
      "codeRepoUrl" : "https://github.com/richfaces/richfaces",
      "latestRelease" : "4.5.17.Final",
      "latestReleaseDate" : null,
      "versions" : [ {
        "version" : "4.5.3.Final",
        "releaseDate" : "2015-03-03T16:48:10.000+0000",
        "sha1" : "3c98949d5d102d3ca814322b336367cd20225333",
        "sha2" : "690076bd40db4b05c0796fcafbb2df7423bafb20226801d1a2266d81d71de0cc",
        "bytecodeHash" : "6976f9b80870170f1d5850118577ec52029a8e09d2d7f0a2d8906642875527a4",
        "platform" : "",
        "licenses" : [ {
          "name" : "LGPL21",
          "license" : "GNU Library or \"Lesser\" General Public License version 2.1 (LGPL-2.1)",
          "fromParentPom" : false
        } ],
        "_links" : {
          "html" : "https://www.sourceclear.com/registry/libraries/4883?version=4.5.3.Final"
        }
      } ],
      "_links" : {
        "html" : "https://www.sourceclear.com/registry/libraries/4883"
      }
    }, {
      "name" : "Simple API for CSS",
      "description" : "SAC is a standard interface for CSS parsers.",
      "author" : null,
      "authorUrl" : "http://www.w3.org/Style/CSS/SAC/",
      "language" : "JAVA",
      "coordinateType" : null,
      "coordinate1" : "org.w3c.css",
      "coordinate2" : "sac",
      "bugTrackerUrl" : null,
      "codeRepoType" : null,
      "codeRepoUrl" : null,
      "latestRelease" : "1.3",
      "latestReleaseDate" : null,
      "versions" : [ {
        "version" : "1.3",
        "releaseDate" : "2008-03-23T04:42:50.000+0000",
        "sha1" : "cdb2dcb4e22b83d6b32b93095f644c3462739e82",
        "sha2" : "003785669f921aafe4f137468dd20a01a36111e94fd7449f26c16e7924d82d23",
        "bytecodeHash" : "dbba4b2d00359a3da5599c28626e236a665d6657933b4133fd14eafaeb0eb166",
        "platform" : "",
        "licenses" : [ {
          "name" : "W3C",
          "license" : "W3C License (W3C)",
          "fromParentPom" : false
        } ],
        "_links" : {
          "html" : "https://www.sourceclear.com/registry/libraries/2042?version=1.3"
        }
      } ],
      "_links" : {
        "html" : "https://www.sourceclear.com/registry/libraries/2042"
      }
    }, {
      "name" : "Spring AOP",
      "description" : "Spring AOP",
      "author" : null,
      "authorUrl" : "https://github.com/spring-projects/spring-framework",
      "language" : "JAVA",
      "coordinateType" : null,
      "coordinate1" : "org.springframework",
      "coordinate2" : "spring-aop",
      "bugTrackerUrl" : "https://jira.springsource.org/browse/SPR",
      "codeRepoType" : null,
      "codeRepoUrl" : "https://github.com/spring-projects/spring-framework",
      "latestRelease" : "4.3.1.RELEASE",
      "latestReleaseDate" : null,
      "versions" : [ {
        "version" : "3.1.1.RELEASE",
        "releaseDate" : "2012-02-16T23:42:43.000+0000",
        "sha1" : "3c86058cdaea30df35e4b951a615e09eb07da589",
        "sha2" : "15e6d93745d1c7a599461d829186c5956fc4734ffd72a153b82a732f179305be",
        "bytecodeHash" : "3f12d01af7a922867af6b1ffdd4a4951bf1fd44393516e9122fa563c0ff659ad",
        "platform" : "",
        "licenses" : [ {
          "name" : "APACHE20",
          "license" : "Apache License 2.0 (Apache-2.0)",
          "fromParentPom" : false
        } ],
        "_links" : {
          "html" : "https://www.sourceclear.com/registry/libraries/1079?version=3.1.1.RELEASE"
        }
      } ],
      "_links" : {
        "html" : "https://www.sourceclear.com/registry/libraries/1079"
      }
    }, {
      "name" : "Spring Beans",
      "description" : "Spring Beans",
      "author" : null,
      "authorUrl" : "https://github.com/spring-projects/spring-framework",
      "language" : "JAVA",
      "coordinateType" : null,
      "coordinate1" : "org.springframework",
      "coordinate2" : "spring-beans",
      "bugTrackerUrl" : "https://jira.springsource.org/browse/SPR",
      "codeRepoType" : null,
      "codeRepoUrl" : "https://github.com/spring-projects/spring-framework",
      "latestRelease" : "4.3.1.RELEASE",
      "latestReleaseDate" : null,
      "versions" : [ {
        "version" : "3.1.1.RELEASE",
        "releaseDate" : "2012-02-16T23:42:45.000+0000",
        "sha1" : "83d0e5adc98714783f0fb7d8a5e97ef4cf08da49",
        "sha2" : "3540ef743e77825c69971b6c3925df2a855dbdff4dae44db7fb642d51f9400c5",
        "bytecodeHash" : "555c28177f9e2f43028127ebb2dcb92c504428d2dbc91839b5647db661b59542",
        "platform" : "",
        "licenses" : [ {
          "name" : "APACHE20",
          "license" : "Apache License 2.0 (Apache-2.0)",
          "fromParentPom" : false
        } ],
        "_links" : {
          "html" : "https://www.sourceclear.com/registry/libraries/1070?version=3.1.1.RELEASE"
        }
      } ],
      "_links" : {
        "html" : "https://www.sourceclear.com/registry/libraries/1070"
      }
    }, {
      "name" : "Spring Context",
      "description" : "Spring Context",
      "author" : null,
      "authorUrl" : "https://github.com/spring-projects/spring-framework",
      "language" : "JAVA",
      "coordinateType" : null,
      "coordinate1" : "org.springframework",
      "coordinate2" : "spring-context",
      "bugTrackerUrl" : "https://jira.springsource.org/browse/SPR",
      "codeRepoType" : null,
      "codeRepoUrl" : "https://github.com/spring-projects/spring-framework",
      "latestRelease" : "4.3.1.RELEASE",
      "latestReleaseDate" : null,
      "versions" : [ {
        "version" : "3.1.1.RELEASE",
        "releaseDate" : "2012-02-16T23:42:44.000+0000",
        "sha1" : "ecb0784a0712c1bfbc1c2018eeef6776861300e4",
        "sha2" : "268cf06375bb2a0e9b2c29780a69b44d308143bd5afa7c0f29da7a7f37caea1b",
        "bytecodeHash" : "f288d14eecfb4bd5fd36d2216e8143c32c6a92a2e00c33abe98fc7726f1190ed",
        "platform" : "",
        "licenses" : [ {
          "name" : "APACHE20",
          "license" : "Apache License 2.0 (Apache-2.0)",
          "fromParentPom" : false
        } ],
        "_links" : {
          "html" : "https://www.sourceclear.com/registry/libraries/553?version=3.1.1.RELEASE"
        }
      } ],
      "_links" : {
        "html" : "https://www.sourceclear.com/registry/libraries/553"
      }
    }, {
      "name" : "Spring Core",
      "description" : "Spring Core",
      "author" : null,
      "authorUrl" : "https://github.com/spring-projects/spring-framework",
      "language" : "JAVA",
      "coordinateType" : null,
      "coordinate1" : "org.springframework",
      "coordinate2" : "spring-core",
      "bugTrackerUrl" : "https://jira.springsource.org/browse/SPR",
      "codeRepoType" : null,
      "codeRepoUrl" : "https://github.com/spring-projects/spring-framework",
      "latestRelease" : "4.3.1.RELEASE",
      "latestReleaseDate" : null,
      "versions" : [ {
        "version" : "3.1.1.RELEASE",
        "releaseDate" : "2012-02-16T23:42:40.000+0000",
        "sha1" : "419e9233c8d55f64a0c524bb94c3ba87e51e7d95",
        "sha2" : "694df9834a4d7527cbafc5a2f5f01599be6548cf12b0bf40bd506f8fbd30708e",
        "bytecodeHash" : "5d89db8c7853692f320bee70088fb674e814f04e1a4551bb66ca2969d23588e1",
        "platform" : "",
        "licenses" : [ {
          "name" : "APACHE20",
          "license" : "Apache License 2.0 (Apache-2.0)",
          "fromParentPom" : false
        } ],
        "_links" : {
          "html" : "https://www.sourceclear.com/registry/libraries/562?version=3.1.1.RELEASE"
        }
      } ],
      "_links" : {
        "html" : "https://www.sourceclear.com/registry/libraries/562"
      }
    }, {
      "name" : "Spring Expression Language (SpEL)",
      "description" : "Spring Expression Language (SpEL)",
      "author" : null,
      "authorUrl" : "https://github.com/spring-projects/spring-framework",
      "language" : "JAVA",
      "coordinateType" : null,
      "coordinate1" : "org.springframework",
      "coordinate2" : "spring-expression",
      "bugTrackerUrl" : "https://jira.springsource.org/browse/SPR",
      "codeRepoType" : null,
      "codeRepoUrl" : "https://github.com/spring-projects/spring-framework",
      "latestRelease" : "4.3.1.RELEASE",
      "latestReleaseDate" : null,
      "versions" : [ {
        "version" : "3.1.1.RELEASE",
        "releaseDate" : "2012-02-16T23:42:41.000+0000",
        "sha1" : "1486d7787ec4ff8da8cbf8752d30e4c808412b3f",
        "sha2" : "e5f89142e46f59ace603f90846471938aa2cdd935c8fe2ef026154b1f4aa2357",
        "bytecodeHash" : "2df52f21bb85502296a94f4cf1da7c99bea43a14c7a1ae1ece269e1e6cded74b",
        "platform" : "",
        "licenses" : [ {
          "name" : "APACHE20",
          "license" : "Apache License 2.0 (Apache-2.0)",
          "fromParentPom" : false
        } ],
        "_links" : {
          "html" : "https://www.sourceclear.com/registry/libraries/1074?version=3.1.1.RELEASE"
        }
      } ],
      "_links" : {
        "html" : "https://www.sourceclear.com/registry/libraries/1074"
      }
    }, {
      "name" : "Spring Web",
      "description" : "Spring Web",
      "author" : null,
      "authorUrl" : "https://github.com/spring-projects/spring-framework",
      "language" : "JAVA",
      "coordinateType" : null,
      "coordinate1" : "org.springframework",
      "coordinate2" : "spring-web",
      "bugTrackerUrl" : "https://jira.springsource.org/browse/SPR",
      "codeRepoType" : null,
      "codeRepoUrl" : "https://github.com/spring-projects/spring-framework",
      "latestRelease" : "4.3.1.RELEASE",
      "latestReleaseDate" : null,
      "versions" : [ {
        "version" : "3.1.1.RELEASE",
        "releaseDate" : "2012-02-16T23:42:42.000+0000",
        "sha1" : "7b18bbab94119e8ae322e8599c067c4f4b3701f6",
        "sha2" : "3dec7f701d26548f11b4116bcd1d2d4ecba307519c3d0b8fdd585604645fc71e",
        "bytecodeHash" : "6851528664b5a6940d31da2eba57aebd4d8aaa398757c3de1bc1af87dff30d5a",
        "platform" : "",
        "licenses" : [ {
          "name" : "APACHE20",
          "license" : "Apache License 2.0 (Apache-2.0)",
          "fromParentPom" : false
        } ],
        "_links" : {
          "html" : "https://www.sourceclear.com/registry/libraries/1104?version=3.1.1.RELEASE"
        }
      } ],
      "_links" : {
        "html" : "https://www.sourceclear.com/registry/libraries/1104"
      }
    }, {
      "name" : "spring-asm",
      "description" : "Spring Framework Parent",
      "author" : null,
      "authorUrl" : null,
      "language" : "JAVA",
      "coordinateType" : null,
      "coordinate1" : "org.springframework",
      "coordinate2" : "spring-asm",
      "bugTrackerUrl" : null,
      "codeRepoType" : null,
      "codeRepoUrl" : "https://fisheye.springframework.org/browse/spring-framework",
      "latestRelease" : "3.1.4.RELEASE",
      "latestReleaseDate" : null,
      "versions" : [ {
        "version" : "3.1.1.RELEASE",
        "releaseDate" : "2012-02-16T23:42:43.000+0000",
        "sha1" : "08717ad8947fcada5c55da89eb474bf053c30e57",
        "sha2" : "dba79ab8271c8b54765af963cacb81685986e2c7e0f121b42709a09d6658c574",
        "bytecodeHash" : "5051cfe5e71a4863cc0dc43f0bf2325f7481bca5dd7bd29ea05a0ed1615deabb",
        "platform" : "",
        "licenses" : [ {
          "name" : "APACHE20",
          "license" : "Apache License 2.0 (Apache-2.0)",
          "fromParentPom" : false
        } ],
        "_links" : {
          "html" : "https://www.sourceclear.com/registry/libraries/1067?version=3.1.1.RELEASE"
        }
      } ],
      "_links" : {
        "html" : "https://www.sourceclear.com/registry/libraries/1067"
      }
    } ],
    "vulnerabilities" : [ {
      "disclosureDate" : "2014-01-12T16:00:00.000+0000",
      "cve" : "2014-0054",
      "title" : "XML External Entity (XXE) in Jaxb2RootElementHttpMessageConverter",
      "overview" : "The Jaxb2RootElementHttpMessageConverter in Spring MVC in Spring Framework before 3.2.8 and 4.0.0 before 4.0.2 does not disable external entity resolution, which allows remote attackers to read arbitrary files, cause a denial of service, and conduct CSRF attacks via crafted XML, aka an XML External Entity (XXE) issue.  NOTE: this vulnerability exists because of an incomplete fix for CVE-2013-4152, CVE-2013-7315, and CVE-2013-6429.",
      "language" : "JAVA",
      "vulnerabilityTypes" : [ "Cross Site Scripting (XSS)", "XML Injection" ],
      "cvssScore" : 6.8,
      "libraries" : [ {
        "details" : [ {
          "updateToVersion" : "3.2.8.RELEASE",
          "versionRange" : "3.0.0.RELEASE-3.2.7.RELEASE",
          "fixText" : null,
          "patch" : null
        } ],
        "_links" : {
          "ref" : "/records/0/libraries/22/versions/0"
        }
      } ],
      "_links" : {
        "html" : "https://www.sourceclear.com/registry/vulnerabilities/766"
      },
      "hasExploits" : false
    }, {
      "disclosureDate" : "2013-08-04T16:00:00.000+0000",
      "cve" : "2013-7315",
      "title" : "XML External Entity (XXE) in StAX XMLInputFactory",
      "overview" : "The Spring MVC in Spring Framework before 3.2.4.RELEASE does not disable external entity resolution for the StAX XMLInputFactory, which allows context-dependent attackers to read arbitrary files, cause a denial of service, and conduct CSRF attacks via crafted XML with JAXB, aka an XML External Entity (XXE) issue, and a different vulnerability than CVE-2013-4152.  NOTE: this issue was SPLIT from CVE-2013-4152 due to different affected versions.",
      "language" : "JAVA",
      "vulnerabilityTypes" : [ "Denial of Service", "Information Disclosure" ],
      "cvssScore" : 6.8,
      "libraries" : [ {
        "details" : [ {
          "updateToVersion" : "3.2.4.RELEASE",
          "versionRange" : "2.0-3.2.3.RELEASE",
          "fixText" : "",
          "patch" : "https://github.com/spring-projects/spring-framework/commit/434735fbf6e7f9051af2ef027657edb99120b173"
        } ],
        "_links" : {
          "ref" : "/records/0/libraries/22/versions/0"
        }
      } ],
      "_links" : {
        "html" : "https://www.sourceclear.com/registry/vulnerabilities/786"
      },
      "hasExploits" : false
    }, {
      "disclosureDate" : "2013-11-06T16:00:00.000+0000",
      "cve" : "2013-6429",
      "title" : "XML External Entity (XXE) in SourceHttpMessageConverter",
      "overview" : "The SourceHttpMessageConverter in Spring MVC in Spring Framework before 3.2.5 and 4.0.0.M1 through 4.0.0.RC1 does not disable external entity resolution. This allows remote attackers to use crafted XML with XML External Entity (XXE) injection to read arbitrary files, cause a denial of service, and conduct CSRF attacks. This is a different vulnerability than CVE-2013-4152 and CVE-2013-7315.",
      "language" : "JAVA",
      "vulnerabilityTypes" : [ "Authorization (Access Control)" ],
      "cvssScore" : 6.8,
      "libraries" : [ {
        "details" : [ {
          "updateToVersion" : "3.2.5.RELEASE",
          "versionRange" : "3.0.0.RELEASE-3.2.4.RELEASE",
          "fixText" : "",
          "patch" : "https://github.com/spring-projects/spring-framework/commit/7387cb990e35b0f1b573faf29d4f9ae183d7a5ef"
        } ],
        "_links" : {
          "ref" : "/records/0/libraries/22/versions/0"
        }
      } ],
      "_links" : {
        "html" : "https://www.sourceclear.com/registry/vulnerabilities/791"
      },
      "hasExploits" : false
    }, {
      "disclosureDate" : "2013-08-21T16:00:00.000+0000",
      "cve" : "2013-4152",
      "title" : "XML External Entity (XXE) When Using the JAXB Marshaller",
      "overview" : "The Spring OXM wrapper in Spring Framework before 3.2.4 and 4.0.0.M1, when using the JAXB marshaller, does not disable entity resolution, which allows context-dependent attackers to read arbitrary files, cause a denial of service, and conduct CSRF attacks via an XML external entity declaration in conjunction with an entity reference in a (1) DOMSource, (2) StAXSource, (3) SAXSource, or (4) StreamSource, aka an XML External Entity (XXE) issue.",
      "language" : "JAVA",
      "vulnerabilityTypes" : [ "Authorization (Access Control)", "File I/O" ],
      "cvssScore" : 6.8,
      "libraries" : [ {
        "details" : [ {
          "updateToVersion" : "3.2.8.RELEASE",
          "versionRange" : "3.0.0-3.2.3.RELEASE",
          "fixText" : "",
          "patch" : "https://github.com/spring-projects/spring-framework/commit/434735fbf6e7f9051af2ef027657edb99120b173"
        } ],
        "_links" : {
          "ref" : "/records/0/libraries/22/versions/0"
        }
      } ],
      "_links" : {
        "html" : "https://www.sourceclear.com/registry/vulnerabilities/821"
      },
      "hasExploits" : false
    }, {
      "disclosureDate" : "2012-05-22T16:00:00.000+0000",
      "cve" : "2012-2098",
      "title" : "Denial of Service (DoS) CPU Consumption",
      "overview" : "Algorithmic complexity vulnerability in the sorting algorithms in bzip2 compressing stream (BZip2CompressorOutputStream) in Apache Commons Compress before 1.4.1 and Apache Ant before 1.8.4 allows remote attackers to cause a denial of service (CPU consumption) via a file with many repeating inputs.",
      "language" : "JAVA",
      "vulnerabilityTypes" : [ "Denial of Service" ],
      "cvssScore" : 5.0,
      "libraries" : [ {
        "details" : [ {
          "updateToVersion" : "1.4.1",
          "versionRange" : "1.0-1.4",
          "fixText" : "",
          "patch" : "https://github.com/apache/commons-compress/commit/0600296ab8f8a0bbdfedd483f51b38005eb8e34e"
        } ],
        "_links" : {
          "ref" : "/records/0/libraries/2/versions/0"
        }
      } ],
      "_links" : {
        "html" : "https://www.sourceclear.com/registry/vulnerabilities/965"
      },
      "hasExploits" : true
    }, {
      "disclosureDate" : "2014-08-17T16:00:00.000+0000",
      "cve" : "2014-3577",
      "title" : "Improper Certificate Common Name Verification Allows Spoofing SSL Servers",
      "overview" : "org.apache.http.conn.ssl.AbstractVerifier in Apache HttpComponents HttpClient before 4.3.5 and HttpAsyncClient before 4.0.2 does not properly verify that the server hostname matches a domain name in the subject's Common Name (CN) or subjectAltName field of the X.509 certificate, which allows man-in-the-middle attackers to spoof SSL servers via a \"CN=\" string in a field in the distinguished name (DN) of a certificate, as demonstrated by the \"foo,CN=www.apache.org\" string in the O field.",
      "language" : "JAVA",
      "vulnerabilityTypes" : [ "Authentication", "Cryptography", "Transport Security" ],
      "cvssScore" : 4.8,
      "libraries" : [ {
        "details" : [ {
          "updateToVersion" : "4.3.5",
          "versionRange" : "4.0-alpha1-4.3.4",
          "fixText" : "",
          "patch" : "https://github.com/apache/httpclient/commit/51cc67567765d67f878f0dcef61b5ded454d3122"
        } ],
        "_links" : {
          "ref" : "/records/0/libraries/4/versions/0"
        }
      } ],
      "_links" : {
        "html" : "https://www.sourceclear.com/registry/vulnerabilities/1158"
      },
      "hasExploits" : false
    }, {
      "disclosureDate" : "2014-05-14T16:00:00.000+0000",
      "cve" : "2014-3578",
      "title" : "File Access Through Directory Traversal",
      "overview" : "The Spring Framework is an application framework and inversion of control container for the Java platform. The framework's core features can be used by any Java application, but there are extensions for building web applications on top of the Java EE platform.\n\nIn some scenarios, Spring Framework is vulnerable to a directory traversal attack due to insufficient request path validation for static resource handling; this could potentially allow remote attackers to read arbitrary files residing on the server. The vulnerability is present in Pivotal Spring Framework 3.x before 3.2.9 and 4.0 before 4.0.5.",
      "language" : "JAVA",
      "vulnerabilityTypes" : [ "Information Disclosure" ],
      "cvssScore" : 5.0,
      "libraries" : [ {
        "details" : [ {
          "updateToVersion" : "4.0.5.RELEASE",
          "versionRange" : "3.0.0.RELEASE-3.2.8.RELEASE,4.0.0.RELEASE-4.0.4.RELEASE",
          "fixText" : "",
          "patch" : "https://github.com/spring-projects/spring-framework/commit/f6fddeb6eb7da625fd711ab371ff16512f431e8d"
        } ],
        "_links" : {
          "ref" : "/records/0/libraries/20/versions/0"
        }
      } ],
      "_links" : {
        "html" : "https://www.sourceclear.com/registry/vulnerabilities/1498"
      },
      "hasExploits" : true
    }, {
      "disclosureDate" : "2015-01-29T16:00:00.000+0000",
      "cve" : "2015-0886",
      "title" : "Information Disclosure of Password Hashes Through crypt_raw",
      "overview" : "Integer overflow in the crypt_raw method in the key-stretching implementation in jBCrypt before 0.4 makes it easier for remote attackers to determine cleartext values of password hashes via a brute-force attack against hashes associated with the maximum exponent.",
      "language" : "JAVA",
      "vulnerabilityTypes" : [ "Information Disclosure" ],
      "cvssScore" : 5.0,
      "libraries" : [ {
        "details" : [ {
          "updateToVersion" : "0.4",
          "versionRange" : "0.3m",
          "fixText" : "There is no current fix available for these Maven coordinates, if you switch to groupId de.svenkubiak and version 0.4 that is the same package but updated and not currently vulnerable.",
          "patch" : "https://github.com/jeremyh/jBCrypt/commit/e015c2c110ab7cf544400893f3543b45f359ff58"
        } ],
        "_links" : {
          "ref" : "/records/0/libraries/11/versions/0"
        }
      } ],
      "_links" : {
        "html" : "https://www.sourceclear.com/registry/vulnerabilities/1527"
      },
      "hasExploits" : false
    }, {
      "disclosureDate" : "2015-02-11T16:00:00.000+0000",
      "cve" : "2015-0279",
      "title" : "Java Code Execution and Expression Language Injection",
      "overview" : "JBoss RichFaces before 4.5.4.Final allows remote attackers to inject expression language (EL) expressions and execute arbitrary Java code via the do parameter.",
      "language" : "JAVA",
      "vulnerabilityTypes" : [ "Remote Procedure Calls" ],
      "cvssScore" : 6.8,
      "libraries" : [ {
        "details" : [ {
          "updateToVersion" : "4.5.4.Final",
          "versionRange" : "4.5.0.Alpha3-4.5.3.Final",
          "fixText" : "",
          "patch" : "https://github.com/richfaces/richfaces/commit/4c5ddae4d6ddcea591fa949762c1c79ac11cac99"
        } ],
        "_links" : {
          "ref" : "/records/0/libraries/14/versions/0"
        }
      } ],
      "_links" : {
        "html" : "https://www.sourceclear.com/registry/vulnerabilities/1578"
      },
      "hasExploits" : false
    }, {
      "disclosureDate" : "2014-03-09T16:00:00.000+0000",
      "cve" : "2015-5262",
      "title" : "Denial of Service (DoS) HTTPS Connection Accumulation",
      "overview" : "http/conn/ssl/SSLConnectionSocketFactory.java in Apache HttpComponents HttpClient before 4.3.6 ignores the http.socket.timeout configuration setting during an SSL handshake, which allows remote attackers to cause a denial of service (HTTPS call hang) via unspecified vectors.",
      "language" : "JAVA",
      "vulnerabilityTypes" : [ "Denial of Service" ],
      "cvssScore" : 4.3,
      "libraries" : [ {
        "details" : [ {
          "updateToVersion" : "4.3.6",
          "versionRange" : "4.3-4.3.5",
          "fixText" : "",
          "patch" : ""
        } ],
        "_links" : {
          "ref" : "/records/0/libraries/4/versions/0"
        }
      } ],
      "_links" : {
        "html" : "https://www.sourceclear.com/registry/vulnerabilities/1804"
      },
      "hasExploits" : false
    }, {
      "disclosureDate" : "2014-05-07T16:00:00.000+0000",
      "cve" : "2014-0225",
      "title" : "Information Disclosure Through Timing Attack",
      "overview" : "When processing user provided XML documents, the Spring Framework did not disable by default the resolution of URI references in a DTD declaration. By observing differences in response times, an attacker could then identify valid IP addresses on the internal network with functioning web servers.",
      "language" : "JAVA",
      "vulnerabilityTypes" : [ "Information Disclosure" ],
      "cvssScore" : 4.4,
      "libraries" : [ {
        "details" : [ {
          "updateToVersion" : "3.2.9.RELEASE",
          "versionRange" : "3.0.0.RELEASE-3.2.8.RELEASE",
          "fixText" : "",
          "patch" : "https://github.com/spring-projects/spring-framework/commit/c6503ebbf7c9e21ff022c58706dbac5417b2b5eb"
        } ],
        "_links" : {
          "ref" : "/records/0/libraries/22/versions/0"
        }
      } ],
      "_links" : {
        "html" : "https://www.sourceclear.com/registry/vulnerabilities/1810"
      },
      "hasExploits" : false
    }, {
      "disclosureDate" : "2015-02-14T16:00:00.000+0000",
      "cve" : "2013-6430",
      "title" : "Cross-site Scripting (XSS) in JavaScriptUtils.javaScriptEscape()",
      "overview" : "The JavaScriptUtils.javaScriptEscape() method did not escape all characters that are sensitive within either a JS single quoted string, JS double quoted string, or HTML script data context. In most cases this will result in an unexploitable parse error but in some cases it could result in an XSS vulnerability.",
      "language" : "JAVA",
      "vulnerabilityTypes" : [ "Cross Site Scripting (XSS)" ],
      "cvssScore" : 5.0,
      "libraries" : [ {
        "details" : [ {
          "updateToVersion" : "3.2.2.RELEASE",
          "versionRange" : "3.0.0.RELEASE-3.2.1.RELEASE",
          "fixText" : "",
          "patch" : "https://github.com/spring-projects/spring-framework/commit/7a7df6637478607bef0277bf52a4e0a03e20a248"
        } ],
        "_links" : {
          "ref" : "/records/0/libraries/22/versions/0"
        }
      } ],
      "_links" : {
        "html" : "https://www.sourceclear.com/registry/vulnerabilities/1834"
      },
      "hasExploits" : false
    } ]
  } ]
}

```

## Library References For Vulnerabilities

The vulnerability information provided does not include library names directly in the JSON components. This is because the vulnerabilities include references to the library for parsing in the `"ref"` keys. As an example, if I wanted to extract the library information for the following vulnerability:

```
 {
      "disclosureDate" : "2015-02-11T16:00:00.000+0000",
      "cve" : "2015-0279",
      "title" : "Java Code Execution and Expression Language Injection",
      "overview" : "JBoss RichFaces before 4.5.4.Final allows remote attackers to inject expression language (EL) expressions and execute arbitrary Java code via the do parameter.",
      "language" : "JAVA",
      "vulnerabilityTypes" : [ "Remote Procedure Calls" ],
      "cvssScore" : 6.8,
      "libraries" : [ {
        "details" : [ {
          "updateToVersion" : "4.5.4.Final",
          "versionRange" : "4.5.0.Alpha3-4.5.3.Final",
          "fixText" : "",
          "patch" : "https://github.com/richfaces/richfaces/commit/4c5ddae4d6ddcea591fa949762c1c79ac11cac99"
        } ],
        "_links" : {
          "ref" : "/records/0/libraries/14/versions/0"
        }
      } ],
      "_links" : {
        "html" : "https://www.sourceclear.com/registry/vulnerabilities/1578"
      },
      "hasExploits" : false
    }

```

You can use the bash application, jq, and run the following command to obtain that information using the ref:

```
## "ref" : "/records/0/libraries/14/versions/0"
jq '.records[0].libraries[14]'

```

For seeing the specific version of a particular library, do the following:

```
## "ref" : "/records/0/libraries/14/versions/0"
jq '.records[0].libraries[14].versions[0]'

```

