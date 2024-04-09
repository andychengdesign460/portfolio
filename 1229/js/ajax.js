function loadDoc() {
	const xhttp = new XMLHttpRequest();
	xhttp.onload = function() {
	  document.getElementById("demo").innerHTML = this.responseText;
	  }
	xhttp.open("GET", "ajax_info.txt", true);
	xhttp.send();
  }


$("#div1").load("test.txt");
$("#div1").load("demo.html");