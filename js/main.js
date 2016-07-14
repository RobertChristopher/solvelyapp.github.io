$(document).ready(function() {

    isMobile = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    var windowWidth = window.screen.width < window.outerWidth ?
                  window.screen.width : window.outerWidth;
    var mobile_size = windowWidth < 500;

      if(isMobile || mobile_size) {
        $(".preview-top").remove()
        $(".preview-section").show()
      } else {
        $(".preview-section").remove()
      }


    $(window).on('resize', function () {
        window.location.reload()
    })

    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        navigation: true,
        navigationPosition: 'right',
        showActiveTooltip: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 500,
        autoScrolling: false,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: true,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: true,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        paddingTop: '3',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){
        },
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
        }
    });
    $(".preview-section").css("padding-top", 0)
    $(".preview-section").css("padding-bottom", 0)
    $(".display-section").css("padding-top", 0)
    $(".display-section").css("padding-bottom", 0)

    if(isMobile || mobile_size) {
        $(".fp-tableCell").first().css("background-color", "#ecf0f1")
    } else {
        $(".fp-tableCell").last().css("height",0)
        $(".section").last().css("height",0)
    }


    width = $(window).width()
    if (width == 414) {
        $("#container").css("padding-top","85px")
    } else if (width == 375) {
        $("#container").css("padding-top","75px")
    } else if (width <= 435 && width >= 400) {
        $("#container").css("padding-top","120px")
    }
});


