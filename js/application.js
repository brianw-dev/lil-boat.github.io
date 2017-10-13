$(document).ready(function() {
  $('.1').fadeIn(1800);
  $('.2')
    .delay(800)
    .fadeIn(1500);
  $('.3')
    .delay(1600)
    .fadeIn(1500);
  $('.4')
    .delay(2400)
    .fadeIn(1500);
  $('.5')
    .delay(3200)
    .fadeIn(1500);
  $('.header')
    .delay(4000)
    .fadeIn(1500);
  scrollListener();
  aboutButtonListener();
  skillsButtonListener();
  projectsButtonListener();
  contactButtonListener();
  homeButtonListener();
});

var scrollListener = function() {
  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 100) {
      $('.header').addClass('white');
      $('.home').addClass('show');
    } else {
      $('.header').removeClass('white');
      $('.home').removeClass('show');
    }
  });
};

var aboutButtonListener = function() {
  $('.about-button').on('click', function() {
    $('html, body').animate(
      {
        scrollTop: $('.about').offset().top
      },
      1000
    );
  });
};

var skillsButtonListener = function() {
  $('.skills-button').on('click', function() {
    $('html, body').animate(
      {
        scrollTop: $('.skills').offset().top
      },
      1000
    );
  });
};

var projectsButtonListener = function() {
  $('.projects-button').on('click', function() {
    $('html, body').animate(
      {
        scrollTop: $('.projects').offset().top
      },
      1000
    );
  });
};

var contactButtonListener = function() {
  $('.contact-button').on('click', function() {
    $('html, body').animate(
      {
        scrollTop: $('.contact').offset().top
      },
      1000
    );
  });
};

var homeButtonListener = function() {
  $('.home').on('click', function() {
    $('html, body').animate(
      {
        scrollTop: $('.hero-image').offset().top
      },
      1000
    );
  });
};
