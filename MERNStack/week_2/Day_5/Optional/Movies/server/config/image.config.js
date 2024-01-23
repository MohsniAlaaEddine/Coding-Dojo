const multer = require('multer');
const { v4: uuidv4 } = require('uuid')
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../clients/public/images');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + uuidv4() + path.extname(file.originalname));
    },
});

const upload = multer({ storage });

module.exports = upload
