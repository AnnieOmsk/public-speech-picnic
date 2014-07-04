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
                [55.01842044885303, 73.33786380985639],
                [55.01835784769365, 73.33782098280331],
                [55.018330246922346, 73.3379070085983],
                [55.0181418353448, 73.33751572883605],
                [55.01833298773688, 73.33697416931147],
                [55.018631, 73.337279],
                [55.01842044885303, 73.33786380985639]
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
                [55.019148, 73.338181],
                [55.01897264526284, 73.3380468220901],
                [55.0188558987619, 73.33808951289744],
                [55.018763620348935, 73.3380679429569],
                [55.01868983542943, 73.3380571018524],
                [55.018582069800246, 73.33803627116396],
                [55.01849282923363, 73.33792058035657],
                [55.01843749381309, 73.33786926256559],
                [55.018653, 73.337296],
                [55.01925509537771, 73.33790708465574],
                [55.019148, 73.338181]
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
            balloonContent: 'Фримаркет<br/>' +
                'Буккроссинг<br/>' +
                'Газеты Metro'
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

        coffee_enter = new ymaps.Placemark([55.01833193873482, 73.33962248479394], {
            balloonContent: '<span class="title">Кофе</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/coffee.png',
            iconImageSize: [30, 38],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-15, -19]
        });

        coffee_vistavka = new ymaps.Placemark([55.01800212975006, 73.33931183795806], {
            balloonContent: '<span class="title">Кофе</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/coffee.png',
            iconImageSize: [30, 38],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-15, -19]
        });

        coffee_ps = new ymaps.Placemark([55.019339841171885, 73.33927580356493], {
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

        food_enter = new ymaps.Placemark([55.01831073795223, 73.3392110945804], {
            balloonContent: '<span class="title">Коммерческая еда</span><br/>' +
                'Фудкорт Кейтеринг Омск<br/>' +
                'Мороженое<br/>' +
                'Кантанелло<br/>' +
                'Безалкогольные мохито'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/food.png',
            iconImageSize: [43, 30],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-21, -15]
        });

        food_iskusstvo = new ymaps.Placemark([55.018175115483274, 73.33815009059714], {
            balloonContent: '<span class="title">Еда</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/food.png',
            iconImageSize: [43, 30],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-21, -15]
        });

        food_domeda = new ymaps.Placemark([55.01883780940232, 73.33788186969628], {
            balloonContent: '<span class="title">Домашняя еда</span><br/>' +
                'Baking Bakers<br/>' +
                'Блинки от блондинки<br/>' +
                'Маффины<br/>' +
                'Ярмарка специй<br/>' +
                'Летние лакомства<br/>' +
                'United Kitchen<br/>' +
                'Фруктовая корзина<br/>' +
                'Калифорнийские бургеры<br/>' +
                'Глазунья<br/>'
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

        gallery = new ymaps.Placemark([55.01802846788301, 73.33806654232743], {
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

        gallery_vistavka = new ymaps.Placemark([55.018161007581455, 73.33949241733457], {
            balloonContent: '<span class="title">Выставка</span><br/>' +
                'Выставка Антона Сорокина<br/>' +
                'Перфоманс Василия Мельниченко "Рабочий день в Раю"<br/>' +
                'Проект Василия Мельниченко "Нормальная выставка"'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/gallery.png',
            iconImageSize: [44, 37],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-21, -15]
        });

        gallery_small = new ymaps.Placemark([55.018357548981605, 73.33769603900792], {
            balloonContent: '<span class="title">Галлерея маленькая</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/gallery_small.png',
            iconImageSize: [34, 29],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-17, -14]
        });

        game = new ymaps.Placemark([55.01963976870082, 73.33848076057302], {
            balloonContent: '<span class="title">Игра</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/game.png',
            iconImageSize: [43, 25],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-21, -12]
        });

        home = new ymaps.Placemark([55.01843460673185, 73.33921183795884], {
            balloonContent: '<span class="title">Домашний</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/home.png',
            iconImageSize: [54, 32],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-27, -16]
        });

        jam = new ymaps.Placemark([55.02007127541803, 73.33895586242458], {
            balloonContent: '<span class="title">Джэм</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/jam.png',
            iconImageSize: [28, 50],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-14, -25]
        });

        kids = new ymaps.Placemark([55.017849629541445, 73.3385675191869], {
            balloonContent: '<span class="title">Дети</span><br/>' +
                'Игракот<br/>' +
                'Отдыхай с "Би-лайн"<br/>' +
                'Клоуны фестиваля<br/>' +
                'Мастер-классы'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/kids.png',
            iconImageSize: [36, 31],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-18, -15]
        });

        kite = new ymaps.Placemark([55.01853698714967, 73.33856367130157], {
            balloonContent: '<span class="title">Воздушные Змеи</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/kite.png',
            iconImageSize: [36, 35],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-18, -17]
        });

        mafia = new ymaps.Placemark([55.01990550254291, 73.33876903572023], {
            balloonContent: '<span class="title">Мафия</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/mafia.png',
            iconImageSize: [31, 30],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-15, -15]
        });

        map_icon = new ymaps.Placemark([55.018512328944, 73.33831994113856], {
            balloonContent: '<span class="title">Карта</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/map.png',
            iconImageSize: [38, 32],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-19, -16]
        });

        market = new ymaps.Placemark([55.018139369039986, 73.33858967857257], {
            balloonContent: '<span class="title">Рынок</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/market.png',
            iconImageSize: [37, 37],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-16, -16]
        });

        medic = new ymaps.Placemark([55.018347250772166, 73.33804028968605], {
            balloonContent: '<span class="title">Медики</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/medic.png',
            iconImageSize: [25, 25],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-12, -12]
        });

        mobile = new ymaps.Placemark([55.01826847790539, 73.33738583068825], {
            balloonContent: '<span class="title">Мобила</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/mobile.png',
            iconImageSize: [23, 34],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-11, -17]
        });

        mosgame = new ymaps.Placemark([55.019533574019704, 73.33845871429277], {
            balloonContent: '<span class="title">Мосигра</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/mosgame.png',
            iconImageSize: [81, 10],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-40, -5]
        });

        music = new ymaps.Placemark([55.01877670881489, 73.33833533267871], {
            balloonContent: '<span class="title">Музыка</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/music.png',
            iconImageSize: [45, 49],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-22, -24]
        });

        org = new ymaps.Placemark([55.01843902430899, 73.33797591667044], {
            balloonContent: '<span class="title">Организаторы</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/org.png',
            iconImageSize: [29, 32],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-14, -16]
        });

        picnic_sign = new ymaps.Placemark([55.01875558855035, 73.33862946627025], {}, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/picnic.png',
            iconImageSize: [85, 91],
            hideIconOnBalloonOpen: false
        });

        plainair = new ymaps.Placemark([55.01916713678487, 73.33864646892374], {
            balloonContent: '<span class="title">Акварель</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/plainair.png',
            iconImageSize: [38, 30],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-19, -15]
        });

        poet = new ymaps.Placemark([55.01799106818339, 73.33835679035026], {
            balloonContent: '<span class="title">Поэт</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/poet.png',
            iconImageSize: [26, 26],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-13, -13]
        });

        police = new ymaps.Placemark([55.01839313720629, 73.33822267990016], {
            balloonContent: '<span class="title">Полиция</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/police.png',
            iconImageSize: [36, 35],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-18, -17]
        });

        ps_lect = new ymaps.Placemark([55.01931918522241, 73.33893614749707], {
            balloonContent: '<span class="title">Лекторий Public Speech</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/ps_lect.png',
            iconImageSize: [64, 35],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-32, -17]
        });

        ps_media = new ymaps.Placemark([55.01950618206012, 73.33928483466867], {
            balloonContent: '<span class="title">Медиа Public Speech</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/ps_media.png',
            iconImageSize: [48, 44],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-24, -22]
        });

        robot = new ymaps.Placemark([55.01914692818708, 73.33794909458102], {
            balloonContent: '<span class="title">Робот</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/robot.png',
            iconImageSize: [35, 35],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-17, -17]
        });

        skate = new ymaps.Placemark([55.01929007832757, 73.33810466270404], {
            balloonContent: '<span class="title">Скейт</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/skate.png',
            iconImageSize: [47, 14],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-23, -7]
        });

        skuratov = new ymaps.Placemark([55.01870889876149, 73.33779889087582], {
            balloonContent: '<span class="title">Скуратов</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/skuratov.png',
            iconImageSize: [90, 12],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-45, -6]
        });

        slot = new ymaps.Placemark([55.01902157545084, 73.33793836574435], {
            balloonContent: '<span class="title">Слот-машины</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/slot.png',
            iconImageSize: [37, 33],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-18, -16]
        });

        souvenir = new ymaps.Placemark([55.01845580330378, 73.33880740146367], {
            balloonContent: '<span class="title">Сувениры</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/souvenir.png',
            iconImageSize: [32, 32],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-16, -16]
        });

        streetart = new ymaps.Placemark([55.01818035685596, 73.33759447221122], {
            balloonContent: '<span class="title">Уличное искусство</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/streetart.png',
            iconImageSize: [37, 33],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-18, -16]
        });

        study = new ymaps.Placemark([55.01840056811959, 73.3374389040884], {
            balloonContent: '<span class="title">Учёба</span><br/>' +
                'Fresh English Джей энд эс<br/>' +
                'Игротека Априори лингва<br/>' +
                'Workshop and Activities ABC Club<br/>' +
                'Современный русский<br/>' +
                'Немецкий больше, чем язык<br/>' +
                'Omsk Linux Group'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/study.png',
            iconImageSize: [46, 30],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-23, -15]
        });

        stuff = new ymaps.Placemark([55.01944990509864, 73.33821674470214], {
            balloonContent: '<span class="title">Стафф</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/stuff.png',
            iconImageSize: [29, 33],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-14, -16]
        });

        sushka = new ymaps.Placemark([55.01857282882881, 73.33781977776782], {
            balloonContent: '<span class="title">Сушка</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/sushka.png',
            iconImageSize: [38, 62],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-19, -31]
        });

        tea_iskusstvo = new ymaps.Placemark([55.01825671939233, 73.33792706612911], {
            balloonContent: '<span class="title">Чай</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/tea.png',
            iconImageSize: [32, 32],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-16, -16]
        });

        tea_game = new ymaps.Placemark([55.01992215128946, 73.33913406018394], {
            balloonContent: '<span class="title">Чай</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/tea.png',
            iconImageSize: [32, 32],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-16, -16]
        });

        tea_vistavka = new ymaps.Placemark([55.018282045352535, 73.33897312764381], {
            balloonContent: '<span class="title">Чай</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/tea.png',
            iconImageSize: [32, 32],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-16, -16]
        });


        theatre = new ymaps.Placemark([55.017783407543845, 73.3390214074068], {
            balloonContent: '<span class="title">Театр</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/theatre.png',
            iconImageSize: [48, 48],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-24, -24]
        });

        wc_study = new ymaps.Placemark([55.01839507715429, 73.33716531876891], {
            balloonContent: '<span class="title">Туалет</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/wc.png',
            iconImageSize: [36, 19],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-18, -9]
        });

        wc_vistavka = new ymaps.Placemark([55.017874163121775, 73.33941989087172], {
            balloonContent: '<span class="title">Туалет</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/wc.png',
            iconImageSize: [36, 19],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-18, -9]
        });

        wc_theatre = new ymaps.Placemark([55.017769363713846, 73.339351669972], {
            balloonContent: '<span class="title">Туалет</span>'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: 'images/map/wc.png',
            iconImageSize: [36, 19],
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-18, -9]
        });

        picnicMap.geoObjects.add(zone_all);
        picnicMap.geoObjects.add(zone_intellect);
        picnicMap.geoObjects.add(zone_sport);
        picnicMap.geoObjects.add(zone_vistavka);
        picnicMap.geoObjects.add(zone_theatre);
        picnicMap.geoObjects.add(zone_market);
        picnicMap.geoObjects.add(zone_art);
        picnicMap.geoObjects.add(zone_study);
        picnicMap.geoObjects.add(zone_food);
        picnicMap.geoObjects.add(zone_deti);
        picnicMap.geoObjects.add(aiesec);
        picnicMap.geoObjects.add(avangard);
        picnicMap.geoObjects.add(bike);
        picnicMap.geoObjects.add(book);
        picnicMap.geoObjects.add(doublegis);
        picnicMap.geoObjects.add(brain);
        picnicMap.geoObjects.add(bubble);
        picnicMap.geoObjects.add(dance);
        picnicMap.geoObjects.add(dance_exotic);
        picnicMap.geoObjects.add(coffee_enter);
        picnicMap.geoObjects.add(coffee_vistavka);
        picnicMap.geoObjects.add(coffee_ps);
        picnicMap.geoObjects.add(dance_hand);
        picnicMap.geoObjects.add(dance_stepball);
        picnicMap.geoObjects.add(food_enter);
        picnicMap.geoObjects.add(food_iskusstvo);
        picnicMap.geoObjects.add(food_domeda);
        picnicMap.geoObjects.add(freesby);
        picnicMap.geoObjects.add(friend);
        picnicMap.geoObjects.add(gallery);
        picnicMap.geoObjects.add(gallery_vistavka);
        picnicMap.geoObjects.add(gallery_small);
        picnicMap.geoObjects.add(game);
        picnicMap.geoObjects.add(home);
        picnicMap.geoObjects.add(jam);
        picnicMap.geoObjects.add(kids);
        picnicMap.geoObjects.add(kite);
        picnicMap.geoObjects.add(mafia);
        picnicMap.geoObjects.add(map_icon);
        picnicMap.geoObjects.add(market);
        picnicMap.geoObjects.add(medic);
        picnicMap.geoObjects.add(mobile);
        picnicMap.geoObjects.add(mosgame);
        picnicMap.geoObjects.add(music);
        picnicMap.geoObjects.add(org);
        picnicMap.geoObjects.add(picnic_sign);
        picnicMap.geoObjects.add(plainair);
        picnicMap.geoObjects.add(poet);
        picnicMap.geoObjects.add(police);
        picnicMap.geoObjects.add(ps_lect);
        picnicMap.geoObjects.add(ps_media);
        picnicMap.geoObjects.add(robot);
        picnicMap.geoObjects.add(skate);
        picnicMap.geoObjects.add(skuratov);
        picnicMap.geoObjects.add(slot);
        picnicMap.geoObjects.add(souvenir);
        picnicMap.geoObjects.add(streetart);
        picnicMap.geoObjects.add(study);
        picnicMap.geoObjects.add(stuff);
        picnicMap.geoObjects.add(sushka);
        picnicMap.geoObjects.add(tea_iskusstvo);
        picnicMap.geoObjects.add(tea_game);
        picnicMap.geoObjects.add(tea_vistavka);
        picnicMap.geoObjects.add(theatre);
        picnicMap.geoObjects.add(wc_study);
        picnicMap.geoObjects.add(wc_vistavka);
        picnicMap.geoObjects.add(wc_theatre);


        var placemarkCoords = function(event){
            var coords = event.originalEvent.target.geometry.getCoordinates();
            alert('[' + coords['0'] + ', ' + coords['1'] + ']');
        };

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
//        food_iskusstvo.events.add("dragend", placemarkCoords);

    }
    if (typeof(ymaps) !== "undefined") {
        ymaps.ready(init);
    }
});
