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
                disableDefaultUI: true,
                styles: [
                    {
                      "elementType": "geometry",
                      "stylers": [
                        {
                          "color": "#f5f5f5"
                        }
                      ]
                    },
                    {
                      "elementType": "labels.icon",
                      "stylers": [
                        {
                          "visibility": "off"
                        }
                      ]
                    },
                    {
                      "elementType": "labels.text.fill",
                      "stylers": [
                        {
                          "color": "#a8a8a8"
                        }
                      ]
                    },
                    {
                      "elementType": "labels.text.stroke",
                      "stylers": [
                        {
                          "color": "#f5f5f5"
                        },
                        {
                          "visibility": "off"
                        }
                      ]
                    },
                    {
                      "featureType": "administrative.land_parcel",
                      "elementType": "geometry.fill",
                      "stylers": [
                        {
                          "visibility": "off"
                        }
                      ]
                    },
                    {
                      "featureType": "administrative.land_parcel",
                      "elementType": "labels.text.fill",
                      "stylers": [
                        {
                          "color": "#bdbdbd"
                        }
                      ]
                    },
                    {
                      "featureType": "poi",
                      "elementType": "geometry",
                      "stylers": [
                        {
                          "color": "#eeeeee"
                        }
                      ]
                    },
                    {
                      "featureType": "poi",
                      "elementType": "geometry.fill",
                      "stylers": [
                        {
                          "color": "#dbdbdb"
                        },
                        {
                          "visibility": "on"
                        }
                      ]
                    },
                    {
                      "featureType": "poi",
                      "elementType": "geometry.stroke",
                      "stylers": [
                        {
                          "color": "#c4c4c4"
                        }
                      ]
                    },
                    {
                      "featureType": "poi",
                      "elementType": "labels.text.fill",
                      "stylers": [
                        {
                          "color": "#757575"
                        }
                      ]
                    },
                    {
                      "featureType": "poi.business",
                      "stylers": [
                        {
                          "visibility": "off"
                        }
                      ]
                    },
                    {
                      "featureType": "poi.park",
                      "elementType": "geometry",
                      "stylers": [
                        {
                          "color": "#e5e5e5"
                        }
                      ]
                    },
                    {
                      "featureType": "poi.park",
                      "elementType": "labels.text.fill",
                      "stylers": [
                        {
                          "color": "#c7c7c7"
                        },
                        {
                          "visibility": "off"
                        }
                      ]
                    },
                    {
                      "featureType": "road",
                      "stylers": [
                        {
                          "color": "#000000"
                        },
                        {
                          "visibility": "on"
                        }
                      ]
                    },
                    {
                      "featureType": "road",
                      "elementType": "geometry",
                      "stylers": [
                        {
                          "color": "#ffffff"
                        }
                      ]
                    },
                    {
                      "featureType": "road",
                      "elementType": "labels.icon",
                      "stylers": [
                        {
                          "visibility": "off"
                        }
                      ]
                    },
                    {
                      "featureType": "road.arterial",
                      "stylers": [
                        {
                          "visibility": "off"
                        }
                      ]
                    },
                    {
                      "featureType": "road.arterial",
                      "elementType": "geometry.fill",
                      "stylers": [
                        {
                          "visibility": "simplified"
                        }
                      ]
                    },
                    {
                      "featureType": "road.arterial",
                      "elementType": "labels.text.fill",
                      "stylers": [
                        {
                          "color": "#757575"
                        }
                      ]
                    },
                    {
                      "featureType": "road.highway",
                      "elementType": "geometry",
                      "stylers": [
                        {
                          "color": "#c2c2c2"
                        },
                        {
                          "saturation": -100
                        },
                        {
                          "visibility": "simplified"
                        },
                        {
                          "weight": 1.5
                        }
                      ]
                    },
                    {
                      "featureType": "road.highway",
                      "elementType": "labels",
                      "stylers": [
                        {
                          "visibility": "off"
                        }
                      ]
                    },
                    {
                      "featureType": "road.highway",
                      "elementType": "labels.text.fill",
                      "stylers": [
                        {
                          "color": "#616161"
                        }
                      ]
                    },
                    {
                      "featureType": "road.local",
                      "stylers": [
                        {
                          "visibility": "off"
                        }
                      ]
                    },
                    {
                      "featureType": "road.local",
                      "elementType": "labels.text.fill",
                      "stylers": [
                        {
                          "color": "#9e9e9e"
                        }
                      ]
                    },
                    {
                      "featureType": "transit.line",
                      "elementType": "geometry",
                      "stylers": [
                        {
                          "color": "#ffffff"
                        },
                        {
                          "weight": 1.5
                        }
                      ]
                    },
                    {
                      "featureType": "transit.station",
                      "elementType": "geometry",
                      "stylers": [
                        {
                          "color": "#eeeeee"
                        }
                      ]
                    },
                    {
                      "featureType": "transit.station",
                      "elementType": "geometry.fill",
                      "stylers": [
                        {
                          "visibility": "off"
                        }
                      ]
                    },
                    {
                      "featureType": "water",
                      "elementType": "geometry",
                      "stylers": [
                        {
                          "color": "#c9c9c9"
                        },
                        {
                          "visibility": "off"
                        }
                      ]
                    },
                    {
                      "featureType": "water",
                      "elementType": "labels.text.fill",
                      "stylers": [
                        {
                          "color": "#9e9e9e"
                        },
                        {
                          "visibility": "on"
                        }
                      ]
                    }
                  ]
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
        // $.getJSON("../js/bundles/map-style.json", function (data) {
        //     map.setOptions({
        //         styles: data
        //     });
        // });
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