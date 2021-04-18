$(function () {

  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.promotions-slider__items').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1200,
    fade: true,
    cssEase: 'linear',
    nextArrow: '<button type="button" class="slick-next"><img src="images/promotions/promo-left.png" alt="left arrow"></button>',
    prevArrow: '<button type="button" class="slick-prev"><img src="images/promotions/promo-right.png" alt="right arrow"></button>',
  });


  $(".star").rateYo({
    starWidth: "14px",
    normalFill: "#c9c9c9",
    ratedFill: "#80021e",
    readOnly: true,
  });

  $(".product-reviews__star").rateYo({
    starWidth: "14px",
    normalFill: "#c9c9c9",
    ratedFill: "#80021e",
    readOnly: false,
  });

  $('.filter-sort__list, .product-item__form-input, .purchase-item__form-input').styler();


  var $range = $(".filter-price__range");
  var $inputFrom = $(".filter-price__from");
  var $inputTo = $(".filter-price__to");
  var instance;
  var min = 110;
  var max = 4500;
  var from = 0;
  var to = 0;

  $range.ionRangeSlider({
    type: "double",
    min: min,
    max: max,
    from: 110,
    to: 3000,
    onStart: updateInputs,
    onChange: updateInputs,
    onFinish: updateInputs,
    prefix: "$",
  });

  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("change", function () {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val
    });

    $(this).prop("value", val);

  });

  $inputTo.on("change", function () {
    var val = $(this).prop("value");

    // validate
    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });

    $(this).prop("value", val);
  });



  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    dots: false,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 2,
        nav: true,
        margin: 25
      },
      1024: {
        items: 3
      }
    }
  });
  
});