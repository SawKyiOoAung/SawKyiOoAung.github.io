$(document).ready(function () {
    console.log("hi");
    console.log(window.innerWidth)
    
    if (document.body.id === "index.html") { // index.html
        console.log('index.html')
        console.log(window.innerWidth);
        if ($('.hero-section .navbar .nav-item .dropdown-content').is(':visible')) {
            $('.fa-angle-up').css({'transform': 'rotate(180deg)'});
        } 
    } else if (document.body.id === "festival_jan.html") {
        console.log("festival_Jan")
        
    }
})