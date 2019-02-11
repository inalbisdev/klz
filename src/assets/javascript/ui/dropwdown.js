let $ = require('jquery');
let utils = require('../app.utils');

module.exports = {

    locators : {
        $trigger : '.js-dropdown',
    },

    getTarget: function($el){
        return $el.data('target');
    },


    toggleDropwdown : function($el,$target,e){
        $(document.body).toggleClass('mega-menu-is-open');

        $($target).toggleClass('is-active');
        if($(e.target).parents('.o-mega-menu').length <= 0){


        }

    },


    bindEvents: function () {

        let that = this;

        $(this.locators.$trigger).on({
            mouseenter: function (e) {
                that.toggleDropwdown($(this),that.getTarget($(this)),e);
            },
            mouseleave: function (e) {
                that.toggleDropwdown($(this),that.getTarget($(this)),e);
            }
        });


    },
    init: function () {
        if($(this.locators.$trigger.length > 0)){
            this.bindEvents();
        }

    }

};