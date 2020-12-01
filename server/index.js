var express = require('express');
// var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
// require('env').config();

var app = express();
var port = process.env.PORT|| 3000;

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(cors());
// app.use(bodyParser.json());
app.use(express.json());

const uri ="mongodb+srv://dafah-project:dafah123@cluster0.9lw2y.mongodb.net/Cluster0?retryWrites=true&w=majority" ;
mongoose.connect( uri , { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function() {
  console.log('MongoDB Connected!')
});

const addItemsRouter = require('./routes/addItems.js');
app.use('/addItems', addItemsRouter);
const addUserRouter = require('./routes/addUser.js');
app.use('/addUser', addUserRouter);
const loginRouter = require('./routes/login.js');
app.use('/login', loginRouter);


app.listen(port, function() {
  console.log('listening on port 3000!');
});