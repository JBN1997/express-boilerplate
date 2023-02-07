import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import * as bodyParser from 'body-parser';
import { MethodRequest } from '@enums/methodRequest.enum';
import { EnvironmentConfigServer } from '@config/index';

class App {
   private static instance: App;
   private app: express.Application;
   private routes: Array<express.Router>;
   private port: number;

   constructor(port: number) {
      this.app = express();
      this.port = port;
      this.routes = new Array<express.Router>();

      this.initializeMiddlewares();
      this.initializeRoutes();
      this.listen();
   }

   public static getInstance() {
      const port = parseInt(EnvironmentConfigServer.SERVER.PORT);

      if (this.instance) return this.instance;

      this.instance = new App(port);
      return this.instance;
   }

   private initializeMiddlewares() {
      this.app.use(
         cors({
            origin: EnvironmentConfigServer.SERVER.CORS_ORIGIN,
            methods: [
               MethodRequest.GET,
               MethodRequest.POST,
               MethodRequest.DELETE,
               MethodRequest.UPDATE,
               MethodRequest.PUT,
               MethodRequest.PATCH,
            ],
         }),
         bodyParser.json(),
         morgan('dev'),
         helmet(),
      );
   }

   private initializeRoutes() {
      this.routes.forEach(({ route }) => {
         this.app.use('/' + route);
      });
   }

   private listen() {
      this.app.listen(this.port, () =>
         console.log(`Server inicializado na porta: ${this.port}`),
      );
   }
}

export default App;
