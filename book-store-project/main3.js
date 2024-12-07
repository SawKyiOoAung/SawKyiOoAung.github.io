$(document).ready(function() {


    //getfrom local storage
    let $bookData = JSON.parse(localStorage.getItem('bookData'));
    let $themeData = parseInt(localStorage.getItem('themeData'), 10);

    //light-dark mode 
    let count = 1;
    if ($themeData) {
        count = $themeData.$themeData
    }
    if ($bookData) {
        count = $bookData.lightDark;
    }
    console.log(count);

    function darkModeFunction() {
        $('.end-area, body, .upcoming-event-card, .movement-area input')
            .css('background-color', 'var(--dark-mode'),

            $('.upcoming-event-card p, .popular-event-card p, .join-us-area .event-card .event-card-content, .why-client-card, .plus-content p, .location-area .container .our-saw, .location-area .location-card').css({
                'color': 'var(--light-mode)',
            })

            $('.read-more, .shop-on').css(
                'border', '2px solid var(--dark-mode)',
            )

            //movement input
            $('.movement-area input').css(
                {
                'border': '2px solid var(--light-mode)',
                'border-right': 'none',
                }
            )

            $('.movement-area .fa-arrow-right-long').css(
                {
                'border': '2px solid var(--light-mode)',
                'border-left': 'none',
                'color': 'var(--light-mode)'
                }
            )

            //button hover 
            $('.read-more, .shop-on').hover(
                function() {
                    $(this).css({
                        'background-color': 'var(--dark-mode)',
                        'color': 'var(--light-mode)',
                        'border': '2px solid var(--secondary-color)',
                    })

                },
                function () {
                    $(this).css({
                        'background-color': 'var(--secondary-color)',
                        'color': 'var(--light-mode)',
                        'border': '2px solid var(--dark-mode)',
                    })
                }),

            // box-shadow
            $('.join-us-area .event-card').css({
                'box-shadow': 'var(--box-shadow-for-dark)'
            })
    }
    function lightModeFunction() {
        $('.end-area, body, .upcoming-event-card, .movement-area input')
            .css('background-color', 'var(--light-mode'),

            $('.upcoming-event-card p, .popular-event-card p, .join-us-area .event-card .event-card-content, .why-client-card, .plus-content p, .location-area .container .our-saw, .location-area .location-card').css({
                'color': 'var(--dark-mode)',
            })

            $('.read-more, .shop-on').css(
                {
                    'border': '2px solid var(--light-mode)',
                }
            )

            //movement input
            $('.movement-area input').css(
                {
                'border': '2px solid var(--dark-mode)',
                'border-right': 'none',
                }
            )

            $('.movement-area .fa-arrow-right-long').css(
                {
                'border': '2px solid var(--dark-mode)',
                'border-left': 'none',
                'color': 'var(--dark-mode)'

                }
            )

            //button hover 
            $('.read-more, .shop-on').hover(
                function() {
                    $(this).css({
                        'background-color': 'var(--light-mode)',
                        'color': 'var(--dark-mode)',
                        'border': '2px solid var(--secondary-color)',
                    })

                },
                function () {
                    $(this).css({
                        'background-color': 'var(--secondary-color)',
                        'color': 'var(--light-mode)',
                        'border': '2px solid var(--light-mode)',
                    })
                }),

            // box-shadow
            $('.join-us-area .event-card').css({
                'box-shadow': 'var(--box-shadow)'
            })
    }

    if (count == 1) {
        lightModeFunction();
        console.log('light mode');
        count = 0;
        
    } else {
        darkModeFunction();
        console.log('dark mode');
        count = 1;
    }

    $('.material-symbols-outlined').on('click', function() {
        if (count == 1) { // Dark Mode

            darkModeFunction();
            count = 0;
        }
        else {  //Light Mode

            lightModeFunction();
            count = 1;
        }
    })

    console.log("hi")

    // Sticky-nav-bar
    
   let header_position = $('.header-area').offset().top + 450

   $(window).scroll(function () {
    let scrollValue = $(window).scrollTop();
    if (scrollValue > header_position) {
        $('.nav2').addClass('sticky')
    } else {
        $('.nav2').removeClass('sticky')
    }
   })

   // x-mark close-open
   $('.x-mark').on('click', function () {
    $('.login-form-overlay').css({
        'display': 'none'
    })
})

    //login-form
    $('.header-area .navbar .user-login').on('click', function () {
        $('.login-form-overlay').css({
            'display': 'flex'
        })
    })

    
})