
// mouse effect

$("a").on("mouseenter", handleMouseOver).on("mouseleave", handleMouseOut);

function handleMouseOver() {
  $("body").addClass("hover");
}

function handleMouseOut() {
  $("body").removeClass("hover");
}





document.getElementById("id_icon").onclick = function() {menuFunction()};
function menuFunction() {
  var x = document.getElementById("id_menu");
  if (x.style.display === "flex") {
    x.style.display = "none";}
     else{
      x.style.display = "flex";}

 }
  





function resetMenu() {
  var x = document.getElementById("id_menu");
  if (window.innerWidth<992) {
    x.style.display = "none";}
  else
    {
      x.style.display = "flex";}
    
}

window.onresize = resetMenu;





document.getElementById("top").onclick = function() {topFunction()};
function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" })

}

document.getElementById("toabout").onclick = function() {bottomFunction()};
function bottomFunction() {

  document.getElementById("about").scrollIntoView({ 
    behavior: 'smooth' 
  });
  
}







// lightbox scroll up move left


const lightbox = document.getElementById('myLightbox');
const bigbox = document.getElementById('bigbox');
const header = document.getElementById('header');


let scrollPosition = 0;

// Set up the Intersection Observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Lightbox is now in view, start the scroll listener
            window.addEventListener('scroll', handleScroll);
        } else {
            // Lightbox is not in view, remove the scroll listener
            window.removeEventListener('scroll', handleScroll);
        }
    });
}, { threshold: 0.0 }); // Adjust the threshold as needed

// Observe the lightbox
observer.observe(bigbox);

function handleScroll() {
    const newScrollPosition = parseFloat(window.scrollY);
    //const newScrollPosition = parseFloat(window.scrollY)-parseFloat(getComputedStyle(header).height);

    const scrollDelta = scrollPosition - newScrollPosition;

    const currentLeft = parseFloat(getComputedStyle(lightbox).left);
    lightbox.style.left = `${currentLeft + scrollDelta}px`;

    scrollPosition = newScrollPosition;
}








window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var x = document.getElementById("andy");
    var a = document.getElementById("illustration_deco1");
    var b = document.getElementById("illustration_deco2");
    var c = document.getElementById("illustration_deco3");

    if($(window).width() > 767){
 
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ) {
        x.style.fontSize=36+'px';
      }
      else
      { x.style.fontSize=(60-(document.documentElement.scrollTop*.5))+'px';
        
     }
    
    } else{

        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ) {
            x.style.fontSize=24+'px';
          }
          else
          { x.style.fontSize=(48-(document.documentElement.scrollTop*.5))+'px';
            
         }


    }




    if($(window).width() > 767){

      if (document.body.scrollTop >14000 || document.documentElement.scrollTop >14000) {
        a.style.left=(320-(document.documentElement.scrollTop*.015))+'vw';
        b.style.left=(340-(document.documentElement.scrollTop*.015))+'vw';
        c.style.left=(250-(document.documentElement.scrollTop*.01))+'vw';
        
      }
    }
    else{

           {
            a.style.display="none";
            b.style.display="none";
            c.style.display="none";
          }
        


    }
       
}   






// nodot button

document.getElementById("nodot").onclick = function() {switchdot()};

function switchdot() {
  
  var x = document.getElementById("sketchContainer2");
  var x2 = document.getElementById("sketchContainer3");
  var y = document.getElementById("nodot");


// nodot button if (need double=  ==)
  if (x.style.display == "none"){

   { x.style.display = "block";
     x2.style.display = "block";
     y.style.background= "#ccc"; }
     
  }

  else{

  { x.style.display = "none";
    x2.style.display = "none";
    y.style.background= "#0000FF";}

    }

}







$(document).ready(function(){	


	//fancybox group
	$(".fancybox").fancybox({
		openEffect	: 'none', //'elastic', 'fade' or 'none'
		closeEffect	: 'none'
	});


	//fancybox single
	$("#s2").fancybox({
    	openEffect	: 'elastic',//彈出
    	closeEffect	: 'elastic',

    	helpers : {
    		title : {
    			type : 'inside' // 'float', 'inside', 'outside' or 'over'
    		}
    	}
    });

		
});






