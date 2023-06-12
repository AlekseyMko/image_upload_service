import { Bucket, Storage } from '@google-cloud/storage';
import L from '../common/logger';

class FileStorage {
  storage: Storage;
  bucket: Bucket;

  constructor() {
    this.storage = new Storage();
    L.info(`Storage bucket: ${process.env.CLOUD_BUCKET}`);
    this.bucket = this.storage.bucket(process.env.CLOUD_BUCKET ?? '');
  }

  async listFiles() {
    const [files] = await this.storage.bucket(this.bucket.name).getFiles();
    return files;
  }

  async downloadFile(fileName: string): Promise<Buffer> {
    return (await this.storage.bucket(this.bucket.name).file(fileName).download())[0];
  }
}

export default new FileStorage();
