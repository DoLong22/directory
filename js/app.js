$(document).ready(function () {
    $(".nav-menu").click(function (e) { 
        e.preventDefault();       
        if($(".navbar-collapse").hasClass("d-none")){
            $(".navbar-collapse").removeClass("d-none");
        }else{
            $(".navbar-collapse").addClass("d-none");
        }
    });
    $(".nav-item-home").click(function (e) { 
        hidden_visible(".home-dropdown");
    });
    $(".nav-item-template").click(function (e) { 
        hidden_visible(".template-dropdown");
        if((".nav-item-home").hasClass("v-visible")){
            $(".nav-item-home").removeClass("v-visible");
        }
    });
    function hidden_visible(nameClass){
        if($(nameClass).hasClass("v-visible")){
            $(nameClass).removeClass("v-visible");
            $(nameClass).addClass("v-hidden");
        }else{
            $(nameClass).addClass("v-visible");
            $(nameClass).removeClass("v-hidden");
        }
    }
    // const heightMenu = $(".template-menu-header").innerHeight()+$(".template-menu-footer").innerHeight();
    const heightMenu = $(".template-menu").innerHeight();
    $(".template-img img").height(heightMenu);

});