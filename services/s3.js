const { S3Client, PutObjectCommand, DeleteObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const keys = require('../config/keys');

const accessKeyId = keys.accessKeyId
const region = keys.awsRegion
const secretAccessKey = keys.awsSecretAccessKey
const bucketName = keys.bucketName

const s3Client = new S3Client({
    region,
    credentials: {
        accessKeyId,
        secretAccessKey
    }
})


function uploadFile(fileBuffer, fileName, mimetype) {
    const uploadParams = {
        Bucket: bucketName,
        Body: fileBuffer,
        Key: fileName,
        ContentType: mimetype
    }
    return s3Client.send(new PutObjectCommand(uploadParams));
}
function deleteSeveral(array) {
    if (Array.isArray(array)) {
        array.forEach(element => {
            const fn1 = "eyepics/" +element.picPath + '_resized'
            const fn2 = "eyepics/" +element.picPath + '_raw'
            deleteFile(fn1)
            deleteFile(fn2)
        });
    }
}


function deleteFile(fileName) {
    const deleteParams = {
        Bucket: bucketName,
        Key: fileName,
    }

    return s3Client.send(new DeleteObjectCommand(deleteParams));
}

async function getObjectSignedUrl(key) {
    const params = {
        Bucket: bucketName,
        Key: key
    }

    // https://aws.amazon.com/blogs/developer/generate-presigned-url-modular-aws-sdk-javascript/
    const command = new GetObjectCommand(params);
    const seconds = 60
    const url = await getSignedUrl(s3Client, command, { expiresIn: seconds });
    return url
}

module.exports = {
    uploadFile,
    deleteFile,
    deleteSeveral,
    getObjectSignedUrl

};