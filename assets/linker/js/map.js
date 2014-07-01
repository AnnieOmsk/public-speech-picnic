$(function() {
    var picnicMap, border, cafe;
    function init() {
        picnicMap = new ymaps.Map("map", {
            center: [55.018737, 73.338377],
            zoom: 18,
            controls: [],
            behaviors: ['drag']
        });

        border = new ymaps.Polyline(
            [
                [55.017518, 73.338658],
                [55.014605, 73.334801],
                [55.017971, 73.323729],
                [55.021263, 73.3283],
                [55.017518, 73.338658]
            ]
        );

        cafe = new ymaps.Placemark([55.018344, 73.33375], {
                balloonContent: 'Тут можно поесть'
            },
            {
                iconLayout: 'default#image',
                iconImageHref: 'images/map/cafe.png',
                iconImageSize: [43, 30],
                hideIconOnBalloonOpen: false,
                iconImageOffset: [-21, -15]
            });

        big_music_scene = new ymaps.Placemark([55.018685, 73.338088], {
                balloonContent: '<span class="title">Большая музыкальная сцена</span>'
            });

        sign_picnic = new ymaps.Placemark([55.018771, 73.338549], {
                balloonContent: '<span class="title">Надпись Пикник</span>'
            });

        souvenirs = new ymaps.Placemark([55.018404, 73.338721], {
            balloonContent: 'Здесь выдают сувениры :)'
        });

        zmei_om1 = new ymaps.Placemark([55.018537, 73.338377], {
            balloonContent: '<span class="title">Воздушные змеи Ом1</span>'
        });

        fresbie = new ymaps.Placemark([55.018873, 73.338318], {
            balloonContent: '<span class="title">Фрисби</span><br/>Кидать диск – это искусство. Командная игра алтимат.'
        });

        plenair = new ymaps.Placemark([55.019095, 73.338372], {
            balloonContent: '<span class="title">Пленэр</span>'
        });

        doublegis = new ymaps.Placemark([55.019227, 73.338318], {
            balloonContent: '<span class="title">Дубльгис</span>'
        });

        interactive_map = new ymaps.Placemark([55.018414, 73.338141], {
            balloonContent: '<span class="title">Интерактивная карта Омска</span>'
        });

        bubbles = new ymaps.Placemark([55.018264, 73.338528], {
            balloonContent: '<span class="title">Баблы</span>'
        });

        fremarket = new ymaps.Placemark([55.018147, 73.338791], {
            balloonContent: '<span class="title">Фримаркет и Буккроссинг</span>'
        });

        picnic_dom = new ymaps.Placemark([55.018517, 73.339155], {
            balloonContent: '<span class="title">Пикник с «Домашним»</span>'
        });

        free_bike = new ymaps.Placemark([55.018668, 73.339515], {
            balloonContent: '<span class="title">Бесплатный Велопрокат</span>'
        });

        priyut_drug = new ymaps.Placemark([55.018021, 73.338962], {
            balloonContent: '<span class="title">Приют «Друг»</span>'
        });

//        picnicMap.geoObjects.add(cafe);
        picnicMap.geoObjects.add(big_music_scene);
        picnicMap.geoObjects.add(sign_picnic);
        picnicMap.geoObjects.add(souvenirs);
        picnicMap.geoObjects.add(zmei_om1);
        picnicMap.geoObjects.add(fresbie);
        picnicMap.geoObjects.add(plenair);
        picnicMap.geoObjects.add(doublegis);
        picnicMap.geoObjects.add(interactive_map);
        picnicMap.geoObjects.add(bubbles);
        picnicMap.geoObjects.add(fremarket);
        picnicMap.geoObjects.add(picnic_dom);
        picnicMap.geoObjects.add(free_bike);
        picnicMap.geoObjects.add(priyut_drug);
//        picnicMap.geoObjects.add(border);
    }
    if (typeof(ymaps) !== "undefined") {
        ymaps.ready(init);
    }
});
