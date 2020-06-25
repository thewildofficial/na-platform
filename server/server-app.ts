import { Example } from './example/example';
import { Shared } from './shared/shared';
import { SERVER_CFG } from '../config/server.config';
import * as bodyParser from 'body-parser';
import * as log from 'colors';
import * as cors from 'cors';
import * as express from 'express';
import { Server } from 'http';
import * as mongoose from 'mongoose';
import { Feedback } from './feedback/feedback';

// Compiler and app
let app: express.Express = express();
let server: Server;
let waitForMongoDbConnection: Promise<{}>;

export class ServerApp {

    // Modules
    public example: Example;
    public shared: Shared;
    public feedback: Feedback;

    constructor() {
        this.setupBodyParser();
        this.setupCors();
        this.initModules(); // <!> Init modules and webapis after body parser (routes order is important).
        this.connectToDatabase();
        this.servePublicFiles();
    }

    public listen(PORT: number, callback?: () => {}): void {
        waitForMongoDbConnection.then(
            () => server = app.listen(PORT, callback),
        );
    }

    public close(callback: () => {}): void {
        server.close(callback);
    }

    private initModules(): void {
        this.shared = new Shared(app);
        this.example = new Example(app);
        this.feedback = new Feedback(app);
    }

    /** Connect to the mongo database */
    private connectToDatabase(): void {

        // Other parts of the code need to wait for the mongoose connection
        waitForMongoDbConnection = new Promise((resolve, reject) => {

            mongoose.connect(SERVER_CFG.databaseUrl, (err: Error) => {
                if (err) {
                    console.log(log.red(err.message));
                    reject();
                } else {
                    mongoose.connection.db.listCollections({})
                        .next((err) => {
                            if (err) {
                                console.log('Something went wrong!');
                            } else {
                                console.log(log.green('Connection to MongoDB successfully'));
                                resolve();
                            }
                        });
                }
            });
        });
    }

    /** Parse PUT req.body instead of getting undefined */
    private setupBodyParser() {
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
    }

    private setupCors() {
        app.use(cors());
    }

    /** Expose static resources to the public. */
    private servePublicFiles() {
        app.use('/assets', express.static(__dirname + '/assets'));
        app.use('/media', express.static(__dirname + '/media'));
    }
}
