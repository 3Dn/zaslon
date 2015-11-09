$(document).ready(function(){
	$(".check").on("click", function(){
		var state = $(this).attr('state');
		console.log('state: '+state);
		if(state == '0'){
			$(this).attr('state', '1');
			$(this).removeClass('check_off').addClass('check_on');
		}else{
			$(this).attr('state', '0');
			$(this).removeClass('check_on').addClass('check_off');
		}
	});
});
