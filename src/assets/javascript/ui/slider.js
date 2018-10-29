let $ = require('jquery');
let utils = require('../app.utils');
let slick = require('slick-carousel');


module.exports = {

    locators: {
        $trigger: '.js-slick'
    },



    initSlider: function ($el) {
        $el.slick({
            nextArrow: '<a class="slick-arrow slick-arrow--left"></a>',
            prevArrow: '<a class="slick-arrow slick-arrow--right"></a>',
        });
    },




    bindEvents: function () {

        let that = this;

        this.initSlider($(this.locators.$trigger));
        $(document).ready(function () {

        });


    },

    init: function () {
        this.bindEvents();
    }

};