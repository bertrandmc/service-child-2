import express from 'express';
const path = require('path');
import { routeHandler } from './route-handler';

const index = express();
index
  .disable('x-powered-by')
  .use(express.static(path.join(process.cwd(), "build/client")))
  .get('/PlacesToStay', routeHandler);

export default index;
