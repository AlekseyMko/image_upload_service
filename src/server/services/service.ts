import L from '../common/logger';
import { NotFoundError } from '../models/errors';
import FileStorage from '../database/file.storage';

class Service {
  async getImageList(): Promise<string[]> {
    L.info(Service, 'fetch all uploaded image names');
    const files = await FileStorage.listFiles();
    const fileNames = files.map((file) => file.name);
    L.debug(Service, `fileNames: ${fileNames}`);
    return fileNames;
  }

  async getImage(fileName: string): Promise<Buffer> {
    L.info(Service, `fetch image ${fileName}`);
    let buffer: Buffer;
    try {
      buffer = await FileStorage.downloadFile(fileName);
    } catch (e) {
      L.error(e);
      throw NotFoundError;
    }

    return buffer;
  }
}

export default new Service();
