---
"ft:title" : "Using TLS with Veracode Integrations"
"ft:prettyUrl" : "c_tls_support"
---
For security reasons, Veracode APIs block connections that use TLS 1.0 or 1.1. This section explains how to avoid issues when connecting to Veracode using TLS.

Veracode no longer supports integrations for Team Foundation Server 2010 and Visual Studio 2010, which do not support TLS 1.2. [About Veracode Static Analysis](https://docs.veracode.com/r/c_static_overview) continues to support applications compiled with Visual Studio 2003 and later.

To avoid connection issues, you must upgrade these [integrations](https://docs.veracode.com/r/c_veracode_integrations) to support .NET 4.5 and TLS 1.2:

   - .NET wrapper/SDK
   - Veracode Static for Visual Studio

You must upgrade these integrations if you are using Java 1.7:

   - Java wrapper/SDK
   - Veracode Static for Eclipse
   - Veracode Static for IntelliJ
   - Veracode Jenkins Plugin
   - Veracode Integration for Jira
   - Veracode TeamCity Plugin

To support TLS 1.2 with Java 1.7, you must apply the Java Cryptographic Extension (JCE) Unlimited Strength Jurisdiction Policy to the JRE. You can download the JCE Unlimited Strength Jurisdiction Policy files from Oracle. Because Java 1.7 requires you to both patch the JRE and upgrade your Veracode integrations, Veracode recommends upgrading to Java 1.8 instead.

<p><span style="font-size: medium;">TLS Error Messages</span></p>

If you use an integration that attempts to connect over TLS 1.0 or 1.1, you may receive one of these error messages:

   - `Received fatal alert: handshake_failure`
   - `Peer not authenticated error`
   - `System.Net.WebException was unhandled. Message=The request was aborted: Could not create SSL/TLS secure channel`
   - `OpenSSL::SSL::SSLError: Received fatal alert: handshake_failure`
   - `The underlying connection was closed: An unexpected error occurred on a send.`
   - `Could not create SSL/TLS secure channel`
