$(function(){
	
	var page = $('#slide-container').find('.slide'), def = $('#slide-container').find('.slide.default');
	var before = $(def).prevAll('.slide'), after = $(def).nextAll('.slide');
	var cssPageWidth = 80, sneakPeak = 4;
	var left = $(before).length * cssPageWidth;
	var i = 0;
	
	$('#slide-container').css('width', (page.length * cssPageWidth + sneakPeak) + 'vw');
	$(page).each(function(){
		$(this).css('left', '-' + left + 'vw');
	});
	
	var currentLeft = Number(
		$(page).attr('style').split(': ')[1].split('vw')[0]
	);
	
	$('.shuffler').mouseenter(function(){
		if ($(this).attr('id') == 'right') {
			$(page).filter(':first-of-type').addClass('sneakright');
		} else {
			$(page).filter(':first-of-type').addClass('sneakleft');
		}
	}).click(function(){
		if ($(this).attr('id') == 'right') {
			if (Number('-' + before.length) < i ){
				i--;
				currentLeft += cssPageWidth;
			} else {
				i = after.length;
				currentLeft -= cssPageWidth * (page.length - 1);
			}
			$(page).each(function(){
				$(this).css('left', currentLeft + 'vw');
			});
		}	else {
			if (after.length > i) {
				i++
				currentLeft -= cssPageWidth;
			} else {
				i = Number('-' + before.length);
				currentLeft += cssPageWidth * (page.length - 1);
			}
			$(page).each(function(){
				$(this).css('left', currentLeft + 'vw');
			});
		}
	}).mouseleave(function(){
		$(page).removeClass('sneakleft sneakright');
	});
});