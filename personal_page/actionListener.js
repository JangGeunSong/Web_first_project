window.onload = function(){
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for(i = 0; i < coll.length; i++){
    coll[i].addEventListener("click", function(){
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if(content.style.maxHeight) {
        content.style.maxHeight = null;
      }
      else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }

  var slideIndex = 1;
  showSlide(slideIndex);

  var prev = document.getElementsByClassName("prev");
  prev[0].addEventListener("click", function() {
    showSlide(slideIndex += -1);
  });
  var next = document.getElementsByClassName("next");
  next[0].addEventListener("click", function() {
    showSlide(slideIndex += 1);
  });

  function currentSlide(n) {
    showSlide(slideIndex = n);
  }

  function showSlide(n) {
    var i;
    var slide = document.getElementsByClassName("slidecomp");
    if(n > slide.length) {slideIndex = 1}
    if(n < 1) {slideIndex = slide.length}
    for(i = 0; i < slide.length; i++) {
      slide[i].style.display = "none";
    }
    slide[slideIndex-1].style.display = "block";
  }
  
}
