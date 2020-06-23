import { ServerApp } from './server-app';
import { SERVER_CFG } from '../config/server.config';

console.log('Server starting...');
var serverApp = new ServerApp();
serverApp.listen(SERVER_CFG.port);