$(document).ready(function() {
    
    //update img 
    if ($bookData) {
        $('.hidden-nav-left img, .first-left-pannel img').attr('src', $bookData.imgSrc);
        $('.hidden-div-content p:first-child span, .first-right-pannel h4 span h4').text($bookData.bookTitle)
        $('.first-right-pannel .price, .span-1').text($bookData.bookPrice)
    }
    else {
        console.log("no image source is found in localstorage.")
    }

    //light-dark mode 
    let count = 1;

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
                   })
               })
    }

    $('.material-symbols-outlined').on('click', function() {
        if (count == 1) { // Dark Mode

           darkModeFunction2();
           count = 0;
        }
        else { // Light Mode

            lightModeFunction2();
            count = 1;
        }
    });

    //getfrom local storage
    let $bookData = JSON.parse(localStorage.getItem('bookData'));

    // direct link
    $('.card-content h6').on('click', function () {
        let $book = $(this).closest('.book-card');
        let $bookImage = $book.find('img').attr('src');
        let $bookTitle = $book.find('h6').text();
        let $bookPrice = $book.find('.card-content p span').text()
        console.log($bookImage)
        
        $('.hidden-nav-left img, .first-left-pannel img').attr('src', $bookImage);
        $('.hidden-div-content p:first-child span, .first-right-pannel h4 span h4').text($bookTitle);
        $('.first-right-pannel .price').text($bookPrice);
    }     
    )

     //sticky-hidden-nav 

     let position = $('.add-to-cart-button').offset().top
     console.log(position)
     $(window).scroll(function() {
        let scrollValue = $(window).scrollTop() 
        if (scrollValue > position) {
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

     // book-showcase caarousel

    var owl = $('.book-showcase-area .owl-carousel');
    owl.owlCarousel({
        loop:true,
        margin: 10,
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },            
            960:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });

    
})