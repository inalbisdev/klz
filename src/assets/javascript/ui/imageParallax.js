let $ = require('jquery');
let utils = require('../app.utils');

module.exports = {

    locators: {
        $parent: ".o-anchor-nav",
        $trigger : ".js-parallax",
        $images : ""
    },


    shouldInitParallax : function(){
        console.log(utils.viewPortTop());
        console.log(utils.getOffsetTop($(this.locators.$trigger)));
      return utils.viewPortTop() >= utils.getOffsetTop($(this.locators.$trigger));
    },


    calcPosition : function(){
        return utils.viewPortTop() - utils.getOffsetTop($(this.locators.$trigger));
    },

    animateContent: function(){
        let position = parseInt(this.calcPosition());
        let that = this;



        $(this.locators.$trigger).css({
            "transform":"matrix(1, 0, 0, 1, 0, "+position+")"
        });
    },

    bindEvents: function () {

        let that = this;

        $(this.locators.$parent).css({
            "height" : $(this.locators.$parent).innerHeight() * 2
        });

        $(this.locators.$trigger).css({
            "height" : $(this.locators.$trigger).innerHeight()
        });

        document.addEventListener('scroll',function () {

            //that.animateContent();


        },utils.supportPassiveEvents() ? {passive: true} : false);


    },

    init: function () {
        if ($(this.locators.$trigger).length > 0) {
            //this.bindEvents();
        }
    }

};


var col1 = $(".o-anchor-nav__images").outerHeight();
var col2 = $(".o-anchor-nav__sections").outerHeight();
var travel = col1 - col2;

var topOfColumns = $('.js-parallax').offset().top;
var columns = $('.js-parallax').outerHeight() - $(window).innerHeight();
var scrollInterval = columns / travel;

var e = Math.round( ($(window).scrollTop() - topOfColumns ) / scrollInterval);
//find the bottom of the right column and give a Bool (true)
var b = $(window).scrollTop() >= $('.o-anchor-nav__sections').offset().top + $('.o-anchor-nav__sections').outerHeight() - window.innerHeight;

//if the user scrolls to the top of the columns and the user has not scrolled to the bottom of the right column
if ($(window).scrollTop() >= topOfColumns && b == false ) {
    $(".o-anchor-nav__sections").css({
        transform: "translate3d(0px, " + e + "px, 0px)"
    });
}
