import { Request, Response } from 'express';
import { InvalidFileError } from '../models/errors';
import { ImageResponse } from '../models/responses';
import Service from '../services/service';

export class Controller {
  upload(req: Request, res: Response): void {
    const files = req.files;

    if (files && files.length > 0) {
      res.json({});
    } else {
      throw InvalidFileError;
    }
  }

  getImageList(_req: Request, res: Response): void {
    const fileNames = Service.getImageList();

    const response: ImageResponse = {
      items: fileNames,
    };
    res.send(response);
  }

  getImage(req: Request, res: Response): void {
    const fileName = req.params['name'];
    const file = Service.getImage(fileName);

    res.download(file);
  }
}

export default new Controller();
