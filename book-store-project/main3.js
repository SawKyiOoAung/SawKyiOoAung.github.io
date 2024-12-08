$(document).ready(function() {


    //getfrom local storage
    let $bookData = JSON.parse(localStorage.getItem('bookData'));

    //light-dark mode 
    let count = 1;

    function darkModeFunction3() {
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
    function lightModeFunction3() {
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

    $('.material-symbols-outlined').on('click', function() {
        if (count == 1) { // Dark Mode

            darkModeFunction3();
            count = 0;
        }
        else {  //Light Mode

            lightModeFunction3();
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

    // sticky hidden nav for 1024 px

    let header_position1 = $('.header-area').offset().top + 450
    $(window).scroll(function () {

        let scrollValue = $(window).scrollTop();
        if (scrollValue > header_position1) {
            $('.hidden-nav-for-px').css({
                'top': '0',
            })
        }
        
    })

   // x-mark close-open
   $('.x-mark').on('click', function () {
    $('.login-form-overlay').css({
        'display': 'none'
    })
})

    //login-form
    $('.header-area .navbar .user-login, .header-menu-area .hello').on('click', function () {
        $('.login-form-overlay').css({
            'display': 'flex'
        })
    })

    // Header menu area 
    $('.header-menu-area .first-div i:last-child').on('click',
        function() {
            $('.header-menu-area').css({
                'left': '-20rem',
            })
            $('.over-lay').css('display', 'none')
            .fadeOut(1000);
        }
    )

    $('.navbar-toggler').on('click',
        function() {
            $('.header-menu-area').css({
                'left': '0rem',
            })
            $('.over-lay').css('display', 'block')
            .fadeIn(1000)
        }
    )

    
})