var mjk = new ARENA("MJKTech");


mjk.$directive("fadeWhenPageReady", function fadeWhenReady($app) {
	function fade ($element, data) {
		setTimeout(function () { 
			if (data.useClassName) $element.addClass(data.useClassName);
			else $element.fadeTo(data.duration, data.fadeTo);
		}, data.delay);
	}
	return {
		data: {
			duration: 1300,
			delay: 0,
			fadeTo: 1,
			useClassName: false
		},
		link: function ($element, scope, data) { 
			if ($app.$bootstrap===true) return fade($element, data);
			else if (!data.useClassName) $element.fadeTo(0, 0);
			$app.$once("$bootstrapEnd", function () { fade($element, data) });
		}
	};
});

mjk.$directive(".contact-link", function contactButtonDirective($app) {
	return {
		data: {
			mailAccount: "contact",
			mailUri: window.location.hostname.replace("www.",""),
		},
		link: function ($element, scope, data) {
			var mailLink = data.mailAccount+"@"+data.mailUri;
			$element.append('<a href="mailto:'+mailLink+'">'+mailLink+'</a>');
		}
	}
});

mjk.$directive(".scroll-down-button", function scrollButtonDirective($app) {
	return {
		data: {
			scrollTo: 0,
			scrollSpeed: 450,
			scrollOffset: 100,
			animationFrequency: 5000,
			activeClass: "active"
		},
		scope: true,
		link: function ($element, scope, data) { 		//console.log("adding scrollButtonDirective: ", this, scope, $element)
			var timer;
			var startTimer = function () { 
				timer = setInterval(function () { $element.toggleClass(data.activeClass) }, data.animationFrequency); 
			}
			
			if ($app.$bootstrap===true) startTimer();
			else $app.$on("$bootstrapEnd", function () { setTimeout(startTimer, 3000) });
			
			$element.on("click.scrollButtonDirective", function () {
				$app.$scrollMonitor.scrollTo(data.scrollTo, data.scrollSpeed, data.scrollOffset);
			}).on("mouseenter.scrollButtonDirective", function () {
				clearInterval(timer);
				$element.addClass(data.activeClass);
			}).on("mouseleave.scrollButtonDirective", function () {
				startTimer();
			});
			
			scope.$on("$destroy", function (e) {		//console.log("removing scrollButtonDirective: ", e, scope, $element);
				clearInterval(timer);
				$element.off(".scrollButtonDirective");
			});
		}
	}
});

/* Damn you mobile browser address bar -__- */
/*mjk.setInnerVHVar = function () {	
	var vh = Math.min(window.innerHeight, document.documentElement.clientHeight, window.screen?window.screen.height:0);
	document.documentElement.style.setProperty('--vh100', `${vh}px`);
}
mjk.setInnerVHVar();
$(window).on('resize', mjk.debounce(mjk.setInnerVHVar, 500));*/

mjk.$directive(".sploosh-wrapper", function realVhDirective($app) {
	function setRealVH(element) {
		element.style.height = element.style.minHeight = mjk.getInnerVH()+"px";
	}
	return function ($element, scope, data) { 
		setRealVH($element[0]);
		$(window).on('resize.setRealVH', mjk.debounce(function () { setRealVH($element[0]) }, 500));
		scope.$on("$destroy", function (e) {
			$(window).off(".setRealVH");
		});
	};
});
/* Damn you mobile browser address bar -__- */


mjk.$on("$bootstrapStart", function (event) {

	mjk.$provider.alias("appLoadingIndicator", ".loading-icon");
	mjk.$provider.alias("addClassOnScroll", ".page-footer", function (directive) {
		directive.data.addClassOnScroll = "fade-in" 
		directive.data.scrollOffset = 0.25;
		return directive;
	});
	mjk.$provider.alias("fadeWhenPageReady", "#main-content", function (directive) {
		directive.data.delay = 3000;
		directive.data.useClassName = "ajax-loading-transition-in";
		return directive;
	});
	
	mjk.$provider.alias("mainView", "body", function (directive) {
		directive.data.cssTransitions = true;
		directive.data.mainView = '#main-content';
		return directive;
		
	});
	
});

mjk.$on("$bootstrapEnd", function (event) {
	$("body").addClass("page-ready");
});


mjk.$directive(".particles-bg", function particlesViewDirective() { return {
	data: {
		particleCount: 80,
		particleColour: "#c7c3c3",
		lineColour: "#ffffff",
		particleMoveSpeed: 1,
		particleOpacity: 0.75,
		interactOn: "window"
	},
	link: function ($element, scope, data) { 		//console.log(this, scope, $element)
		var _id = $element[0].id = "particles-"+mjk.generateHash();
		particlesJS(_id, {
			"particles": {
				"number": {
					"value": data.particleCount,
					"density": {
						"enable": true,
						"value_area": 700 
					}
				},
				"color": {
					"value": data.particleColour
				},
				"shape": {
					"type": "circle",
					"stroke": {
						"width": 0,
						"color": data.particleColour
					}
				},
				"opacity": {
					"value": data.particleOpacity,
					"random": true,
					"anim": {
						"enable": false,
						"speed": 1,
						"opacity_min": 0.1,
						"sync": false 
					} 
				},
				"size": {
					"value": 3,
					"random": true,
					"anim": {
						"enable": false,
						"speed": 10,
						"size_min": 0.1,
						"sync": false 
					} 
				},
				"line_linked": {
					"enable": true,
					"distance": 170,
					"color": data.lineColour,
					"opacity": data.particleOpacity/2,
					"width": 1 
				},
				"move": {
					"enable": true,
					"speed": data.particleMoveSpeed/2,
					"direction": "none",
					"random": false,
					"straight": false,
					"out_mode": "out",
					"bounce": false,
					"attract": {
						"enable": false,
						"rotateX": 600,
						"rotateY": 1200 
					} 
				}
			},
			"interactivity": {
				"detect_on": data.interactOn,
				"events": {
					"onhover": {
						"enable": true,
						"mode": "grab"
					},
					"onclick": {
						"enable": true,
						"mode": "push"
					},
					"resize": true 
				},
				"modes": {
					"grab": {
						"distance": 140,
						"line_linked": {
							"opacity": 1 
						} 
					},
					"push": {
						"particles_nb": 4 
					},
					"repulse": {
						"distance": 300,
						"duration": 0.6
					},
					"remove": {
						"particles_nb": 2 
					} 
				}  
			},
			"retina_detect": true 
		});
	}
}});
