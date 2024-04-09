// mouse effect

$("a").on("mouseenter", handleMouseOver).on("mouseleave", handleMouseOut);

function handleMouseOver() {
  $("body").addClass("hover");
}

function handleMouseOut() {
  $("body").removeClass("hover");
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var x = document.getElementById("andy");
    var a = document.getElementById("illustration_deco1");
    var b = document.getElementById("illustration_deco2");
    var c = document.getElementById("illustration_deco3");

    if($(window).width() > 1200){
 
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






    if($(window).width() > 1200){

      if (document.body.scrollTop >0 || document.documentElement.scrollTop >0) {
        a.style.left=(200-(document.documentElement.scrollTop*.3))+'vw';
        b.style.left=(250-(document.documentElement.scrollTop*.3))+'vw';
        c.style.left=(300-(document.documentElement.scrollTop*.1))+'vw';
       
      }
    }
    else{

        if (document.body.scrollTop >0 || document.documentElement.scrollTop >0) {
            a.style.left=(150-(document.documentElement.scrollTop*.3))+'vw';
            b.style.left=(170-(document.documentElement.scrollTop*.3))+'vw';
            c.style.left=(600-(document.documentElement.scrollTop*.1))+'vw';
           
          }
        


    }
       
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