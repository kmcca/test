---
"ft:title": "Using HTTPie with the Python Authentication Library"
"ft:prettyUrl": "c_httpie_tool"
---
The Veracode APIs require that you enable HMAC authentication for your Python application as a security measure for accessing API resources. The Python authentication library provides an integration between HTTPie and the Veracode APIs, which adds HMAC authentication when using the Veracode APIs from the command line.

You use the library to:

- Load the [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3)
- Generate an HMAC authorization header
- Issue an HTTP call to a Veracode API with a valid endpoint

The default HTTP method is `GET`. For command examples, see [REST APIs](https://docs.veracode.com/r/c_rest_intro).

To download and install HTTPie, see [https://httpie.org](https://httpie.org).

To learn more about HTTPie, you can run `http --help` and review the HTTPie documentation. You can also get tips and examples from [https://devhints.io/httpie](https://devhints.io/httpie).

HMAC authentication is the same for all calls, but the other aspects of authentication are specific to the API endpoint you want to call.

<p><span style="font-size: medium;">Debugging HTTPie with Python</span></p>

After installing the HMAC library, if you use HTTPie and receive an error that includes: 

```
pkg_resources.DistributionNotFound: The 'PySocks!=1.5.7,>=1.5.6; extra == "socks"' distribution was not found and is required by requests 
```

Run this command to debug it:

```shell
pip install "PySocks!=1.5.7,>=1.5.6"
```
