import express from 'express'
import {json_data} from './Controllers/get_data.js'

const app = express();
let port = process.env.PORT;

if (port == null || port == "") {
    port = 8000;
  }
  
// Establishing connection
app.listen(port);

// Defining get request at '/' route
app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(json_data, null, 2));
});