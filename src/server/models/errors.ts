type ErrorCode = 200 | 400 | 404;

export class HttpError extends Error {
  status: ErrorCode;
  message: string;

  constructor(status: ErrorCode, message: string) {
    super();
    this.status = status;
    this.message = message;
  }
}

export const FileFormatError = new HttpError(400, 'Wrong file format');

export const InvalidFileError = new HttpError(400, 'Please upload a valid file');

export const NotFoundError = new HttpError(404, 'File not found');
