import L from '../../common/logger';
import fs from 'fs';
import { uploadFolder } from '../middlewares/multer';
import { NotFoundError } from '../models/errors';

export class Service {
  getImageList(): string[] {
    L.info(Service, 'fetch all uploaded image names');
    const fileNames: string[] = [];
    fs.readdirSync(uploadFolder).forEach((file) => {
      fileNames.push(file);
    });
    L.debug(Service, `fileNames: ${fileNames}`);
    return fileNames;
  }

  getImage(fileName: string): string {
    L.info(Service, 'fetch image');
    const file = `${uploadFolder}/${fileName}`;
    L.debug(Service, `file: ${file}`);

    //check if file exists
    if (!fs.existsSync(file)) {
      L.debug(Service, `file: ${file} not exists`);
      throw NotFoundError;
    }

    return file;
  }
}

export default new Service();
