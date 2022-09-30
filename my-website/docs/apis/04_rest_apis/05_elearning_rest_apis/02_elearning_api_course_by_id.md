---
"ft:title": "Get an eLearning Course by ID with the REST API"
"ft:prettyUrl": "r_course_by_ID_API"
---
Use the eLearning API to return the name of a course, in JSON format, for the specified course ID. For a list of course IDs available to your organization, use the [`courses`](https://docs.veracode.com/r/r_available_courses) endpoint.

<p><span style="font-size: medium;">Resource URL</span></p>

```
https://api.veracode.com/elearning/v1/courses/{course_id}
```

<p><span style="font-size: medium;">Parameters</span></p>

| Name                            | Query or Path Parameter | Type   | Description               |
|---------------------------------|-------------------------|--------|---------------------------|
| `course_id *`<br/> **Required** | Path                    | String | Course unique identifier. |

<br>

<p><span style="font-size: medium;">HTTP Codes</span></p>

| HTTP Code | Description                                     | Type   |
|-----------|-------------------------------------------------|--------|
| `200`     | Success. Returns a course for the specified ID. | Course |
| `400`     | Invalid request.                                | Null   |
| `404`     | Not found.                                      | Null   |
| `403`     | Access denied.                                  | Null   |
| `500`     | Server-side error.                              | Null   |

<p><span style="font-size: medium;">Example Request</span></p>

This example assumes you have correctly configured your credentials and configured any required HMAC authentication libraries.

```java
import java.net.URI;
        
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.json.JSONObject;
        
import com.veracode.security.apisigning.ClientCryptoLib;
        
public class GetCourseClient {
        
    // An API Id for authentication
    private final static String API_KEY = "API_KEY_GOES_HERE";
        
    // The secret key corresponding to the API Id
    private final static String API_SECRET = "API_SECRET_GOES_HERE";
        
    public static void main(String[] args) throws Exception {
        
        URI uri = URI.create("https://api.veracode.com/elearning/v1/courses/CRLF");
        String authHeader = ClientCryptoLib.calculateAuthorizationHeader(ClientCryptoLib.VERACODE_HMAC_SHA_256, API_KEY,
          API_SECRET, uri.getHost(), uri.getPath(), HttpGet.METHOD_NAME);
        
        HttpGet request = new HttpGet(uri);
        request.addHeader("Authorization", authHeader);
        
        CloseableHttpResponse response = HttpClients.createDefault().execute(request);
        HttpEntity entity = response.getEntity();
        JSONObject json = new JSONObject(EntityUtils.toString(entity, "UTF-8"));
        
        System.out.println(json.toString(4));
    }
}
```

<p><span style="font-size: medium;">Example Response</span></p>

This example response conforms to the Hypertext Application Language content type `application/hal+json`, which includes a link to the `reportcards` endpoint for the given course.

```
HTTP/1.1 200 OK
Content-Type: application/json
```

```json
{
  "_links": {
    "reportcards": {
      "templated": true,
      "href": "https://api.veracode.com/elearning/v1/reportcards?course_id=CRLF{user_id,page,size}"
    },
    "self": {
      "href": "https://api.veracode.com/elearning/v1/courses/CRLF"
    }
  },
  "name": "AppSec Tutorials - CRLF Injection",
  "courseId": "CRLF"
}
```