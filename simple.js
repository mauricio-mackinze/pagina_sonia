document.addEventListener("DOMContentLoaded", function(event)
{ 
	var IS_IPAD = navigator.userAgent.match(/iPad/i) != null;
    var IS_IPHONE = (navigator.userAgent.match(/iPhone/i) != null) || (navigator.userAgent.match(/iPod/i) != null);

    if (IS_IPAD || IS_IPHONE)
    {
		document.getElementsByClassName("menu-container")[0].style.display = 'none';
    }

});