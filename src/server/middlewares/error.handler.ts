import { NextFunction, Request, Response } from 'express';
import multer from 'multer';
import { HttpError } from '../models/errors';
import L from '../common/logger';

export default function errorHandler(
  err: HttpError | multer.MulterError,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  const error = { message: err.message };
  if (err instanceof multer.MulterError) {
    res.status(400);
  } else {
    res.status(err.status || 500);
  }
  L.error(error);
  res.json({ error });
}
