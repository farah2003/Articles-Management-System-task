import multer from 'multer';

export const upload = multer({
  dest: 'upload/',
  fileFilter: (req, file: any, cb) => {
    if (!(file.fieldname === 'image')) {
      cb(new Error(' image is required.'));
    }
    if (
      !(
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
      )
    ) {
      cb(new Error('image must be a tpye png/jpg/jpeg'));
    }

    cb(null, true);
  },
});
