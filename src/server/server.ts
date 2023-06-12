import express, { Request, Response } from 'express';
import path from 'path';
import http from 'http';
import os from 'os';
import * as OpenApiValidator from 'express-openapi-validator';
import redoc from 'redoc-express';
import { checkFileType, multerLimits, storageEngine } from './middlewares/multer';
import errorHandler from './middlewares/error.handler';
import L from './common/logger';
import router from './controllers/router';

const app = express();

export default class ExpressServer {
  constructor() {
    const apiSpec = path.join(__dirname, 'api.yml');

    app.get(
      '/docs',
      redoc({
        title: 'Image Handling Microservice API Docs',
        specUrl: 'docs/api.yml',
      })
    );
    app.get('/docs/api.yml', (_req: Request, res: Response) => {
      res.sendFile(apiSpec);
    });

    app.use(
      OpenApiValidator.middleware({
        apiSpec,
        validateResponses: true,
        validateRequests: {
          coerceTypes: true,
        },
        fileUploader: {
          storage: storageEngine,
          limits: multerLimits,
          fileFilter: (_req, file, cb) => {
            checkFileType(file, cb);
          },
        },
      })
    );

    app.use('/api', router);

    app.use(errorHandler);
  }

  listen(port: number): http.Server {
    const welcome = (p: number) => (): void =>
      L.info(
        `up and running in ${
          process.env.NODE_ENV || 'development'
        } @: ${os.hostname()} on port: ${p}}`
      );

    return http.createServer(app).listen(port, welcome(port));
  }
}
