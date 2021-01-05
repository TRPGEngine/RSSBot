import 'reflect-metadata';

import { createConnection } from 'typeorm';
import { User } from './entity/User';
import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';
import { routes } from './routes';

createConnection()
  .then(async (connection) => {
    // console.log('Inserting a new user into the database...');
    // const user = new User();
    // user.firstName = 'Timber';
    // user.lastName = 'Saw';
    // user.age = 25;
    // await connection.manager.save(user);
    // console.log('Saved a new user with id: ' + user.id);

    // console.log('Loading users from the database...');
    // const users = await connection.manager.find(User);
    // console.log('Loaded users: ', users);

    // create koa app
    const app = new Koa();
    const router = new Router();

    // register all application routes
    routes.forEach((route) => router[route.method](route.path, route.action));

    // run app
    app.use(bodyParser());
    app.use(router.routes());
    app.use(router.allowedMethods());
    app.listen(9910);

    console.log('Koa application is up and running on port 9910');
  })
  .catch((error) => console.log(error));
