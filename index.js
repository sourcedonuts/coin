const INTERVAL_LIVE = 5000;
const http = require('http');
const server = http.createServer();

function live() {
    server.listen();
}

function startLive() {
    live();
    setInterval(live, INTERVAL_LIVE);
}
