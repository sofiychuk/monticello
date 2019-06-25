window.onload = function () {

    $('.mont-header__slider').slick({
        dots: true,
        arrows: false,

    });
    $('.mont-latest_news__slider').slick({
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: $('.slider-arrow_prev'),
        nextArrow: $('.slider-arrow_next'),
        autoplay: true,
        autoplaySpeed: 2000,
    });
    var map;
    var coordinates;

    function initMap() {
        coordinates = {
                lat: 40.659798,
                lng: -73.880936
            },
            markerImage = './img/marker.png',
            zoom = 12.8,
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: zoom,
                center: coordinates,
                disableDefaultUI: true
            });
        coordinates = {
                lat: 40.676590,
                lng: -73.896753
            },
            marker = new google.maps.Marker({
                position: coordinates,
                map: map,
                icon: markerImage
            });
        $.getJSON("../js/bundles/map-style.json", function (data) {
            map.setOptions({
                styles: data
            });
        });
    }

    $("#menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href');
        id = '#' + id;
        var top;
        top = $(id).offset().top;
        console.log(top)
        if (top > 2500) {
            $('body,html').animate({
                scrollTop: top
            }, 2500);
        } else if (top < 1000)
            $('body,html').animate({
                scrollTop: top
            }, 1000);
        else {
            $('body,html').animate({
                scrollTop: top
            }, 1500);
        }
    });

    function scrollToDown(ev) {

        var id = $(this).attr('href');
        id = '#' + id;
        console.log(this);
        var top;
        top = $("#mont-gallery").offset().top;
        console.log(top)
        $('body,html').animate({
            scrollTop: top
        }, 2500);
    }

    $('#scroll').on("click", scrollToDown);

    initMap();


}