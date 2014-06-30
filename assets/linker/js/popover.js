$(function(){
    $('.js-what-is-it').popover({
        content: 'Это первый городской праздник организованный горожанами, без администраций, организаций и корпораций. ' +
            'Это живой концерт лучших омских групп, десятки выставок и перфомансов, игры, лекции и кино под открытым небом. ' +
            'И все это омичи делают сами для себя.',
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><div class="popover-content"></div></div>',
        placement: 'top'
    });
});