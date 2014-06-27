$(function() {
    var picnicMap, border, cafe;
    function init() {
        picnicMap = new ymaps.Map("map", {
            center: [55.018344, 73.33375],
            zoom: 16,
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

        picnicMap.geoObjects.add(cafe);
        picnicMap.geoObjects.add(border);
    }
    if (typeof(ymaps) !== "undefined") {
        ymaps.ready(init);
    }
});
