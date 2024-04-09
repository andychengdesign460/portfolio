
$("a").on("mouseenter", handleMouseOver).on("mouseleave", handleMouseOut);

function handleMouseOver() {
  $("body").addClass("hover");
}

function handleMouseOut() {
  $("body").removeClass("hover");
}