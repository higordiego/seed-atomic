'use strict'
import express     	 from 'express'
import path      	 from 'path'
import morgan   	 from 'morgan'
import bodyParser  	 from 'body-parser'
import cors			 from 'cors'
import http 		 from 'http'
import cluster     	 from 'cluster'
import mongo 		 from './_config/mongoDB'

const app = express();

const jwt = require('./_config/jwtConfig')(express,app)


app.set('superSecret', '1a5H(qzO&1+!8M35tXvai3A*JF%Os]eOoG63/Oo+:1S(R[%x[js09UKDam0#85'); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());
//app.use(express.static(path.join(__dirname, '/public')));


app.use('/api', jwt);



app.set('port', (process.env.PORT || 3000));

const port = app.get('port')
const server = http.createServer(app);
require ('./modules/user/routes/index')(app)



server.listen(port, () => console.log('Servidor rodando na porta: %d', port))
