import AWS from 'aws-sdk';

const s3 = new AWS.S3({
  accessKeyId: process.env.WASABI_ACCESS_KEY,
  secretAccessKey: process.env.WASABI_SECRET_KEY,
  endpoint: process.env.WASABI_ENDPOINT,
  region: process.env.WASABI_REGION,
  s3ForcePathStyle: true
});

const BUCKET = process.env.WASABI_BUCKET;

export const uploadFile = async (file, key) => {
  const params = {
    Bucket: BUCKET,
    Key: key,
    Body: file.buffer || file,
    ContentType: file.mimetype || 'application/octet-stream',
    ACL: 'public-read'
  };

  return new Promise((resolve, reject) => {
    s3.upload(params, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

export const getFileUrl = (key) => {
  return `${process.env.WASABI_ENDPOINT}/${BUCKET}/${key}`;
};

export const deleteFile = async (key) => {
  const params = {
    Bucket: BUCKET,
    Key: key
  };

  return new Promise((resolve, reject) => {
    s3.deleteObject(params, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

export const generateThumbnailKey = (projectId) => {
  return `thumbnails/${projectId}/${Date.now()}.jpg`;
};

export const generateReleaseKey = (projectSlug, version, fileType) => {
  return `releases/${projectSlug}/${version}/release.${fileType}`;
};

export const generateScreenshotKey = (projectId, index) => {
  return `screenshots/${projectId}/${index}/${Date.now()}.jpg`;
};
