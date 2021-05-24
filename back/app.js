import express from 'express';
import morgan from 'morgan';
import routes from './routes/register.js';
import cors from "cors";
import session from 'express-session'
import FileStoreObj from 'session-file-store'
const FileStore = FileStoreObj(session)

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(morgan('dev'));
    this.server.use(cors());
    this.server.use(
      session({
        store: new FileStore(),
        key: "user_sid",
        secret: 'toxic',
        resave: false,
        saveUninitialized: false,
        cookie: {
          expires: 6000000,
        },
      })
    );
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
