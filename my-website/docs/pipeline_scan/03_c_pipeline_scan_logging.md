---
"ft:title" : "Configuring Pipeline Scan Logging"
"ft:prettyUrl" : "c_pipeline_scan_logging"
---
Veracode provides a few configuration options for generating log messages from Pipeline Scans.

To obtain detailed console output during scanning, add the parameter [`--verbose=true`](https://docs.veracode.com/r/r_pipeline_scan_commands) to your pipeline script.

To send logging information to outputs other than the console, you can use the [Apache Log4j 2 utility](https://logging.apache.org/log4j/2.x/).

To configure logging settings, you can include a log4j2 configuration file with the name `pipeline.scan.log4j2.properties` in the execution directory of `pipeline-scan.jar`. The configuration file overrides the command-line options.

These examples show a Java and XML configuration that uses Log4j 2 to:

-   Send verbose and debug messages to the log file `pipeline-scan.log`
-   Send information messages to the console

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> In both examples, you can turn on log for console by setting <code>logger.file.additivity</code> to <code>true</code>.</p>

<p font-size="13pt"><b><code>pipeline.scan.log4j2.properties</code> Example</b></p>

```java

      # Extra logging related to initialization of Log4j
      # Set to debug or trace if log4j initialization is failing
      status = warn

      # Name of the configuration
      name = ConsoleLogForPipelineScan

      # Define the output file, e.g. logs/pipeline-scan.log, pipeline-scan.log
      property.filename = pipeline-scan.log

      # Console appender configuration
      appender.console.type = Console
      appender.console.name = consoleLogger
      appender.console.layout.type = PatternLayout
      appender.console.layout.pattern = [%d{dd MMM yyyy HH:mm:ss,SSSS}] PIPELINE-SCAN %p: %m %n

      # File appender configuration
      appender.file.type = File
      appender.file.name = fileLogger
      appender.file.fileName = ${filename}
      appender.file.layout.type = PatternLayout
      appender.file.layout.pattern = [%d{dd MMM yyyy HH:mm:ss,SSSS}] PIPELINE-SCAN %p: %m %n

      logger.file.name=PIPELINE_SCAN
      logger.file.level = debug
      logger.file.additivity = false
      logger.file.appenderRef.file.ref = fileLogger

      rootLogger.level = info
      rootLogger.appenderRef.stdout.ref = consoleLogger

```

<p font-size="13pt"><b><code>log4j2.xml</code> Configuration File Example</b></p>

Alternatively, to use a `log4j2.xml` configuration file like this example, you must specify the command line option `-Dlog4j.configurationFile=[path-to]/log4j2.xml` when running a pipeline scan:

```
    <?xml version="1.0" encoding="UTF-8"?>
    <Configuration status="WARN">
        <Appenders>
            <Console name="Console" target="SYSTEM_OUT">
                <PatternLayout pattern="%d{HH:mm:ss.SSS} %-5level - %msg%n"/>
            </Console>
            <File name="File" fileName="pipeline-scan.log" append="true">
                <PatternLayout>
                    <Pattern>%d{HH:mm:ss.SSS} [%t] %-5level - %msg%n</Pattern>
                </PatternLayout>
            </File>
        </Appenders>
        <Loggers>
            <Logger name="PIPELINE_SCAN" level="debug" additivity="false">
                <AppenderRef ref="File"/>
            </Logger>
            <Root level="info">
                <AppenderRef ref="Console"/>
            </Root>
        </Loggers>
    </Configuration>

```
