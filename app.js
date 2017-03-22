const express = require('express')
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const http = require('http')
const uws = require('uws');
const socket = require('socket.io')
const mongo = require('./_config/mongodb')
const app = express();

const jwt = require('./_config/jwtConfig')(express, app)

app.set('superSecret', '1a5H(qzO&1+!8M35tXvai3A*JF%Os]eOoG63/Oo+:1S(R[%x[js09UKDam0#85');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());
//app.use(express.static(path.join(__dirname, '/public')));

app.use('/api', jwt);

const port = 3000;

require('./routes')(app)

const server = http.createServer(app)

const io = socket.listen(server);

io.ws = new uws.Server({
    perMessageDeflate: false
});

require('./_quarks/socket-io')(io)

server.listen(3000, () => console.log(`Init Server to port: ${port} `));