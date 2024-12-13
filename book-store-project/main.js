$(document).ready(function() {

    // prevent-button 
    
    $('button').on('click', function (event) {
        event.preventDefault()
    } ) //<i class="fa-regular fa-eye-slash"></i>

    // User Cookie

    let $getCookie = localStorage.getItem('cookie'); //getCookie

    if ($getCookie) {
        $('.cookie-area').css({
            'bottom': '-100rem',
        })
    } else {

        $('.cookie-area').css({
            'bottom': '0rem',
        })

        $('.cookie-area .cookie-button a:nth-child(2)').on('click', function () {

            let $cookie = 1;
            localStorage.setItem('cookie', $cookie) //storecookie
    
            $('.cookie-area').css({
                'bottom': '-50rem',
            })
        })
    }

    //Adding to cart home page

    let cartCount = 0;
    $('.book-card button, .element-item button, .add-to-cart-button .button-add').on('click',
        console.log('gg'),
        function () {
            cartCount += 1,
            $('.cart-area span').text(cartCount)
        }
    )

    $('.cart-area').on('click',
        function () {
            if (cartCount == 0) {
                cartCount = 0
            } else {
                cartCount -= 1,
                $('.cart-area span').text(cartCount)
            }

        }
    )



    //direct to link

    let $bookCard,$imgSrc,$bookTitle,$bookPrice

    $('.card-content h6').on('click', function (event) {

        event.preventDefault()

        //find the closet parent
        $bookCard = $(this).closest(".book-card");
        $imgSrc = $bookCard.find('img').attr('src');
        $bookTitle = $bookCard.find('h6').text();
        $bookPrice = $bookCard.find('.card-content p span').text()

        const $bookData = { 
            imgSrc: $imgSrc,
            bookTitle: $bookTitle,
            bookPrice: $bookPrice,
        }

        localStorage.setItem('bookData', JSON.stringify($bookData))

        //update img 

        $('.hidden-nav-left img, .first-left-pannel img').attr('src', $imgSrc)
        $('.hidden-div-content p:first-child span, .first-right-pannel h4 span h4').text($bookTitle)
        $('.first-right-pannel .price, .span-1').text($bookPrice)
        

        // update img
        $('.hidden-nav-left img').attr('src', $imgSrc)

        window.location.href = "book-review.html"  
    })

    //getfrom local storage
    $bookData = JSON.parse(localStorage.getItem('bookData'));

    if ($bookData) {

        console.log($bookData)
        console.log($bookData.imgSrc, 'hi')

        $('.hidden-nav-left img, .first-left-pannel img').attr('src', $bookData.imgSrc)
        $('.hidden-div-content p:first-child span, .first-right-pannel h4 span h4').text($bookData.bookTitle)
        $('.first-right-pannel .price, .span-1').text($bookData.bookPrice)
        $('.nav2').removeClass('sticky')
    }


    //light-dark mode 
    let count = 1;

    function darkModeFunction1 () {
        $('.material-symbols-outlined').text('dark_mode'),

            $('.end-area, body, .category-area .button-group button')
            .css('background-color', 'var(--dark-mode'),

            // $('.header-area stick')
            // .css('color', 'var(--dark-mode'),

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

            //cookie area

            $('.cookie-area .cookie-button a:nth-child(2)').css({
                'background-color': 'var(--dark-mode)',
            })

            $('.cookie-area .cookie-button a:nth-child(2)').hover(
                function() {
                    $('.cookie-area .cookie-button a:nth-child(2)').css({
                        'background-color': 'var(--secondary-color)',
                        'border': '2px solid var(--dark-mode)',
                        'color': 'var(--dark-mode)',
                    })
                },
                function() {
                    $('.cookie-area .cookie-button a:nth-child(2)').css({
                        'background-color': 'var(--dark-mode)',
                        'border': '2px solid var(--secondary-color)',
                        'color': 'var(--secondary-color)',
                    })
                }
            )

            //input-transparency 
            $('.login-form-overlay').css({
                'background-color': 'var(--input-transparency-dark)',
            })

            // box-shadow
            $('.book-showcase-area .owl-carousel .book-card, .category-area .element-item, .service-offer-area .service-card').css({
                'box-shadow': 'var(--box-shadow-for-dark)'
            })
    }
    function lightModeFunction1 () {
        $('.material-symbols-outlined').text('wb_sunny'),

            $('.end-area, body, .category-area .button-group button')
            .css('background-color', 'var(--light-mode'),

            // $('.header-area .stick')
            // .css('color', 'var(--light-mode'),

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

            $('.cookie-area .cookie-button a:nth-child(2)').css({
                'background-color': 'var(--light-mode)',
            })

            $('.cookie-area .cookie-button a:nth-child(2)').hover(
                function() {
                    $('.cookie-area .cookie-button a:nth-child(2)').css({
                        'background-color': 'var(--secondary-color)',
                        'border': '2px solid var(--light-mode)',
                        'color': 'var(--light-mode)',
                    })
                },
                function() {
                    $('.cookie-area .cookie-button a:nth-child(2)').css({
                        'background-color': 'var(--light-mode)',
                        'border': '2px solid var(--secondary-color)',
                        'color': 'var(--secondary-color)',
                    })
                }
            )

            //input-transparency 
            $('.login-form-overlay').css({
                'background-color': 'var(--input-transparency-light)',
                'color': 'var(--light-mode)',
            })

            // box-shadow
            $('.book-showcase-area .owl-carousel .book-card, .category-area .element-item, .service-offer-area .service-card').css({
                'box-shadow': 'var(--box-shadow)'
            })
    }
    function darkModeFunction2 () {
        $('.end-area, body, .upcoming-event-card, .movement-area input, .hidden-nav')
           .css('background-color', 'var(--dark-mode'),
        
           $('.pannel-area .left-pannel, .right-pannel, .hidden-nav, .book-showcase-area .owl-carousel .book-card .card-content p').css({
               'color': 'var(--light-mode)',
           })

           $('.hidden-nav').css({
               'box-shadow': 'var(--box-shadow-for-dark)'
           })

           // box-shadow
           $('.hidden-nav, .book-showcase-area .owl-carousel .book-card, .category-area .element-item').css({
               'box-shadow': 'var(--box-shadow-for-dark)'
           })


           //two-button
           $('.add-to-cart-button button:first-child, .third-right-pannel .decrease-button, .increase-button').css({
               'background-color': 'var(--secondary-color)',
               'color': 'var(--light-mode)',
               'border': '2px solid var(--secondary-color)',
           })

           $('.add-to-cart-button button:nth-child(2)').css({
               'color': 'var(--secondary-color)',
               'border': '2px solid var(--secondary-color)',
               'background-color': 'var(--dark-mode)',

           })

           //button hover 

           //add-to-cart-firstchild
           $('.add-to-cart-button button:first-child, .third-right-pannel .decrease-button, .increase-button').hover(
               function() {
                   $(this).css({
                       'background-color': 'var(--dark-mode)',
                       'color': 'var(--accent-color)',
                       'border': '2px solid var(--secondary-color)',
                   })

               },
               function () {
                   $(this).css({
                       'background-color': 'var(--secondary-color)',
                       'color': 'var(--light-mode)',
                       'border': '2px solid var(--secondary-color)',
                   })
               }),

           //add-to-cart-Secondchild
           $('.add-to-cart-button button:nth-child(2)').hover(
               function() {
                   $(this).css({
                       'background-color': 'var(--secondary-color)',
                       'color': 'var(--light-mode)',
                   })

               },
               function () {
                   $(this).css({
                       'color': 'var(--secondary-color)',
                       'border': '2px solid var(--secondary-color)',
                       'background-color': 'var(--dark-mode)',

                   })
               })
    }
    function lightModeFunction2 () {
        $('.end-area, body, .upcoming-event-card, .movement-area input, .hidden-nav')
           .css('background-color', 'var(--light-mode'),

           $('.pannel-area .left-pannel, .right-pannel, .hidden-nav, .book-showcase-area .owl-carousel .book-card .card-content p').css({
               'color': 'var(--dark-mode)',
           })

           // box-shadow
           $('.hidden-nav, .book-showcase-area .owl-carousel .book-card, .category-area .element-item').css({
               'box-shadow': 'var(--box-shadow)'
           })

           //two-button
           $('.add-to-cart-button button:first-child, .third-right-pannel .decrease-button, .increase-button').css({
               'background-color': 'var(--secondary-color)',
               'color': 'var(--light-mode)',
               'border': '2px solid var(--secondary-color)',
           }),

           $('.add-to-cart-button button:nth-child(2)').css({
               'color': 'var(--secondary-color)',
               'border': '2px solid var(--secondary-color)',
               'background-color': 'var(--light-mode)',
           }),

           //button hover 

           //add-to-cart-firstchild
           $('.add-to-cart-button button:first-child, .third-right-pannel .decrease-button, .increase-button').hover(
               function() {
                   $(this).css({
                       'background-color': 'var(--light-mode)',
                       'color': 'var(--accent-color)',
                       'border': '2px solid var(--secondary-color)',
                   })

               },
               function () {
                   $(this).css({
                       'background-color': 'var(--secondary-color)',
                       'color': 'var(--light-mode)',
                       'border': '2px solid var(--secondary-color)',
                   })
               }),

           //add-to-cart-Secondchild
           $('.add-to-cart-button button:nth-child(2)').hover(
               function() {
                   $(this).css({
                       'background-color': 'var(--secondary-color)',
                       'color': 'var(--light-mode)',
                   })

               },
               function () {
                   $(this).css({
                       'color': 'var(--secondary-color)',
                       'border': '2px solid var(--secondary-color)',
                       'background-color': 'var(--light-mode)'
                   })
               })
    }
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
        if (count == 1) {                   //dark mode
            
            darkModeFunction1();
            darkModeFunction2();
            darkModeFunction3();
            count = 0
        } 
        else {                                 //light mode
            lightModeFunction1();
            lightModeFunction2();
            lightModeFunction3();
            count = 1
        }
    })

    console.log('hi')


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
        nav: false,
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
                nav: true,
            },
            768: {
                items: 4,
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
                items:1,
                dots: false,
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

    if (window.location.pathname.endsWith("index.html")) {
        let scrollValue = $(window).scrollTop();
        if (scrollValue > header_position) {
            $('.nav2').addClass('sticky')
        } else {
            $('.nav2').removeClass('sticky')
        }
    } 
        
    })

    //sticky-hidden-nav for increase / decrease

    if (window.location.pathname.endsWith("book-review.html")) {
    $('.sticky').css('display', 'none');
        
    let position = $('.add-to-cart-button').offset().top
    $(window).scroll(function() {
    let scrollValue1 = $(window).scrollTop() 
    console.log(position);
    console.log(scrollValue1);
    if (scrollValue1 > 870) {
        $('.hidden-nav').css({
            'top': '0'
        })
    } else {
        $('.hidden-nav').css({
            'top': '-100px'
        })
    }

    return false;
    })

    console.log('hi4')
    }

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


    console.log('hi1')

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
    $('.header-area .navbar .user-login, .header-menu-area .hello').on('click', function () {
        $('.login-form-overlay').css({
            'display': 'flex'
        })
    })

    // ----------------------------------main2.js-------------------------------------

    // increase-decrease function

    let number = 1;
    $('.increase-button').on('click', function() {
        number += 1;
        $('.increase-decrease-button span').text(number);
    })
    $('.decrease-button').on('click', function() {

        if (number == 1) {
            number = 1
        } else {
            number -= 1;
            $('.increase-decrease-button span').text(number);
        }

        
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