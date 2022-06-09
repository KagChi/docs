# Introduction

There is rate limits across API to prevent abuse and spam. Limits are applied to Bearer tokens (if they set on header) and user IP on a per route basis.

::: warning
User should handle rate limit request or their IP might get bans !
:::


## Header Format

For most API requests made, there is HTTP response headers containing the rate limit encountered during your request.

###### Rate limit header example
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 9
X-RateLimit-Reset: 60
```

- **X-RateLimit-Limit** - The number of requests that can be made
- **X-RateLimit-Remaining** - The number of remaining requests that can be made
- **X-RateLimit-Reset** - In seconds at which the rate limit resets

## Exceeding A Rate Limit
In the case that a rate limit is exceeded, the API will return a HTTP 429 response code with a JSON body. Your application should rely on the `Retry-After` header to determine when to retry the request.

###### Rate Limit Response Structure

| Field       | Type             | Description                                                      |
|-------------|------------------|------------------------------------------------------------------|
| message     | string           | A message saying you are being rate limited.                     |
| statusCode  | integer          | The number of status code received                               |

###### Example Exceeded User Rate Limit Response

```
< HTTP/1.1 429 TOO MANY REQUESTS
< Content-Type: application/json
< Retry-After: 59
{
  "message": "Too many requests",
  "statusCode": 429
}
```