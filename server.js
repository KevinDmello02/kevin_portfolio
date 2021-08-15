function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static(__dirname + '/dist/portfolio'));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname + '/dist/portfolio/index.html')));

console.log(path.join(__dirname + '/dist/portfolio/index.html'));

app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})