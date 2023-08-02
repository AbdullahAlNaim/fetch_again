const bodyParser = require('body-parser');
const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('public'))
app.use(express.static('scripts'))

app.use('/', express.static(path.join(__dirname, '/index.html')))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));
async function grab(url = '') {
    fetch(url).then(data => {
        return data.json();
    })
        .then(post => {
            console.log(post.title);
        })
}


app.post('/', function (req, res) {
    const stuff = req.body.stuff;
    console.log(stuff);
})

app.listen(port, () => {
    console.log(`listening to port ${port}`);
})