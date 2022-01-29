window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementsByClassName("nav-bar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementsByClassName("nav-bar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}