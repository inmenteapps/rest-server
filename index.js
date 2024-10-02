const express = require('express');
const cors = require('cors');
const app = express();

const router = require('./src/router/router');

app.set('port', process.env.PORT || 3002);
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(app.get('port'), () => {
    console.log('rest-server working in port', app.get('port'));
});



