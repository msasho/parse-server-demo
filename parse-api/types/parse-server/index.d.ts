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
      app: Router; // Express Router型を使用
      constructor(options: ParseServerOptions);
      static createLiveQueryServer(httpServer: any): void;
    }
  }
