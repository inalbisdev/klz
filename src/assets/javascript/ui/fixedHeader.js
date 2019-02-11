let $ = require('jquery');
let utils = require('../app.utils');


module.exports = {

    locators: {
        $trigger: '.o-header',
        fixedClass: 'is-fixed'
    },


    toggleFixedHeader: function () {

        let activeClass = window.pageYOffset > 0;
        activeClass ? $(this.locators.$trigger).addClass(this.locators.fixedClass) : $(this.locators.$trigger).removeClass(this.locators.fixedClass);

    },

    isClickOutsideMenu: function (e) {
        return $(e.target).parents('.o-nav-mobile').length <= 0;
    },

    bindEvents: function () {

        let that = this;

        $(document).on("click", ".menu-is-open", function (e) {
            e.stopImmediatePropagation();
            if (that.isClickOutsideMenu(e)) {
                $(document.body).removeClass('menu-is-open');
            }
        });



        document.addEventListener('scroll',function () {
            that.toggleFixedHeader();
        },utils.supportPassiveEvents() ? {passive: true} : false);


    },

    init: function () {
        if ($(this.locators.$trigger).length > 0) {
            this.bindEvents();
        }
    }
};

