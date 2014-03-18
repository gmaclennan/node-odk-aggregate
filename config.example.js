module.exports = {
    mediaStore: "s3",
    formStore: "github",
    github: {
        user: "USERNAME FOR GITHUB REPO",
        repo: "NAME OF GITHUB REPO",
        branch: "BRANCH TO STORE DATA"
    },
    s3: {
        bucket: "S3 BUCKET NAME (Your must have put access to this bucket)"
    },
    filesystem: {
        path: "LOCAL FILESYSTEM PATH WITH TRAILING SLASH e.g, 'odk_data/'"
    }
};