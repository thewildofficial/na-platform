export const SERVER_CFG = {
    port: 8080, // parseInt(process.env.PORT) || 8080,
    databaseUrl: process.env.MONGO_PATH || 'mongodb://localhost:27017/naplatform',
    testEnvPort: 8090,
    secret: 'asdkjk213kljsad#ksajdlkasd214%kasdak$lkjadskln#lkdaslkdmaS$',
};