## Minimal Example of using S3 with NodeJS
Specifically set up for use with PRP Minio instance

Assumes you have a .env file in your project root with the following variables:

```
S3_ACCESS_KEY= your-access-key
S3_SECRET_KEY= your-secret-key
S3_ENDPOINT= endpoint-of-desired-s3-instance
```

This should allow you to build javascript based websites that can access objects in the PRP Minio instance.

Example project downloads a sample image from one of our datasets. Note that this is already a public readable image, so successful download is not confirmation of proper access credentials.