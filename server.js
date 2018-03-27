const express = require('express');
const app = express();
const path = require('path');

const htdocs = 'webpages';

app.use('/', express.static(htdocs));

app.get('/*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/${htdocs}/index.html`));
});

app.listen(8080, (e) => {
    console.log(`server ${e ? 'failed to start' : 'listening'}`);
});
