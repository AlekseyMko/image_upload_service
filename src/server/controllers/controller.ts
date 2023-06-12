import { NextFunction, Request, Response } from 'express';
import { InvalidFileError } from '../models/errors';
import { ImageResponse } from '../models/responses';
import Service from '../services/service';

export class Controller {
  upload(req: Request, res: Response, next: NextFunction): void {
    const files = req.files;

    if (files && files.length > 0) {
      res.json({});
    } else {
      next(InvalidFileError);
    }
  }

  async getImageList(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const fileNames = await Service.getImageList();
      const response: ImageResponse = {
        items: fileNames,
      };
      res.send(response);
    } catch (e) {
      next(e);
    }
  }

  async getImage(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const fileName = req.params['name'];
      const buffer = await Service.getImage(fileName);
      res.type('jpeg');
      res.end(buffer);
    } catch (e) {
      next(e);
    }
  }
}

export default new Controller();
