const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
//import stuff from './scripts/app.js'

app.use(express.static('public'))
app.use(express.static('scripts'))
// app.use(express.bodyParser());
app.use('/', express.static(path.join(__dirname, '/index.html')))
app.use(bodyParser.urlencoded({ extended: true }));
async function grab(url = '') {
    fetch(url).then(data => {
        return data.json();
    })
        .then(post => {
            console.log(post.title);
        })
}

app.post('/sending', function (req, res) {
    response = res.render('the_template', { name: req.body.name })
    console.log(response)
})

app.listen(port, () => {
    console.log(`listening to port ${port}`);
})