let $ = require('jquery');
let utils = require('../app.utils');



module.exports = {


    locators : {
        $trigger : ".js-anchor-nav",
        anchor: ".m-anchor-list__link",
        section: ".m-anchor-list__section"
    },



    getTarget : function($el){
        return $el.attr('href');
    },

    animate: function($target){

        $('html, body').stop().animate({
            scrollTop: $($target).offset().top
        }, 600, function() {
            location.hash = $target; //attach the hash (#jumptarget) to the pageurl
        });

        return false;
    },

    bindEvents: function(){

        let that = this;

        $(this.locators.anchor).on('click',function (e) {
            e.preventDefault();
            that.animate(that.getTarget($(this)));
        });


        $(window).scroll(function () {
            let scrollDistance = $(window).scrollTop();
            $('.o-anchor-nav__section').each(function(i) {
                if ($(this).position().top <= scrollDistance) {
                    $('.m-anchor-list__item.is-active').removeClass('is-active');
                    $('.m-anchor-list__item').eq(i).addClass('is-active');
                }
            });
        }).scroll();

    },

    init: function () {

        if($(this.locators.$trigger.length > 0)){
            this.bindEvents();
        }
    }

};

