declare module 'parse-server' {
    import { Router } from 'express';

    export interface ParseServerOptions {
      databaseURI: string;
      cloud?: string;
      appId: string;
      masterKey: string;
      fileKey?: string;
      serverURL: string;
      liveQuery?: {
        classNames: string[];
      };
      [key: string]: any;
    }

    export class ParseServer {
      app: Router;
      constructor(options: ParseServerOptions);

      // サーバーを起動するメソッド
      start(): Promise<void>;

      // サーバーを停止するメソッド
      handleShutdown(): Promise<void>;

      // Expressミドルウェアを取得するメソッド
      expressRouter(): Router;

      // 設定を取得するメソッド
      config(): ParseServerOptions;

      // LiveQueryサーバーを作成する静的メソッド
      static createLiveQueryServer(httpServer: any): void;
    }

    // ParseクラウドコードのRequest型
    export interface ParseCloudRequest<T = any> {
      params: T;
      user?: Parse.User;
      installationId?: string;
      [key: string]: any;
    }

    // Parseクラウド関数の定義メソッド
    export function Cloud(fn: (req: ParseCloudRequest) => any): void;

    // その他の必要な型や関数があればここに追加
  }
