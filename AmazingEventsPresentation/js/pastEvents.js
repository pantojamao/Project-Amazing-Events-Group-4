
function addPastEvents() {
    const eventosPasados = eventos.eventos.filter(evento => new Date(evento.date).getTime() < fechaActualTimestamp);
    for (let i = 0; i < eventosPasados.length; i++) {
        let CardImage = eventosPasados[i].image;
        let CardName = eventosPasados[i].name;
        let CardDescription = eventosPasados[i].description;
        let CardPrice = eventosPasados[i].price;
        const pastEventCard=createCardDiv(CardImage, CardName, CardDescription, CardPrice);
        const container = document.querySelector('.container');
        container.appendChild(pastEventCard);
    }
}
addPastEvents();
// document.querySelector("input[type=checkbox]").addEventListener("click",categoryFilter());

// //crear una funcion como desde el addli se puede obtener el value del 
// function categoryFilter(event){

// console.log("event"+event);
// }