let $ = require('jquery');
let lazy = require('lazysizes');
let slick = require('slick-carousel');




const App = {
    utils: require('./app.utils'),
    ui: require('./app.ui')
};

(function init () {
    window.App = App;
    window.$ = $;
    const initAll= function () {
        App.utils.init();
        App.ui.loading.init();
        App.ui.progressBar.init();
        App.ui.modal.init();
        App.ui.effectRipple.init();
        App.ui.toggle.init();
        App.ui.shadow.init();
        App.ui.scrollTop.init();
        App.ui.fixedHeader.init();
        App.ui.cookies.init();
        App.ui.validation.init();
        App.ui.mvpValidation.init();
        App.ui.slider.init();
    };
    initAll();
})();
