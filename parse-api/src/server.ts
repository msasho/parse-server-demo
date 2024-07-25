import express from 'express';
import { ParseServer } from 'parse-server';

const app = express();

const parseServer = new ParseServer({
  databaseURI: 'mongodb://127.0.0.1:50003/test',
  appId: 'APPLICATION_ID',
  masterKey: 'MASTER_KEY',
  serverURL: 'http://localhost:1337/parse'
});

app.use('/parse', parseServer.app);

const port = 1337;

// サーバーの起動を待つ
parseServer.start().then(() => {
  app.listen(port, () => {
    console.log(`Parse Server running on port ${port}`);
  });
}).catch((error) => {
  console.error('Failed to start Parse Server:', error);
});
