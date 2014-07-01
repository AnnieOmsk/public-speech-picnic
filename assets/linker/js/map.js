$(function() {
    var picnicMap, border, cafe;
    function init() {
        picnicMap = new ymaps.Map("map", {
            center: [55.018737, 73.338377],
            zoom: 18,
            controls: [],
            behaviors: ['drag']
        });

        picnicMap.setType('yandex#satellite');

        zone_intellect = new ymaps.Polyline(
            [
                [55.020396, 73.339098],
                [55.019723, 73.339339],
                [55.019219, 73.338454],
                [55.019391, 73.337998],
                [55.020396, 73.339098]
            ], {
                hintContent: "Polyline"
            }, {
                strokeColor: '#53B93A',
                strokeWidth: 2,
                // The first number sets the stroke length. The second number sets the length of the gap.
                strokeStyle: '6 6'
            }
        );

        zone_sport = new ymaps.Polygon(
            [[
                [55.019225, 73.339457],
                [55.018637, 73.339640],
                [55.018533, 73.339205],
                [55.018745, 73.338910],
                [55.018856, 73.339227],
                [55.019169, 73.339211],
                [55.019225, 73.339457]

            ]], {
                hintContent: "Polygon"
            }, {
                strokeColor: '#53B93A',
                fill: true,
                fillOpacity: 0.2,
                fillColor: '#53B93A',
                strokeWidth: 2,
                // The first number sets the stroke length. The second number sets the length of the gap.
                strokeStyle: '6 6'
            }
        );

        zone_vistavka = new ymaps.Polyline(
            [
                [55.018379, 73.339693],
                [55.018250, 73.339726],
                [55.018130, 73.339731],
                [55.017912, 73.339597],
                [55.017838, 73.339431],
                [55.017912, 73.339216],
                [55.018234, 73.339060],
                [55.018321, 73.339286],
                [55.018379, 73.339693]
            ]
        );

        zone_theatre = new ymaps.Polyline(
            [
                [55.017721, 73.339323],
                [55.017647, 73.338982],
                [55.017764, 73.338653],
                [55.017998, 73.339039],
                [55.017721, 73.339323]
            ]
        );

        zone_market = new ymaps.Polyline(
            [
                [55.018028, 73.339039],
                [55.018333, 73.338444],
                [55.018234, 73.338336],
                [55.018139, 73.338342],
                [55.017924, 73.338867],
                [55.018028, 73.339039]
            ]
        );

        zone_art = new ymaps.Polyline(
            [
                [55.017927, 73.338867],
                [55.018145, 73.338347],
                [55.018204, 73.338288],
                [55.018318, 73.337875],
                [55.018136, 73.337537],
                [55.017764, 73.338583],
                [55.017927, 73.338867]
            ]
        );

        zone_study = new ymaps.Polyline(
            [
                [55.018401, 73.337939],
                [55.018321, 73.337848],
                [55.018148, 73.337505],
                [55.018296, 73.337060],
                [55.018631, 73.337279],
                [55.018401, 73.337939]
            ]
        );

        zone_food = new ymaps.Polyline(
            [
                [55.018419, 73.337939],
                [55.018653, 73.337296],
                [55.019289, 73.337950],
                [55.019148, 73.338181],
                [55.018911, 73.338020],
                [55.018696, 73.337982],
                [55.018542, 73.338047],
                [55.018419, 73.337939]
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
        picnicMap.geoObjects.add(zone_intellect);
        picnicMap.geoObjects.add(zone_sport);
        picnicMap.geoObjects.add(zone_vistavka);
        picnicMap.geoObjects.add(zone_theatre);
        picnicMap.geoObjects.add(zone_market);
        picnicMap.geoObjects.add(zone_art);
        picnicMap.geoObjects.add(zone_study);
        picnicMap.geoObjects.add(zone_food);
    }
    if (typeof(ymaps) !== "undefined") {
        ymaps.ready(init);
    }
});
