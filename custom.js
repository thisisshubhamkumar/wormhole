// FUNCTION CODE
function gjCountAndRedirect(secounds, url)
{

		$('#gj-counter-num').text(secounds);

		$('#gj-counter-box').show();

	var interval = setInterval(function()
	{

		secounds = secounds - 1;

		$('#gj-counter-num').text(secounds);

		if(secounds == 0)
		{

			clearInterval(interval);
			window.location = url;
			$('#gj-counter-box').hide();
		
		}
		
	}, 1000);

	$('#gj-counter-box').click(function()
	{
		clearInterval(interval);
		window.location = url;
	
	});
}

// USE EXAMPLE
$(document).ready(function() {
	//var
	var gjCountAndRedirectStatus = false; //prevent from seting multiple Interval
	
	//call
	$('h1').click(function(){
		if(gjCountAndRedirectStatus == false)
		{
			gjCountAndRedirect(10, document.URL);
			gjCountAndRedirectStatus = true;
		}
	});
	
});