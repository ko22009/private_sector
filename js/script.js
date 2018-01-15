$(document).ready(function() {
	
	$('.faq__question h3').click(function() {
		if($(this).closest('.faq__question').hasClass('active')) {
			$("#faq").trigger("close");
			return false;
		} else $('#faq').trigger("close");
	});
	
	new jQueryCollapse($("#faq"), {
	  query: 'div h3',
	  open: function() {
		$(this.prevObject[0]).find('.fas').removeClass('fa-angle-down').addClass('fa-angle-up');
		$(this.prevObject[0]).closest('.faq__question').addClass('active');
		this.slideDown(150);
		var answer = $(this).find('.faq__text');
		var question = $(this).closest('.faq__question');
		var pencil = $(this).find('.pencil');
		var margin_top = answer.offset().top - question.offset().top - question.height();
		pencil.css('margin-top', margin_top);
	  },
	  close: function() {
		$(this.prevObject[0]).find('.fas').removeClass('fa-angle-up').addClass('fa-angle-down').removeClass('active');
		$(this.prevObject[0]).closest('.faq__question').removeClass('active');
		this.slideUp(150);
	  }
	});
	
	$('.checking__button')
    .on('mouseenter', function(e) {
			var parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
			$(this).find('span').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
			var parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
    	$(this).find('span').css({top:relY, left:relX})
    });
	
	$('.faq__button')
    .on('mouseenter', function(e) {
			var parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
			$(this).find('span').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
			var parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
    	$(this).find('span').css({top:relY, left:relX})
    });
	
	$('.header__button').magnificPopup({
	  removalDelay: 500,
	  mainClass: 'mfp-zoom-in',
	  midClick: true,
	  fixedContentPos: true
	});

	$('.open-popup-link').magnificPopup({
	  removalDelay: 500,
	  mainClass: 'mfp-zoom-in',
	  midClick: true,
	  fixedContentPos: true,
	  callbacks: {
		  beforeOpen: function() {
			var el = this.st.el;
			var subheader = $(el).data('subheader');
			var modal_class = $(el).data('class');
			var alt = $(el).data('img-alt');
			var img = $(el).data('img');
			var surprise = $(el).data('surprise');
			var surprise_content = $(el).data('surprise-content');
				
			$('#test-popup .card__subheader').text(subheader);
			$('#change_card').attr('class', modal_class);
			$('#test-popup img').attr("alt", alt);
			$('#test-popup img').attr("src", img);
			$('.modal__surprize-content h2').text(surprise);
			if(surprise_content) {
				$('.modal__surprize-content h3').text(surprise_content);
				$('.modal__surprize').css('background', 'url("img/fig.png")');
			} else {
				$('.modal__surprize-content h3').text('');
				$('.modal__surprize').css('background', 'url("img/fig_1.png")');
			}
		  },
	  }
	});
	
	function testInput(event) {
	   var value = String.fromCharCode(event.which);
	   var pattern = new RegExp(/[a-zA-ZА-Яа-я]/i);
	   return pattern.test(value);
	}
	
	$('#form_phone').mask("+7 (999) 999-99-99");
	$('#form_name').bind('keypress', testInput);
	
});