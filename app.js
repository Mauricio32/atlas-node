'use strict';

let express = require('express');
let path = require('path');
let port = process.env.PORT || 3000;

let app = express();

app.use(express.static('./'));

app.listen(port, function () {
 console.log('Running API on localhost:' + port);
});
