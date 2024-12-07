$(document).ready(function() {


    //getfrom local storage
    let $bookData = JSON.parse(localStorage.getItem('bookData'));
    let $themeData = parseInt(localStorage.getItem('themeData'), 10);

    //light-dark mode 
    let count = 1;

    localStorage.setItem('themeData', count);

    if ($bookData) {
        count = $bookData.lightDark; //can throw if it doesn't exist in local storage
    }
    if ($themeData) {
        count = $themeData.$themeData
    }
    console.log(count);
    
    

    //direct to link

    $('.card-content h6').on('click', function (event) {

        event.preventDefault()

        //find the closet parent
        let $bookCard = $(this).closest(".book-card");
        let $imgSrc = $bookCard.find('img').attr('src');
        let $bookTitle = $bookCard.find('h6').text();
        let $bookPrice = $bookCard.find('.card-content p span').text()

        const $bookData = { 
            imgSrc: $imgSrc,
            bookTitle: $bookTitle,
            bookPrice: $bookPrice,
            lightDark: count,
        }

        console.log(count)

        localStorage.setItem('bookData', JSON.stringify($bookData))


        // update img
        $('.hidden-nav-left img').attr('src', $imgSrc)

        setTimeout(function () {
            window.location.href = "book-review.html";}, 100
        )
    })

    function darkModeFunction () {
        $('.two-center .help-center .material-symbols-outlined').text('dark_mode'),

            $('.end-area, body, .category-area .button-group button')
            .css('background-color', 'var(--dark-mode'),

            $('.header-area stick')
            .css('color', 'var(--dark-mode'),

            $('.book-showcase-area .title-text p, .book-showcase-area .owl-carousel .book-card .card-content p, .service-offer-area .service-card h4, .client-say-area .client-card ')
            .css('color', 'var(--light-mode)'),

            $('.email-input-area form button').hover(
                function () {
                    $('.email-input-area form button').css({
                        'background-color': 'var(--dark-mode)',
                        'color': 'var(--light-mode)'
                    })
                },
                function () {
                    $('.email-input-area form button').css({
                        'background-color': 'var(--secondary-color)',
                        'color': 'var(--light-mode)'

                    })
                }
                
            )

            // Email-input-area
            $('.footer-area .footer-upper button').hover(
                function () {
                    $('.footer-area .footer-upper button').css({
                        'background-color': 'var(--dark-mode)',
                        'color': 'var(--light-mode)'
                    })
                },
                function () {
                    $('.footer-area .footer-upper button').css({
                        'background-color': 'var(--secondary-color)',
                        'color': 'var(--light-mode)'
                    })
                }
                
            )

            //input-transparency 
            $('.login-form-overlay').css({
                'background-color': 'var(--input-transparency-dark)',
            })

            // box-shadow
            $('.book-showcase-area .owl-carousel .book-card, .category-area .element-item, .sticky').css({
                'box-shadow': 'var(--box-shadow-for-dark)'
            })
    }
    function lightModeFunction () {
        $('.two-center .help-center .material-symbols-outlined').text('wb_sunny'),

            $('.end-area, body, .category-area .button-group button')
            .css('background-color', 'var(--light-mode'),

            $('.header-area .stick')
            .css('color', 'var(--light-mode'),

            $('.book-showcase-area .title-text p, .book-showcase-area .owl-carousel .book-card .card-content p, .service-offer-area .service-card h4, .client-say-area .client-card')
            .css('color', 'var(--dark-mode)'),


            // Email-input-area
            $('.email-input-area form button').hover(
                function () {
                    $('.email-input-area form button').css({
                        'background-color': 'var(--light-mode)',
                        'color': 'var(--dark-mode)'
                    })
                },
                function () {
                    $('.email-input-area form button').css({
                        'background-color': 'var(--secondary-color)',
                        'color': 'var(--light-mode)'
                    })
                } 
            )

             // Email-input-area
             $('.footer-area .footer-upper button').hover(
                function () {
                    $('.footer-area .footer-upper button').css({
                        'background-color': 'var(--light-mode)',
                        'color': 'var(--dark-mode)'
                    })
                },
                function () {
                    $('.footer-area .footer-upper button').css({
                        'background-color': 'var(--secondary-color)',
                        'color': 'var(--light-mode)'
                    })
                } 
            )

            //input-transparency 
            $('.login-form-overlay').css({
                'background-color': 'var(--input-transparency-light)',
                'color': 'var(--light-mode)',
            })

            // box-shadow
            $('.book-showcase-area .owl-carousel .book-card, .category-area .element-item, .sticky').css({
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
        if (count == 1) {                   //dark mode
            
            darkModeFunction();
            count = 0
        } 
        else {                                 //light mode
            lightModeFunction();
            count = 1
        }
    })


    //  dropdown

    $('.header-area .dropdown').hover(
        function() {
            $('.over-lay').css('display', 'block')
            .fadeIn(1000)
        }, 
        function() {
            $('.over-lay').css('display', 'none')
            .fadeOut(1000);
        }
    )

    //owl carousel - promotion-area

    $('.promotion-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            544: {
                items: 1
            }
        }
    })

    // book-showcase caarousel

    var owl = $('.book-showcase-area .owl-carousel');
    owl.owlCarousel({
        loop:true,
        margin: 10,
        autoplay: true,
        dots: true,
        responsive:{
            321: {
                items: 1,
                nav: true,
                dots: false,
            },
            375:{
                items: 2,
            },            
            426:{
                items:2,
                margin: 8,
                dots: false,
            },
            1024: {
                items: 5
            },
            1200:{
                items:6
            }
        }
    });


    // Isotope

    let $btns = $('.category-area .button-group button')
    $btns.click(function(e) {

        $('.category-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');

        $('.category-area .grid').isotope( {
            filter: selector,
            layoutMode: 'fitRows',
        });

        return false;
    })

    $('.category-area .button-group #btn1').trigger('click');

    // category-img-pop-up

    $('.test-popup-link').magnificPopup({
        type: 'image',
        gallery: {enabled: true},
    })

    //client carousel

    $('.client-say-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        nav: true,
        margin: 50,
        responsive: {
            0:{
                items:1
            },
            600:{
                items:1
            },            
            768:{
                items:1
            },
            1024:{
                items: 2
            },
            1200:{
                items:2
            }
        }
    })



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

    // prevent-button 
    
    $('button').on('click', function (event) {
        event.preventDefault()
    } ) //<i class="fa-regular fa-eye-slash"></i>


    //close-open eye
    let eye = 1
    $('.password-input button').on('click', function () {
        if (eye == 1) {
            $('.password-input input').attr('type', 'password');
            $('.password-input button i').removeClass('fa-eye').addClass('fa-eye-slash');
            eye = 0
        } else {
            $('.password-input button i').removeClass('fa-eye-slash').addClass('fa-eye');
            $('.password-input input').attr('type', 'type');
            eye = 1;
        }
    })

    $('input').on('input', function () {
        $(this).css('color', 'var(--light-mode)');
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