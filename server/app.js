const express = require('express')
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const http = require('http')
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

app.use((req, res, next)=>{
  res.status(404).json({error: 'Route not found'});
})

const server = http.createServer(app)

const io = socket.listen(server);

io.engine.ws = new (require('uws').Server)({
    noServer: true,
    clientTracking: false,
    perMessageDeflate: false
});

require('./_quarks/socket-io')(io)

server.listen(3000, () => console.log(`Init Server to port: ${port} `));