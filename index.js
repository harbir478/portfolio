$(".navbar__items__social").click(function() {
  $(".sicon").toggle("slide");
});

AOS.init({});

$(".navbar__logo").click(function() {
  $("html,body").animate({
    scrollTop: $(".header").offset().top
  });
});

$(".navbar__items__about").click(function() {
  $("html,body").animate(
    {
      scrollTop: $(".header__none").offset().top
    },
    "slow"
  );
});

$(".navbar__items__projects").click(function() {
  $("html,body").animate(
    {
      scrollTop: $(".projects").offset().top
    },
    "slow"
  );
});

$(".navbar__items__contact").click(function() {
  $("html,body").animate(
    {
      scrollTop: $(".footer").offset().top
    },
    "slow"
  );
});

$(".btn--btnDiv").click(function() {
  $("html,body").animate(
    {
      scrollTop: $(".header__none").offset().top
    },
    "slow"
  );
});

$(".projectBtn").click(function() {
  $("html,body").animate(
    {
      scrollTop: $(".projects").offset().top
    },
    "slow"
  );
});
