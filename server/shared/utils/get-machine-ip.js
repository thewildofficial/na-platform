'use strict';

const path = require('path');
function getAppConfigPath() {
    let currentPath = __dirname;
    let folderArray = currentPath.split(path.sep);
    let rootPath = folderArray.slice(0, folderArray.length - 3).join(path.sep);

    // TODO Refactor this to work independently of the locations of the files(script / app.config)
    let appConfigPath = rootPath + path.sep + ['src', 'shared', 'config', 'app.config.ts'].join(path.sep);
    return appConfigPath;
}

let targetIp = '';

var os = require('os');
var netInterfaces = os.networkInterfaces();

Object.keys(netInterfaces).forEach(function (interfaceName) {
    var alias = 0;

    netInterfaces[interfaceName].forEach(function (netInterface) {
        if ('IPv4' !== netInterface.family || netInterface.internal !== false) {

            // Skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
            return;
        }

        if (alias >= 1) {

            // This single interface has multiple ipv4 addresses
            console.log(interfaceName + ':' + alias, netInterface.address);
        } else {

            // This interface has only one ipv4 address
            console.log(netInterface.address);
            targetIp = netInterface.address;
        }
        ++alias;
    });
});

const serverString = process.env.ENV === 'production' ?
    'https://api.visual.school' : `http://${targetIp}:8080`;

const domainString = process.env.ENV === 'production' ?
    'http://my.visual.school' : `http://${targetIp}:3000`;

let configObj = {
    api: `${serverString}/api`,
    apiMobile: 'http://' + targetIp + ':8080/api',
    assets: `http://${targetIp}:8080/assets`,
    isProd: process.env.ENV === 'production',
    domain: domainString,
};

let configData = 'export let APP_CFG = ';
configData += JSON.stringify(configObj, null, 4) + ';';
configData = configData.replace(/\"([^(\")"]+)\":/g, '$1: '); // Removes quotes from keys
configData = configData.replace(/"/g, '\''); // Ts-lint " should be '
configData += '\n' + '// APP_CFG generated from get-machine-ip.js';

const fs = require('fs');
fs.writeFile(getAppConfigPath(), configData, 'utf8', function (err) {
    if (err) return console.log(err);
});
