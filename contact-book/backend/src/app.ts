import express, {Application, Router} from 'express';

import {ErrorHandler, UndefinedRoute} from 'middlewares/index';

import {ENV} from 'config/index';
import {TRoute,TConnect} from 'types/index';

/**
 * A Factory class for express Application
 */
class App {
    public express: Application;
    public router: Router;
    public dbConnection: TConnect;

    private routes: TRoute[];

    constructor() {
        this.express = express();
        this.router = express.Router();
        this.routes = new Array<TRoute>();
        this.dbConnection = () => {}
    }

    public setStatic(path: string) {
        this.express.use(express.static(path));
    }

    public mountRoutes(routes: TRoute) {
        this.routes.push(routes);
    }

    public mountDB(connect : TConnect) {
        this.dbConnection = connect
    }

    public async start(port?: number) {
        // set the express and httpserver
        const app = this.express;

        // call every route
        this.routes.forEach((route) => {
            route(this.router);
        });
        app.use('/', this.router);

        // undefine handler middlewares
        app.use(UndefinedRoute);
        app.use(ErrorHandler);

        //start port
        port = port || ENV.PORT;
        app.listen(port, async () => {
            console.log(`🖥 Server is ready at port ${port}`);

            // connect to DB
            this.dbConnection(() => {
                console.log(`🗃 Successfully connected to Mongo DB`);
            })
        });
    }
}

export default new App();