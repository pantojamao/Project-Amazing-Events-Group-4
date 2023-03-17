function addHomeEvents() {
    for (let i = 0; i < eventos.eventos.length; i++) {
        const slide = document.createElement('div');
        slide.classList.add("swiper-slide", "d-flex");
        for (let j = 0; j < 4; j++) {
            let CardImage = eventos.eventos[i].image;
            let CardName = eventos.eventos[i].name;
            let CardDescription = eventos.eventos[i].description;
            let CardPrice = eventos.eventos[i].price;
            const homeEvents = createCardDiv(CardImage, CardName, CardDescription, CardPrice);
            slide.appendChild(homeEvents);
            i++;
        }
        const container = document.querySelector('.container');
        container.appendChild(slide);
    }
}
addHomeEvents();


let swiper = new Swiper("swiper-container", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
},
);
