

$(function() {
	
	newContent = 
	
	$('a').click(function() {
		$(this).addClass('purple');
	});
	
	$('#terms-conditions .btn').click(function() {
		$('#terms-conditions').slideUp(1000);
		$('main').show(1000).promise().done(function() {
			$('main').removeClass('must-accept');
			$('footer').removeClass('must-accept');
			$('#profile-info').css('height', $('.section-box.profile .picture-holder').css('height'));
			if($('.ad').css('display') != 'none') {
				adLength1();
				adLength2();
			}
		});
	});
	
	$('.arrow-over').click(function() {
		$('.f-p').fadeToggle(0);
	});
	
	$('.game-click').click(function() {
		$(this).parents('tr').next().removeClass('must-accept').show(0);
	});
	
});

function adLength1() {
	let ad = $('.ad-s-1').clone();
	ad.removeAttr('id');
	
	if($('.ad-1').height() >= $('.flexbox-rnw .container').height()) {
		$('#start1').css('display', 'none');
		return;
	}
	
	$('.ad-1').append(ad.clone());
	
	return adLength1();
}

function adLength2() {
	let ad = $('.ad-s-2').clone();
	ad.removeAttr('id');
	
	if($('.ad-2').height() >= $('.flexbox-rnw .container').height()) {
		$('#start2').css('display', 'none');
		return;
	}
	$('.ad-2').append(ad.clone());
	
	return adLength2();
}
	

/*
let ad = $('.ad-storage').clone();
	
	if($('.ad-1').height() >= $('.flexbox-rnw .container').height() - $('.ad-s-1').height()/1.5) {
		return;
	}
	$('.ad').append(ad.clone());
	
	return adLength();
*/