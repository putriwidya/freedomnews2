(function () {
    'use strict';	
	// Animate loader off screen
	$(window).on('load', function() {
		$('.spinner-cover').fadeOut('slow',function(){$(this).remove();});
	});
    var owlCarousel = function(){
        $('#slider-small').owlCarousel({
			autoplay:true,
            loop: true,
            margin: 10,
            dots: false,
            nav: false,
            smartSpeed:450,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 4
                }
            }
        });
		$('.slider-carousel').owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            responsive: {
                0: {
                    items: 1.2
                },
                600: {
                    items: 3.5
                },
                1000: {
                    items: 3.5
                }
            },
			smartSpeed:450,
			navText : ['<svg class="content-box fill-current" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="img"><title>ArrowRight</title><path d="M7.664 1.25l6 6a1 1 0 010 1.414l-6 6L6.25 13.25 10.499 9H2V7h8.585L6.25 2.664 7.664 1.25z" fill-rule="nonzero"></path></svg>','<svg class="content-box fill-current" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="img"><title>ArrowRight</title><path d="M7.664 1.25l6 6a1 1 0 010 1.414l-6 6L6.25 13.25 10.499 9H2V7h8.585L6.25 2.664 7.664 1.25z" fill-rule="nonzero"></path></svg>']
        });
		$('#slideshow_face').owlCarousel({
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			items:1,
			margin:0,
			stagePadding:0,
			smartSpeed:450,			
			loop: false,
			autoplay:true,
        });
		$('#slideshow_big').owlCarousel({
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			items:1,
			margin:0,
			stagePadding:0,
			smartSpeed:450,			
			loop: true,
			autoplay:false,
			nav: true,
			navText : ['<svg class="content-box fill-current" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="img"><title>ArrowRight</title><path d="M7.664 1.25l6 6a1 1 0 010 1.414l-6 6L6.25 13.25 10.499 9H2V7h8.585L6.25 2.664 7.664 1.25z" fill-rule="nonzero"></path></svg>',"<span class='arrow-next'></span>"]
        });
    };
    var contentWayPoint = function() {
        var i = 0;
        $('.animate-box').waypoint( function( direction ) {
            if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
                i++;
                $(this.element).addClass('item-animate');
                setTimeout(function(){
                    $('body .animate-box.item-animate').each(function(k){
                        var el = $(this);
                        setTimeout( function () {
                            var effect = el.data('animate-effect');
                            if ( effect === 'fadeIn') {
                                el.addClass('fadeIn animated-fast');
                            } else if ( effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated-fast');
                            } else if ( effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated-fast');
                            } else {
                                el.addClass('fadeInUp animated-fast');
                            }
                            el.removeClass('item-animate');
                        },  k * 50, 'easeInOutExpo' );
                    });
                }, 100);
            }
        } , { offset: '85%' } );
    };
	var goToTop = function() {
			$('.js-gotop').on('click', function(event){			
			event.preventDefault();
			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'swing');			
			return false;
		});
		$(window).scroll(function(){
			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}
		});	
	};
	var slickNav = function() {
		$('#main-menu').slicknav({
			label: 'MENU',
			duration: 150,
			allowParentLinks: true,
			prependTo:'#nav',
		});
		$('#main-menu2').slicknav({
			label: 'MENU',
			duration: 150,
			allowParentLinks: true,
			prependTo:'#nav-sub',
		});
		$('#sidebar-menu').slicknav({
			label: 'MENU',
			duration: 150,
			allowParentLinks: true,
			prependTo:'.menu-main-menu-container',
		});
	};
	var OffCanvas = function() {
		$('.off-canvas-toggle').on('click', function(event){			
			$("#wrapper").addClass("toggled");
			$("#off-canvas-toggle").addClass("hidden");			
		});	
		$('.off-canvas-close').on('click', function(event){			
			$("#wrapper").removeClass("toggled");
		});		
		$(document).mouseup(function (e){
			var offcanvas = $("#sidebar-wrapper");
			if (!offcanvas.is(e.target) && offcanvas.has(e.target).length === 0) {
				$("#wrapper").removeClass("toggled");
			}
		});
	};
	var TopSearch = function() {
		$(".top-search").on('click', function(event) {
			$(".top-search-form").slideDown();
		});		
		$(document).mouseup(function (e){
			var container = $(".top-search-form");
			if (!container.is(e.target) && container.has(e.target).length === 0){
				container.slideUp();			
			}
		}); 
	};
	var SubMenu = function() {
		$("li.menu-item-has-children").on({
			mouseenter: function () {
				$('.sub-menu:first, .children:first',this).stop(true,true).slideDown('fast');
			},
			mouseleave: function () {
				$('.sub-menu:first, .children:first',this).stop(true,true).slideUp('fast');
			}
		});
	};	
	var MasonryGrid = function() {
		$('.grid').masonry({
			itemSelector: '.grid-item',
			columnWidth: '.grid-sizer',
			percentPosition: true
		});	
	};
	// var theiaSticky = function() {
	//     $('.sidebar_right').theiaStickySidebar({
	//         additionalMarginTop: 30
	//     });
    // };
    var moreAticles = function() {
    	$(window).on("scroll", function() {
			var scrollHeight = $(document).height();
			var bottomHeight = $('.bottom').height() + 300;
			var scrollPosition = $(window).height() + $(window).scrollTop();
			var $more_articles = $('.single-more-articles');
			if ((scrollHeight - scrollPosition) < bottomHeight) {
			    $more_articles.addClass("single-more-articles--visible");
				
			} else {
				$more_articles.removeClass("single-more-articles--visible");
			}
			$(".single-more-articles-close-button").on('click', function(event) {
				$more_articles.hide();
			});
			console.log(scrollHeight, scrollPosition, bottomHeight);
		});	    
	};
	$(function(){
		owlCarousel();
        contentWayPoint();
		goToTop();
		slickNav();
		OffCanvas();
		TopSearch();
		SubMenu();
		MasonryGrid();
		// theiaSticky();
		moreAticles();
	});
}());
