$(".hero-button").click(function(e) {
  e.preventDefault();
  $('html,body').animate({
      scrollTop: $(".intro-heading").offset().top - 90},
      'slow');
});

const strings = [
  "landing pages",
  "web apps",
  "corporate websites"
]

const options = {
  strings,
  typeSpeed: 50,
  loop: true,
  backSpeed: 50,
  startDelay: 150,
}

const typed = new Typed(".typewriter", options);
console.log('')


