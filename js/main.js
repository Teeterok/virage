
//  store brand-slider


  
  $(document).ready(function(){
    $('.brand-slider').slick({
     
        dots: false,
    arrows: true,
    accessibility: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplaySpeed: 3000,
    //asNavFor:'',
    appendDots:$('.dots'),
    
    nextArrow:$('.brand-slider__button-prev'),
    prevArrow:$('.brand-slider__button-next'),
    
    
    responsive: [{
      breakpoint: 768,
      settings: {}
      
    }]
    
    });
  });
  
//  store our works

  $(document).ready(function(){
    $('.our-works-slick').slick({
     
        dots: false,
    arrows: true,
    accessibility: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplaySpeed: 3000,
    //asNavFor:'',
    appendDots:$('.dots'),
    
    nextArrow:$('.our-works-slick__next'),
    prevArrow:$('.our-works-slick__prev'),
    
    
    responsive: [{
      breakpoint: 768,
      settings: {}
      
    }]
    
    });
  });

// store phone  slider

  $(document).ready(function(){
    $('.phone-slider').slick({
     
        dots: false,
    arrows: true,
    accessibility: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplaySpeed: 3000,
    centerMode: true,
    //asNavFor:'',
    appendDots:$('.dots'),
    
    nextArrow:$('.phone-slider-item__next'),
    prevArrow:$('.phone-slider-item__prev'),
    
    
    responsive: [{
      breakpoint: 768,
      settings: {}
      
    }]
    
    });
  });

// store-slider

  $(document).ready(function(){
    $('.store-slider').slick({
     
        dots: false,
    arrows: true,
    accessibility: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
   
    //asNavFor:'',
    appendDots:$('.dots'),
    
    nextArrow:$('.store-slider__prev'),
    prevArrow:$('.store-slider__next'),
    
    
    responsive: [{
      breakpoint: 768,
      settings: {}
      
    }]
    
    });
  });

// Store brands slider
  
  $(document).ready(function(){
    $('.store-brands__slider').slick({
     
        dots: false,
    arrows: true,
    accessibility: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplaySpeed: 3000,
   
    //asNavFor:'',
    appendDots:$('.dots'),
    
    nextArrow:$('.store-brands-slider__prev'),
    prevArrow:$('.store-brands-slider__next'),
    
    
    responsive: [{
      breakpoint: 768,
      settings: {}
      
    }]
    
    });
  });


// Выплывапющий блок

  
	$(".question__name").click(function(e) {
		e.preventDefault();
		$(".answer").removeClass("active");

		$(".question__answer").slideUp(200);
		if ($(this).siblings(".question__answer").is(":hidden")) {
			$(this).parent().addClass("active");
			$(this).siblings(".question__answer").slideDown(200);
		
		} else {
			$(this).parent().removeClass("active");
		$(this).siblings(".question__answer").slideUp(200);
		
		}

    });
    

// tabs

    $(document).ready(function($) {
      $('.technical-menu__items-2').hide();
      $('.technical-menu__items-2:first').show();
      $('.technical-menu li:first').addClass('active');
      $('.technical-menu li').click(function(event) {
        $('.technical-menu li').removeClass('active');
        $(this).addClass('active');
        $('.technical-menu__items-2').hide();
    
        var selectTab = $(this).find('a').attr("href");
    
        $(selectTab).fadeIn();
      });
    });



    $('[data-fancybox="modal"]').fancybox({
      // Options will go here
    });





    $.fancybox.open('<div class="message"><h2>Hello!</h2><p>You are awesome!</p></div>');