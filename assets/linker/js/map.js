$(function() {
    var picnicMap, border, cafe;
    function init() {
        picnicMap = new ymaps.Map("map", {
            center: [55.018737, 73.338377],
            zoom: 18,
            controls: [],
            behaviors: ['drag']
        });


        zone_intellect = new ymaps.Polygon(
            [[
                [55.019271398074345, 73.33847545767206],
                [55.01940949336274, 73.33803018650815],
                [55.02044223223458, 73.33914627976225],
                [55.01967984911755, 73.3393872797622],
                [55.019271398074345, 73.33847545767206]
            ]], {
                hintContent: "Интеллект"
            }, {
                strokeColor: '#53B93A',
                fill: false,
                strokeWidth: 1,
                // The first number sets the stroke length. The second number sets the length of the gap.
                strokeStyle: '6 6'
            }
        );

        zone_sport = new ymaps.Polygon(
            [[
                [55.01870801262898, 73.33896900859827],
                [55.01881284819088, 73.3392699153442],
                [55.01918132897622, 73.33924318650818],
                [55.0192311644773, 73.33948382209012],
                [55.01858151878578, 73.33972583068844],
                [55.018468271737085, 73.3393069239425],
                [55.01870801262898, 73.33896900859827]
            ]], {
                hintContent: "Спорт"
            }, {
                strokeColor: '#53B93A',
                fill: false,
                strokeWidth: 1,
                // The first number sets the stroke length. The second number sets the length of the gap.
                strokeStyle: '6 6'
            }
        );

        zone_vistavka = new ymaps.Polygon(
            [[
                [55.01787501186237, 73.33925355092616],
                [55.018234, 73.33906],
                [55.018321, 73.339286],
                [55.01835633669006, 73.33947670569606],
                [55.018368665922615, 73.33957326522064],
                [55.018379, 73.339693],
                [55.01825, 73.339726],
                [55.01813, 73.339731],
                [55.017912, 73.339597],
                [55.01780101179378, 73.33944172883604],
                [55.01787501186237, 73.33925355092616]
            ]], {
            hintContent: "Выставка"
        }, {
            strokeColor: '#53B93A',
                fill: false,
                strokeWidth: 1,
                // The first number sets the stroke length. The second number sets the length of the gap.
                strokeStyle: '6 6'
        });

        zone_theatre = new ymaps.Polygon(
            [[
                [55.017600764511684, 73.33900345767206],
                [55.0177393411522, 73.33863690674588],
                [55.017998, 73.339039],
                [55.01767476460271, 73.33931763558193],
                [55.017600764511684, 73.33900345767206]
            ]], {
                hintContent: "Театр"
            }, {
                strokeColor: '#53B93A',
                fill: false,
                strokeWidth: 1,
                // The first number sets the stroke length. The second number sets the length of the gap.
                strokeStyle: '6 6'
            });

        zone_market = new ymaps.Polygon(
            [[
                [55.018028, 73.339039],
                [55.018333, 73.338444],
                [55.01816310661621, 73.33822334722134],
                [55.018098929733725, 73.338358093254],
                [55.01791167061418, 73.33877580489354],
                [55.018028, 73.339039]
            ]], {
                hintContent: "Маркет"
            }, {
                strokeColor: '#53B93A',
                fill: false,
                strokeWidth: 1,
                // The first number sets the stroke length. The second number sets the length of the gap.
                strokeStyle: '6 6'
            });

        zone_art = new ymaps.Polygon(
            [[
                [55.01790542359114, 73.33879189814758],
                [55.01795081304057, 73.33889417063892],
                [55.01819167070065, 73.33828799999992],
                [55.01832724692307, 73.33790182209012],
                [55.018136, 73.337537],
                [55.017764, 73.338583],
                [55.01790542359114, 73.33879189814758]
            ]], {
                hintContent: "Искусство"
            }, {
                strokeColor: '#53B93A',
                fill: false,
                strokeWidth: 1,
                // The first number sets the stroke length. The second number sets the length of the gap.
                strokeStyle: '6 6'
            });

        zone_study = new ymaps.Polygon(
            [[
                [55.018401, 73.337939],
                [55.018330246922346, 73.3379070085983],
                [55.018148, 73.337505],
                [55.01833298773688, 73.33697416931147],
                [55.018631, 73.337279],
                [55.018401, 73.337939]
            ]], {
                hintContent: "Учёба"
            }, {
                strokeColor: '#53B93A',
                fill: false,
                strokeWidth: 1,
                // The first number sets the stroke length. The second number sets the length of the gap.
                strokeStyle: '6 6'
            });

        zone_food = new ymaps.Polygon(
            [[
                [55.01897264526284, 73.3380468220901],
                [55.0188558987619, 73.33808951289744],
                [55.018763620348935, 73.3380679429569],
                [55.01868983542943, 73.3380571018524],
                [55.018542, 73.338047],
                [55.018419, 73.337939],
                [55.018653, 73.337296],
                [55.01925509537771, 73.33790708465574],
                [55.019148, 73.338181],
                [55.01897264526284, 73.3380468220901]
            ]], {
                hintContent: "Домашняя еда"
            }, {
                strokeColor: '#53B93A',
                fill: false,
                strokeWidth: 1,
                // The first number sets the stroke length. The second number sets the length of the gap.
                strokeStyle: '6 6'
            });

        zone_deti = new ymaps.Polygon(
            [[
                [55.01792654446738, 73.33837925529467],
                [55.01788324846592, 73.33834702712242],
                [55.01771420070585, 73.33872518783566],
                [55.01773934113094, 73.33879757672115],
                [55.017779047278175, 73.33881872023765],
                [55.017861425066464, 73.33867959391766],
                [55.01795124889124, 73.3384489325407],
                [55.01792654446738, 73.33837925529467]
            ]], {
                hintContent: "Дети"
            }, {
                strokeColor: '#53B93A',
                fill: false,
                strokeWidth: 1,
                // The first number sets the stroke length. The second number sets the length of the gap.
                strokeStyle: '6 6'
            });

        zone_all = new ymaps.Polyline(
            [
                [55.01756860102698, 73.3390443743436],
                [55.01764917844328, 73.33936624802388],
                [55.01791269678068, 73.33966132110969],
                [55.01810610190345, 73.33976594230836],
                [55.018595222960656, 73.3397518644727],
                [55.020477491801124, 73.33915842948994],
                [55.01939930159542, 73.33799636619597],
                [55.01832724689651, 73.33694159126269],
                [55.01756860102698, 73.3390443743436]
            ], {
                hintContent: "Общая граница"
            }, {
                strokeColor: '#53B93A',
                strokeWidth: 2
            });

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
        picnicMap.geoObjects.add(zone_all);
        picnicMap.geoObjects.add(zone_deti);

        var alertCoordinates = function (obj) {
            var coordinates = obj.geometry.getCoordinates()[0];
            var result = "";
            for (var i=0; i<coordinates.length; i++) {
                result+= "[" + coordinates[i]['0'] + ", " + coordinates[i]['1'] + "],\n";
            }
            result = result.substr(0, result.length-2);
            alert(result);
        };

        var createDrawingHandler = function(obj) {
            obj.editor.startDrawing();
            var stateMonitor = new ymaps.Monitor(obj.editor.state);
            stateMonitor.add("drawing", function (started) {
                if (!started) {
                    alertCoordinates(obj);
                }
            });

        };
//        createDrawingHandler(zone_deti);

//        createDrawingHandler(zone_sport);
//        createDrawingHandler(zone_art);
//        createDrawingHandler(zone_food);
//        createDrawingHandler(zone_intellect);
//        createDrawingHandler(zone_market);
//        createDrawingHandler(zone_sport);
//        createDrawingHandler(zone_study);
//        createDrawingHandler(zone_theatre);
//        createDrawingHandler(zone_vistavka);
    }
    if (typeof(ymaps) !== "undefined") {
        ymaps.ready(init);
    }
});
