---
"ft:title": "HMAC Signing Example in Java"
"ft:prettyUrl": "c_hmac_signing_example"
---
This is a Java example of how to enable HMAC signing within your application. The example implementation of the HMAC signing algorithm allows you to authenticate with the Veracode APIs.

<p><span style="font-size: medium;"><code>HmacRequestSigner.java</code></span></p>

```java
package com.veracode.hmac_request_signing;

import java.io.UnsupportedEncodingException;
import java.net.URL;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.Locale;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;

public final class HmacRequestSigner {

    // Included in the signature to inform Veracode of the signature version.
    private static final String VERACODE_REQUEST_VERSION_STRING = "vcode_request_version_1";

    // Expected format for the unencrypted data string.
    private static final String DATA_FORMAT = "id=%s&host=%s&url=%s&method=%s";

    // Expected format for the Authorization header.
    private static final String HEADER_FORMAT = "%s id=%s,ts=%s,nonce=%s,sig=%s";

    // Expect prefix to the Authorization header.
    private static final String VERACODE_HMAC_SHA_256 = "VERACODE-HMAC-SHA-256";

    // HMAC encryption algorithm.
    private static final String HMAC_SHA_256 = "HmacSHA256";

    // Charset to use when encrypting a string.
    private static final String UTF_8 = "UTF-8";

    // A cryptographically secure random number generator.
    private static final SecureRandom secureRandom = new SecureRandom();

    // Private constructor.
    private HmacRequestSigner() {
        /*
         * This is a utility class that should only be accessed through its
         * static methods.
         */
    }

    /**
     * Entry point for HmacRequestSigner. Returns the value for the
     * Authorization header for use with Veracode APIs when provided an API ID,
     * secret key, and target URL.
     *
     * @param id
     *            An API id for authentication
     * @param key
     *            The secret key corresponding to the API ID
     * @param url
     *            The URL of the called API, including query parameters
     *
     * @return The value to be put in the Authorization header
     *
     * @throws UnsupportedEncodingException
     * @throws IllegalStateException
     * @throws NoSuchAlgorithmException
     * @throws InvalidKeyException
     */
    public static String getVeracodeAuthorizationHeader(final String id, final String key, final URL url, final String httpMethod)
            throws InvalidKeyException, NoSuchAlgorithmException, IllegalStateException, UnsupportedEncodingException {
        final String urlPath = (url.getQuery() == null) ? url.getPath() : url.getPath().concat("?").concat(url.getQuery());
        final String data = String.format(DATA_FORMAT, id, url.getHost(), urlPath, httpMethod);
        final String timestamp = String.valueOf(System.currentTimeMillis());
        final String nonce = DatatypeConverter.printHexBinary(generateRandomBytes(16)).toLowerCase(Locale.US);
        final String signature = getSignature(key, data, timestamp, nonce);
        return String.format(HEADER_FORMAT, VERACODE_HMAC_SHA_256, id, timestamp, nonce, signature);
    }

    /*
     * Generate the signature expected by the Veracode platform by chaining
     * encryption routines in the correct order.
     */
    private static String getSignature(final String key, final String data, final String timestamp, final String nonce)
            throws InvalidKeyException, NoSuchAlgorithmException, IllegalStateException, UnsupportedEncodingException {
        final byte[] keyBytes = DatatypeConverter.parseHexBinary(key);
        final byte[] nonceBytes = DatatypeConverter.parseHexBinary(nonce);
        final byte[] encryptedNonce = hmacSha256(nonceBytes, keyBytes);
        final byte[] encryptedTimestamp = hmacSha256(timestamp, encryptedNonce);
        final byte[] signingKey = hmacSha256(VERACODE_REQUEST_VERSION_STRING, encryptedTimestamp);
        final byte[] signature = hmacSha256(data, signingKey);
        return DatatypeConverter.printHexBinary(signature).toLowerCase(Locale.US);
    }

    // Encrypt a string using the provided key.
    private static byte[] hmacSha256(final String data, final byte[] key)
            throws NoSuchAlgorithmException, InvalidKeyException, IllegalStateException, UnsupportedEncodingException {
        final Mac mac = Mac.getInstance(HMAC_SHA_256);
        mac.init(new SecretKeySpec(key, HMAC_SHA_256));
        return mac.doFinal(data.getBytes(UTF_8));
    }

    // Encrypt a byte array using the provided key.
    private static byte[] hmacSha256(final byte[] data, final byte[] key)
            throws NoSuchAlgorithmException, InvalidKeyException {
        final Mac mac = Mac.getInstance(HMAC_SHA_256);
        mac.init(new SecretKeySpec(key, HMAC_SHA_256));
        return mac.doFinal(data);
    }

    // Generate a random byte array for cryptographic use.
    private static byte[] generateRandomBytes(final int size) {
        final byte[] key = new byte[size];
        secureRandom.nextBytes(key);
        return key;
    }

}
```

<p><span style="font-size: medium;"><code>Main.java</code></span></p>

```java
package com.veracode.hmac_request_signing;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.security.InvalidKeyException;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import java.security.cert.X509Certificate;

import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSession;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;

import org.json.JSONException;
import org.json.JSONObject;

public class Main {

    private static final String URL_BASE = "api.veracode.com";
    private static final String URL_PATH = "/appsec/v1/applications/";
    private static final String GET = "GET";
    private static final String APP_GUID = "8b86411e-65f9-4224-948a-64559c777d10";
    private static final String ACCESS_KEY_ID = "dbb6f2a2ed0b6890bbd32e949f72c8c8";
    private static final String SECRET_ACCESS_KEY = "530da152f87e5530c82f786907fbc74b09a6894785a78bab3891632ba69325400a40713bdc11d2a6d2d1c3969431281c0a73f455a53c0ed5ea0756e9c54f366c";

    /**
     * The main method for our demo.  This makes a simple API call using our example HMAC signing class
     * and writes the response to the output stream.
     *
     * @param args command line arguments - ignored
     */
    public static void main(final String[] args) {
        try {
            /*
             * Combine the URL base with the specific URL endpoint we wish to access.
             * This is REST, so the GUID we are accessing is in the URL.
             */
            final URL applicationsApiUrl = new URL("https://" + URL_BASE + URL_PATH + APP_GUID);

            /*
             * Now we use the url above and our example HMAC signer class to generate a Veracode HMAC header for later use.
             */
            final String authorizationHeader = HmacRequestSigner.getVeracodeAuthorizationHeader(ACCESS_KEY_ID, SECRET_ACCESS_KEY, applicationsApiUrl, GET);

            /*
             * Here we are using Java built in HTTPS protocols to handle making a call to the API's URL.
             * We also set the request method to GET.
             */
            final HttpsURLConnection connection = (HttpsURLConnection) applicationsApiUrl.openConnection();
            connection.setRequestMethod(GET);

            /*
             * This is where we add the Authorization header with the value returned by our example HMAC signer class.
             */
            connection.setRequestProperty("Authorization", authorizationHeader);

            /*
             * Now we just need to make the actual call by opening up the response stream and read from it.
             */
            try (InputStream responseInputStream = connection.getInputStream()) {
                readResponse(responseInputStream);
            }
        } catch (InvalidKeyException | NoSuchAlgorithmException | IllegalStateException | IOException e) {
            e.printStackTrace();
        }
    }

    /*
     * A simple method to read an input stream (containing JSON) to System.out.
     */
    private static void readResponse(InputStream responseInputStream) throws IOException, JSONException {
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        byte[] responseBytes = new byte[16384];
        int x = 0;
        while ((x = responseInputStream.read(responseBytes, 0, responseBytes.length)) != -1) {
            outputStream.write(responseBytes, 0, x);
        }
        outputStream.flush();
        System.out.println((new JSONObject(outputStream.toString())).toString(4));
    }

}
```
