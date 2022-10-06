require('dotenv').config()

console.log(`${process.env.S3_ENDPOINT}`);
var Minio = require('minio')

var minioClient = new Minio.Client({
    endPoint: `${process.env.S3_ENDPOINT}`,
    // port: 9000,
    useSSL: true,
    accessKey: `${process.env.S3_ACCESS_KEY}`,
    secretKey: `${process.env.S3_SECRET_KEY}`
});


minioClient.listBuckets(function (err, buckets) {
    if (err) return console.log(err)
    console.log('buckets :', buckets)
})


//download file from "braingeneers" bucket
minioClient.fGetObject('braingeneers', 'imaging/2022-03-23-i-UCB-bio/images/2022-03-23T21:55:43/cameraG21/1.jpg', 'test.jpg', function (err) {
    if (err) return console.log(err)
    console.log('File downloaded successfully.')
})

// https://s3-west.nrp-nautilus.io/braingeneers/imaging/2022-03-23-i-UCB-bio/images/2022-03-23T21:55:43/cameraG21/1.jpg