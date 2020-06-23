/**
 * Copy `config/app-sample.config.tsx` to src/shared/config
 * Rename to "app.config.tsx"
 * Replace the IP with own IP
 * Change MOCK_APP_CFG to APP_CFG
 */
export let MOCK_APP_CFG = {
    domain: 'http://localhost:8080',
    api: 'http://localhost:8080/api',
    apiMobile: 'http://192.168.1.100:8080/api',
    assets: 'http://192.168.1.100:8080/assets',
    isProd: false,
};
