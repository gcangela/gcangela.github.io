$(".hero-button").click(function(e) {
  e.preventDefault();
  $('html,body').animate({
      scrollTop: $(".intro-heading").offset().top - 80},
      'slow');
});

const strings = [
  "landingpages",
  "webapps",
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


