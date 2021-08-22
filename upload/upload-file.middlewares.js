const multer = require("multer");

const uploadImageSingle = () => {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "./public/images/avatar");
        }, //đường dẫn thư mục để lưu file
        filename: (req, file, cb) => {
            cb(null, (`${Date.now()}_${file.originalname}`).replace(/\s+/g, "_"));
        },
    });
    const upload = multer({ storage });
    return upload.single("avatar");
};

const uploadFileSingle = () => {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "./public/files/resume");
        }, //đường dẫn thư mục để lưu file
        filename: (req, file, cb) => {
            cb(null, (`${Date.now()}_${file.originalname}`).replace(/\s+/g, "_"));
        },
    });
    const upload = multer({ storage });
    return upload.single("resume");
};
module.exports = {
    uploadImageSingle,
    uploadFileSingle
};