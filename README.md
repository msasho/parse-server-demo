# parse-server-demo

setup locally

```
npm install parse-server mongodb-runner
npx mongodb-runner start
npx parse-server --appId APPLICATION_ID --masterKey MASTER_KEY --databaseURI mongodb://127.0.0.1:50003/test
```

ダッシュボードの起動
npm install parse-dashboard
npx parse-dashboard --config dashboard-config.json

https://github.com/parse-community/Parse-Server#getting-started
