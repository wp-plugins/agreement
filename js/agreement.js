// jQuery for disable link and redirect to new window if click on agree.
	jQuery(document).ready(function() {
		var href = jQuery('#agreement').attr('href');
		jQuery('#agreement').prop("href", "#");	
		jQuery('#agreement').click(function(e) {
		e.preventDefault();
		jQuery('.licence-agreementbase').show().css("top", "0px");	
		// calclution for get windows hight and width for popup.
		jQuery('.licence-agreement').show().css("position","absolute");
		jQuery('.licence-agreement').css("top", Math.max(0, ((jQuery(window).height() - jQuery('.licence-agreement').outerHeight()) / 2) + jQuery(window).scrollTop()) + "px");
		jQuery('.licence-agreement').css("left", Math.max(0, ((jQuery(window).width() - jQuery('.licence-agreement').outerWidth()) / 2) +  jQuery(window).scrollLeft()) + "px");
	});
	//Agree button redirect to new window with url.
	jQuery('#agree').click(function(){
		jQuery('.licence-agreementbase').fadeOut('slow');
		jQuery('.licence-agreement').hide();
		window.open(href,'_blank');
	});	
	//disagree button clear everthing.
	jQuery('#dis-agree').click(function(){
		jQuery('.licence-agreementbase').fadeOut('slow');
		jQuery('.licence-agreement').hide();
	});		
});
