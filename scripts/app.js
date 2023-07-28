const form = document.querySelector('#firstform');

async function provide(some) {
    response = await fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(data)
    }
    );
    console.log(response.json())
}

form.addEventListener('click', (e) => {
    e.preventDefault();
    let stuff = document.querySelector('#stuff').value;
    console.log(stuff);

    return stuff;
})

//export default stuff;

// async function crypto() {
//     const response = await fetch('https://restcountries.com/v3.1/all')
//     const btc = await response.json();
//     console.log(btc);
// }

// //crypto();

// //
// //fetch post request
// let link = 'http://localhost:3000/';

// async function postData(url = '', data = {}) {
//     const response = await fetch(url, {
//         method: 'POST',
//         mode: 'cors',
//         headers: {
//             "Content-Type": 'application/json',
//         },
//         body: JSON.stringify(data)
//     });
//     return response.json();
// }

// let result = postData(link, { 'info': 'this is some data' })

// export default result;
// //crypto();