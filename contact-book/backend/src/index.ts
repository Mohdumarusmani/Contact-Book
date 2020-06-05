import modules from './modules';
import moduleAlias from 'module-alias';
moduleAlias.addAliases(modules)

import logger from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';

import {Params,Routes,ContactRoutes} from 'routes/index';
import {MongoDB} from 'database/index'

import {ENV, SERVER} from 'config/index';

import app from './app';

app.express.use(cors({
    origin: SERVER.APP_URL,
    credentials: true,
    optionsSuccessStatus: 200
}));

app.setStatic(path.join(__dirname,'public'));

app.express.use(bodyParser.json());
app.express.use(bodyParser.urlencoded({ extended: true })); // for parsing form data url
app.express.use(cookieParser());

const {NODE_ENV} = ENV;
if (NODE_ENV == 'development') {
    app.express.use(logger('dev'))
}

(async () => {
    app.mountRoutes(Params)
    app.mountRoutes(Routes);
    app.mountRoutes(ContactRoutes)

    app.mountDB(MongoDB)

    await app.start();   
})();

export default app.express;