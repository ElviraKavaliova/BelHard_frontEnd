document.addEventListener('DOMContentLoaded', function(){
    wofers();
});

function wofers() {
    let lp = [{
        name: 'Бесплатное обучение',
        descript: 'Пройди обучение по продвижению своего бизнеса в интернете',
        link: 'poduct1.html'
    },
    {
        name: 'Стартап лаборатория',
        descript: 'Получи консультацию у наших лучших юристов<br>и бухгалтеров',
        link: 'poduct2.html'
    },
    {
        name: 'Коворкинг',
        descript: 'Приходи работать в наш  коворкинг. Это абсолютно бесплатно. ',
        link: 'poduct3.html'
    },
    {
        name: 'Консультации',
        descript: 'Добейся успеха, став частью нашей стартап-лаборатории!',
        link: 'poduct4.html'
    }
    ]

    let lproduct = '';
    for (i = 0; i < lp.length; i++) {
        lproduct += `<div><div class="capabilities"><a href="${lp[i].link}">${lp[i].name}</a></div>
        <div class="feature_description"><a href="${lp[i].link}">${lp[i].descript}</a></div>
        <div><a href="${lp[i].link}"><img src="img/arrow10.svg" alt=""></a></div>
        </div>`;
    }
    products.innerHTML = lproduct;
}