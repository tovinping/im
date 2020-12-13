"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var koa_1 = __importDefault(require("koa"));
var koa_router_1 = __importDefault(require("koa-router"));
var socket_io_1 = require("socket.io");
var fs = __importStar(require("fs"));
var koa2_cors_1 = __importDefault(require("koa2-cors"));
var app = new koa_1.default();
var server = require('http').createServer(app.callback());
var io = new socket_io_1.Server(server);
// socket连接允许跨域
// server.on('request', (req, res)=>{
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('Hello Http Server');
//   res.end();
// });
// 中间件
app.use(koa2_cors_1.default());
// 首页路由
var router = new koa_router_1.default();
router.get('/', function (ctx) {
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./index.html');
});
router.get('/test', function (ctx) {
    ctx.body = 'testAb';
});
app.use(router.routes());
// socket连接
io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
    socket.on('ping', function (cb) {
        console.log('ping');
        cb();
    });
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});
// 监听端口
server.listen(4000, { origins: '*' }, function () {
    console.log('listening on *:4000');
});
