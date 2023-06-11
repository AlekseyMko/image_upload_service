import { NextFunction, Request, Response } from 'express';
import multer from 'multer';
import { GenericError } from '../models/errors';

export default function errorHandler(
  err: GenericError | multer.MulterError,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  const error = { message: err.message };
  if (err instanceof multer.MulterError) {
    res.status(400);
  } else {
    res.status(err.status || err.httpErrorCode?.status || 500);
  }
  res.json({ error });
}
