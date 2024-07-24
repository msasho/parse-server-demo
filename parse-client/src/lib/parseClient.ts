import Parse from 'parse';

if (!process.env.NEXT_PUBLIC_PARSE_APP_ID || !process.env.NEXT_PUBLIC_PARSE_SERVER_URL) {
  throw new Error('Parse Server configuration is missing');
}

Parse.initialize(process.env.NEXT_PUBLIC_PARSE_APP_ID);
Parse.serverURL = process.env.NEXT_PUBLIC_PARSE_SERVER_URL;

export default Parse;
