import './common/env';
import Server from './server';

const port = parseInt(process.env.PORT ?? '8080');
export default new Server().listen(port);
