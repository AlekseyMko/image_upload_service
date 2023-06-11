import pino from 'pino';

const L = pino({
  name: process.env.APP_ID,
  level: process.env.LOG_LEVEL,
});

export default L;
