import express from 'express';
import { ParseServer } from 'parse-server';

const app = express();

const parseServer = new ParseServer({
  databaseURI: 'mongodb://localhost:27017/dev',
  appId: 'myAppId',
  masterKey: 'myMasterKey',
  serverURL: 'http://localhost:1337/parse'
});

app.use('/parse', parseServer.app);

const port = 1337;
app.listen(port, () => {
  console.log(`Parse Server running on port ${port}`);
});
