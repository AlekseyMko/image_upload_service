import multer from 'multer';
import path from 'path';
import { FileFormatError } from '../models/errors';
import MulterGoogleCloudStorage from 'multer-cloud-storage';
import * as process from 'process';
import { Request } from 'express';

export const storageEngine = new MulterGoogleCloudStorage({
  bucket: process.env.CLOUD_BUCKET,
  projectId: process.env.GCLOUD_PROJECT,
  hideFilename: false,
  uniformBucketLevelAccess: true,
  filename: (_req: Request, file: Express.Multer.File, cb: (error: null, name: string) => void) => {
    cb(null, file.originalname);
  },
});

export const multerLimits = {
  fileSize: 15 * 1024 * 1024, // no larger than 15MB
};
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
