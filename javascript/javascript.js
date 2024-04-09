// Get the button:
let mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
  

  var x = document.getElementById("track");
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" })
 
  //document.body.scrollTop = 0; // For Safari
  //document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera 
}









function homeworkFunction() {

   // element which needs to be scrolled to
      var element = document.querySelector("#grid");

   // scroll to element
      element.scrollIntoView({ behavior: "smooth" });
  

}

 



/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}



/*
$(document).ready(function () {
    var $horizontal = $('#frame');
    var startPosition = $horizontal.position().left;
    var speed = 14;
    $(window).scroll(function () {
        var st = $(this).scrollTop();
        var newPos = (st * (speed/100)) + startPosition;
        $horizontal.css({
            'left': newPos
        });
    });
});

*/











