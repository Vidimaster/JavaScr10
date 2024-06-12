const parseData = JSON.parse(data);
const docEL = document.querySelector('body');
parseData.forEach(element => {
    let topp = [];
    element.topping.forEach(element => {
        topp.push(element.type);
    });
    docEL.insertAdjacentHTML('beforeend', `

        <h2>${element.name}</h2>
        <img class ="imgcard" src = "${element.image}"></img>
        <p class = "card">Delicious ${element.type} ${element.name}. Toppings may include: ${topp.join(" - ")}</p>
    `)
});
console.log(parseData);

