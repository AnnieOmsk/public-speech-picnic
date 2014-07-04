$(function() {
    var picnicMap;
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

        doublegis = new ymaps.Placemark([55.01938419369829, 73.33849502579444], {
            balloonContent: '<span class="title">Дубльгис</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/2gis.png',
            iconImageSize: [55, 23],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-27, -12]
        });

        aiesec = new ymaps.Placemark([55.01850879778436, 73.3373638022367], {
            balloonContent: '<span class="title">Aiesec</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/aiesec.png',
            iconImageSize: [64, 16],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-32, -8]
        });

        avangard = new ymaps.Placemark([55.01922434546349, 73.33828580489288], {
            balloonContent: '<span class="title">Авангард</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/avangard.png',
            iconImageSize: [43, 36],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-21, -18]
        });

        bike = new ymaps.Placemark([55.01846613816848, 73.33961082474424], {
            balloonContent: '<span class="title">Велосипед</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/bike.png',
            iconImageSize: [44, 29],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-22, -14]
        });

        book = new ymaps.Placemark([55.018127160893364, 73.33889771296607], {
            balloonContent: '<span class="title">Книга</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/book.png',
            iconImageSize: [27, 24],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-13, -12]
        });

        brain = new ymaps.Placemark([55.01976710786561, 73.33863452645697], {
            balloonContent: '<span class="title">Мозги</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/brain.png',
            iconImageSize: [32, 28],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-16, -14]
        });

        bubble = new ymaps.Placemark([55.01828865841217, 73.3386299239425], {
            balloonContent: '<span class="title">Баблы</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/bubble.png',
            iconImageSize: [25, 25],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-12, -12]
        });

        coffee = new ymaps.Placemark([55.01833193873482, 73.33962248479394], {
            balloonContent: '<span class="title">Кофе</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/coffee.png',
            iconImageSize: [30, 38],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-15, -19]
        });

        dance = new ymaps.Placemark([55.01870501929139, 73.33920327976189], {
            balloonContent: '<span class="title">Танцы</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/dance.png',
            iconImageSize: [45, 52],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-22, -26]
        });

        dance_exotic = new ymaps.Placemark([55.018874512217515, 73.33945599140127], {
            balloonContent: '<span class="title">Экзотические танцы</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/dance_exotic.png',
            iconImageSize: [25, 51],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-12, -25]
        });

        dance_hand = new ymaps.Placemark([55.018588144868275, 73.33938042460522], {
            balloonContent: '<span class="title">Танец руки</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/dance_hand.png',
            iconImageSize: [37, 39],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-18, -19]
        });

        dance_stepball = new ymaps.Placemark([55.01908747302719, 73.33941109458064], {
            balloonContent: '<span class="title">Танец ноги-мяч</span>'
        }, {
            draggable: true,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/dance_stepball.png',
            iconImageSize: [28, 44],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-14, -22]
        });

        food = new ymaps.Placemark([55.01831073795223, 73.3392110945804], {
            balloonContent: '<span class="title">Еда</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/food.png',
            iconImageSize: [43, 30],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-21, -15]
        });

        freesby = new ymaps.Placemark([55.018985758645265, 73.3385658478846], {
            balloonContent: '<span class="title">Фрисби</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/freesby.png',
            iconImageSize: [46, 47],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-23, -23]
        });

        friend = new ymaps.Placemark([55.018054905208565, 73.33905785780956], {
            balloonContent: '<span class="title">Приют "Друг"</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/friend.png',
            iconImageSize: [26, 25],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-13, -12]
        });

        iskusstvo = new ymaps.Placemark([55.01802846788301, 73.33806654232743], {
                balloonContent: '<span class="title">искусство</span><br/>' +
                    'Выставка музея искусств Омска "Новый год круглый год"<br/>' +
                    'Бабушка Ия и её клоуны<br/>' +
                    'Инсталляция Сергея Баранова "Черви"<br/>' +
                    'Выставка Сергея Баранова "Улица Либкнехта"<br/>' +
                    'Фотовыставка Рената Латышева "Smena8"<br/>' +
                    'Выставка Вышки "Медиа через призму искусства"'
            }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/gallery.png',
            iconImageSize: [44, 37],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-21, -15]
        });

        picnic_sign = new ymaps.Placemark([55.01875558855035, 73.33862946627025], {}, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/picnic.png',
            iconImageSize: [85, 91],
            hideIconOnBalloonOpen: false
        });

        picnicMap.geoObjects.add(iskusstvo);
        picnicMap.geoObjects.add(picnic_sign);
        picnicMap.geoObjects.add(aiesec);
        picnicMap.geoObjects.add(avangard);
        picnicMap.geoObjects.add(bike);
        picnicMap.geoObjects.add(book);
        picnicMap.geoObjects.add(doublegis);
        picnicMap.geoObjects.add(brain);
        picnicMap.geoObjects.add(bubble);
        picnicMap.geoObjects.add(dance);
        picnicMap.geoObjects.add(dance_exotic);
        picnicMap.geoObjects.add(coffee);
        picnicMap.geoObjects.add(dance_hand);
        picnicMap.geoObjects.add(dance_stepball);
        picnicMap.geoObjects.add(food);
        picnicMap.geoObjects.add(freesby);
        picnicMap.geoObjects.add(friend);
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

        var placemarkCoords = function(event){
            var coords = event.originalEvent.target.geometry.getCoordinates();
            alert('[' + coords['0'] + ', ' + coords['1'] + ']');
        };

        dance_hand.events.add("dragend", placemarkCoords);
        dance_stepball.events.add("dragend", placemarkCoords);
        food.events.add("dragend", placemarkCoords);
        freesby.events.add("dragend", placemarkCoords);
        friend.events.add("dragend", placemarkCoords);

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
