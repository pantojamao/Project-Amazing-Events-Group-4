function addFutureEvents() {
    const eventosFuturos = eventos.eventos.filter(evento => new Date(evento.date).getTime() > fechaActualTimestamp);
    for (let i = 0; i < eventosFuturos.length; i++) {

        let CardImage = eventosFuturos[i].image;
        let CardName = eventosFuturos[i].name;
        let CardDescription = eventosFuturos[i].description;
        let CardPrice = eventosFuturos[i].price;
        const futureEventCard=createCardDiv(CardImage, CardName, CardDescription, CardPrice);
        const container= document.querySelector(".container");
        container.appendChild(futureEventCard);
    }
}
addFutureEvents();


