$(document).ready(function() {

    isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

      if(isMobile) {
        $(".preview-top").remove()
        $(".preview-section").show()
      } else {
        $(".preview-section").remove()
      }

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

    if(isMobile) {
        $(".fp-tableCell").first().css("background-color", "#ecf0f1")
    } else {
        $(".fp-tableCell").last().css("height",0)
        $(".section").last().css("height",0)
    }

});


