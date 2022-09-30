---
"ft:title" : "Understanding ISM Diagnostic Tool Results"
"ft:prettyUrl" : "c_ism_diagnostic_results"
---

The Veracode Internal Scanning Management (ISM) endpoint diagnostic tool provides details of the performance of the connections to your endpoint. It measures the connection from the endpoint to both the Veracode gateway and the application you want to scan.

A successful endpoint diagnostic test returns two sets of results: the gateway diagnostics results and the destination diagnostics results.

For gateway diagnostics, the tool sends data through a secure tunnel from the endpoint to the Veracode gateway and, then, back to the endpoint, measuring the response time. The tunnel closes as soon as the data transfer completes. The gateway diagnostics summary provides these data points:

-   Average Transfer Time: the amount of time, in milliseconds, it took for the data to reach the gateway and return to the endpoint.
-   Average Throughput: the speed, in megabits per second, at which the data traveled.

A high transfer time or low throughput may indicate a poor connection between your endpoint server and the Veracode network.

For destination diagnostics, the tool sends data through a SOCKS5 connection between your endpoint and the URL of the application you want to scan. Then, it sends the data back to the endpoint, measuring the response time. The destination diagnostics summary provides these data points:

-   Average Transfer Time: the amount of time, in milliseconds, it took for the data to reach the application URL and return to the endpoint.
-   Average Throughput: the speed, in megabits per second, at which the data traveled.

A high transfer time or low throughput may indicate a poor connection between your endpoint server and the application you want to scan.

This example shows a successful diagnostic test:

```
c:\Program Files\Veracode\ISM\veracode_ism>java -jar endpoint.jar --diagnostics https://www.veracode.com 5 3 250
2020-03-06 20:07:21,985 INFO - Launching Smart Endpoint version: 20.3.4 Java version: 1.8.0_241
2020-03-06 20:07:22,079 INFO - Running endpoint diagnostics
2020-03-06 20:07:22,517 INFO - Running tunnel diagnostics
2020-03-06 20:07:22,689 INFO - Tunnel diagnostics complete
2020-03-06 20:07:22,689 INFO - Running destination diagnostics
2020-03-06 20:07:23,157 INFO - Destination diagnostics complete
2020-03-06 20:07:23,157 INFO - Tunnel diagnose usage stats: 0 bytes sent; 750000 bytes received
2020-03-06 20:07:23,157 INFO - Tunnel diagnose Performance stats:
2020-03-06 20:07:23,157 INFO - =======================================
2020-03-06 20:07:23,157 INFO - Gateway diagnostics results
2020-03-06 20:07:23,157 INFO - =======================================
2020-03-06 20:07:23,157 INFO - # Time(ms) Size(kB) Throughput(Mbps) Quality
2020-03-06 20:07:23,157 INFO - 1 47 250 42.55 100%
2020-03-06 20:07:23,157 INFO - 2 47 250 42.55 100%
2020-03-06 20:07:23,157 INFO - 3 47 250 42.55 100%
2020-03-06 20:07:23,157 INFO - ==========Gateway Diagnostics Summary===========
2020-03-06 20:07:23,157 INFO - Average Transfer Time:47.0 +/- 0.0
2020-03-06 20:07:23,157 INFO - Average Throughput:42.5531914893617 +/- 0.0
2020-03-06 20:07:23,157 INFO - =======================================
2020-03-06 20:07:23,157 INFO - Destination diagnostics results 1 thread each for target https://www.veracode.com
2020-03-06 20:07:23,157 INFO - =======================================
2020-03-06 20:07:23,157 INFO - # Time(ms) Size(kB) Throughput(Mbps) Quality
2020-03-06 20:07:23,157 INFO - 1 125 92.3 5.91 100%
2020-03-06 20:07:23,157 INFO - 2 78 92.3 9.46 100%
2020-03-06 20:07:23,157 INFO - 3 78 92.3 9.46 100%
2020-03-06 20:07:23,157 INFO - 4 78 92.3 9.46 100%
2020-03-06 20:07:23,157 INFO - 5 94 92.3 7.85 100%
2020-03-06 20:07:23,157 INFO - ==========Destination Diagnostic Summary===========
2020-03-06 20:07:23,157 INFO - Average Transfer Time:90.6 +/- 18.282232
2020-03-06 20:07:23,157 INFO - Average Throughput:8.429736844080741 +/- 1.4079821
2020-03-06 20:07:23,157 INFO - Smart Endpoint is shutting down
2020-03-06 20:07:23,157 INFO - Smart Endpoint shut down complete
```

If you see exceptions in the gateway diagnostic results, Veracode encountered issues creating a tunnel from the gateway to your endpoint. For example:

```
2020-06-05 17:09:52,375 DEBUG - Sockets client is running using proxy:HTTP @ /10.110.52.49:808
2020-06-05 17:09:54,695 ERROR - Error in websocket client
java.net.ConnectException: Connection refused: connect
at java.net.DualStackPlainSocketImpl.connect0(Native Method)
at java.net.DualStackPlainSocketImpl.socketConnect(Unknown Source)
at java.net.AbstractPlainSocketImpl.doConnect(Unknown Source)
at java.net.AbstractPlainSocketImpl.connectToAddress(Unknown Source)
at java.net.AbstractPlainSocketImpl.connect(Unknown Source)
at java.net.PlainSocketImpl.connect(Unknown Source)
at java.net.Socket.connect(Unknown Source)
at sun.net.NetworkClient.doConnect(Unknown Source)
at sun.net.www.http.HttpClient.openServer(Unknown Source)
at sun.net.www.http.HttpClient$1.run(Unknown Source)
at sun.net.www.http.HttpClient$1.run(Unknown Source)
at java.security.AccessController.doPrivileged(Native Method)
at sun.net.www.http.HttpClient.privilegedOpenServer(Unknown Source)
at sun.net.www.http.HttpClient.openServer(Unknown Source)
at sun.net.www.http.HttpClient.<init>(Unknown Source)
at sun.net.www.http.HttpClient.New(Unknown Source)
at sun.net.www.http.HttpClient.New(Unknown Source)
at sun.net.www.protocol.http.HttpURLConnection.getNewHttpClient(Unknown Source)
at sun.net.www.protocol.http.HttpURLConnection.plainConnect0(Unknown Source)
at sun.net.www.protocol.http.HttpURLConnection.plainConnect(Unknown Source)
at sun.net.www.protocol.http.HttpURLConnection.connect(Unknown Source)
at java.net.HttpConnectSocketImpl.doTunnel(Unknown Source)
at java.net.HttpConnectSocketImpl.access$200(Unknown Source)
at java.net.HttpConnectSocketImpl$2.run(Unknown Source)
at java.net.HttpConnectSocketImpl$2.run(Unknown Source)
at java.security.AccessController.doPrivileged(Native Method)
at java.net.HttpConnectSocketImpl.privilegedDoTunnel(Unknown Source)
at java.net.HttpConnectSocketImpl.connect(Unknown Source)
at java.net.Socket.connect(Unknown Source)
at org.java_websocket.client.WebSocketClient.run(WebSocketClient.java:387)
at java.lang.Thread.run(Unknown Source)
2020-06-05 17:09:54,702 DEBUG - Socket closed. Exit code: -1 Reason: Connection refused: connect
```

The most likely cause of a gateway diagnostic exception is a firewall or proxy server that blocks WebSocket traffic. To resolve this error, you must configure your firewall to allow WebSocket traffic to the Veracode gateway.

If you see exceptions in the destination diagnostic results, the endpoint cannot access the destination URL. For example:

```
2020-06-05 17:18:26,872 ERROR - Exception while sending diagnostic data
com.veracode.was.mvsa.smartendpointclient.proxy.ProxyException: java.net.SocketTimeoutException: connect timed out
at com.veracode.was.mvsa.smartendpointclient.proxy.embedded.socks5.AddressHandler.connect(AddressHandler.java:90)
at com.veracode.was.mvsa.smartendpointclient.proxy.embedded.ProxyChannelEmbedded.send(ProxyChannelEmbedded.java:99)
at com.veracode.was.mvsa.smartendpointclient.websocket.SmartEndpointSocketClient.lambda$openDiagnosticSocket$3(SmartEndpointSocketClient.java:296)
at java.util.concurrent.Executors$RunnableAdapter.call(Unknown Source)
at java.util.concurrent.FutureTask.run(Unknown Source)
at java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)
at java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)
at java.lang.Thread.run(Unknown Source)
Caused by:
java.net.SocketTimeoutException: connect timed out
at com.veracode.was.mvsa.smartendpointclient.proxy.embedded.socks5.AddressHandler.connect(AddressHandler.java:90)
at com.veracode.was.mvsa.smartendpointclient.proxy.embedded.ProxyChannelEmbedded.send(ProxyChannelEmbedded.java:99)
at com.veracode.was.mvsa.smartendpointclient.websocket.SmartEndpointSocketClient.lambda$openDiagnosticSocket$3(SmartEndpointSocketClient.java:296)
at java.util.concurrent.Executors$RunnableAdapter.call(Unknown Source)
at java.util.concurrent.FutureTask.run(Unknown Source)
at java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)
at java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)
at java.lang.Thread.run(Unknown Source)
2020-06-05 17:18:26,872 ERROR - Destination check exception
java.net.SocketException: SOCKS: Connection refused
at java.net.SocksSocketImpl.connect(Unknown Source)
at java.net.Socket.connect(Unknown Source)
at java.net.Socket.connect(Unknown Source)
at com.veracode.was.mvsa.smartendpointclient.websocket.DiagnosticClient.getDestination(DiagnosticClient.java:275)
at com.veracode.was.mvsa.smartendpointclient.websocket.DiagnosticClient.runDestinationCheck(DiagnosticClient.java:140)
at com.veracode.was.mvsa.smartendpointclient.websocket.DiagnosticClient.runDiagnostics(DiagnosticClient.java:59)
at com.veracode.was.mvsa.smartendpointclient.service.impl.SmartEndpointServiceImpl.runDiagnostics(SmartEndpointServiceImpl.java:376)
at com.veracode.was.mvsa.smartendpointclient.main.EndpointLauncher.runDiagnostics(EndpointLauncher.java:80)
at com.veracode.was.mvsa.smartendpointclient.main.Main.main(Main.java:98)
```

The most likely cause of a destination diagnostic exception is that your proxy does not allow access to the URL from the endpoint machine. To resolve this error, you must configure your proxy to allow your endpoint machine to access the destination URL.

