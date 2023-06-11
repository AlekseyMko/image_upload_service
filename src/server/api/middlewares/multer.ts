import multer from 'multer';
import path from 'path';
import { FileFormatError } from '../models/errors';

export const uploadFolder = './uploaded_images';
export const storageEngine = multer.diskStorage({
  destination: uploadFolder,
  filename: (_req, file, cb) => {
    cb(null, file.originalname);
  },
});

export const multerLimits = { fileSize: 15000000 };
export const checkFileType = (file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  //Allowed file extensions
  const fileTypes = /jpeg|jpg|png/;

  //check extension names
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());

  const mimeType = fileTypes.test(file.mimetype);

  if (mimeType && extName) {
    return cb(null, true);
  } else {
    cb(FileFormatError);
  }
};
