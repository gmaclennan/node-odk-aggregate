module.exports = {
    mediaStore: "s3",
    formStore: "github",
    github: {
        user: "digidem",
        repo: "fediquep-data",
        branch: "master"
    },
    s3: {
        bucket: "images.fediquep.org"
    },
    filesystem: {
        path: "odk_data/"
    }
};