import { https } from 'firebase-functions';

export interface GenericError {
  status?: number;
  httpErrorCode?: { status: number };
  message: string;
}

export const FileFormatError = new https.HttpsError('invalid-argument', 'Wrong file format');

export const InvalidFileError = new https.HttpsError(
  'invalid-argument',
  'Please upload a valid file'
);

export const NotFoundError = new https.HttpsError('not-found', 'File not found');
