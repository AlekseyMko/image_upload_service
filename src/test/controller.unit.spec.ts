import request from 'supertest';
import Server from '../server';
import http from 'http';

describe('Image Handling Microservice', () => {
  jest.setTimeout(100000);
  let server: http.Server;

  beforeAll(() => {
    server = Server;
  });

  afterAll(() => {
    server.close();
  });

  it('should upload jpeg images', () =>
    request(server)
      .post('/api/upload')
      .attach('image', 'src/test/imageJPG.jpeg')
      .expect('Content-Type', /json/)
      // .expect(200)
      .expect((res) => expect(res.body).toEqual({})));

  it('should upload png images', () =>
    request(server)
      .post('/api/upload')
      .attach('image', 'src/test/imagePNG.png')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect((res) => expect(res.body).toEqual({})));

  it('should not upload over 15MB images', () =>
    request(server)
      .post('/api/upload')
      .attach('image', 'src/test/imageBIG.jpeg')
      .expect('Content-Type', /json/)
      // .expect(413)
      .expect((res) =>
        expect(res.body).toEqual({
          error: {
            message: 'File too large',
          },
        })
      ));

  it('should not upload other files', () =>
    request(server)
      .post('/api/upload')
      .attach('image', 'src/test/imageWEBP.webp')
      .expect('Content-Type', /json/)
      .expect(500)
      .expect((res) =>
        expect(res.body).toEqual({
          error: {
            message: 'Wrong file format',
          },
        })
      ));

  it('should retrieve uploaded image list', () =>
    request(server)
      .get('/api/images')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect((res) => {
        expect(res.body.items).toEqual(expect.arrayContaining([expect.anything()]));
      }));

  it('should retrieve image', () =>
    request(server)
      .get('/api/images/imageJPG.jpeg')
      .expect('Content-Type', /image\/jpeg/)
      .expect(200)
      .expect((res) => expect(res.header['content-length']).toEqual('178343')));

  it('should respond with error when image not found', () =>
    request(server)
      .get('/api/images/noImage.jpeg')
      .expect('Content-Type', /json/)
      .expect(404)
      .expect((res) =>
        expect(res.body).toEqual({
          error: {
            message: 'File not found',
          },
        })
      ));
});
