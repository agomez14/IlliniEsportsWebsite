$("#header").headroom({
  "offset": 100,
  "tolerance": 0,
  "classes": {
	"initial": "animated",
	"pinned": "slideDown",
	"unpinned": "slideUp",
	"top": "navbar-top",
	"notTop": "navbar-not-top"
  }
});
$(".center-brand").headroom({
  "offset": 100,
  "tolerance": 0,
  "classes": {
	"initial": "animated",
	"pinned": "slideDown",
	"unpinned": "slideUp"
  }
});
$('.contact-form').validate({
  rules: {
	name: "required",
	email: {
	  required: true,
	  email: true
	},
	subject: "required",
	message: "required"
  },
  messages: {
	name: "Please enter your name",
	email: "Please enter a valid email address",
	subject: "Please include a subject line",
	message: "No message written"
  }
});

$('body').scrollspy({
	target: '#header',
	offset: 100
});

$('#navbar-collapse a').on('click', function(event){
	event.preventDefault();

	var hash = this.hash;

	$('html, body').animate({
		scrollTop: $(hash).offset().top
	}, 800, function(){
		window.location.hash = hash;
	});
});

$('#lol-icon').on("click", function(){
  if(!$(this).parent().hasClass('game-active')){
	var active = $('.game-active');
	var activeChild = $('.game-active').children();
	$(activeChild.data('target')).removeClass("visible");
	$(activeChild.data('target')).addClass("not-visible");
	$('.game-active').removeClass("game-active");

	$(this).parent().addClass("game-active");
	$($(this).data('target')).removeClass("not-visible");
	$($(this).data('target')).addClass("visible");
  }
});

$('#hearthstone-icon').on("click", function(){
  if(!$(this).parent().hasClass('game-active')){
	var active = $('.game-active');
	var activeChild = $('.game-active').children();
	$(activeChild.data('target')).removeClass("visible");
	$(activeChild.data('target')).addClass("not-visible");
	$('.game-active').removeClass("game-active");

	$(this).parent().addClass("game-active");
	$($(this).data('target')).removeClass("not-visible");
	$($(this).data('target')).addClass("visible");
  }
});

$('#csgo-icon').on("click", function(){
  if(!$(this).parent().hasClass('game-active')){
	var active = $('.game-active');
	var activeChild = $('.game-active').children();
	$(activeChild.data('target')).removeClass("visible");
	$(activeChild.data('target')).addClass("not-visible");
	$('.game-active').removeClass("game-active");

	$(this).parent().addClass("game-active");
	$($(this).data('target')).removeClass("not-visible");
	$($(this).data('target')).addClass("visible");
  }
});

$('#hots-icon').on("click", function(){
  if(!$(this).parent().hasClass('game-active')){
	var active = $('.game-active');
	var activeChild = $('.game-active').children();
	$(activeChild.data('target')).removeClass("visible");
	$(activeChild.data('target')).addClass("not-visible");
	$('.game-active').removeClass("game-active");

	$(this).parent().addClass("game-active");
	$($(this).data('target')).removeClass("not-visible");
	$($(this).data('target')).addClass("visible");
  }
});

$('#dota-icon').on("click", function(){
  if(!$(this).parent().hasClass('game-active')){
	var active = $('.game-active');
	var activeChild = $('.game-active').children();
	$(activeChild.data('target')).removeClass("visible");
	$(activeChild.data('target')).addClass("not-visible");
	$('.game-active').removeClass("game-active");

	$(this).parent().addClass("game-active");
	$($(this).data('target')).removeClass("not-visible");
	$($(this).data('target')).addClass("visible");
  }
});
