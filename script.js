const parseData = JSON.parse(data);
const docEL = document.querySelector('body');


const URL = `http://universities.hipolabs.com/search?country=Ireland`;

fetch(URL)
    .then((response) => response.json())
    .then((json) => {

        json.forEach(element => {
            docEL.insertAdjacentHTML('beforeend', `
                <h2 class = "imgcard">${element.name}</h2>
                <p class = "card">${element.web_pages[0]}</p>
                `)
        });
    })
    .catch((error) => {
        console.log('Error');
    });



