function addHomeEvents() {
    for (let i = 0; i < eventos.eventos.length; i++) {
        let CardImage = eventos.eventos[i].image;
        let CardName = eventos.eventos[i].name;
        let CardDescription = eventos.eventos[i].description;
        let CardPrice = eventos.eventos[i].price;
        const homeEvents = createCardDiv(CardImage, CardName, CardDescription, CardPrice);
        const container = document.querySelector('.container');
        container.appendChild(homeEvents);

    }
}
addHomeEvents();