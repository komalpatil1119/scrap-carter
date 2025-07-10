(function ($) {
    "use strict";
	
	var $window = $(window); 
	var $body = $('body'); 

	/* Preloader Effect */
	$window.on('load', function(){
		$(".preloader").fadeOut(600);
	});

	/* Sticky Header */	
	if($('.active-sticky-header').length){
		$window.on('resize', function(){
			setHeaderHeight();
		});

		function setHeaderHeight(){
	 		$("header.main-header").css("height", $('header .header-sticky').outerHeight());
		}	
	
		$window.on("scroll", function() {
			var fromTop = $(window).scrollTop();
			setHeaderHeight();
			var headerHeight = $('header .header-sticky').outerHeight()
			$("header .header-sticky").toggleClass("hide", (fromTop > headerHeight + 100));
			$("header .header-sticky").toggleClass("active", (fromTop > 600));
		});
	}	
	
	/* Slick Menu JS */
	// $('#menu').slicknav({
	// 	label : '',
	// 	prependTo : '.responsive-menu'
	// });

	// if($("a[href='#top']").length){
	// 	$(document).on("click", "a[href='#top']", function() {
	// 		$("html, body").animate({ scrollTop: 0 }, "slow");
	// 		return false;
	// 	});
	// }

	// document.addEventListener("DOMContentLoaded", function () {
	// 	const currentPage = window.location.pathname.split("/").pop();
	// 	const menuLinks = document.querySelectorAll("#menu .nav-link");
	
	// 	menuLinks.forEach(link => {
	// 	  if (link.getAttribute("href") === currentPage) {
	// 		link.classList.add("active");
	// 	  }
	// 	});
	//   });


	// Initialize slicknav
$('#menu').slicknav({
	label: '',
	prependTo: '.responsive-menu'
  });
  
  // Smooth scroll to top link
  if ($("a[href='#top']").length) {
	$(document).on("click", "a[href='#top']", function () {
	  $("html, body").animate({ scrollTop: 0 }, "slow");
	  return false;
	});
  }
  
  // Add 'active' class to current menu item
  document.addEventListener("DOMContentLoaded", function () {
	const currentPage = window.location.pathname.split("/").pop();
	const menuLinks = document.querySelectorAll("#menu .nav-link");
  
	menuLinks.forEach(link => {
	  if (link.getAttribute("href") === currentPage) {
		link.classList.add("active");
	  }
	});
  });
  
  // ✅ Auto-close slicknav menu on scroll if open
  window.addEventListener('scroll', function () {
	// Check if slicknav menu is open
	const slicknavMenu = document.querySelector('.slicknav_menu');
	const slicknavButton = document.querySelector('.slicknav_btn');
  
	if (slicknavMenu && slicknavButton && slicknavButton.classList.contains('slicknav_open')) {
	  slicknavButton.click(); // Simulate click to close menu
	}
  });
  

	/* Hero Slider Layout JS */
	const hero_slider_layout = new Swiper('.hero-slider-layout .swiper', {
		slidesPerView : 1,
		speed: 1000,
		spaceBetween: 0,
		loop: true,
		autoplay: {
			delay: 4000,
		},
		pagination: {
			el: '.hero-pagination',
			clickable: true,
		},
	});
	
	/* Services Slider JS */
	if ($('.service-list').length) {
		const projects_slider = new Swiper('.service-list .swiper', {
			slidesPerView : 1,
			speed: 1000,
			spaceBetween: 30,
			loop: true,
			autoplay: {
				delay: 5000,
			},
			pagination: {
				el: '.service-pagination',
				clickable: true,
			},
			breakpoints: {
				768:{
					slidesPerView: 2,
				},
				991:{
					slidesPerView: 4,
				}
			}
		});
	}
	document.addEventListener('DOMContentLoaded', function () {
		var swiper = new Swiper('.review-slider', {
		  direction: 'vertical',
		  slidesPerView: 3,
		  spaceBetween: 15,
		  loop: true,
		  autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		  },
		  navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		  },
		  breakpoints: {
			0: {
			  slidesPerView:2, // 1 slide on small devices
			},
			768: {
			  slidesPerView: 2,
			},
			992: {
			  slidesPerView: 2,
			},
		  },
		});
	  });
	/* testimonial Slider JS */
	const testimonial_slider = new Swiper('.testimonial-slider .swiper', {
		slidesPerView: 3,
		slidesPerGroup: 3,
		spaceBetween: 40,
		loop: false,
		speed: 1000,
		autoplay: {
			delay: 5000,
		},
		navigation: {
			nextEl: '.testimonial-button-next',
			prevEl: '.testimonial-button-prev',
		},
		pagination: {
			el: null, // disable default
		},
		breakpoints: {
			0: {
				slidesPerView: 2,
				slidesPerGroup: 1,
			},
			768: {
				slidesPerView: 2,
				slidesPerGroup: 2,
			},
			992: {
				slidesPerView: 3,
				slidesPerGroup: 3,
			}
		}
	});
	
	// Set up custom bullets
	const bullets = document.querySelectorAll('.custom-bullet');
	
	bullets.forEach((bullet, index) => {
		bullet.addEventListener('click', () => {
			testimonial_slider.slideTo(index * 3); // 3 = slides per group
		});
	});
	
	// Sync bullets on slide change
	testimonial_slider.on('slideChange', () => {
		const currentGroup = Math.floor(testimonial_slider.activeIndex / 3);
		bullets.forEach((b, i) => b.classList.toggle('active', i === currentGroup));
	});
	
	// Initialize active state
	bullets[0].classList.add('active');
	
	// menu open mobile view

	window.addEventListener('scroll', function () {
		const pickupBtn = document.querySelector('.fixed-pickup-btn');
	  
		if (window.scrollY > 200) {
		  pickupBtn.classList.add('show');
		} else {
		  pickupBtn.classList.remove('show');
		}
	  });

	/* Testimonial Company Slider JS */
	if ($('.testimonial-company-slider').length) {
		const testimonial_company_slider = new Swiper('.testimonial-company-slider .swiper', {
			slidesPerView : 2,
			speed: 2000,
			spaceBetween: 50,
			loop: true,
			slidesPerView: 3,
		pagination: {
		el: '.testimonial-pagination',
		clickable: true,
		},
			autoplay: {
				delay: 5000,
			},
			breakpoints: {
				768:{
				  	slidesPerView: 3,
				},
				991:{
				  	slidesPerView: 4,
				}
			}
		});
	}

	/* Skill Bar */
	if ($('.skills-progress-bar').length) {
		$('.skills-progress-bar').waypoint(function() {
			$('.skillbar').each(function() {
				$(this).find('.count-bar').animate({
				width:$(this).attr('data-percent')
				},2000);
			});
		},{
			offset: '70%'
		});
	}

	/* Youtube Background Video JS */
	if ($('#herovideo').length) {
		var myPlayer = $("#herovideo").YTPlayer();
	}

	/* Init Counter */
	if ($('.counter').length) {
		$('.counter').counterUp({ delay: 6, time: 3000 });
	}

	/* Image Reveal Animation */
	if ($('.reveal').length) {
        gsap.registerPlugin(ScrollTrigger);
        let revealContainers = document.querySelectorAll(".reveal");
        revealContainers.forEach((container) => {
            let image = container.querySelector("img");
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    toggleActions: "play none none none"
                }
            });
            tl.set(container, {
                autoAlpha: 1
            });
            tl.from(container, 1, {
                xPercent: -100,
                ease: Power2.out
            });
            tl.from(image, 1, {
                xPercent: 100,
                scale: 1,
                delay: -1,
                ease: Power2.out
            });
        });
    }

	/* Text Effect Animation */
	if ($('.text-anime-style-1').length) {
		let staggerAmount 	= 0.05,
			translateXValue = 0,
			delayValue 		= 0.5,
		   animatedTextElements = document.querySelectorAll('.text-anime-style-1');
		
		animatedTextElements.forEach((element) => {
			let animationSplitText = new SplitText(element, { type: "chars, words" });
				gsap.from(animationSplitText.words, {
				duration: 1,
				delay: delayValue,
				x: 20,
				autoAlpha: 0,
				stagger: staggerAmount,
				scrollTrigger: { trigger: element, start: "top 85%" },
				});
		});		
	}
	
	if ($('.text-anime-style-2').length) {				
		let	 staggerAmount 		= 0.03,
			 translateXValue	= 20,
			 delayValue 		= 0.1,
			 easeType 			= "power2.out",
			 animatedTextElements = document.querySelectorAll('.text-anime-style-2');
		
		animatedTextElements.forEach((element) => {
			let animationSplitText = new SplitText(element, { type: "chars, words" });
				gsap.from(animationSplitText.chars, {
					duration: 1,
					delay: delayValue,
					x: translateXValue,
					autoAlpha: 0,
					stagger: staggerAmount,
					ease: easeType,
					scrollTrigger: { trigger: element, start: "top 85%"},
				});
		});		
	}
	
	if ($('.text-anime-style-3').length) {		
		let	animatedTextElements = document.querySelectorAll('.text-anime-style-3');
		
		 animatedTextElements.forEach((element) => {
			//Reset if needed
			if (element.animation) {
				element.animation.progress(1).kill();
				element.split.revert();
			}

			element.split = new SplitText(element, {
				type: "lines,words,chars",
				linesClass: "split-line",
			});
			gsap.set(element, { perspective: 400 });

			gsap.set(element.split.chars, {
				opacity: 0,
				x: "50",
			});

			element.animation = gsap.to(element.split.chars, {
				scrollTrigger: { trigger: element,	start: "top 90%" },
				x: "0",
				y: "0",
				rotateX: "0",
				opacity: 1,
				duration: 1,
				ease: Back.easeOut,
				stagger: 0.02,
			});
		});		
	}

	/* Parallaxie js */
	var $parallaxie = $('.parallaxie');
	if($parallaxie.length && ($window.width() > 991))
	{
		if ($window.width() > 768) {
			$parallaxie.parallaxie({
				speed: 0.55,
				offset: 0,
			});
		}
	}

	/* Zoom Gallery screenshot */
	$('.gallery-items').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom',
		image: {
			verticalFit: true,
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
			  return element.find('img');
			}
		}
	});

	/* Contact form validation */
	var $contactform = $("#contactForm");
	$contactform.validator({focus: false}).on("submit", function (event) {
		if (!event.isDefaultPrevented()) {
			event.preventDefault();
			submitForm();
		}
	});

	function submitForm(){
		/* Ajax call to submit form */
		$.ajax({
			type: "POST",
			url: "form-process.php",
			data: $contactform.serialize(),
			success : function(text){
				if (text === "success"){
					formSuccess();
				} else {
					submitMSG(false,text);
				}
			}
		});
	}

	function formSuccess(){
		$contactform[0].reset();
		submitMSG(true, "Message Sent Successfully!")
	}

	function submitMSG(valid, msg){
		if(valid){
			var msgClasses = "h4 text-success";
		} else {
			var msgClasses = "h4 text-danger";
		}
		$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
	}
	/* Contact form validation end */

	/* Animated Wow Js */	
	new WOW().init();

	/* Popup Video */
	if ($('.popup-video').length) {
		$('.popup-video').magnificPopup({
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: true
		});
	}

	/* Service Item Active Start */
	var $service_list = $('.service-list');
	if ($service_list.length) {
		var $service_item = $service_list.find('.service-item');

		if ($service_item.length) {
			$service_item.on({
				mouseenter: function () {
					if (!$(this).hasClass('active')) {
						$service_item.removeClass('active'); 
						$(this).addClass('active'); 
					}
				},
				mouseleave: function () {
					// Optional: Add logic for mouse leave if needed
				}
			});
		}
	}
	/* Service Item Active End */
	
	/* What We do List Active Start */
	var $what_do_item_list = $('.what-do-item-list');
	if ($what_do_item_list.length) {
		var $what_we_do_item = $what_do_item_list.find('.what-we-do-item');

		if ($what_we_do_item.length) {
			$what_we_do_item.on({
				mouseenter: function () {
					if (!$(this).hasClass('active')) {
						$what_we_do_item.removeClass('active'); 
						$(this).addClass('active'); 
					}
				},
				mouseleave: function () {
					// Optional: Add logic for mouse leave if needed
				}
			});
		}
	}
	/* What We do List Active End */
	

	// schedule btn js

	const toOtpStep = document.getElementById("toOtpStep");
	const toMainForm = document.getElementById("toMainForm");
	const pickupForm = document.getElementById("pickupForm");
	const slotOutput = document.getElementById("slotOutput");
	
	// Simulate number check & OTP flow
	toOtpStep.onclick = () => {
	  const number = document.getElementById("mobileInput").value;
	  if (number.length === 10) {
		const step1Modal = bootstrap.Modal.getInstance(document.getElementById('step1Modal'));
		step1Modal.hide();
		new bootstrap.Modal(document.getElementById('otpModal')).show();
	  } else {
		alert("Enter a valid mobile number.");
	  }
	};
	
	toMainForm.onclick = () => {
	  const otp = document.getElementById("otpInput").value;
	  if (otp === "1234") { // mock OTP
		const otpModal = bootstrap.Modal.getInstance(document.getElementById('otpModal'));
		otpModal.hide();
		new bootstrap.Modal(document.getElementById('pickupFormModal')).show();
	  } else {
		alert("Invalid OTP");
	  }
	};
	
	// Slot submission
	pickupForm.onsubmit = function (e) {
	  e.preventDefault();
	  const timeInput = document.getElementById("pickupTime").value;
	  const selectedHour = parseInt(timeInput.split(":")[0]);
	
	  const availableSlots = [];
	  for (let i = selectedHour + 3; i <= 18; i++) {
		if (i >= 9 && i <= 18) {
		  availableSlots.push(`${i}:00 - ${i + 1}:00`);
		}
	  }
	
	  slotOutput.innerHTML = availableSlots.length
		? `<ul>${availableSlots.map(s => `<li>${s}</li>`).join('')}</ul>`
		: `<p class="text-danger">No available slots after your selected time.</p>`;
	
	  const pickupFormModal = bootstrap.Modal.getInstance(document.getElementById('pickupFormModal'));
	  pickupFormModal.hide();
	  new bootstrap.Modal(document.getElementById('slotModal')).show();
	};


	//did u know

	var swiper = new Swiper(".didYouKnowSwiper", {
		loop: true,
		autoplay: {
		  delay: 5000,
		  disableOnInteraction: false,
		},
		pagination: {
		  el: ".swiper-pagination",
		  clickable: true,
		  dynamicBullets: true,
		},
	  });
	  

	// heafer file

	$('#header-placeholder').load('header.html');


})(jQuery);
