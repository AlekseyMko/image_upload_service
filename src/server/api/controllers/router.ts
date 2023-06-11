import express from 'express';
import controller from './controller';

export default express
  .Router()
  .post('/upload', controller.upload)
  .get('/images', controller.getImageList)
  .get('/images/:name', controller.getImage);
