function mmenu() {
    let mm = [{
        pic: 'm1.svg',
        titel: 'Бизнес-инкубатор',
        link: 'link1.html'
    },
    {
        pic: 'm2.svg',
        titel: 'Обучение',
        link: 'link2.html'
    },
    {
        pic: 'm3.svg',
        titel: 'Наши проекты',
        link: 'link3.html'
    },
    {
        pic: 'm4.svg',
        titel: 'Мероприятия',
        link: 'link4.html'
    },
    {
        pic: 'm5.svg',
        titel: 'Новости',
        link: 'link5.html'
    },
    {
        pic: 'm6.svg',
        titel: 'Контакты',
        link: 'link6.html'
    }
    ]

    let ms = '';
    for (i = 0; i < mm.length; i++) {
        ms += `<div><a href="${mm[i].link}"><img src="img/${mm[i].pic}" alt=""></a>
                    <a href="${mm[i].link}"><p>${mm[i].titel}</p></a>
                </div>`;
    }
    bMenu.innerHTML = ms;
}

