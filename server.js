const bodyParser = require('body-parser');
const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;
const path = require('path');
//import stuff from './scripts/app.js'

app.use(express.static('public'))
app.use(express.static('scripts'))
// app.use(express.bodyParser());
app.use('/', express.static(path.join(__dirname, '/index.html')))
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }))
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

async function grab() {
    let response = await fetch('http://localhost:3000/sending', {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(response)
    })
    console.log(response)
    return response;
}

app.post('/', function (req, res) {
    // response = res.render('the_template', { name: req.body.name })

    // grab();

    const stuff = req.body.stuff;
    console.log(stuff);
    //res.send(stuff)


})

app.listen(port, () => {
    console.log(`listening to port ${port}`);
})