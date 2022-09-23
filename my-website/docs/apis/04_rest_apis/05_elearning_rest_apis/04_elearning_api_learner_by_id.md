---
"ft:title": "Get eLearning Learner Details with the REST API"
"ft:prettyUrl": "r_course_by_ID_API"
---
Use the eLearning API to return details, in JSON format, about an eLearning user for a specified user ID. For a list of user IDs in your organization, use the [`learners`](https://docs.veracode.com/r/r_elearning_users_API) endpoint.

<p><span style="font-size: medium;">Resource URL</span></p>

```
https://api.veracode.com/elearning/v1/learners/{user_id}
```

<p><span style="font-size: medium;">Parameters</span></p>

| Name                     | Query or Path Parameter | Type   | Description                       |
|--------------------------|-------------------------|--------|-----------------------------------|
| `user_id *` <br/> **Required** | Path                    | String | eLearning user unique identifier. |

<br>

<p><span style="font-size: medium;">HTTP Codes</span></p>

| HTTP Code | Description                                              | Type    |
|-----------|----------------------------------------------------------|---------|
| `200`       | Success. Returns an eLearning user for the specified ID. | Learner |
| `400`       | Invalid request.                                         | Null    |
| `401`       | Unauthorized request.                                    | Null    |
| `403`       | Access denied.                                           | Null    |
| `500`       | Server side error.                                       | Null    |

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
        
public class GetLearnerClient {
        
  // An API Id for authentication
  private final static String API_KEY = "API_KEY_GOES_HERE";
        
  // The secret key corresponding to the API Id
  private final static String API_SECRET = "API_SECRET_GOES_HERE";
        
  public static void main(String[] args) throws Exception {
        
       URI uri = URI.create("https://api.veracode.com/elearning/v1/learners/jsmith");
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
  "firstName": "John",
  "lastName": "Smith",
  "lastLogin": "2018-05-11T19:23:28.027Z",
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
```
