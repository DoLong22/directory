$(document).ready(function () {
    // -------------navbar
    $(".nav-menu").click(function (e) {
        e.preventDefault();
        if ($(".navbar-collapse").hasClass("d-none")) {
            $(".navbar-collapse").removeClass("d-none");
        } else {
            $(".navbar-collapse").addClass("d-none");
        }
    });
    $(".nav-item-home").click(function (e) {
        hidden_visible(".home-dropdown", [".template-dropdown", ".docs-dropdown"]);
    });
    $(".nav-item-template").click(function (e) {
        hidden_visible(".template-dropdown", [".home-dropdown", ".docs-dropdown"]);
    });
    $(".nav-item-docs").click(function (e) {
        hidden_visible(".docs-dropdown", [".home-dropdown", ".template-dropdown"]);
    });


    $.fn.slideDropdownUp = function () {
        $(this).fadeIn(600).css('transform', 'translateY(0)');
        return this;
    };
    $.fn.slideDropdownDown = function () {
        $(this).fadeOut(600).css('transform', 'translateY(50px)');
    };

    function hidden_visible(nameClass, [...nameClass1]) {
        if ($(nameClass).hasClass("v-visible")) {
            $(nameClass).removeClass("v-visible");
            $(nameClass).slideDropdownDown()
        } else {
            $(nameClass).addClass("v-visible");
            $(nameClass).slideDropdownUp()
        }
        nameClass1.forEach(name => {
            if ($(name).hasClass("v-visible")) {
                $(name).removeClass("v-visible");
                $(name).slideDropdownDown()
            }
        })
    }
    // ------------------Header
    function setHeightHeader() {
        const heightWindow = $(window).height();
        $(".header").height(heightWindow-20);
    }
    setHeightHeader();
    $(window).bind('resize', function (e) {
        setHeightHeader();
    });
    
});