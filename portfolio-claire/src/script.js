$(document).ready(function () {



    /*code pour scroller lentement*/
    var scroll = function () {
        $('.page-scroll a').bind('click', function (event) {
            var $anchor = $(this);
            console.log($anchor);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1000, 'easeInOutExpo');
            event.preventDefault();
        });
    }
    scroll();

    /*code pour changer le bouton ENVOYER*/
    let element = document.querySelector('button[type="submit"]');
    element.addEventListener = ('click', function (e) {
        e.target.innerHTML = "Envoyé !";
    });

    /*code pour augmenter mes carré projets quand je passe mon curseur dessus*/
    document.getElementsByClassName("card")[0].addEventListener("mouseover", mouseOver);
    document.getElementsByClassName("card")[0].addEventListener("mouseout", mouseOut);

    function mouseOver() {
        console.log("je suis dans mouseOver");
        console.log(document.getElementsByClassName("card")[0].style);
        document.getElementsByClassName("card")[1].style.cssText = "width: 20rem; height: 24.8rem";
    }

    function mouseOut() {
        console.log("je suis dans mouseOut");
        document.getElementsByClassName("card")[1].style.cssText = "width: 18rem; height: 22.8rem";
    }

});







