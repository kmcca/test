---
"ft:title": "List eLearning Users with the REST API"
"ft:prettyUrl": "r_elearning_users_API"
---
Use the eLearning API to return a list of IDs for the eLearning users in your organization.

<p><span style="font-size: medium;">Resource URL</span></p>

```
https://api.veracode.com/elearning/v1/learners
```

<p><span style="font-size: medium;">Parameters</span></p>

| Name    | Query or Path Parameter | Type    | Description                                                                       |
|---------|-------------------------|---------|-----------------------------------------------------------------------------------|
| `user_id` | Query                   | String  | Optional. User identifiers. Repeat query parameters to specify multiple values.   |
| `page`    | Query                   | Integer | Optional. Page number. Default is `0`.                                              |
| `size`    | Query                   | Integer | Optional. Page size. Default is `50` users per page, maximum is `500` users per page. |

<br>

<p><span style="font-size: medium;">HTTP Codes</span></p>

| HTTP Code | Description                                   | Type   |
|-----------|-----------------------------------------------|--------|
| `200`       | Success. Returns an array of eLearning users. | Object |
| `400`       | Invalid request.                              | Null   |
| `403`       | Access denied.                                | Null   |
| `404`       | Not found.                                    | Null   |
| `500`       | Server-side error.                            | Null   |

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
      
public class GetLearnersClient {
      
    // An API Id for authentication
    private final static String API_KEY = "API_KEY_GOES_HERE";
      
    // The secret key corresponding to the API Id
    private final static String API_SECRET = "API_SECRET_GOES_HERE";
      
    public static void main(String[] args) throws Exception {
      
        URI uri = URI.create("https://api.veracode.com/elearning/v1/learners");
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

This example response conforms to the Hypertext Application Language content type `application/hal+json`, which includes a link to the `reportcards` endpoint for the given user.

```
HTTP/1.1 200 OK
Content-Type: application/json
```

```json
{
  "_embedded": {
    "learners": [
      {
        "firstName": "John",
        "lastName": "Smith",
        "lastLogin": "2018-05-11T20:05:55.030Z",
        "_embedded": {
          "curricula": [
            {
              "curriculumName": "AllReqd"
            }
          ]
        },
        "_links": {
          "reportcards": {
            "templated": true,
            "href": "https://api.veracode.com/elearning/v1/reportcards?user_id=jsmith{&course_id,page,size}"
          },
          "self": {
            "href": "https://api.veracode.com/elearning/v1/learners/jsmith"
          }
        },
        "userId": "jsmith",
        "email": "jsmith@example.com"
      }
    ]
  },
  "_links": {
    "self": {
      "templated": true,
      "href": "https://api.veracode.com/elearning/v1/learners?page=0&size=50{&user_id}"
    }
  },
  "page": {
    "number": 0,
    "size": 50,
    "totalPages": 1,
    "totalElements": 1
  }
}
```
